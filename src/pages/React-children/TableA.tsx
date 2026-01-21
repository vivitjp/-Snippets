import { Box, Stack } from "@chakra-ui/react"

export type Data = {
  name: string
  age: number
}

export const TableA = ({ data }: { data: Data[] }) => {
  return (
    <Stack
      flexDirection={"column"}
      border="1px solid black"
      padding={2}
      borderRadius="md"
    >
      {data.map((d) => (
        <Stack
          flexDirection={"row"}
          key={d.name}
          gap={4}
          border={"1px solid gray"}
          padding={1}
          borderRadius="md"
        >
          <Box minWidth="100px">{d.name}</Box>
          <Box>{d.age}</Box>
        </Stack>
      ))}
    </Stack>
  )
}
