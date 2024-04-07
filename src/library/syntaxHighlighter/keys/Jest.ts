import { KeyDef } from "../syntaxHighlighter"

export const keysJest: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: [
      "beforeEach",
      "afterEach",
      "beforeAll",
      "afterAll",
      "describe",
      "test",
      "it",
      "jest",
      "not",
    ],
  },
  // ■ Sub(青)
  {
    color: "DodgerBlue",
    keys: ["expect", "extend"],
  },
  // ■ オレンジ
  {
    color: "ForestGreen",
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
      "anything",
      "any",
      "arrayContaining",
      "stringContaining",
      "stringMatching",
      "resolves",
      "rejects",
      "objectContaining",
    ],
  },
  // ■ 緑
  {
    color: "CadetBlue",
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
