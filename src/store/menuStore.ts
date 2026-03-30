import { create } from "zustand"

export type MenuItemType = {
  name: string
  fileName: string
  /** Snippets のルート。fileName がある項目では items.ts で明示する */
  to?: string
  codeKeyTypes?: string[]
  encodeRequired?: boolean
  case_sensitive?: boolean
  idInitialOpened?: boolean
}

type Menu = {
  selectedMenu: MenuItemType | undefined
  subDir: string | undefined
  setMenu: (menu: MenuItemType | undefined) => void
}

export const zooMenu = create<Menu>()((set) => ({
  selectedMenu: undefined,
  subDir: undefined,
  setMenu: (selectedMenu) => set({ selectedMenu }),
}))
