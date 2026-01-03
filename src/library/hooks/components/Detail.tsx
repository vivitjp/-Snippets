import { css } from "@emotion/react"
import styled from "@emotion/styled"


type DetailOptions = {
  noShadow?: boolean
}

export const Details = styled.details<DetailOptions>`
  font-size: 14px;
  font-family: "Courier Prime",  monospace;
  overflow: auto;
  white-space: pre;
  color: #666;
  padding: 10px;
  width: 100%;
  /* ${(props) => css`
    box-shadow: ${props.noShadow ? "none" : "2px 2px 4px #eee"};
  `} */
`

type Options = {
  colCount: number
  bgColor?: string
  padding?: string
}

export const DetailInside = styled.div<Options>`
  font-size: 14px;
  font-family: "Courier Prime",  monospace;
  overflow: auto;
  white-space: pre;
  color: #666;
  width: 100%;
  line-height: 1.2rem;
  
  ${(props) => css`
    padding: ${props.padding ?? "10px"};
    column-count: ${props.colCount ?? 1};
    background-color: ${props.bgColor ?? "#F9F9F9"}
  `}
`
