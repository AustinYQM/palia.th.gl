import Link from "next/link";
import { useI18N } from "./(i18n)/i18n-provider";

export default function AppDownload() {
  const i18n = useI18N();

  return (
    <Link
      href={`/${i18n.locale}/download`}
      className="flex pointer-events-auto items-center gap-1 md:rounded-lg bg-orange-600 hover:bg-orange-500 text-white uppercase px-2 py-1 justify-center whitespace-nowrap w-fit "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"></path>
        <path d="M12 5l0 14"></path>
        <path d="M4 12l16 0"></path>
      </svg>
      <span className="hidden md:block">Get the in-game app</span>
      <span className="block md:hidden">In-Game App</span>
    </Link>
  );
}
