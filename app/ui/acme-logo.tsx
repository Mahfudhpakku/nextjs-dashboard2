import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./font";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white gap-2`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Sragen Motor</p>
    </div>
  );
}
