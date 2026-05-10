import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { sampleButtonStyle } from "./buttonStyle";
import { useImperativeRegistry } from "./ImperativeRegistryContext";

/** 親: Context の invoke で子の imperative API を呼ぶ */
export const ParentInvokeBar = () => {
  const { invoke } = useImperativeRegistry();

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md" width="100%">
      <Text fontWeight="bold">親（invoke で ref.current.execute）</Text>
      <HStack flexWrap="wrap" gap={2}>
        <Button style={sampleButtonStyle} onClick={() => invoke("child-a")}>
          子A の imperative を実行
        </Button>
        <Button style={sampleButtonStyle} onClick={() => invoke("child-b")}>
          子B の imperative を実行
        </Button>
      </HStack>
    </VStack>
  );
};
