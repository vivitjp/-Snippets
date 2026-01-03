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
import { useEffect, useRef, useState } from "react"
import { Link, } from "react-router-dom"
import { HStack } from "@chakra-ui/react"
import { Sample } from "./Sample"

//------------------------------
// Main
//------------------------------
export const Layout = () => {
  const refBody = useRef<HTMLDivElement>(null)

  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const { Snippets, isPending } =
    useSnippets(selectedMenu)

  const [isSnippets, setIsSnippets] = useState(true);

  useEffect(() => {
    if (refBody?.current) refBody.current.scrollIntoView({ behavior: "smooth" })
  }, [refBody, isPending])

  const style = {
    fontSize: "large",
    fontWeight: "bold",
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
    padding: "8px 16px",
    borderRadius: "4px",
    textDecoration: "none",
  }

  return (
    <Section data-testid="layout" ref={refBody}>
      <HeaderWrapper>
        <HeaderTitle>Sunabar Snippets</HeaderTitle>
        <HStack>
          <Link to="/" style={style} onClick={() => setIsSnippets(true)}>
            Snippets
          </Link>
          <Link to="/" style={style} onClick={() => setIsSnippets(false)}>
            Sample Codes
          </Link>
        </HStack>
      </HeaderWrapper>

      <>
        {isSnippets ? (
          <Body data-testid="body">
            <Menu />
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
        ) : (
          <div style={{ height: "100vh", width: "100vw" }}>
            <Sample />
          </div>
        )}
      </>
    </Section>
  )
}
