import { create } from "zustand"

export type OCType = {
  isOpened: boolean
  toggleClose: () => void
  toggleOpen: () => void
  toggleOpenClose: () => void
}

export const useOCButton = create<OCType>()((set) => ({
  isOpened: false,
  toggleClose: () => set(() => ({ isOpened: false })),
  toggleOpen: () => set(() => ({ isOpened: true })),
  toggleOpenClose: () => set((state) => ({ isOpened: !state.isOpened })),
}))
