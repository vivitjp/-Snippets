import { create } from "zustand"

export type OCType = {
  isOpened: boolean
  toggleOpenClose: () => void
}

export const useOCButton = create<OCType>()((set) => ({
  isOpened: false,
  toggleOpenClose: () => set((state) => ({ isOpened: !state.isOpened })),
}))
