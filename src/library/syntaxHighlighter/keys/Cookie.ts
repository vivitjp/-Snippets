import { KeyDef } from "../../../types/type"

export const keysCookie: KeyDef = {
  // ■ Main(赤) - 主要な Cookie 関連キーワード
  Crimson: ["Cookie", "cookies", "express"],
  // ■ Generation(青) - 生成関連
  Blue: [
    "sessionId",
    "crypto",
    "randomBytes",
    "toString",
    "hex",
    "generateSessionId",
    "getCookie",
    "split",
    "pop",
    "shift",
    "clearCookie",
    "send",
    "status",
  ],
  // ■ Client(緑) - クライアント側関連
  Green: [
    "Set-Cookie",
    "httpOnly",
    "secure",
    "Domain",
    "Expires",
    "sameSite",
    "path",
    "Max-Age",
  ],
  // ■ Attributes(オレンジ) - 属性関連
  Orange: ["Strict", "Lax", "None"],
  // ■ Server(紫) - サーバー側関連
  Purple: ["XSS", "CSRF"],
}
