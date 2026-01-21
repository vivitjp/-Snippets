import { Stack, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  title: string
  // children: React.ReactNode  // 宣言不要
}

export const Layout = ({
  title,
  children,
}: React.PropsWithChildren<Props>): React.ReactElement => {
  return (
    <Stack
      gap={4}
      padding={4}
      border="1px solid Blue"
      borderRadius="md"
      margin={"2"}
    >
      <Text as="h1" fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      {children}
    </Stack>
  )
}
