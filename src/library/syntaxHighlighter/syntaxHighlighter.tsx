import styled from "styled-components"
import { getMergedKeys } from "./getKey"

export type SyntaxHighlight = {
  code: string
  codeKeyTypes?: string[]
  encodeRequired?: boolean
  case_sensitive?: boolean
}

export const syntaxHighlight = ({
  code,
  codeKeyTypes,
  encodeRequired = true,
  case_sensitive = true,
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
          if (!key) return
          const re = new RegExp(`\\b${key}\\b`, case_sense)
          result = result.replaceAll(
            re,
            `<span style="color:${color}">${switcher(key)}</span>`
          )
        })
      })
    }

    if (result.trim()) {
      rebuilt.push(
        <Pre key={idx} dangerouslySetInnerHTML={{ __html: result }} />
      )
    } else {
      rebuilt.push(<Pre key={idx}>&nbsp;</Pre>)
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
    default:
      return key
  }

  //   U+0073
  // &#x0073
}

const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g
const HTML_REPLACEMENTS: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
}
function replaceUnsafeChar(ch: string): string {
  return HTML_REPLACEMENTS[ch]
}

function escapeHtml(str: string): string {
  return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
}

const Pre = styled.pre`
  background-color: #F9F9F9
`
