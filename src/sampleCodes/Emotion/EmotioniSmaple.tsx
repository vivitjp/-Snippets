import { Input, InputProps, VStack } from "@chakra-ui/react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { FC } from "react"

const EmotionStyled = styled(Input)`
  font-size: 20px;
  color: red;
`

const EmotionCSS = css`
  font-size: 20px;
  color: red;
`

export const EmotionSample: FC<InputProps> = (props) => (
  <VStack>
    <div>Hello</div>
    <EmotionStyled value="Hello" {...props} color={"blue !important"} />
    <Input
      value="Hello"
      css={EmotionCSS}
      {...props}
      color={"green !important"}
    />
  </VStack>
)
