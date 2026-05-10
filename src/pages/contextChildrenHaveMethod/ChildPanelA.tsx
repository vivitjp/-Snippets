import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRegistry } from "./RegistryContext";

const CHILD_ID = "child-a";

/** 子A: 自分の state を更新する処理を Context に登録する */
export const ChildPanelA = () => {
  const { register, unregister } = useRegistry();
  const [count, setCount] = useState(0);

  useEffect(() => {
    register(CHILD_ID, () => {
      setCount((c) => c + 1);
    });
    return () => unregister(CHILD_ID);
  }, [register, unregister]);

  return (
    <VStack align="start" gap={2} p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">子コンポーネント A</Text>
      <Text>
        登録 id: {CHILD_ID} / カウント: {count}
      </Text>
      <Text fontSize="sm" color="gray.600">
        親のボタンで invoke(&quot;child-a&quot;) が走ると +1 される
      </Text>
    </VStack>
  );
};
