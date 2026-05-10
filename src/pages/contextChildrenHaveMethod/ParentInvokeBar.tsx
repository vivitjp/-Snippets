import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { sampleButtonStyle } from "./buttonStyle";
import { useRegistry } from "./RegistryContext";

/** 親側 UI: Context 経由で子が登録した処理を id で呼び出す */
export const ParentInvokeBar = () => {
  const { invoke } = useRegistry();

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md" width="100%">
      <Text fontWeight="bold">親（登録されたメソッドを invoke）</Text>
      <HStack flexWrap="wrap" gap={2}>
        <Button
          style={sampleButtonStyle}
          onClick={() => invoke("child-a")}
        >
          子A の登録処理を実行
        </Button>
        <Button
          style={sampleButtonStyle}
          onClick={() => invoke("child-b")}
        >
          子B の登録処理を実行
        </Button>
      </HStack>
    </VStack>
  );
};
