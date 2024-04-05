import { CodeKeyType, defaultSnippetsStyle, getKey } from "./getKey"

export type KeyDef = {
  color: string
  keys: string[]
}

export type SyntaxHighlight = {
  code: string
  codeKeyType?: CodeKeyType | undefined
}

export const syntaxHighlight = ({
  code,
  codeKeyType = defaultSnippetsStyle,
}: SyntaxHighlight) => {
  const keyDef: KeyDef[] = getKey(codeKeyType)

  const escaped = escapeHtml(code) ?? ""

  const rebuilt: JSX.Element[] = []

  escaped.split("\n").forEach((line, idx) => {
    let result = line

    //Keywords
    keyDef.forEach(({ color, keys }) => {
      keys.forEach((key) => {
        if (!key) return
        const re = new RegExp(`\\b${key}\\b`, "ig")
        result = result.replaceAll(
          re,
          `<span class="syntax" style="color:${color}">${key}</span>`
        )
      })
    })
    if (result.trim()) {
      rebuilt.push(
        <pre key={idx} dangerouslySetInnerHTML={{ __html: result }} />
      )
    }
  })
  return rebuilt
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
  if (HTML_ESCAPE_REPLACE_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
  }
  return str
}
