import { KeyDef } from "../../../types/type"

export const keysReactLibrariesGraph: KeyDef = {
  // ■ Main(赤)
  Crimson: [
    "ReactFlow",
    "MiniMap",
    "Controls",
    "Background",
    "LineChart",
    "Line",
    "XAxis",
    "YAxis",
    "CartesianGrid",
    "Tooltip",
    "Legend",
    "ResponsiveContainer",
  ],
  // ■ 青(Methods)
  RoyalBlue: [],
  // ■ 緑(Properties)
  ForestGreen: [
    "elements",
    "id",
    "type",
    "data",
    "label",
    "position",
    "x",
    "y",
    "source",
    "target",
    "animated",
    "name",
    "uv",
    "pv",
    "amt",
    "margin",
    "top",
    "right",
    "left",
    "bottom",
    "dataKey",
    "stroke",
    "activeDot",
    "r",
    "gap",
  ],
  // ■ オレンジ(Property Values)
  DarkOrange: ["input", "true"],
  // ■ 青緑(型)
  CadetBlue: [],
  // ■ 紫(その他特別)
  DarkOrchid: [],
}
