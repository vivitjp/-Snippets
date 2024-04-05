import { keysDocker } from "./keys/Docker"
import { keysGit } from "./keys/Git"
import { keysJSTS } from "./keys/JSTS"
import { keysJest } from "./keys/Jest"
import { keysUnknown } from "./keys/Unknown"

const codeKeys = {
  JSTS: "JSTS",
  Docker: "Docker",
  Git: "Git",
  Jest: "Jest",
  Unknown: "Unknown",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const getKey = (codeKeyType: CodeKeyType) => {
  console.log("Syntax Highlight: ", codeKeyType)

  switch (codeKeyType) {
    case codeKeys.Docker:
      return keysDocker
    case codeKeys.Git:
      return keysGit
    case codeKeys.Jest:
      return keysJest
    case codeKeys.Unknown:
      return keysUnknown

    default:
      return keysJSTS
  }
}
