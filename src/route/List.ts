import { Home } from "../pages/Home"
import { PageTypeScript } from "../pages/snippets/TypeScript"

type MenuGroup = { [key: string]: Menu[] }

type FCCompo = React.FunctionComponent<object>
type FixedElement = () => JSX.Element

export type Menu = {
  name: string
  path: string
  element: FCCompo | FixedElement
}

export const menuGroup: MenuGroup = {
  Home: [{ name: "Home", path: "/", element: Home }],
  スニペット: [
    {
      name: "TypeScript",
      path: "/TypeScript",
      element: PageTypeScript,
    },
  ],
}
