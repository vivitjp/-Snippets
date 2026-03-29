import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { sampleButtonStyle } from "./buttonStyle";
import { useCounter } from "./CounterContext";

export const CounterPanelB = () => {
  const { count, decrement } = useCounter();

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">子コンポーネント B</Text>
      <Text>同じ count: {count}</Text>
      <HStack>
        <Button style={sampleButtonStyle} onClick={decrement}>
          -1
        </Button>
      </HStack>
    </VStack>
  );
};
