import { KeyDef } from "../syntaxHighlighter"

export const keysRegExp: KeyDef[] = [
  // ■
  {
    color: "LightSeaGreen",
    keys: ["regexp"],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: ["groups"],
  },
  // ■ グレー
  {
    color: "#555",
    keys: ["target", "trim"],
  },
  // ■ 別青
  {
    color: "Crimson",
    keys: ["test", "compile", "exec", "match", "lastIndex", ""],
  },
  {
    color: "SteelBlue",
    keys: ["matchAll"],
  },
  // ■ 鮮明な青
  {
    color: "RoyalBlue",
    keys: ["RegExp"],
  },
]
