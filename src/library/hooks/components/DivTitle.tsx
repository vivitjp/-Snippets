import styled, { css } from "styled-components"

export const DivTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

export const SummaryWrapper = styled.summary`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;
`

// export const CategoryWrapper = styled.h3`
//   width: 100%;
//   color: var(--main-color);
//   _before {
//       content: "■";
//       margin-right: 5px;
//     }
// `

export const CategoryWrapper = styled.div`
  ${() => css`
    width: 100%;
    padding-left: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    margin-bottom: -10px;
    color: #555;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid #999;
  `}
`

export const DivTitle = styled.div`
  font-size: 18px;
  color: #555;
  line-height: 2rem;
`

export const FoldTitle = styled.div`
  font-size: 12px;
  color: #777;
  line-height: 2rem;
`

export const DivPrefix = styled.div`
  font-size: 12px;
  margin-right: 10px;
  color: #777;
`
