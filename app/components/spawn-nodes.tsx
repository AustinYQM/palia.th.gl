import Image from "next/image";
import { Fragment } from "react";
import { isOverwolfApp } from "../lib/env";
import { SPAWN_ICONS } from "../lib/icons";
import { spawnNodes } from "../lib/nodes";
import { spawnGroups } from "../lib/spawn-groups";
import { useDict } from "./(i18n)/i18n-provider";
import useFilters from "./use-filters";

export default function SpawnNodes() {
  const dict = useDict();
  const [filters, toggleFilter] = useFilters();

  return (
    <div>
      {Object.entries(spawnGroups).map(([key, group]) => {
        return (
          <Fragment key={key}>
            <button
              className={`flex gap-2 items-center hover:bg-neutral-700 p-2 w-full truncate ${
                !filters.some((filter) => group.includes(filter))
                  ? "text-gray-500"
                  : ""
              }`}
              onClick={() => {
                toggleFilter(group);
              }}
              title={dict.groups[key]}
            >
              <span className="truncate">{dict.groups[key]}</span>
            </button>
            {group.map((_key) => {
              const key = _key as keyof typeof spawnNodes;
              const icon = SPAWN_ICONS[key];
              return (
                <button
                  key={key}
                  className={`flex items-center hover:bg-neutral-700 p-2 w-full ${
                    !filters.includes(key) ? "text-gray-500" : ""
                  }`}
                  onClick={() => {
                    toggleFilter(key);
                  }}
                >
                  {"src" in icon ? (
                    <Image
                      src={icon.src as string}
                      width={20}
                      height={20}
                      alt=""
                      className="h-5 w-5 shrink-0"
                      unoptimized={isOverwolfApp}
                    />
                  ) : (
                    <svg
                      viewBox="0 0 100 100"
                      fill={icon.color}
                      className="h-5 w-5 shrink-0"
                    >
                      <path d={icon.path} />
                    </svg>
                  )}
                  <span className="flex-1 text-left mx-3">
                    {dict.spawnNodes[key].name}
                  </span>
                  <span>{spawnNodes[key].length}</span>
                </button>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
