import { KeyDef } from "../../../types/type"

export const keystRPC: KeyDef = {
  // ■ 重要語 (赤)
  Crimson: ["trpc", "tRPC", "TRPCError", "createTRPCReact", "ZodError"],

  // ■ メソッド / 関数 (青)
  RoyalBlue: [
    "app",
    "AppRouter",
    "trpcClient",
    "httpBatchLink",
    "applyWSSHandler",
    "createExpressMiddleware",
    "router",
    "publicProcedure",
    "protectedProcedure",
    "initTRPC",
    "create",
    "createClient",
    "createTRPCReact",
    "createExpressMiddleware",
    "applyWSSHandler",
    "httpBatchLink",
    "subscribe",
    "mutateAsync",
    "useQuery",
    "useMutation",
    "useSubscription",
    "userRouter",
    "postRouter",
    "procedure",
    "query",
    "mutation",
    "subscription",
    "input",
    "use",
    "createContext",
    "z",
  ],

  // ■ 属性 / パラメータ (緑)
  ForestGreen: [
    "url",
    "headers",
    "authorization",
    "credentials",
    "origin",
    "port",
    "req",
    "res",
    "ctx",
    "context",
    "transformer",
    "errorFormatter",
    "loading",
    "error",
    "shape",
    "isLoading",
    "maxURLLength",
    "message",
    "streamingProcedure",
    "fetch",
  ],

  // ■ 補助 (オレンジ)
  DarkOrange: ["batch", "batching", "ws", "websocket", "compression"],

  // ■ 青緑(型)
  CadetBlue: ["CreateExpressContextOptions"],

  // ■ 紫(その他特別)
  DarkOrchid: [
    "superjson",
    "zod",
    "tanstack",
    "express",
    "cors",
    "getUser",
    "createUser",
    "listUsers",
    "",
    "",
    "",
    "",
  ],

  // ■ その他
  "#555": [""],
}

export default keystRPC
