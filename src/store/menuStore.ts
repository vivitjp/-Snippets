import { create } from "zustand"

export type MenuItemType = {
  name: string
  fileName: string
}

type Menu = {
  selectedMenu: MenuItemType | undefined
  setMenu: (menu: MenuItemType) => void
}
export const useMenu = create<Menu>()((set) => ({
  selectedMenu: undefined,
  setMenu: (selectedMenu) => set({ selectedMenu }),
}))

// const setMenu = useMenu(state => state.setMenu)
