/** チャット用サーバの HTTP オリジン (参照・ドキュメント用) */
export const CHAT_SERVER_HTTP_ORIGIN = "http://localhost:3847/" as const;

/**
 * ブラウザから接続する既定 WebSocket URL
 * (上記 HTTP サーバと同一ホスト・ポートの ws)
 */
export const DEFAULT_WS_CHAT_URL = "ws://localhost:3847" as const;
