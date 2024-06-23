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
  SAMPLE?: string
  STYLE?: string
  FOLD?: string
}

export type KeyDef = {
  [index: string]: string[]
}

export type SnippetsObject = {
  prefix: string
  scope?: string | undefined
  body: string[]
  options?: Options
  sample?: string
  style?: string
  fold?: string[]
  codeKeyTypes?: KeyDef[]
}

export type Snippets = {
  [x: string]: SnippetsObject
}
