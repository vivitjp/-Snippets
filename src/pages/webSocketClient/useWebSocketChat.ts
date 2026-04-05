import { useCallback, useEffect, useId, useRef, useState } from "react";
import { DEFAULT_WS_CHAT_URL } from "./constants";
import type { ChatLine } from "./types";

export type UseWebSocketChatResult = {
  urlOverride: string;
  setUrlOverride: (v: string) => void;
  defaultWsUrlPlaceholder: string;
  connected: boolean;
  lines: ChatLine[];
  draft: string;
  setDraft: (v: string) => void;
  onDraftKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  connect: () => void;
  disconnect: () => void;
  send: () => void;
};

export function useWebSocketChat(): UseWebSocketChatResult {
  const idPrefix = useId();
  const wsRef = useRef<WebSocket | null>(null);
  const [urlOverride, setUrlOverride] = useState("");
  const [lines, setLines] = useState<ChatLine[]>([]);
  const [draft, setDraft] = useState("");
  const [connected, setConnected] = useState(false);

  const appendLine = useCallback(
    (kind: ChatLine["kind"], text: string) => {
      setLines((prev) => [
        ...prev,
        { id: `${idPrefix}-${prev.length}-${Date.now()}`, kind, text },
      ]);
    },
    [idPrefix],
  );

  const effectiveUrl = urlOverride.trim() || DEFAULT_WS_CHAT_URL;

  const disconnect = useCallback(() => {
    wsRef.current?.close();
    wsRef.current = null;
    setConnected(false);
  }, []);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const ws = new WebSocket(effectiveUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      appendLine("sys", "[open]");
      setConnected(true);
    };
    ws.onmessage = (ev) => {
      appendLine("in", String(ev.data));
    };
    ws.onerror = () => {
      appendLine("sys", "[error]");
    };
    ws.onclose = () => {
      appendLine("sys", "[close]");
      setConnected(false);
      wsRef.current = null;
    };
  }, [effectiveUrl, appendLine]);

  const send = useCallback(() => {
    const t = draft.trim();
    const ws = wsRef.current;
    if (!t || !ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(t);
    appendLine("out", t);
    setDraft("");
  }, [draft, appendLine]);

  const onDraftKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") send();
    },
    [send],
  );

  useEffect(() => {
    return () => {
      wsRef.current?.close();
      wsRef.current = null;
    };
  }, []);

  return {
    urlOverride,
    setUrlOverride,
    defaultWsUrlPlaceholder: DEFAULT_WS_CHAT_URL,
    connected,
    lines,
    draft,
    setDraft,
    onDraftKeyDown,
    connect,
    disconnect,
    send,
  };
}
