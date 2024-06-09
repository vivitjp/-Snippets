import { KeyDef } from "../getKey"

export const keysJotai: KeyDef = {
  // ■ Main(赤)
  Crimson: ["jotai", "atom", "useAtom"],
  // ■ 鮮明な青
  RoyalBlue: ["get", "set"],
  // ■ 緑
  ForestGreen: ["async", "await"],
  // ■ グレー
  SteelBlue: [
    "countAtom",
    "countDerivedAtom",
    "citiesAtom",
    "citySelectedAtom",
    "doubledOrigAtom",
    "doubledCountAtom",
    "addingCountDerivedAtom",
    "urlAtom",
    "fetchUrlAtom",
    "fetchDataAtom",
    "fetchUrlLazyAtom",
  ],
}
