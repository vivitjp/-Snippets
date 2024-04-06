import { keysCSS } from "./keys/CSS"
import { keysDocker } from "./keys/Docker"
import { keysGit } from "./keys/Git"
import { keysJSTS } from "./keys/JSTS"
import { keysJest } from "./keys/Jest"
import { keysLinux } from "./keys/Linux"
import { keysMySql } from "./keys/MySql"
import { keysUnknown } from "./keys/Unknown"

export const codeKeys = {
  CSS: "CSS",
  JSTS: "JSTS",
  Docker: "Docker",
  Git: "Git",
  Jest: "Jest",
  Linux: "Linux",
  MySql: "MySql",
  Unknown: "Unknown",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const getKey = (codeKeyType: CodeKeyType | undefined) => {
  console.log("Syntax Highlight: ", codeKeyType)

  if (!codeKeyType) return keysUnknown

  switch (codeKeyType) {
    case codeKeys.CSS:
      return keysCSS
    case codeKeys.JSTS:
      return keysJSTS
    case codeKeys.Docker:
      return keysDocker
    case codeKeys.Git:
      return keysGit
    case codeKeys.Jest:
      return keysJest
    case codeKeys.Linux:
      return keysLinux
    case codeKeys.MySql:
      return keysMySql
    default:
      return keysUnknown
  }
}
