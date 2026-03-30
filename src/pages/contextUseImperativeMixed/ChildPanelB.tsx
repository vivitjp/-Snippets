import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useImperativeHandle, useRef, useState } from "react";
import type { ImperativeChildHandle } from "./ImperativeRegistryContext";
import { useImperativeRegistry } from "./ImperativeRegistryContext";

const CHILD_ID = "child-b";

/** 子B: 別の state を持ち、同じ ImperativeChildHandle 形で登録 */
export const ChildPanelB = () => {
  const { registerRef, unregister } = useImperativeRegistry();
  const [label, setLabel] = useState("待機中");
  const imperativeRef = useRef<ImperativeChildHandle | null>(null);

  useImperativeHandle(
    imperativeRef,
    () => ({
      execute: () => {
        setLabel((prev) => (prev === "待機中" ? "親から実行" : "待機中"));
      },
    }),
    []
  );

  useEffect(() => {
    registerRef(CHILD_ID, imperativeRef);
    return () => unregister(CHILD_ID);
  }, [registerRef, unregister]);

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">子 B (useImperativeHandle)</Text>
      <Text>
        id: {CHILD_ID} / {label}
      </Text>
      <Text fontSize="sm" color="gray.600">
        子で登録した ref 経由で親が invoke すると表示が切り替わる
      </Text>
    </VStack>
  );
};
