import { create } from "zustand"
import { CodeKeyType } from "../library/syntaxHighlighter/getKey"

export type MenuItemType = {
  name: string
  fileName: string
  codeKeyType?: CodeKeyType
}

type Menu = {
  selectedMenu: MenuItemType | undefined
  subDir: string | undefined
  setMenu: (menu: MenuItemType) => void
}
export const useMenu = create<Menu>()((set) => ({
  selectedMenu: undefined,
  subDir: undefined,
  setMenu: (selectedMenu) => set({ selectedMenu }),
}))

// const setMenu = useMenu(state => state.setMenu)
