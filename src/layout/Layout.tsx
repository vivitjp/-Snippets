import {
  Body,
  HeaderTitle,
  Playground,
  Section,
  HeaderWrapper,
} from "./Layout.style";
import { zooMenu } from "../store/menuStore";
import type { MenuItemType } from "../store/menuStore";
import { PageBody } from "../pages/base/PageBody";
import { useSnippets } from "../library/hooks/useSnippets";
import { Menu } from "./Menu";
import { Top } from "./Top";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import { Sample } from "./Sample";
import { findMenuItemByPathname } from "../pages/base/items";

//------------------------------
// Main
//------------------------------
export const Layout = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const pathname = location.pathname;

  const normalizedPathname = useMemo(() => {
    const p = pathname;
    if (p.length > 1 && p.endsWith("/")) {
      return p.slice(0, -1);
    }
    return p;
  }, [pathname]);

  const isSamples = normalizedPathname.startsWith("/samples");
  const setMenu = zooMenu((state) => state.setMenu);

  /** URL を唯一のソースにする(初回レンダーから useSnippets に渡せる) */
  const snippetMenu = useMemo((): MenuItemType | undefined => {
    if (isSamples) {
      return undefined;
    }
    if (normalizedPathname === "/") {
      return undefined;
    }
    if (!normalizedPathname.startsWith("/snippets/")) {
      return undefined;
    }
    return findMenuItemByPathname(normalizedPathname);
  }, [normalizedPathname, isSamples]);

  const { Snippets, isPending } = useSnippets(snippetMenu);

  useLayoutEffect(() => {
    if (isSamples) {
      return;
    }
    if (normalizedPathname === "/") {
      setMenu(undefined);
      return;
    }
    if (normalizedPathname.startsWith("/snippets/")) {
      setMenu(snippetMenu ?? undefined);
    }
  }, [normalizedPathname, isSamples, setMenu, snippetMenu]);

  useEffect(() => {
    if (refBody?.current)
      refBody.current.scrollIntoView({ behavior: "smooth" });
  }, [refBody, isPending]);

  const style = {
    fontSize: "large",
    fontWeight: "bold",
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
    padding: "8px 16px",
    borderRadius: "4px",
    textDecoration: "none",
  };

  if (normalizedPathname === "/samples") {
    return <Navigate to="/samples/react-children" replace />;
  }

  return (
    <Section data-testid="layout" ref={refBody}>
      <HeaderWrapper>
        <HeaderTitle>Sunabar</HeaderTitle>
        <HStack>
          <Link to="/" style={style}>
            Snippets
          </Link>
          <Link to="/samples/react-children" style={style}>
            Samples
          </Link>
        </HStack>
      </HeaderWrapper>

      <>
        {isSamples ? (
          <div style={{ width: "100%", minHeight: "100%", height: "auto" }}>
            <Sample />
          </div>
        ) : (
          <Body data-testid="body">
            <Menu />
            <Playground data-testid="playground">
              <>
                {snippetMenu ? (
                  <PageBody
                    Snippets={Snippets}
                    isPending={isPending}
                    isInitialOpened={snippetMenu.idInitialOpened}
                    menuTitle={snippetMenu.name}
                  />
                ) : (
                  <Top />
                )}
              </>
            </Playground>
          </Body>
        )}
      </>
    </Section>
  );
};
