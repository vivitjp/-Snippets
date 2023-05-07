import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { Files } from "./config"
import { Snippets } from "../../types/type"
import { SelectSet } from "../../component/SelectSet"
import { makeSnippets } from "../../library/utilities/makeSnippets"
import { copyToClipboard } from "../../library/utilities/copyToClipboard"
import { scopeOptions } from "../../constants/scopeOptions"

//------------------
// Const
//------------------
const fileOptions = Object.entries(Files).map(([key, value]) => ({
  title: key,
  value,
}))

export const YamlCompo = () => {
  const [selectedFile, setSelectedFile] = useState<string>(
    Object.values(Files)[0]
  )
  const [selectedScope, setSelectedScope] = useState<string>("")
  const [data, setData] = useState<Snippets | string[] | undefined>()

  useEffect(() => {
    if (!selectedFile) return
    makeSnippets({
      file: `snippets/${selectedFile}.yml`,
      scope: selectedScope,
    }).then((data) => {
      setData(data)
    })
  }, [selectedFile, selectedScope])

  const handleClickInputButton = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      copyToClipboard(JSON.stringify(data, undefined, 2))
      e.stopPropagation()
    },
    [data]
  )

  const handleChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.currentTarget.value)

      setSelectedFile(e.currentTarget.value)
    },
    []
  )

  const handleChangeScope = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedScope(e.currentTarget.value)
    },
    []
  )

  return (
    <Section>
      <Row>
        <SelectSet options={fileOptions} onChange={handleChangeFile} />
        <SelectSet
          options={scopeOptions}
          onChange={handleChangeScope}
          widthEmpty={true}
        />
        <Input type="button" onClick={handleClickInputButton} value="Copy" />
      </Row>
      <Row>
        <Pre>{JSON.stringify(data, undefined, 2)}</Pre>
      </Row>
    </Section>
  )
}

//-------------------
// CSS Components
//-------------------
const Pre = styled.pre`
  padding: 0.4rem;
  font-size: 1rem;
  font-family: monospace; /* sans-serif, monospace */
  width: 100%;
  color: #555;
  overflow-x: scroll;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; //stretch;
  width: 100%;
  padding: 0.2rem;
  border-bottom: 1px solid #aaa;
  gap: 0.4rem;
`
const Input = styled.input`
  padding: 0.2rem;
  width: 160px;
  height: 30px;
  color: #555;
  border: 1px solid #aaa;
  border-radius: 3px;

  ::placeholder {
    color: grey;
  }
`
