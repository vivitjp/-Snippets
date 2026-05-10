import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRegistry } from "./RegistryContext";

const CHILD_ID = "child-b";

/** 子B: 別の処理を Context に登録する */
export const ChildPanelB = () => {
  const { register, unregister } = useRegistry();
  const [label, setLabel] = useState("待機中");

  useEffect(() => {
    register(CHILD_ID, () => {
      setLabel((prev) => (prev === "待機中" ? "親から実行された" : "待機中"));
    });
    return () => unregister(CHILD_ID);
  }, [register, unregister]);

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">子コンポーネント B</Text>
      <Text>
        登録 id: {CHILD_ID} / 状態: {label}
      </Text>
      <Text fontSize="sm" color="gray.600">
        親のボタンで invoke(&quot;child-b&quot;) が走ると表示が切り替わる
      </Text>
    </VStack>
  );
};
