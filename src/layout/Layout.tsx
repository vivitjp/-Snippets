import { menuItems } from "../pages/base/items"
import {
  Body,
  Group,
  GroupBody,
  MenuGroupTitle,
  HeaderTitle,
  HeaderOptions,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupItems,
  MenuNav,
  Playground,
  Section,
  HeaderWrapper,
} from "./Layout.style"
import { MenuItemType, zooMenu } from "../store/menuStore"
import { PageBody } from "../pages/base/PageBody"
import { useSnippets } from "../library/hooks/useSnippets"

//------------------------------
// Main
//------------------------------
export const Layout = () => {
  const setMenu = zooMenu((state) => state.setMenu)

  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const { SnippetsStyleSelection, Snippets, isPending, CopyButton } =
    useSnippets(selectedMenu)

  const handleMenu = (menu: MenuItemType) => {
    setMenu(menu)
  }

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
        <MenuNav data-testid="menu">
          <>
            {menuItems.map((menu, index) => {
              return (
                <Group open key={index}>
                  <MenuGroupTitle data-testid="group-title">
                    {menu.category}
                  </MenuGroupTitle>
                  <GroupBody>
                    {menu.items.map((item) => {
                      const names = item.name.split(":")
                      return (
                        <MenuItem
                          key={item.name}
                          onClick={() => handleMenu(item)}
                        >
                          {names.length > 1 ? (
                            <MenuItemGroup>
                              <MenuItemGroupItems>
                                {names[0]}
                              </MenuItemGroupItems>
                              <MenuItemGroupItems>
                                {names[1]}
                              </MenuItemGroupItems>
                            </MenuItemGroup>
                          ) : (
                            item.name
                          )}
                        </MenuItem>
                      )
                    })}
                  </GroupBody>
                </Group>
              )
            })}
          </>
        </MenuNav>
        <Playground data-testid="playground">
          <PageBody Snippets={Snippets} isPending={isPending} />
        </Playground>
      </Body>
    </Section>
  )
}
