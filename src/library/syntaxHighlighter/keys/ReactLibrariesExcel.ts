import { KeyDef } from "../../../types/type"

export const keysReactLibrariesExcel: KeyDef = {
  // ■ Main(赤)
  Crimson: ["xlsx", "xlsx-js-style", "XLSX", "FileReader", "Uint8Array"],
  // ■ 青(Methods)
  RoyalBlue: [
    "read",
    "writeFile",
    "sheet_to_json",
    "json_to_sheet",
    "book_new",
    "book_append_sheet",
    "readAsArrayBuffer",
  ],
  // ■ 緑(Properties)
  ForestGreen: [
    "utils",
    "SheetNames",
    "Sheets",
    "onload",
    "s",
    "font",
    "sz",
    "style",
    "name",
    "bold",
    "color",
    "rgb",
    "fill",
    "fgColor",
    "border",
    "top",
    "bottom",
    "left",
    "right",
    "thin",
  ],
  // ■ オレンジ(Property Values)
  DarkOrange: ["workbook"],
  // ■ 青緑(型)
  CadetBlue: [],
  // ■ 紫(その他特別)
  DarkOrchid: [],
}
