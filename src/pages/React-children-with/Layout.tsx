import { Stack, Text } from "@chakra-ui/react"
import React from "react"

export const Layout = (
  props: React.PropsWithChildren<unknown>,
): React.ReactElement => {
  return (
    <Stack
      gap={4}
      padding={4}
      border="1px solid Red"
      borderRadius="md"
      margin={"2"}
    >
      <Text as="h1" fontSize="xl" fontWeight="bold">
        User List
      </Text>
      {props.children}
    </Stack>
  )
}

Layout.with = (Component: React.ComponentType) => {
  return () => (
    <Layout>
      <Component />
    </Layout>
  )
}
