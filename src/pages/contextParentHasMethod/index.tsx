import { HStack, Stack, Text } from "@chakra-ui/react";
import { CounterProvider } from "./CounterContext";
import { CounterPanelA } from "./CounterPanelA";
import { CounterPanelB } from "./CounterPanelB";

export const ContextParentHasMethod = () => {
  return (
    <Stack
      gap={4}
      padding={4}
      border="1px solid Blue"
      borderRadius="md"
      margin={"2"}
    >
      <Text as="h1" fontSize="xl" fontWeight="bold">
        useContext（関数共有）
      </Text>
      <Text fontSize="sm">
        CounterProvider が提供する increment / decrement / reset
        を、子どうしで同じ関数として参照する
      </Text>
      <CounterProvider>
        <HStack align="start" gap={4} flexWrap="wrap">
          <CounterPanelA />
          <CounterPanelB />
        </HStack>
      </CounterProvider>
    </Stack>
  );
};
