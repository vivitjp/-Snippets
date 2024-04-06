import { useCallback, useEffect, useState } from "react"
import { Snippets } from "../../types/type"
import { copyToClipboard } from "../utilities/copyToClipboard"
import { makeSnippets } from "../utilities/makeSnippets"
import { Column } from "../../common/styleDiv"
import { Button } from "../../common/styleInput"
import { syntaxHighlight } from "../syntaxHighlighter/syntaxHighlighter"
import { useSelect } from "./useSelect"
import { DivPrefix, DivTitle, DivTitleWrapper } from "./components/DivTitle"
import { DivBody } from "./components/DivBody"
import { MenuItemType } from "../../store/menuStore"
import { CodeKeyType, getKey } from "../syntaxHighlighter/getKey"

type SnippetsObject = {
  prefix: string
  scope?: string | undefined
  body: string[]
  codeKeyType?: CodeKeyType
}

export type KeyDef = {
  color: string
  keys: string[]
}

export const useSnippets = (choice: MenuItemType | undefined) => {
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState<Snippets | string[] | undefined>()
  const [dataFormatted, setDataFormatted] = useState<JSX.Element[]>([])

  const { JSX: SnippetsStyleSelection, value } = useSelect({
    title: "形式",
    initValue: "",
    values: ["", "typescriptreact", "typescript"],
  })

  useEffect(() => {
    if (!choice?.fileName) return
    setIsPending(true)
    ;(async () => {
      //ファイルからデータ読み込み
      const result = await makeSnippets({
        file: `snippets/${choice.fileName}.yml`,
        scope: value,
      })
      setData(result)
      if (!result) return

      //配列化
      const array = Object.entries(result ?? {}) as [string, SnippetsObject][]
      //Highlight
      const keyDefs: KeyDef[] = getKey(choice?.codeKeyType)
      //Highlightして JSX.Element[] に変換

      const formatted = array.map(([title, snippetsObject], index) => {
        const code = snippetsObject.body.map((n) => (!n ? " " : n)).join("\n")

        const highlighted = syntaxHighlight({
          code,
          keyDefs,
          html_encode: choice.html_encode,
        })
        return (
          <Column key={index}>
            <DivTitleWrapper>
              <DivTitle>■ {title}</DivTitle>
              <DivPrefix>{snippetsObject.prefix}</DivPrefix>
            </DivTitleWrapper>
            <DivBody>{highlighted}</DivBody>
          </Column>
        )
      })
      setDataFormatted(formatted)
      setIsPending(false)
    })()
  }, [choice, value])

  const Snippets = () => {
    return <>{dataFormatted}</>
  }

  const [copied, setCopied] = useState<boolean>(false)
  const handleClickInputButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      copyToClipboard(JSON.stringify(data, undefined, 2))
      e.stopPropagation()

      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 500)
    },
    [data]
  )

  const CopyButton = () => {
    return (
      <Button onClick={handleClickInputButton} width="160px">
        {copied ? "Copied" : "Copy Snippets"}
      </Button>
    )
  }

  return { SnippetsStyleSelection, Snippets, CopyButton, isPending }
}
