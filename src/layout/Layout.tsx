import {
  Body,
  HeaderTitle,
  HeaderOptions,
  Playground,
  Section,
  HeaderWrapper,
} from "./Layout.style"
import { zooMenu } from "../store/menuStore"
import { PageBody } from "../pages/base/PageBody"
import { useSnippets } from "../library/hooks/useSnippets"
import { Menu } from "./Menu"

//------------------------------
// Main
//------------------------------
export const Layout = () => {
  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const { SnippetsStyleSelection, Snippets, isPending, CopyButton } =
    useSnippets(selectedMenu)

  return (
    <Section data-testid="layout">
      <HeaderWrapper>
        <HeaderTitle>Sunabar Snippets</HeaderTitle>
        <HeaderOptions>
          {SnippetsStyleSelection}
          <CopyButton />
        </HeaderOptions>
      </HeaderWrapper>

      <Body data-testid="body">
        <Menu />
        <Playground data-testid="playground">
          <PageBody Snippets={Snippets} isPending={isPending} />
        </Playground>
      </Body>
    </Section>
  )
}
