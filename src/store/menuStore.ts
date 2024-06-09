import { create } from "zustand"

export type MenuItemType = {
  name: string
  fileName: string
  codeKeyTypes?: string[]
  encodeRequired?: boolean
  case_sensitive?: boolean
}

type Menu = {
  selectedMenu: MenuItemType | undefined
  subDir: string | undefined
  setMenu: (menu: MenuItemType) => void
}
export const zooMenu = create<Menu>()((set) => ({
  selectedMenu: undefined,
  subDir: undefined,
  setMenu: (selectedMenu) => set({ selectedMenu }),
}))
