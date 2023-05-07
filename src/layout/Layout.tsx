import { menuItems } from "../pages/base/items"
import {
  Body,
  Group,
  GroupBody,
  GroupTitle,
  Header,
  MenuItem,
  MenuNav,
  Playground,
  Section,
} from "./Layout.style"
import { MenuItemType, useMenu } from "../store/menuStore"
import { PageBody } from "../pages/base/PageBody"

//------------------------------
// Main
//------------------------------
export const Layout = () => {
  const setMenu = useMenu((state) => state.setMenu)

  const handleMenu = (menu: MenuItemType) => {
    setMenu(menu)
  }

  return (
    <Section data-testid="layout">
      <Header>Sunabar Snippets</Header>
      <Body data-testid="body">
        <MenuNav data-testid="menu">
          <Group open>
            <GroupTitle data-testid="group-title">Snippets</GroupTitle>
            <>
              {!!menuItems.length && (
                <GroupBody>
                  {menuItems.map((menu) => (
                    <MenuItem key={menu.name} onClick={() => handleMenu(menu)}>
                      {menu.name}
                    </MenuItem>
                  ))}
                </GroupBody>
              )}
            </>
          </Group>
        </MenuNav>
        <Playground data-testid="playground">
          <PageBody />
        </Playground>
      </Body>
    </Section>
  )
}
