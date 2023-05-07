import { Section } from "../../common/styleDiv"
import { useSnippets } from "../../library/hooks/useSnippets"

export const PageTypeScript = () => {
  const { JSX, Snippets } = useSnippets("TypeScript")
  return (
    <Section>
      <JSX />
      <Snippets />
    </Section>
  )
}
