import { Link } from "react-router-dom"
import { menuItems, menuItemHref } from "../pages/base/items"
import {
  Group,
  GroupBody,
  MenuGroupTitle,
  MenuItem,
  MenuNav,
} from "./Layout.style"

export const Menu = () => {
  return (
    <MenuNav data-testid="menu">
      <>
        {menuItems.map((menu, index) => {
          return (
            <Group key={index}>
              <MenuGroupTitle data-testid="group-title">
                {menu.category}
              </MenuGroupTitle>
              <GroupBody>
                {menu.items.map((item) => {
                  const names = item.name.split(":")
                  const label = names.length > 1 ? names[0] : item.name
                  const href = menuItemHref(item)
                  return href ? (
                    <Link
                      key={item.name}
                      to={href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MenuItem>{label}</MenuItem>
                    </Link>
                  ) : (
                    <MenuItem key={item.name} isPending>
                      {label}
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
