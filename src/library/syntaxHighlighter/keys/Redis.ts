import { KeyDef } from "../../../types/type"

export const keysRedis: KeyDef = {
  // ■ Main(赤)
  Crimson: ["redis", "nestjs", "nestjs-modules", "ioredis"],
  // ■ 青(Methods)
  RoyalBlue: [
    "set",
    "get",
    "rpush",
    "lrange",
    "lpop",
    "hset",
    "hget",
    "hgetall",
    "publish",
    "subscribe",
    "setex",
    "quit",
    "createClient",
    "on",
    "setValue",
    "getValue",
    "forRoot",
    "config",
  ],
  // ■ 緑(Properties)
  ForestGreen: [
    "host",
    "port",
    "connect",
    "error",
    "localhost",
    "Injectable",
    "InjectRedis",
  ],
  // ■ オレンジ(Property Values)
  DarkOrange: [],
  // ■ 青緑(型)
  CadetBlue: ["client", "Redis"],
  // ■ 紫(その他特別)
  DarkOrchid: [
    "npm",
    "install",
    "require",
    "Module",
    "constructor",
    "async",
    "await",
  ],
}
