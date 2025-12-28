import {
  Body,
  HeaderTitle,
  Playground,
  Section,
  HeaderWrapper,
} from "./Layout.style"
import { zooMenu } from "../store/menuStore"
import { PageBody } from "../pages/base/PageBody"
import { useSnippets } from "../library/hooks/useSnippets"
import { Menu } from "./Menu"
import { Top } from "./Top"
import { useEffect, useRef } from "react"
// import SvgGraphSample from "../test/SvgGraphSample"

//------------------------------
// Main
//------------------------------
export const Layout = () => {
  const refBody = useRef<HTMLDivElement>(null)

  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const { Snippets, isPending } =
    useSnippets(selectedMenu)

  useEffect(() => {
    if (refBody?.current) refBody.current.scrollIntoView({ behavior: "smooth" })
  }, [refBody, isPending])

  return (
    <Section data-testid="layout" ref={refBody}>
      <HeaderWrapper>
        <HeaderTitle>Sunabar Snippets</HeaderTitle>
      </HeaderWrapper>

      <Body data-testid="body">
        <Menu />
        {/* <SvgGraphSample /> */}
        <Playground data-testid="playground">
          <>
            {selectedMenu ? (
              <PageBody
                Snippets={Snippets}
                isPending={isPending}
                isInitialOpened={selectedMenu.idInitialOpened}
              />
            ) : (
              <Top />
            )}
          </>
        </Playground>
      </Body>
    </Section>
  )
}
