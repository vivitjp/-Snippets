import { keysCSS } from "./keys/CSS"
import { keysDocker } from "./keys/Docker"
import { keysGit } from "./keys/Git"
import { keysHTML } from "./keys/HTML"
import { keysJSTS } from "./keys/JSTS"
import { keysJest } from "./keys/Jest"
import { keysLinux } from "./keys/Linux"
import { keysMySql } from "./keys/MySql"
import { keysPackage } from "./keys/Package"
import { keysReact } from "./keys/React"
import { keysTS } from "./keys/TS"
import { keysCurl } from "./keys/curl"
import { KeyDef } from "./syntaxHighlighter"

export const codeKeys = {
  CSS: "CSS",
  HTML: "HTML",
  JSTS: "JSTS",
  TS: "TS",
  React: "React",
  Package: "Package",
  Docker: "Docker",
  Git: "Git",
  Jest: "Jest",
  Linux: "Linux",
  MySql: "MySql",
  Curl: "Curl",
  Unknown: "Unknown",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const KeyAndCodes: Record<CodeKeyType, KeyDef[]> = {
  CSS: keysCSS,
  HTML: keysHTML,
  JSTS: keysJSTS,
  TS: keysTS,
  React: keysReact,
  Package: keysPackage,
  Docker: keysDocker,
  Git: keysGit,
  Jest: keysJest,
  Linux: keysLinux,
  MySql: keysMySql,
  Curl: keysCurl,
  Unknown: [],
}

export const getKey = (codeKeyTypes: CodeKeyType[] | undefined) => {
  if (!codeKeyTypes?.length) return []

  let mergedKeys: KeyDef[] = []

  for (const codeKeyType of codeKeyTypes) {
    mergedKeys = [...mergedKeys, ...KeyAndCodes[codeKeyType]]
  }
  return mergedKeys
}
