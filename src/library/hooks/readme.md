# 構造体

```
export type YAMLData = {
  KEY: string                           // Snippets Key
  EXPLAIN?: string                      // Snippets タイトル
  BODY: string                          // Snippets 本体
```

## CATEGORY

```
CATEGORY?: string                     // カテゴリタイトル
```

#### サンプルコード

```
- ENTRY:
  CATEGORY: |
    コンポーネント: Form
```

## OPTIONS

```
  OPTIONS?: {                           // カラム数設定 {COLS:n}
    COLS?: number
  }
```

#### サンプルコード

```
- ENTRY:
  EXPLAIN: Version
  OPTIONS:
    COLS: 2
  BODY: |
    ■ ECMAScript 5.1 2009/12
    ■ ES2015(別名ES6) 2011/6
      Core
      Collection
```

## SAMPLE

```
  SAMPLE?: string                       // HTML
```

#### サンプルコード

```
if (SAMPLE) {
  if (SAMPLE === "BODY") {
    returnData[key].sample = BODY
  } else {
    returnData[key].sample = SAMPLE
  }
}

- ENTRY:
  EXPLAIN: テーブル
  SAMPLE: BODY
  BODY: |
    <style>
    table.sample_table {
      border-collapse: collapse;
      border: 1px solid #AAA;
    }
    </style>

    <table class="sample_table">
      <caption>TABLE CAPTION</caption>
      <thead>
        <th>TTL 1</th><th>TTL 2</th><th>TTL 3</th>
      </thead>
      <tbody>
        <tr><td>A</td><td>B</td><td>C</td></tr>
        ...
      </tbody>
```

## STYLE

```
  STYLE?: string                        // CSS style
```

未使用

## FOLD

```
  FOLD?: string                         // 折りたたみ
```

#### サンプルコード

```
- ENTRY:
  EXPLAIN: constructor-super
  BODY: |
    ■ 誤
    class A {
      constructor() {
        super();                                  // 継承なしのsuper()
      }
    }
    class A extends B {
      constructor() { }                           // throw a ReferenceError.
    }
  FOLD: |
    ■ 正
    class A {
      constructor() { }
    }
    class B extends C {
      constructor() {
        super();
      }
    }
```

## TABLE

```
  TABLE?: {                             // テーブル
    OPTION?: {
      WIDTH?: CSSProperties["width"]
      ALIGN?: TDAlign[]                 // "center" | "justify" | "left" | "right"
      HAS_TITLE?: boolean               // BODYの最初の行がタイトルかどうか
    }
    BODY: string
  }
```

#### サンプルコード

```
- ENTRY:
  EXPLAIN: Queriesの種類
  BODY: |
    ◯◯◯ByTestId
    ◯◯◯ByRole
  TABLE:
    OPTION:
      WIDTH: 50%
      HAS_TITLE: true
      ALIGN:
        - left
        - center
    BODY: |
      No	Match	1 Match	1+ Match	Await?	備考
      getBy	      throw	return	throw	No
      findBy	    throw	return	throw	Yes	非同期
      queryBy	    null	return	throw	No	NULL Check
```
