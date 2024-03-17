import { MenuItemType } from "../../store/menuStore"

type menuByCategories = {
  category: string
  items: MenuItemType[]
}

export const menuItems: menuByCategories[] = [
  {
    category: "Html/CSS",
    items: [
      {
        name: "CSS(bg,bdr,just,css)",
        fileName: "html/CSS",
      },
      {
        name: "CSSColor(color)",
        fileName: "html/CSSColor",
      },
      {
        name: "HTML(html)",
        fileName: "html/HTML",
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "JavaScript(js)",
        fileName: "JavaScript/JavaScript",
      },
      {
        name: "JavaScript(非同期)(js)",
        fileName: "JavaScript/JavaScriptAsync",
      },
      {
        name: "TypeScript(ts)",
        fileName: "JavaScript/TypeScript",
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        name: "React(qw)",
        fileName: "React/React",
      },
      {
        name: "React Component(qw)",
        fileName: "React/ReactComponent",
      },
      {
        name: "React Routing(qw)",
        fileName: "React/ReactRouting",
      },
    ],
  },
  {
    category: "React Packages",
    items: [
      {
        name: "Fetch/State(pk)",
        fileName: "ReactPackage/ReactFetchState",
      },
      {
        name: "ReactHookForm(pk)",
        fileName: "ReactPackage/ReactHookForm",
      },
      {
        name: "Storybook(v6)(pk)",
        fileName: "ReactPackage/Storybook",
      },
      {
        name: "StyledComponent(pk)",
        fileName: "ReactPackage/StyledCompo",
      },
      {
        name: "zustand(pk)",
        fileName: "ReactPackage/zustand",
      },
    ],
  },
  {
    category: "WebAPI",
    items: [
      {
        name: "SVG(svg)",
        fileName: "WebAPI/SVG",
      },
      {
        name: "windows(win)",
        fileName: "WebAPI/windows",
      },
    ],
  },
  {
    category: "Project管理",
    items: [
      {
        name: "docker(docker)",
        fileName: "Project/Docker",
        codeKeyType: "Docker",
      },
      {
        name: "Lint(lint)",
        fileName: "Project/Lint",
      },
    ],
  },
]
