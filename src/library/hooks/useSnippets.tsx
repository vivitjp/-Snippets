import { useCallback, useEffect, useState } from "react"
import { Options, Snippets } from "../../types/type"
import { copyToClipboard } from "../utilities/copyToClipboard"
import { makeSnippets } from "../utilities/makeSnippets"
import { Column, Row } from "../../common/styleDiv"
import { Button } from "../../common/styleInput"
import { syntaxHighlight } from "../syntaxHighlighter/syntaxHighlighter"
import { useSelect } from "./useSelect"
import { DivPrefix, DivTitle, SummaryWrapper } from "./components/DivTitle"
import { MenuItemType } from "../../store/menuStore"
import { DetailInside, Details } from "./components/Detail"
import { KeyDef } from "../syntaxHighlighter/getKey"

type SnippetsObject = {
  prefix: string
  scope?: string | undefined
  body: string[]
  options?: Options
  sample?: string
  style?: string
  codeKeyTypes?: KeyDef[]
}

export const useSnippets = (selectedMenu: MenuItemType | undefined) => {
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState<Snippets | string[] | undefined>()
  const [dataFormatted, setDataFormatted] = useState<JSX.Element[]>([])

  const { JSX: SnippetsStyleSelection, value } = useSelect({
    title: "形式",
    initValue: "",
    values: ["", "typescriptreact", "typescript", "python"],
  })

  useEffect(() => {
    // console.log("selectedMenu", selectedMenu)

    if (!selectedMenu?.fileName) {
      console.log("File Name", selectedMenu?.fileName)
      return
    }
    //Spinner Flag

    setIsPending(true)
    void (async () => {
      //ファイルからデータ読み込み
      const result = await makeSnippets({
        file: `snippets/${selectedMenu.fileName}.yml`,
        scope: value,
      })
      setData(result)
      if (!result) {
        console.log("File Data")
        return
      }

      //配列化
      const array = Object.entries(result ?? {}) as [string, SnippetsObject][]
      //Highlight
      const codeKeyTypes = selectedMenu?.codeKeyTypes
      //Highlightして JSX.Element[] に変換

      const formatted = array.map(([title, snippetsObject], index) => {
        const code = (
          !snippetsObject.body.at(-1)
            ? snippetsObject.body.splice(-1, 1)
            : snippetsObject.body
        )
          .map((n) => (!n ? " " : n))
          .join("\n")

        const highlighted = syntaxHighlight({
          code,
          codeKeyTypes,
          encodeRequired: selectedMenu.encodeRequired,
          case_sensitive: selectedMenu.case_sensitive,
        })

        return (
          <Column key={index}>
            <Details className={"detailClass"}>
              <SummaryWrapper>
                <DivTitle>■ {title}</DivTitle>
                <DivPrefix>{snippetsObject.prefix}</DivPrefix>
              </SummaryWrapper>
              <DetailInside colCount={snippetsObject.options?.COLS || 1}>
                {highlighted}
              </DetailInside>
              <>
                {snippetsObject.style && <style>{snippetsObject.style}</style>}
                {snippetsObject.sample && (
                  <Row
                    justifyContent="center"
                    alignItems="center"
                    marginTop="10px"
                    padding="10px"
                    gap="10px"
                    boxShadow="0px 0px 5px rgba(0, 0, 0, 0.1)"
                    dangerouslySetInnerHTML={{ __html: snippetsObject.sample }}
                  />
                )}
              </>
            </Details>
          </Column>
        )
      })
      setDataFormatted(formatted)
      setIsPending(false)
    })()
  }, [selectedMenu, value])

  const Snippets = () => {
    return <>{dataFormatted}</>
  }

  const [copied, setCopied] = useState<boolean>(false)
  const handleClickInputButton = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      await copyToClipboard(JSON.stringify(data, undefined, 2))
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
