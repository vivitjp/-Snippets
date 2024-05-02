export type KeyDef = {
  color: string
  keys: string[]
}

export type SyntaxHighlight = {
  code: string
  keyDefs: KeyDef[]
  encodeRequired?: boolean
  case_sensitive?: boolean
}

export const syntaxHighlight = ({
  code,
  keyDefs,
  encodeRequired = false,
  case_sensitive = true,
}: SyntaxHighlight) => {
  const escaped = encodeRequired ? escapeHtml(code) : code
  const rebuilt: JSX.Element[] = []
  const case_sense = case_sensitive ? "g" : "gi"

  escaped.split("\n").forEach((line, idx) => {
    let result = line

    //Keywords
    keyDefs.forEach(({ color, keys }) => {
      keys.forEach((key) => {
        if (!key) return
        const re = new RegExp(`\\b${key}\\b`, case_sense)
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
    } else {
      rebuilt.push(<pre key={idx}>&nbsp;</pre>)
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
  return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
}
