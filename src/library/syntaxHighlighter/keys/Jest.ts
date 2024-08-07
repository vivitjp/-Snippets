import { KeyDef } from "../../../types/type"

export const keysJest: KeyDef = {
  // ■ Main(赤)
  Crimson: [
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
  // ■ Sub(青)
  DodgerBlue: ["expect", "extend"],
  // ■ オレンジ
  ForestGreen: [
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
  // ■ 緑
  CadetBlue: [
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
  // ■ グレー
  "#555": [
    "mockFn",
    "async",
    "await",
    "then",
    "toBeWithinRange",
    "message",
    "pass",
  ],
}
