import { HStack, Stack, Text } from "@chakra-ui/react";
import { ChildPanelA } from "./ChildPanelA";
import { ChildPanelB } from "./ChildPanelB";
import { ParentInvokeBar } from "./ParentInvokeBar";
import { RegistryProvider } from "./RegistryContext";

/**
 * 親が Context を持ち、子が register でメソッドを登録し、親が invoke で呼ぶサンプル
 */
export const ContextChildrenHaveMethod = () => {
  return (
    <Stack
      gap={4}
      padding={4}
      border="1px solid Blue"
      borderRadius="md"
      margin={"2"}
    >
      <Text as="h1" fontSize="xl" fontWeight="bold">
        Context + 子がメソッド登録 / 親が invoke
      </Text>
      <Text fontSize="sm">
        RegistryProvider が register / unregister / invoke を提供する。子は
        useEffect で自分の処理を id 付きで登録し、親は同じ Context の invoke(id)
        で子の処理を起動できる
      </Text>
      <RegistryProvider>
        <Stack gap={4} width="100%">
          <ParentInvokeBar />
          <HStack align="start" gap={4} flexWrap="wrap">
            <ChildPanelA />
            <ChildPanelB />
          </HStack>
        </Stack>
      </RegistryProvider>
    </Stack>
  );
};
