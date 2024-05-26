import { create } from "zustand"

export type OCType = {
  isOpened: boolean
  toggleClose: () => void
  toggleOpenClose: () => void
}

export const useOCButton = create<OCType>()((set) => ({
  isOpened: false,
  toggleClose: () => set(() => ({ isOpened: false })),
  toggleOpenClose: () => set((state) => ({ isOpened: !state.isOpened })),
}))
