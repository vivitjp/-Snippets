import { useCallback, useEffect, useState } from "react"
import { Snippets } from "../../types/type"
import { copyToClipboard } from "../utilities/copyToClipboard"
import { makeSnippets } from "../utilities/makeSnippets"
import { Column } from "../../common/styleDiv"
import { Button } from "../../common/styleInput"
import { syntaxHighlight } from "../syntaxHighlighter/syntaxHighlighter"
import { useSelect } from "./useSelect"
import styled from "styled-components"

type SnippetsObject = {
  prefix: string
  scope?: string | undefined
  body: string[]
}

export const useSnippets = (fileName: string) => {
  const [data, setData] = useState<Snippets | string[] | undefined>()

  const { JSX: SnippetsStyleSelection, value } = useSelect({
    title: "形式",
    initValue: "",
    values: ["", "typescriptreact", "typescript"],
  })

  useEffect(() => {
    if (!fileName) return
    makeSnippets({
      file: `snippets/${fileName}.yml`,
      scope: value,
    }).then((data) => {
      setData(data)
    })
  }, [fileName, value])

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
          const result = syntaxHighlight({ code })

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

const DivTitle = styled.div`
  font-size: 18px;
  overflow: auto;
  color: var(--main-color);
`

const DivBody = styled.div`
  font-size: 14px;
  font-family: monospace;
  overflow: auto;
  white-space: pre;
  color: #555;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
`
