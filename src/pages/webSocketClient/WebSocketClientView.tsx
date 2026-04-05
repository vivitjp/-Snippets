import React, { useLayoutEffect, useRef } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CHAT_SERVER_HTTP_ORIGIN, DEFAULT_WS_CHAT_URL } from "./constants";
import type { ChatLine } from "./types";

const btnPrimaryProps = {
  size: "sm" as const,
  bg: "blue.600",
  color: "white",
  _hover: { bg: "blue.700" },
  _disabled: { opacity: 0.45, cursor: "not-allowed", color: "white" },
};

const btnSecondaryProps = {
  size: "sm" as const,
  bg: "gray.600",
  color: "white",
  _hover: { bg: "gray.700" },
  _disabled: { opacity: 0.45, cursor: "not-allowed", color: "white" },
};

export type WebSocketClientViewProps = {
  urlOverride: string;
  onUrlChange: (value: string) => void;
  defaultWsUrlPlaceholder: string;
  connected: boolean;
  lines: ChatLine[];
  draft: string;
  onDraftChange: (value: string) => void;
  onDraftKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onConnect: () => void;
  onDisconnect: () => void;
  onSend: () => void;
};

export const WebSocketClientView: React.FC<WebSocketClientViewProps> = ({
  urlOverride,
  onUrlChange,
  defaultWsUrlPlaceholder,
  connected,
  lines,
  draft,
  onDraftChange,
  onDraftKeyDown,
  onConnect,
  onDisconnect,
  onSend,
}) => {
  const logScrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = logScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <Box
      display="grid"
      gridTemplateRows="auto auto 1fr"
      gap={4}
      p={4}
      w="100%"
      flex={1}
      minH={0}
      h="100%"
      maxH="100%"
      overflow="hidden"
    >
      <VStack align="stretch" gap={4} minW={0}>
        <Heading size="lg">WebSocket クライアント</Heading>
        <Text fontSize="sm" color="fg.muted">
          既定の接続先は {DEFAULT_WS_CHAT_URL} (HTTP サーバは{" "}
          {CHAT_SERVER_HTTP_ORIGIN})。別 URL にしたい場合は下に入力。
        </Text>

        <Box>
          <Text fontSize="xs" mb={1} color="fg.muted">
            WebSocket URL (空なら自動)
          </Text>
          <Input
            size="sm"
            placeholder={defaultWsUrlPlaceholder}
            value={urlOverride}
            onChange={(e) => onUrlChange(e.target.value)}
            disabled={connected}
          />
        </Box>

        <HStack flexWrap="wrap" gap={2}>
          <Button {...btnPrimaryProps} onClick={onConnect} disabled={connected}>
            接続
          </Button>
          <Button
            {...btnSecondaryProps}
            onClick={onDisconnect}
            disabled={!connected}
          >
            切断
          </Button>
        </HStack>
      </VStack>

      <HStack gap={2} align="flex-end" flexShrink={0}>
        <Input
          flex={1}
          size="sm"
          placeholder="メッセージ"
          value={draft}
          disabled={!connected}
          onChange={(e) => onDraftChange(e.target.value)}
          onKeyDown={onDraftKeyDown}
        />
        <Button {...btnPrimaryProps} onClick={onSend} disabled={!connected}>
          送信
        </Button>
      </HStack>

      <Box
        ref={logScrollRef}
        minH={0}
        minW={0}
        borderWidth="1px"
        borderRadius="md"
        p={3}
        overflowY="auto"
        overflowX="hidden"
        bg="gray.950"
        color="gray.100"
        fontSize="sm"
        fontFamily="mono"
      >
        {lines.length === 0 ? (
          <Text color="gray.500">ログはここに表示されます</Text>
        ) : (
          <VStack align="stretch" gap={1}>
            {lines.map((line) => (
              <Box
                key={line.id}
                alignSelf={
                  line.kind === "out"
                    ? "flex-end"
                    : line.kind === "in"
                      ? "flex-start"
                      : "stretch"
                }
                maxW="90%"
              >
                {line.kind === "sys" ? (
                  <Text color="gray.500" fontSize="xs">
                    {line.text}
                  </Text>
                ) : line.kind === "out" ? (
                  <Box
                    bg="blue.800"
                    px={2}
                    py={1}
                    borderRadius="md"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                  >
                    <Text fontSize="xs" color="gray.200">
                      → {line.text}
                    </Text>
                  </Box>
                ) : (
                  <Box
                    bg="gray.800"
                    px={2}
                    py={1}
                    borderRadius="md"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                  >
                    <Text fontSize="xs" color="gray.100">
                      ← {line.text}
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
};
