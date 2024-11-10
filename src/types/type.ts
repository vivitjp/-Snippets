//------------------
// 型

import { CSSProperties } from "react"

type TDAlign = "center" | "justify" | "left" | "right" | "char" | undefined

//------------------
export type Options = {
  COLS?: number
}

export type YAMLData = {
  KEY: string // Snippets Key
  //------------------------------------
  CATEGORY?: string // カテゴリタイトル
  //------------------------------------
  EXPLAIN?: string // Snippets タイトル
  BODY: string // Snippets 本体
  //------------------------------------
  OPTIONS?: Options // カラム数設定 {COLS:n}
  SAMPLE?: string // HTML
  STYLE?: string // CSS style
  FOLD?: string // 折りたたみ
  TABLE?: {
    // テーブル
    OPTION?: {
      WIDTH?: CSSProperties["width"]
      ALIGN?: TDAlign[]
      HAS_TITLE?: boolean // BODYの最初の行がタイトルかどうか
    }
    BODY: string
  }
}

export type KeyDef = {
  [index: string]: string[]
}

export type SnippetsObject = {
  prefix: string
  scope?: string | undefined
  category?: string
  body: string[]
  options?: Options
  sample?: string
  style?: string
  fold?: string[]
  table?: {
    options?: {
      width?: CSSProperties["width"]
      align?: TDAlign[]
      hasTitle?: boolean // BODYの最初の行がタイトルかどうか
    }
    body: string[]
  }
  codeKeyTypes?: KeyDef[]
}

export type Snippets = {
  [x: string]: SnippetsObject
}
