import { CodeKeyType } from "../library/syntaxHighlighter/getKey"

//------------------
// 型
//------------------
export type Options = {
  COLS?: number
}

export type YAMLData = {
  KEY: string
  BODY: string
  EXPLAIN?: string
  OPTIONS?: Options
}

export type Snippets = {
  [x: string]: {
    prefix: string
    scope?: string
    body: string[]
    options?: Options
    codeKeyType?: CodeKeyType
  }
}
