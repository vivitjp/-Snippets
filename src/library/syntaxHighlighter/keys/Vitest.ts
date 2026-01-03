import { KeyDef } from "../../../types/type"

export const keysVitest: KeyDef = {
  // ■ Main(赤)
  Crimson: ["vite", "vitest", "jest", "defineConfig", "vi"],
  // ■ 青(Methods)
  RoyalBlue: [
    "run",
    "watch",
    "getByText",
    "click",
    "expect",
    "render",
    "screen",
    "fireEvent",
    "fn",
    "spyOn",
    "mock",
    "resetAllMocks",
    "",
  ],
  // ■ 緑(Properties)
  ForestGreen: [
    "globals",
    "environment",
    "coverage",
    "tags",
    "maxWorkers",
    "testNamePattern",
    "inspect",
    "config",
    "testSuite",
    "testTimeout",
    "help",
    "",
  ],
  // ■ オレンジ(Property Values)
  DarkOrange: ["jsdom", "happy-dom", "node"],
  // ■ 青緑(型)
  CadetBlue: [
    "toBe",
    "toBeInTheDocument",
    "toHaveBeenCalledTimes",
    "toHaveBeenCalled",
  ],
  // ■ 紫(その他特別)
  DarkOrchid: [
    "describe",
    "it",
    "beforeEach",
    "afterEach",
    "beforeAll",
    "afterAll",
  ],
}
