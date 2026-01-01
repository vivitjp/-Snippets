import styled, { css } from "styled-components"
import { getMergedKeys } from "./getKey"

export type SyntaxHighlight = {
  code: string
  codeKeyTypes?: string[]
  encodeRequired?: boolean
  case_sensitive?: boolean
  bgColor?: string
}

export const syntaxHighlight = ({
  code,
  codeKeyTypes,
  encodeRequired = true,
  case_sensitive = true,
  bgColor = "#F9F9F9",
}: SyntaxHighlight) => {
  const escaped = encodeRequired ? escapeHtml(code) : code
  const rebuilt: JSX.Element[] = []
  const case_sense = case_sensitive ? "g" : "gi"

  //  const pattern = /(<\/?[^>]+>)|([^<]+)/g

  const mergedCodeKeyTypes = getMergedKeys(codeKeyTypes)

  escaped.split("\n").forEach((line, idx) => {
    let result = line

    if (mergedCodeKeyTypes) {
      Object.entries(mergedCodeKeyTypes).forEach(([color, keys]) => {
        if (!keys.length) return

        keys.forEach((key) => {
          if (!key || ["eq", "lt", "gt"].includes(key)) {
            return // skip <> 系の文字
          }
          const re = new RegExp(`\\b${key}\\b`, case_sense)
          result = result.replaceAll(
            re,
            (match: string) =>
              `<span style="color:${color}">${switcher(match)}</span>`
          )
        })
      })
    }

    if (result.trim()) {
      const isSubTitle = result.indexOf("■") > -1
      rebuilt.push(
        <Pre
          key={idx}
          dangerouslySetInnerHTML={{ __html: result }}
          bgColor={isSubTitle ? "white" : bgColor}
          // fontSize={isSubTitle ? "1.05em" : undefined}
          // fontWeight={isSubTitle ? "bold" : undefined}
          subTitle={isSubTitle ? true : false}
        />
      )
    } else {
      rebuilt.push(
        <Pre key={idx} bgColor={bgColor}>
          &nbsp;
        </Pre>
      )
    }
  })
  return rebuilt
}

const switcher = (key: string) => {
  switch (key) {
    case "style":
      return "\u0073tyle"
    case "span":
      return "\u0073pan"
    case "class":
      return "\u0063lass"
    case "id":
      return "\u0069d"
    case "label":
      return "\u006cabel"
    default:
      return key
  }

  //   U+0073
  // &#x0073
}

const HTML_ESCAPE_REPLACE_RE = /[&<>'"]/g
const HTML_REPLACEMENTS: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}
function replaceUnsafeChar(ch: string): string {
  return HTML_REPLACEMENTS[ch]
}

function escapeHtml(str: string): string {
  return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
}

type Options = {
  bgColor?: string
  fontSize?: string
  fontWeight?: string
  subTitle?: boolean
}
const Pre = styled.pre<Options>`
  ${(props) => css`
    background-color: ${props.bgColor ?? "#F9F9F9"};
    font-weight: ${props.subTitle ? "bold" : "normal"};
    text-decoration: ${props.subTitle ? "subTitle" : "none"};
    border-bottom: ${props.subTitle ? "1px solid #ccc" : "none"};
    padding: ${props.subTitle ? "0.7em 0.5em 0 0.5em" : undefined};
    margin-left: ${props.subTitle ? "-0.7em" : undefined};
    margin-bottom: ${props.subTitle ? "0.2em" : undefined};
    width: ${props.subTitle ? "calc(100% + 1.4em)" : undefined};
  `}
`
