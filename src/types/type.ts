//------------------
// 型
//------------------
export type YAMLData = {
  KEY: string
  BODY: string
  EXPLAIN?: string
}

export type Snippets = {
  [x: string]: {
    prefix: string
    scope?: string
    body: string[]
  }
}
