import { KeyDef } from "../../../types/type"

export const keysSecurity: KeyDef = {
  // ■ Main(赤) - 主要なセキュリティ脅威
  Crimson: [
    "XSS",
    "CSRF",
    "SQL Injection",
    "Clickjacking",
    "vulnerability",
    "attack",
    "exploit",
    "threat",
    "breach",
    "compromise",
  ],
  // ■ Defense(オレンジ) - 防御関連
  Orange: [
    "defense",
    "prevention",
    "mitigation",
    "protection",
    "security",
    "safeguard",
    "countermeasure",
    "remediation",
  ],
  // ■ Implementation(青) - 実装関連
  Blue: [
    "sanitize",
    "escape",
    "CSP",
    "HttpOnly",
    "token",
    "SameSite",
    "Prepared Statement",
    "Parameterized Query",
    "whitelist",
    "blacklist",
    "validation",
    "verification",
  ],
  // ■ Headers(紫) - ヘッダー関連
  Purple: [
    "X-Frame-Options",
    "frame-ancestors",
    "Content-Security-Policy",
    "X-Content-Type-Options",
    "Strict-Transport-Security",
    "Origin",
    "Referer",
  ],
  // ■ AWS/CDK(緑) - AWS CDK関連
  Green: [
    "WAF",
    "CloudFront",
    "Lambda@Edge",
    "API Gateway",
    "RDS Proxy",
    "Aurora Serverless",
    "Response Headers Policy",
    "custom authorizer",
  ],
}
