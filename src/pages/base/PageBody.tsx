import styled from "styled-components"
import { useMenu } from "../../store/menuStore"
import { useSnippets } from "../../library/hooks/useSnippets"
import { Row } from "../../common/styleDiv"

export const PageBody = () => {
  const selectedMenu = useMenu((state) => state.selectedMenu)
  const { SnippetsStyleSelection, Snippets, CopyButton } = useSnippets(
    selectedMenu?.fileName ?? ""
  )

  return (
    <Section data-testid="layout-section">
      <Title data-testid="layout-title">{selectedMenu?.name ?? "N/A"}</Title>
      <Section>
        <Row gap="20px" borderBottom="1px solid #aaa" padding="10px">
          {SnippetsStyleSelection}
          <CopyButton />
        </Row>
        <Snippets />
      </Section>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.2rem;
  padding-left: 1rem;
  height: 50px;
  font-size: 2rem;
  font-weight: 300;
  border-bottom: 1px solid var(--main-color);
  color: var(--main-color);
`
