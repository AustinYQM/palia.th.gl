import { nodes } from "@/app/lib/nodes";
import leaflet, { Polyline } from "leaflet";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useOverwolfRouter } from "../(overwolf)/components/overwolf-router";
import { ROUTE, useRoutesStore } from "../lib/storage/routes";
import { useMap } from "./(map)/map";
import RouteTypes from "./route-types";
import Toggle from "./toggle";

export default function Routes() {
  const map = useMap();
  const routes = useRoutesStore();
  const router = useOverwolfRouter();

  const nodeLatLngs = useMemo(() => {
    return nodes.reduce((acc, cur) => {
      acc[`${cur.x}-${cur.y}`] = { type: cur.type, id: cur.id };
      return acc;
    }, {} as Record<string, { id: string; type: string }>);
  }, []);

  const setRoutePolylines = useCallback(
    (polylineLayers: leaflet.Polyline[]) => {
      const types: ROUTE["types"] = [];
      const positions: ROUTE["positions"] = [];
      const visitedPositions: string[] = [];
      polylineLayers.forEach((polylineLayer) => {
        const latLngs = polylineLayer.getLatLngs() as leaflet.LatLng[];
        if (latLngs.length === 0) {
          return;
        }
        const layerPositions = latLngs.map((latLng) => {
          const position = `${latLng.lat}-${latLng.lng}`;
          const snappedNode = nodeLatLngs[position];
          if (snappedNode) {
            if (!visitedPositions.includes(position)) {
              visitedPositions.push(position);

              const existingType = types.find(
                ({ type }) => type === snappedNode.type
              );
              if (existingType) {
                existingType.count++;
              } else {
                types.push({
                  type: snappedNode.type,
                  count: 1,
                });
              }
            }
            return {
              position: [latLng.lat, latLng.lng] as [number, number],
              nodeId: snappedNode.id,
              nodeType: snappedNode.type,
            };
          }
          return {
            position: [latLng.lat, latLng.lng] as [number, number],
          };
        });
        positions.push(layerPositions);
      });
      routes.updateTempRoute({
        types,
        positions,
      });
    },
    []
  );

  const setRouteTexts = useCallback((textLayers: leaflet.Marker[]) => {
    const texts: ROUTE["texts"] = [];
    textLayers.forEach((textLayer) => {
      const latLngs = textLayer.getLatLng();
      texts.push({
        position: [latLngs.lat, latLngs.lng] as [number, number],
        text: textLayer.pm.getText(),
      });
    });
    routes.updateTempRoute({
      texts,
    });
  }, []);

  useEffect(() => {
    if (!routes.isCreating || !map) {
      return;
    }

    const polylines: leaflet.Polyline[] = [];
    const texts: leaflet.Marker[] = [];
    routes.tempRoute.positions.forEach((layerPositions) => {
      const polylineLayer = leaflet.polyline(
        layerPositions.map(({ position }) => position),
        { pmIgnore: false }
      );
      polylineLayer.on("pm:edit", () => {
        setRoutePolylines(polylines);
        updateGlobalMode();
      });
      polylines.push(polylineLayer);
      polylineLayer.addTo(map);
    });
    routes.tempRoute.texts?.forEach((textPositions) => {
      const textLayer = leaflet.marker(textPositions.position, {
        textMarker: true,
        text: textPositions.text,
        pmIgnore: false,
      });
      textLayer.on("pm:edit", () => {
        setRouteTexts(texts);
        updateGlobalMode();
      });
      textLayer.on("pm:remove", () => {
        texts.splice(texts.indexOf(textLayer), 1);
        setRouteTexts(texts);
        updateGlobalMode();
      });
      texts.push(textLayer);
      textLayer.addTo(map);
    });

    map.on("pm:drawstart", ({ workingLayer, shape }) => {
      if (shape === "Line") {
        polylines.push(workingLayer as Polyline);
        workingLayer.on("pm:vertexadded", (e) => {
          if (nodes.some((node) => e.latlng.equals([node.x, node.y]))) {
            setRoutePolylines(polylines);
          }
        });
        workingLayer.on("pm:vertexremoved", (e) => {
          setRoutePolylines(polylines);
        });
        workingLayer.on("pm:markerdragend", (e) => {
          setRoutePolylines(polylines);
        });
        workingLayer.on("pm:edit", () => {
          setRoutePolylines(polylines);
        });
      }
    });

    map.on("pm:drawend", () => {
      setRoutePolylines(polylines);
      updateGlobalMode();
    });

    map.on("pm:create", ({ shape, layer }) => {
      layer.options.pmIgnore = false;
      leaflet.PM.reInitLayer(layer);

      if (shape === "Line") {
        polylines.push(layer as Polyline);
        layer.on("pm:edit", () => {
          setRoutePolylines(polylines);
        });
      } else if (shape === "Text") {
        const textLayer = layer as leaflet.Marker;
        texts.push(textLayer);
        leaflet.Util.setOptions(layer, {
          draggable: true,
        });

        textLayer.pm.enable({});
        const textarea = textLayer.pm.getElement() as HTMLTextAreaElement;
        textarea.focus();

        layer.on("pm:edit", () => {
          updateGlobalMode();
          setRouteTexts(texts);
        });
        layer.on("pm:remove", () => {
          texts.splice(texts.indexOf(textLayer), 1);
          setRouteTexts(texts);
          updateGlobalMode();
        });
      }
    });

    map.pm.enableDraw("Line");
    updateGlobalMode();

    return () => {
      map.pm.disableDraw();
      map.pm.disableGlobalEditMode();
      map.off("pm:drawstart");
      map.off("pm:create");
      polylines.forEach((layer) => {
        layer.remove();
      });
      texts.forEach((layer) => {
        layer.remove();
      });
      routes.resetTempRoute();
    };
  }, [routes.isCreating, map]);

  const [globalMode, setGlobalMode] = useState("none");

  const updateGlobalMode = useCallback(() => {
    if (map.pm.globalRemovalModeEnabled()) {
      setGlobalMode("Removal");
    } else if (map.pm.globalEditModeEnabled()) {
      setGlobalMode("Edit");
    } else if (map.pm.globalDragModeEnabled()) {
      setGlobalMode("Drag");
    } else {
      setGlobalMode(map.pm.Draw.getActiveShape());
    }
  }, []);

  if (routes.isCreating) {
    return (
      <div className="divide-y divide-neutral-700 border-t border-t-neutral-600 bg-neutral-900 text-gray-200 text-sm w-full md:border md:border-gray-600 md:rounded-lg">
        <div className="flex leaflet-pm-toolbar flex-wrap">
          <button
            className={`flex gap-1 p-2 uppercase hover:text-white w-1/2 justify-center ${
              globalMode === "Line" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              map.pm.enableDraw("Line");
              updateGlobalMode();
            }}
          >
            <div className="control-icon leaflet-pm-icon-polyline !w-5 !h-5" />
            <span>Add Line</span>
          </button>
          <button
            className={`flex gap-1 p-2 uppercase hover:text-white w-1/2 justify-center ${
              globalMode === "Text" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              map.pm.enableDraw("Text");
              updateGlobalMode();
            }}
          >
            <div className="control-icon leaflet-pm-icon-text !w-5 !h-5" />
            <span>Add Text</span>
          </button>
          <button
            className={`flex gap-1 p-2 uppercase hover:text-white w-1/2 justify-center ${
              globalMode === "Edit" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              map.pm.toggleGlobalEditMode();
              updateGlobalMode();
            }}
          >
            <div className="control-icon leaflet-pm-icon-edit !w-5 !h-5" />
            <span>Edit Mode</span>
          </button>
          <button
            className={`flex gap-1 p-2 uppercase hover:text-white w-1/2 justify-center ${
              globalMode === "Drag" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              map.pm.toggleGlobalDragMode();
              updateGlobalMode();
            }}
          >
            <div className="control-icon leaflet-pm-icon-drag !w-5 !h-5" />
            <span>Drag Text</span>
          </button>
          <button
            className={`flex gap-1 p-2 uppercase hover:text-white w-1/2 justify-center ${
              globalMode === "Removal" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              map.pm.toggleGlobalRemovalMode();
              updateGlobalMode();
            }}
          >
            <div className="control-icon leaflet-pm-icon-delete !w-5 !h-5" />
            <span>Delete Text</span>
          </button>
        </div>
        <div className="flex flex-col p-2 gap-1">
          <input
            className="bg-neutral-900 text-gray-200 text-sm px-2 py-1 w-full border border-gray-600 md:rounded-lg outline-none"
            type="text"
            placeholder="Give this route an explanatory name"
            required
            autoFocus
            value={routes.tempRoute.name}
            onChange={(event) =>
              routes.updateTempRoute({ name: event.target.value })
            }
          />
          <RouteTypes route={routes.tempRoute} />
          <p className="text-xs text-neutral-400">
            You can add multiple lines and connect every node on the map.
            Right-click in edit mode removes a vertex.
          </p>
        </div>
        <div className="flex">
          <button
            className="p-2 uppercase hover:text-white w-1/2"
            onClick={() => {
              routes.setIsCreating(false);
            }}
          >
            Cancel
          </button>
          <button
            className={`p-2 uppercase w-1/2 ${
              routes.tempRoute.name.length === 0
                ? "text-gray-500"
                : "hover:text-white"
            }`}
            onClick={() => {
              if (routes.tempRoute.id.length === 0) {
                routes.addRoute({
                  ...routes.tempRoute,
                  id: nanoid(),
                });
              } else {
                routes.editRoute(routes.tempRoute.id, routes.tempRoute);
              }
              routes.setIsCreating(false);
            }}
            disabled={routes.tempRoute.name.length === 0}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="divide-y divide-neutral-700 border-t border-t-neutral-600 bg-neutral-900 text-gray-200 text-sm w-full md:border md:border-gray-600 md:rounded-lg">
      <div className="flex">
        <button
          className="p-2 uppercase hover:text-white w-1/2"
          onClick={() => {
            routes.setIsCreating(true);
          }}
        >
          Create
        </button>
        <label className="p-2 uppercase hover:text-white w-1/2 text-center">
          <input
            type="file"
            accept=".json"
            style={{ display: "none" }}
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) {
                return;
              }
              const reader = new FileReader();
              reader.addEventListener("load", (loadEvent) => {
                const text = loadEvent.target?.result;
                if (!text || typeof text !== "string") {
                  return;
                }
                try {
                  const route = JSON.parse(text);
                  if (
                    !Array.isArray(route.types) ||
                    !Array.isArray(route.positions) ||
                    typeof route.name !== "string" ||
                    typeof route.id !== "string"
                  ) {
                    throw new Error("Invalid route");
                  }
                  if (routes.routes.some(({ id }) => id === route.id)) {
                    routes.editRoute(route.id, route);
                  } else {
                    routes.addRoute(route);
                  }
                } catch (error) {
                  // Do nothing
                }
                event.target.value = "";
              });
              reader.readAsText(file);
            }}
          />
          Import
        </label>
      </div>
      <p className="text-xs text-neutral-400 p-2">
        Join the{" "}
        <Link
          target="_blank"
          href="https://discord.com/invite/NTZu8Px"
          className="text-neutral-300 hover:text-white"
        >
          Discord server
        </Link>{" "}
        to explore and share routes with other players. You can also import and
        export routes here.
      </p>
      <div className="overflow-auto max-h-full">
        {routes.routes.length === 0 && (
          <div className="p-2">No routes created</div>
        )}
        {routes.routes.map((route) => (
          <article key={route.id} className={`p-2 space-y-1`}>
            <div className="flex justify-between">
              <Toggle
                checked={routes.activeRoutes.includes(route.id)}
                onChange={(checked) =>
                  checked
                    ? routes.addActiveRoute(route.id)
                    : routes.removeActiveRoute(route.id)
                }
                small
              />
              <div className="space-x-3">
                {"update" in router ? (
                  <button
                    className="hover:text-white"
                    onClick={() => {
                      overwolf.io.writeFileContents(
                        `${overwolf.io.paths.documents}\\Diablo 4 Map\\route_${route.id}.json`,
                        JSON.stringify(route),
                        "UTF8" as overwolf.io.enums.eEncoding.UTF8,
                        true,
                        () => console.log
                      );
                      overwolf.utils.openWindowsExplorer(
                        `${overwolf.io.paths.documents}\\Diablo 4 Map`,
                        console.log
                      );
                    }}
                  >
                    Export
                  </button>
                ) : (
                  <a
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                      JSON.stringify(route)
                    )}`}
                    download={`route_${route.id}.json`}
                    className="hover:text-white"
                  >
                    Export
                  </a>
                )}
                <button
                  className="hover:text-white"
                  onClick={() => {
                    routes.updateTempRoute(route);
                    routes.setIsCreating(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="hover:text-white"
                  onClick={() => {
                    if (
                      confirm("Are you sure you want to delete this route?")
                    ) {
                      routes.removeRoute(route.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="truncate text-base">{route.name}</div>
            <RouteTypes route={route} />
          </article>
        ))}
      </div>
    </div>
  );
}
