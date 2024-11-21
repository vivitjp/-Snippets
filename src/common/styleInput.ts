import styled, { CSSProperties, css } from "styled-components"

export const Button = styled.button<CSSProperties>`
  ${(props) => css`
    width: ${props.width ?? "100px"};
    height: 40px;
    padding: 10px;
    border: none;
    border: 1px solid #aaa;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    &:hover {
      background-color: #eee;
    }
    box-shadow: 0 0 5px #ddd;
  `}
`
