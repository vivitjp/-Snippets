import { KeyDef } from "../syntaxHighlighter"

export const keysJest: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: ["test", "it", "describe", "jest"],
  },
  // ■ Sub(青)
  {
    color: "RoyalBlue",
    keys: ["expect", "extend"],
  },
  // ■ オレンジ
  {
    color: "darkOrange",
    keys: [
      "only",
      "skip",
      "each",
      "todo",
      "concurrent",
      "spyOn",
      "mock",
      "calls",
      "results",
      "fn",
      "not",
    ],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: [
      "toBe",
      "toBeCalledWith",
      "toEqual",
      "toStrictEqual",
      "toContain",
      "toContainEqual",
      "toMatch",
      "toMatchObject",
      "toHaveLength",
      "toHaveProperty",
      "toBeInstanceOf",
      "toMatch",
      "toHaveBeenCalled",
      "toHaveBeenCalledTimes",
      "toHaveBeenCalledWith",
      "toHaveBeenLastCalledWith",
      "toHaveBeenNthCalledWith",
      "functionReturned",
      "toHaveReturnedTimes",
      "toHaveReturnedWith",
      "toHaveLastReturnedWith",
      "toHaveNthReturnedWith",
      "toBeCloseTo",
      "toBeGreaterThan",
      "toBeGreaterThanOrEqual",
      "toBeLessThan",
      "toBeLessThanOrEqual",
      "toBeNaN",
      "toBeDefined",
      "toBeUndefined",
      "toBeTruthy",
      "toBeFalsy",
      "toBeNaN",
      "toBeNull",
      "toThrow",
    ],
  },
  // ■ グレー
  {
    color: "#555",
    keys: [
      "mockFn",
      "async",
      "await",
      "then",
      "toBeWithinRange",
      "message",
      "pass",
    ],
  },
  // ■ 別青
  {
    color: "CadetBlue",
    keys: ["beforeEach", "afterEach", "beforeAll", "afterAll"],
  },
  {
    color: "SteelBlue",
    keys: [
      "anything",
      "any",
      "arrayContaining",
      "stringContaining",
      "stringMatching",
      "resolves",
      "rejects",
    ],
  },
  // // ■
  // {
  //   color: "LightSeaGreen",
  //   keys: [],
  // },
  // // ■
  // {
  //   color: "Goldenrod",
  //   keys: [],
  // },
  // // ■
  // {
  //   color: "DodgerBlue",
  //   keys: [],
  // },
]
