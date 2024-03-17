import { useCallback, useEffect, useState } from "react"
import { Snippets } from "../../types/type"
import { copyToClipboard } from "../utilities/copyToClipboard"
import { makeSnippets } from "../utilities/makeSnippets"
import { Column } from "../../common/styleDiv"
import { Button } from "../../common/styleInput"
import {
  CodeKeyType,
  syntaxHighlight,
} from "../syntaxHighlighter/syntaxHighlighter"
import { useSelect } from "./useSelect"
import { DivTitle } from "./components/DivTitle"
import { DivBody } from "./components/DivBody"
import { MenuItemType } from "../../store/menuStore"

type SnippetsObject = {
  prefix: string
  scope?: string | undefined
  body: string[]
  codeKeyType?: CodeKeyType
}

export const useSnippets = (choice: MenuItemType | undefined) => {
  const [data, setData] = useState<Snippets | string[] | undefined>()

  const { JSX: SnippetsStyleSelection, value } = useSelect({
    title: "形式",
    initValue: "",
    values: ["", "typescriptreact", "typescript"],
  })

  useEffect(() => {
    if (!choice?.fileName) return
    makeSnippets({
      file: `snippets/${choice.fileName}.yml`,
      scope: value,
      codeKeyType: choice.codeKeyType,
    }).then((data) => {
      setData(data)
    })
  }, [choice, value])

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

  const Snippets = () => {
    const array = Object.entries(data ?? {}) as unknown as [
      string,
      SnippetsObject
    ][]
    return (
      <>
        {array.map(([title, snippetsObject]) => {
          const code = snippetsObject.body.map((n) => (!n ? " " : n)).join("\n")
          const result = syntaxHighlight({
            code,
            codeKeyType: snippetsObject.codeKeyType,
          })
          return (
            <Column>
              <DivTitle>■ {title}</DivTitle>
              <DivBody>{result}</DivBody>
            </Column>
          )
        })}
      </>
    )
  }

  return { SnippetsStyleSelection, Snippets, CopyButton }
}
