import { KeyDef } from "../../../types/type"

export const keysJotai: KeyDef = {
  // ■ Main(赤)
  Crimson: [
    "jotai",
    "atom",
    "useAtom",
    "useAtomValue",
    "useSetAtom",
    "useAtomCallback",
  ],
  // ■ 鮮明な青
  RoyalBlue: ["get", "set"],
  // ■ 緑
  ForestGreen: ["async", "await"],
  // ■ 型
  DarkOrange: ["Atom", "PrimitiveAtom", "WritableAtom"],
  // ■ 型
  Goldenrod: ["Value", "Args", "Result", "Getter", "Setter"],
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
