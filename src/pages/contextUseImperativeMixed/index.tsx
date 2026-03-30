import { HStack, Stack, Text } from "@chakra-ui/react";
import { ChildPanelA } from "./ChildPanelA";
import { ChildPanelB } from "./ChildPanelB";
import { ParentInvokeBar } from "./ParentInvokeBar";
import { ImperativeRegistryProvider } from "./ImperativeRegistryContext";

/**
 * useContext で imperative ref を登録し、useImperativeHandle で子が API を公開するサンプル
 * （子が関数を直接 register する版は contextChildrenHaveMethod を参照）
 */
export const ContextUseImperativeMixedSample = () => {
  return (
    <Stack
      gap={4}
      padding={4}
      border="1px solid Blue"
      borderRadius="md"
      margin={"2"}
    >
      <Text as="h1" fontSize="xl" fontWeight="bold">
        Context + useImperativeHandle（ref 登録）
      </Text>
      <Text fontSize="sm">
        子は useImperativeHandle で execute を持つ ref を作り、registerRef(id, ref)
        で Context に登録する。親は invoke(id) で ref.current.execute() を呼ぶ
      </Text>
      <ImperativeRegistryProvider>
        <Stack gap={4} width="100%">
          <ParentInvokeBar />
          <HStack align="start" gap={4} flexWrap="wrap">
            <ChildPanelA />
            <ChildPanelB />
          </HStack>
        </Stack>
      </ImperativeRegistryProvider>
    </Stack>
  );
};
