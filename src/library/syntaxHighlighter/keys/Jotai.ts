import { KeyDef } from "../syntaxHighlighter"

export const keysJotai: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: ["jotai", "atom", "useAtom"],
  },
  // ■ 鮮明な青
  {
    color: "RoyalBlue",
    keys: ["get", "set"],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: ["async", "await"],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: ["async", "await"],
  },
  // ■ グレー
  {
    color: "SteelBlue",
    keys: [
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
  },
]
