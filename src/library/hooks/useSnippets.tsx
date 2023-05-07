import { useCallback, useEffect, useState } from "react"
import { Snippets } from "../../types/type"
import { copyToClipboard } from "../utilities/copyToClipboard"
import { makeSnippets } from "../utilities/makeSnippets"
import { DivPre, Row } from "../../common/styleDiv"
import { Button } from "../../common/styleInput"
import { SelectSet } from "../../component/SelectSet"
import { scopeOptions } from "../../constants/scopeOptions"

export const useSnippets = (fileName: string) => {
  const [selectedScope, setSelectedScope] = useState<string>("")
  const [data, setData] = useState<Snippets | string[] | undefined>()

  useEffect(() => {
    if (!fileName) return
    makeSnippets({
      file: `snippets/${fileName}.yml`,
      scope: selectedScope,
    }).then((data) => {
      setData(data)
    })
  }, [fileName, selectedScope])

  const handleClickInputButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      copyToClipboard(JSON.stringify(data, undefined, 2))
      e.stopPropagation()
    },
    [data]
  )

  const handleChangeScope = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedScope(e.currentTarget.value)
    },
    []
  )

  const JSX = () => {
    return (
      <Row gap="20px" borderBottom="1px solid #aaa" padding="5px">
        <SelectSet
          options={scopeOptions}
          onChange={handleChangeScope}
          widthEmpty={true}
        />
        <Button onClick={handleClickInputButton} width="160px">
          Copy Snippets
        </Button>
      </Row>
    )
  }

  const Snippets = () => {
    return (
      <Row>
        <DivPre>{JSON.stringify(data, undefined, 2)}</DivPre>
      </Row>
    )
  }

  return { JSX, Snippets }
}
