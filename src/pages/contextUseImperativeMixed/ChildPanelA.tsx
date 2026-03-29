import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useImperativeHandle, useRef, useState } from "react";
import type { ImperativeChildHandle } from "./ImperativeRegistryContext";
import { useImperativeRegistry } from "./ImperativeRegistryContext";

const CHILD_ID = "child-a";

/** 子A: useImperativeHandle で API を作り、Context に ref を登録する */
export const ChildPanelA = () => {
  const { registerRef, unregister } = useImperativeRegistry();
  const [count, setCount] = useState(0);
  const imperativeRef = useRef<ImperativeChildHandle | null>(null);

  useImperativeHandle(
    imperativeRef,
    () => ({
      execute: () => setCount((c) => c + 1),
    }),
    []
  );

  useEffect(() => {
    registerRef(CHILD_ID, imperativeRef);
    return () => unregister(CHILD_ID);
  }, [registerRef, unregister]);

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">子 A (useImperativeHandle)</Text>
      <Text>
        id: {CHILD_ID} / count: {count}
      </Text>
      <Text fontSize="sm" color="gray.600">
        imperativeRef に execute を載せ、registerRef で Context に登録
      </Text>
    </VStack>
  );
};
