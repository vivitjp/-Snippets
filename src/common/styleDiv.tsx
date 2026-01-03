import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { CSSProperties } from "react"

type AttrPosition = "position" | "top" | "bottom" | "right" | "left" | "zIndex"
type AttrFlex =
  | "display"
  | "flexDirection"
  | "justifyContent"
  | "alignItems"
  | "gap"
type AttrSize =
  | "width"
  | "minWidth"
  | "maxWidth"
  | "height"
  | "minHeight"
  | "maxHeight"
type AttrPadding =
  | "padding"
  | "paddingLeft"
  | "paddingRight"
  | "paddingBottom"
  | "paddingTop"
type AttrMargin =
  | "margin"
  | "marginLeft"
  | "marginRight"
  | "marginBottom"
  | "marginTop"
type AttrShadow = "boxShadow"
type AttrBorder =
  | "border"
  | "borderLeft"
  | "borderRight"
  | "borderBottom"
  | "borderTop"
  | "borderRadius"
type AttrColor = "color" | "backgroundColor"
type AttrFontText = "fontSize" | "fontFamily" | "lineHeight" | "verticalAlign"
type AttrFlow = "overflow"
type AttrMouseEvent = "cursor"

type Custom = {
  shadow?: string //boxShadowの色
  borderByColor?: string //border Color から border全体定義
  borderGray?: boolean //border set 1px solid #aaa
  bgc?: string //background color
  p?: number //padding size
  m?: number //margin size
}

// type Slide = {
//   closedWidth: string //閉まったsize
//   openedWidth: string //開いたsize
//   duration?: string //持続時間
//   delay?: string //遅延時間
//   easing?: //easing関数
//   | "ease"
//     | "ease-in-out"
//     | "ease-in"
//     | "ease-out"
//     | "linear"
//     | "step-start"
//     | "step-end"
// } & Pick<CSSProperties, AttrPosition>

type Div = Pick<
  CSSProperties,
  | AttrPosition
  | AttrFlex
  | AttrSize
  | AttrPadding
  | AttrMargin
  | AttrBorder
  | AttrShadow
  | AttrColor
  | AttrFontText
  | AttrFlow
  | AttrMouseEvent
> &
  Custom

export const Div = styled.div<Div>`
  ${(props) => css`
    //position
    ${props.position && `position: ${props.position}`};
    ${props.top && `top: ${props.top}`};
    ${props.right && `right: ${props.right}`};
    ${props.bottom && `bottom: ${props.bottom}`};
    ${props.left && `left: ${props.left}`};
    ${props.zIndex && `zIndex: ${props.zIndex}`};
    //flex
    ${props.display && `display: ${props.display}`};
    ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
    ${props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${props.alignItems && `align-items: ${props.alignItems}`};
    ${props.gap && `gap: ${props.gap}`};
    //size
    ${props.width && `width: ${props.width}`};
    ${props.minWidth && `min-width: ${props.minWidth}`};
    ${props.maxWidth && `max-width: ${props.maxWidth}`};
    ${props.height && `height: ${props.height}`};
    ${props.minHeight && `min-height: ${props.minHeight}`};
    ${props.maxHeight && `max-height: ${props.maxHeight}`};
    //padding
    ${props.padding && `padding: ${props.padding}`};
    ${props.paddingTop && `padding-top: ${props.paddingTop}`};
    ${props.paddingBottom && `padding-bottom: ${props.paddingBottom}`};
    ${props.paddingLeft && `padding-left: ${props.paddingLeft}`};
    ${props.paddingRight && `padding-right: ${props.paddingRight}`};
    //margin
    ${props.margin && `margin: ${props.margin}`};
    ${props.marginTop && `margin-top: ${props.marginTop}`};
    ${props.marginBottom && `margin-bottom: ${props.marginBottom}`};
    ${props.marginLeft && `margin-left: ${props.marginLeft}`};
    ${props.marginRight && `margin-right: ${props.marginRight}`};
    //shadow
    ${props.boxShadow && `box-shadow: ${props.boxShadow}`};
    //border
    ${props.border && `border: ${props.border}`};
    ${props.borderTop && `border-top: ${props.borderTop}`};
    ${props.borderBottom && `border-bottom: ${props.borderBottom}`};
    ${props.borderLeft && `border-left: ${props.borderLeft}`};
    ${props.borderRight && `border-right: ${props.borderRight}`};
    ${props.borderRadius && `border-radius: ${props.borderRadius}`};
    //overflow
    ${props.overflow && `overflow: ${props.overflow}`};
    //font
    font-size: ${props.fontSize ?? "inherit"};
    font-family: ${props.fontFamily ?? "inherit"};
    ${props.lineHeight && `lineHeight: ${props.lineHeight}`};
    ${props.verticalAlign && `verticalAlign: ${props.verticalAlign}`};

    //color
    color: ${props.color ?? "inherit"};
    ${props.backgroundColor && `background-color: ${props.backgroundColor}`};

    //Custom(他の属性を上書き)
    ${props.shadow && `box-shadow: 2px 2px ${props.shadow} #ddd`}; //Overwrite
    ${props.borderByColor && `border: 1px solid ${props.borderByColor}`};
    ${props.borderGray && `border: 1px solid #aaa`};
    ${props.p && `padding: ${props.p}px`};
    ${props.m && `margin: ${props.m}px`};
    ${props.bgc && `background-color: ${props.bgc}`};
    ${props.cursor && `cursor: ${props.cursor}`};
  `}
`

//以下使用不可
//${Object.entries(props).map(([key, value]) => key && `${key}:${value}`)}

export const Column = styled(Div)`
  ${(props) => css`
    display: flex;
    flex-direction: column;
    justify-content: ${props.justifyContent ?? "flex-start"};
    align-items: ${props.alignItems ?? "flex-start"};
  `}
`

export const Row = styled(Div)`
  ${({ justifyContent, alignItems }) => css`
    display: flex;
    flex-direction: row;
    justify-content: ${justifyContent ?? "flex-start"};
    align-items: ${alignItems ?? "flex-start"};
  `}
`

type Table = Pick<
  CSSProperties,
  AttrPadding | AttrMargin | AttrBorder | AttrShadow | AttrColor | AttrSize
> &
  Custom

export const Table = styled.table<Table>`
  ${(props) => css`
    width: ${props.width ?? "200px"};
    max-width: ${props.maxWidth ?? "100%"};
    border: 1px solid #ccc;
    border-collapse: collapse;
    table-layout: auto;
  `}
`

export const THead = styled.thead`
  border: 1px solid #ccc;
`

type TH = Pick<CSSProperties, AttrSize>
export const TH = styled.th<TH>`
  ${(props) => css`
    border: 1px solid #ccc;
    overflow-wrap : break-word;
    width: ${props.width ?? "auto"};
  `}
`

export const TBody = styled.tbody`
  border: 1px solid #ccc;
`

export const TR = styled.tr`
  border: 1px solid #ccc;
`
export const TD = styled.td`
  ${(props) => css`
    border: 1px solid #ccc;
    text-align: ${props.align ?? "center"};
    padding: 3px;
    overflow-wrap : break-word;
    white-space: normal;
  `}
`
