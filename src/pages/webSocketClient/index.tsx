import React from "react";
import { Flex } from "@chakra-ui/react";
import { WebSocketClientView } from "./WebSocketClientView";
import { useWebSocketChat } from "./useWebSocketChat";

const WebSocketClientPage: React.FC = () => {
  const chat = useWebSocketChat();

  return (
    <Flex flex={1} minH={0} h="100%" w="100%" direction="column" align="stretch">
    <WebSocketClientView
      urlOverride={chat.urlOverride}
      onUrlChange={chat.setUrlOverride}
      defaultWsUrlPlaceholder={chat.defaultWsUrlPlaceholder}
      connected={chat.connected}
      lines={chat.lines}
      draft={chat.draft}
      onDraftChange={chat.setDraft}
      onDraftKeyDown={chat.onDraftKeyDown}
      onConnect={chat.connect}
      onDisconnect={chat.disconnect}
      onSend={chat.send}
    />
    </Flex>
  );
};

export default WebSocketClientPage;
