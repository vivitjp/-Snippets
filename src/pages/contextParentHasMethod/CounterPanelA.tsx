import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { sampleButtonStyle } from "./buttonStyle";
import { useCounter } from "./CounterContext";

export const CounterPanelA = () => {
  const { count, increment, reset } = useCounter();

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">子コンポーネント A</Text>
      <Text>共有カウント: {count}</Text>
      <HStack>
        <Button style={sampleButtonStyle} onClick={increment}>
          +1
        </Button>
        <Button style={sampleButtonStyle} onClick={reset}>
          reset
        </Button>
      </HStack>
    </VStack>
  );
};
