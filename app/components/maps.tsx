import Link from "next/link";
import { isOverwolfApp } from "../lib/env";
import { CONFIGS } from "../lib/maps";
import { useParamsStore } from "../lib/storage/params";
import { useDict, useI18N } from "./(i18n)/i18n-provider";

export default function Maps() {
  const dict = useDict();
  const i18n = useI18N();

  const visibleNodesByMap = useParamsStore((state) => state.visibleNodesByMap);
  const mapName = useParamsStore((state) => state.mapName);
  const query = useParamsStore((state) => state.query);
  const setParams = useParamsStore((state) => state.setParams);

  return (
    <div className="divide-neutral-700 border-t border-t-neutral-600 bg-neutral-900 text-sm w-full md:border md:border-gray-600 md:rounded-lg">
      <div className="flex flex-wrap">
        {Object.keys(CONFIGS).map((map) => (
          <Link
            href={`/${i18n.locale}/${encodeURIComponent(dict.maps[map])}${
              query ? `?${query}` : ""
            }`}
            key={map}
            className={`p-2 basis-1/2 hover:text-white w-1/2 text-center truncate ${
              map === mapName ? "text-gray-200" : "text-gray-500"
            }`}
            onClick={(event) => {
              if (isOverwolfApp) {
                setParams({ mapName: map, dict });
                event.preventDefault();
              }
            }}
          >
            {dict.maps[map]} ({visibleNodesByMap[map]?.length ?? 0})
          </Link>
        ))}
      </div>
    </div>
  );
}
