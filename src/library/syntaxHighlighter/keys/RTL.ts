import { KeyDef } from "../../../types/type"

export const keysRTL: KeyDef = {
  // ■ Main(赤)
  IndianRed: ["render", "screen", "userEvent", "fireEvent", ""],
  // ■ 青
  RoyalBlue: [
    "click",
    "findByRole",
    "findByTestId",
    "findAllByTestId",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  // ■ 青緑
  CadetBlue: [
    "getByRole",
    "getByTestId",
    "getAllByTestId",
    "getByText",
    "",
    "",
  ],
  // ■ 紫
  DarkOrchid: ["queryByTestId", "queryAllByTestId", "", ""],
  // ■ 緑
  ForestGreen: ["toHaveTextContent", "toBeDisabled", "", "", ""],
  // ■ ゴールド
  Goldenrod: ["", "", "", "", "", "", "", "", "", "", "", ""],
  // ■ オレンジ
  DarkOrange: ["", "", "", "", "", "", "", "", "", ""],
}
