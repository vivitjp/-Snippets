import { KeyDef } from "../syntaxHighlighter"

export const keysReact: KeyDef[] = [
  // ■ ReactのMainキーワード
  {
    color: "Crimson",
    keys: [
      "React",
      "children",
      "lazy",
      "useState",
      "useEffect",
      "useCallback",
      "useReducer",
      "useContext",
      "createContext",
      "useRef",
      "memo",
      "zustand",
      "useId",
      "forwardRef",
      "Suspense",
    ],
  },
  // ■ ReactのSubメソッド
  {
    color: "DodgerBlue",
    keys: [
      "ComponentProps",
      "ComponentPropsWithRef",
      "ComponentPropsWithoutRef",
      "FormEvent",
      "MouseEvent",
      "ChangeEvent",
      "current",
      "ref",
      "payload",
      "dispatch",
      "Provider",
      "FC",
    ],
  },
  // ■ Reactの型
  {
    color: "Goldenrod",
    keys: [
      "HTMLButtonElement",
      "HTMLInputElement",
      "HTMLSelectElement",
      "HTMLFormElement",
      "HTMLXXXXElement",
      "State",
      "Action",
      "ReactNode",
    ],
  },
]
