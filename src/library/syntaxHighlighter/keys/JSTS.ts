import { KeyDef } from "../../../types/type"

export const keysJSTS: KeyDef = {
  // ■ 変数宣言
  ForestGreen: ["const", "let", "new", "this"],
  // ■ 変数宣言
  "#555": [
    "export",
    "return",
    "import",
    "export",
    "try",
    "catch",
    "lazy",
    "function",
    "constructor",
    "declare",
    "global",
  ],
  // ■ TypeScript
  LightSeaGreen: [
    "interface",
    "type",
    "as",
    "extends",
    "infer",
    "never",
    "keyof",
    "typeof",
    "any",
    "readonly",
  ],
  // ■ JS オブジェクト
  SteelBlue: ["String", "Object", "Uint32Array", "Date", "Map", "Set"],
  // ■ TS 型
  RoyalBlue: [
    "number",
    "string",
    "boolean",
    "null",
    "undefined",
    "symbol",
    "void",
    "object",
    "Function",
    "Date ",
    "Error",
    "RegExp",
  ],
  // ■ JS Methods
  Crimson: [
    "fetch",
    "then",
    "map",
    "forEach",
    "reduce",
    "reduceRight",
    "filter",
    "find",
    "fill",
    "Promise",
    "setTimeout",
    "clearTimeout",
    "async",
    "await",
    "all",
    "race",
    "allSettled",
    "structuredClone",
    "JSON",
    "parse",
    "stringify",
    "slice",
    "splice",
    "copyWithin",
    "findIndex",
    "findLast",
    "findLastIndex",
    "indexOf",
    "lastIndexOf",
    "includes",
    "some",
    "every",
    "entries",
    "keys",
    "values",
    "at",
    "Array",
    "isArray",
    "from",
    "of",
    "flat",
    "flatMap",
    "concat",
    "join",
    "pop",
    "push",
    "shift",
    "unshift",
    "sort",
    "reverse",
    "toLocaleString",
    "toString",
    "fromEntries",
    "Math.random",
    "Math.floor",
    "window.crypto.randomUUID",
    "window.crypto.getRandomValues",
    "now",
    "toSpliced",
    "with",
    "toSorted",
    "toReversed",
  ],

  // ■ JS Event
  darkOrange: [
    "onChange",
    "onClick",
    "onPointerDown",
    "onPointerUp",
    "onPointerMove",
    "onSubmit",
    "checked",
  ],
  // ■ Event
  CadetBlue: [
    "currentTarget",
    "clientX",
    "clientY",
    "pointerId",
    "getBoundingClientRect",
    "setPointerCapture",
    "releasePointerCapture",
    "required",
    "htmlFor",
    "length",
    "placeholder",
    "path",
    "element",
    "stopPropagation",
    "preventDefault",
  ],

  // ■ Inactive Words

  "#999": ["toSliced"],
}
