import { menuItems } from "../pages/base/items"
import {
  Group,
  GroupBody,
  MenuGroupTitle,
  MenuItem,
  MenuNav,
} from "./Layout.style"
import { MenuItemType, zooMenu } from "../store/menuStore"

export const Menu = () => {
  const setMenu = zooMenu((state) => state.setMenu)

  const handleMenu = (menu: MenuItemType) => {
    setMenu(menu)
  }

  return (
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
                      onClick={
                        item.fileName ? () => handleMenu(item) : undefined
                      }
                      isPending={!item.fileName}
                    >
                      {names.length > 1 ? names[0] : item.name}
                      {/* names[0]
                        <MenuItemGroup>
                          <MenuItemGroupItems>{names[0]}</MenuItemGroupItems>
                          <MenuItemGroupItems>{names[1]}</MenuItemGroupItems>
                        </MenuItemGroup>
                      ) : (
                        item.name
                      )} */}
                    </MenuItem>
                  )
                })}
              </GroupBody>
            </Group>
          )
        })}
      </>
    </MenuNav>
  )
}
