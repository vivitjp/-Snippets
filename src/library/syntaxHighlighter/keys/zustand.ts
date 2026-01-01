import { KeyDef } from "../../../types/type"

export const keysZustand: KeyDef = {
  // ■ Main(赤) - 主要概念、ライブラリ
  Crimson: ["Zustand", "create", "persist", "devtools", "subscribe"],
  // ■ 青(Methods) - 関数、メソッド
  RoyalBlue: [
    "set",
    "get",
    "useStore",
    "increase",
    "decrement",
    "increment",
    "removeAll",
    "addTodo",
    "toggleTodo",
    "removeTodo",
    "clearCompleted",
    "incrementByAmount",
  ],
  // ■ 緑(Properties) - プロパティ、オプション
  ForestGreen: [
    "bears",
    "count",
    "todos",
    "text",
    "completed",
    "id",
    "value",
    "name",
    "initialState",
    "reducers",
    "type",
    "payload",
    "state",
    "action",
  ],
  // ■ オレンジ(Property Values) - 値、定数
  DarkOrange: ["true", "false"],
  // ■ 青緑(型) - TypeScript 型
  CadetBlue: ["BearState", "Todo", "TodoStore"],
  // ■ 紫(その他特別) - 特別な用語、概念
  DarkOrchid: ["store", "selector", "middleware", "asyncIncrement"],
}
