import styled from "styled-components"
import { Div, Row } from "../common/styleDiv"
import { menuItems } from "../pages/base/items"
import { zooMenu, MenuItemType } from "../store/menuStore"
import { MenuItem, GroupRow } from "./Layout.style"

export const Top = () => {
  const setMenu = zooMenu((state) => state.setMenu)

  const handleMenu = (menu: MenuItemType) => {
    setMenu(menu)
  }

  return (
    <>
      {menuItems.map((menu, index) => {
        return (
          <GroupRow key={index}>
            <Title width="20%">{menu.category}</Title>
            <Row width="79%" justifyContent="flex-start" gap="5px">
              {menu.items.map((item) => {
                const names = item.name.split(":")
                return (
                  <Item
                    key={item.name}
                    onClick={item.fileName ? () => handleMenu(item) : undefined}
                    isPending={!!item.fileName}
                  >
                    {names.length > 1 ? names[0] : item.name}
                  </Item>
                )
              })}
            </Row>
          </GroupRow>
        )
      })}
    </>
  )
}

const Title = styled(Div)`
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
`

const Item = styled(MenuItem)`
  width: unset;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
`
