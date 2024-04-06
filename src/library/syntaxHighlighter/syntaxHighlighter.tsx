export type KeyDef = {
  color: string
  keys: string[]
}

export type SyntaxHighlight = {
  code: string
  keyDefs: KeyDef[]
  html_encode?: boolean
}

export const syntaxHighlight = ({
  code,
  keyDefs,
  html_encode = true,
}: SyntaxHighlight) => {
  const escaped = escapeHtml(code, html_encode) ?? ""

  const rebuilt: JSX.Element[] = []

  escaped.split("\n").forEach((line, idx) => {
    let result = line

    //Keywords
    keyDefs.forEach(({ color, keys }) => {
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

function escapeHtml(str: string, html_encode: boolean): string {
  if (html_encode) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
  }
  return str
}
