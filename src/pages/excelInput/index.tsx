import React from "react"
import { Box, Button, VStack, Text } from "@chakra-ui/react"
import { useForm, Path } from "react-hook-form"
import { ExcelInput } from "./ExcelInput"

type FormValues = {
  name: string
  address: string
  phone: string
  age: string
  gender: string
}

const ExcelInputPage: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: "山田 太郎",
      address: "東京都千代田区",
      phone: "090-0000-0000",
      age: "30",
      gender: "male",
    },
  })
  const { handleSubmit } = methods

  const onSubmit = (data: FormValues) => {
    console.log("ExcelInput submit:", data)
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Box p={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack align="start" gap={3}>
          <Box>
            <Text fontSize="md" mb={1}>
              Name
            </Text>
            <ExcelInput
              methods={methods}
              keyName={"name" as Path<FormValues>}
              width="360px"
            />
          </Box>

          <Box>
            <Text fontSize="md" mb={1}>
              Address
            </Text>
            <ExcelInput
              methods={methods}
              keyName={"address" as Path<FormValues>}
              width="480px"
            />
          </Box>

          <Box>
            <Text fontSize="md" mb={1}>
              Phone
            </Text>
            <ExcelInput
              methods={methods}
              keyName={"phone" as Path<FormValues>}
              width="240px"
            />
          </Box>

          <Box>
            <Text fontSize="md" mb={1}>
              Age
            </Text>
            <ExcelInput
              methods={methods}
              keyName={"age" as Path<FormValues>}
              width="120px"
            />
          </Box>

          <Box>
            <Text fontSize="md" mb={1}>
              Gender
            </Text>
            <ExcelInput
              methods={methods}
              keyName={"gender" as Path<FormValues>}
              width="120px"
            />
          </Box>

          <Button mt={2} type="submit" style={style}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default ExcelInputPage

const style = {
  backgroundColor: "#3182CE",
  padding: "10px",
  borderRadius: "8px",
  color: "white",
  border: "none",
  cursor: "pointer",
}
