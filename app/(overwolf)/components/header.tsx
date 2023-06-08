"use client";
import { useSettingsStore } from "@/app/lib/storage";
import { useEffect, useLayoutEffect, useState } from "react";
import { setInputPassThrough, useCurrentWindow } from "../lib/windows";
import SVGIcons from "./svg-icons";

export default function Header() {
  const currentWindow = useCurrentWindow();
  const [version, setVersion] = useState("");
  const settingsStore = useSettingsStore();

  const isMaximized = currentWindow?.stateEx === "maximized";

  useLayoutEffect(() => {
    overwolf.extensions.current.getManifest((manifest) => {
      setVersion(manifest.meta.version);
    });
  }, []);

  useEffect(() => {
    if (!settingsStore.overlayMode) {
      return;
    }
    document.body.style.opacity = settingsStore.windowOpacity.toFixed(2);
  }, [settingsStore.windowOpacity]);

  useEffect(() => {
    if (!settingsStore.overlayMode) {
      return;
    }
    setInputPassThrough(settingsStore.lockedWindow);
    if (settingsStore.lockedWindow) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  }, [settingsStore.lockedWindow]);

  if (settingsStore.overlayMode && settingsStore.lockedWindow) {
    return (
      <>
        <SVGIcons />
        <button
          className="lock h-[30px] w-[30px] p-1 flex items-center hover:bg-neutral-700 fixed z-10 left-1/2 -translate-x-1/2 text-red-500 rounded-t-lg bg-black"
          onClick={() =>
            settingsStore.setLockedWindow(!settingsStore.lockedWindow)
          }
        >
          <svg>
            <use xlinkHref="#icon-lock-open" />
          </svg>
        </button>
        <header className="h-[30px]">
          <div className="h-[30px]" />
        </header>
      </>
    );
  }

  return (
    <>
      <SVGIcons />
      <header
        className="flex items-center h-[30px] relative bg-black"
        onMouseDown={() =>
          isMaximized ? null : overwolf.windows.dragMove(currentWindow!.id)
        }
        onDoubleClick={() =>
          isMaximized
            ? overwolf.windows.restore(currentWindow!.id)
            : overwolf.windows.maximize(currentWindow!.id)
        }
      >
        <h1 className="font-mono ml-2">Diablo 4 Map v{version}</h1>

        {settingsStore.overlayMode && (
          <button
            className="h-[30px] w-[30px] p-1 flex items-center hover:bg-neutral-700 absolute left-1/2 -translate-x-1/2"
            title="Lock window control"
            onClick={() =>
              settingsStore.setLockedWindow(!settingsStore.lockedWindow)
            }
          >
            <svg>
              <use xlinkHref="#icon-lock" />
            </svg>
          </button>
        )}

        <div className="flex ml-auto">
          {settingsStore.overlayMode && (
            <label className="flex items-center">
              <span className="text-xs font-mono">Opacity</span>
              <input
                className="ml-2 w-20"
                onMouseDown={(event) => event.stopPropagation()}
                type="range"
                step={0.05}
                min={0.45}
                max={1}
                value={settingsStore.windowOpacity}
                onChange={(event) =>
                  settingsStore.setWindowOpacity(+event.target.value)
                }
              />
            </label>
          )}
          <a
            href="https://discord.com/invite/NTZu8Px"
            target="_blank"
            className="h-[30px] w-[30px] flex items-center hover:bg-[#7289da]"
          >
            <svg>
              <use xlinkHref="#window-control_discord" />
            </svg>
          </a>
          <button
            className="h-[30px] w-[30px] flex items-center hover:bg-neutral-700"
            onClick={() => overwolf.windows.minimize(currentWindow!.id)}
          >
            <svg>
              <use xlinkHref="#window-control_minimize" />
            </svg>
          </button>
          {isMaximized ? (
            <button
              className="h-[30px] w-[30px] flex items-center hover:bg-neutral-700"
              onClick={() => overwolf.windows.restore(currentWindow!.id)}
            >
              <svg>
                <use xlinkHref="#window-control_restore" />
              </svg>
            </button>
          ) : (
            <button
              className="h-[30px] w-[30px] flex items-center hover:bg-neutral-700"
              onClick={() => overwolf.windows.maximize(currentWindow!.id)}
            >
              <svg>
                <use xlinkHref="#window-control_maximize" />
              </svg>
            </button>
          )}
          <button
            className="h-[30px] w-[30px] flex items-center hover:bg-red-600"
            id="close"
            onClick={() => overwolf.windows.close(currentWindow!.id)}
          >
            <svg>
              <use xlinkHref="#window-control_close" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
