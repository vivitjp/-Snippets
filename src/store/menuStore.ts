import { create } from "zustand"
// import { KeyDef } from "../library/syntaxHighlighter/syntaxHighlighter"
// import { CodeKeyType } from "../library/syntaxHighlighter/getKey"

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
