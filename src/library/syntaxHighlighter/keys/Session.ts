import { KeyDef } from "../../../types/type"

export const keysSession: KeyDef = {
  // ■ Main(赤) - 主要なセッション関連キーワード
  Crimson: [
    "session",
    "sessionId",
    "sid",
    "accessToken",
    "refreshToken",
    "JWT",
    "JSON Web Token",
    "Cookie",
    "Set-Cookie",
    "HttpOnly",
    "Secure",
    "SameSite",
    "Path",
    "Domain",
    "Max-Age",
    "Bearer",
    "Authorization",
    "sign",
    "expiresIn",
    "auth",
    "login",
    "POST",
    "Redis",
    "DB",
  ],
  // ■ Security(オレンジ) - セキュリティ関連
  Orange: [
    "XSS",
    "CSRF",
    "CSP",
    "Audit",
    "IP",
    "UA",
    "Referer",
    "Origin",
    "double submit cookie",
  ],
  // ■ Flow(青) - フロー関連
  Blue: [],
  // ■ Types(緑) - タイプ関連
  Green: ["stateless", "stateful", "localStorage", "sessionStorage"],
  // ■ Attributes(紫) - 属性関連
  Purple: ["Lax", "Strict", "None"],
}
