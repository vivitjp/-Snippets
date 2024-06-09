import styled, { css } from "styled-components"

export const Details = styled.details`
  font-size: 14px;
  font-family: "Courier Prime",  monospace;
  overflow: auto;
  white-space: pre;
  color: #666;
  padding: 10px;
  width: 100%;
  box-shadow: 2px 2px 4px #eee;
`

type Options = {
  colCount: number
}

export const DetailInside = styled.div<Options>`
  font-size: 14px;
  font-family: "Courier Prime",  monospace;
  overflow: auto;
  white-space: pre;
  color: #666;
  padding: 10px;
  width: 100%;
  line-height: 1.2rem;
  background-color:  #F9F9F9;

  ${(props) => css`
    column-count: ${props.colCount ?? 1};
  `}
`
