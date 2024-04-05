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
        codeKeyType: "JSTS",
      },
      {
        name: "TypeScript(ts)",
        fileName: "JavaScript/TypeScript",
        codeKeyType: "JSTS",
      },
      {
        name: "非同期(js)",
        fileName: "JavaScript/JavaScriptAsync",
        codeKeyType: "JSTS",
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        name: "React(qw)",
        fileName: "React/React",
        codeKeyType: "JSTS",
      },
      {
        name: "Component(qw)",
        fileName: "React/ReactComponent",
        codeKeyType: "JSTS",
      },
      {
        name: "Routing(qw)",
        fileName: "React/ReactRouting",
        codeKeyType: "JSTS",
      },
    ],
  },
  {
    category: "React Packages",
    items: [
      {
        name: "Fetch/State(pk)",
        fileName: "ReactPackage/ReactFetchState",
        codeKeyType: "JSTS",
      },
      {
        name: "ReactHookForm(pk)",
        fileName: "ReactPackage/ReactHookForm",
        codeKeyType: "JSTS",
      },
      {
        name: "Storybook(v6)(pk)",
        fileName: "ReactPackage/Storybook",
        codeKeyType: "JSTS",
      },
      {
        name: "StyledComponent(pk)",
        fileName: "ReactPackage/StyledCompo",
        codeKeyType: "JSTS",
      },
      {
        name: "zustand(pk)",
        fileName: "ReactPackage/zustand",
        codeKeyType: "JSTS",
      },
    ],
  },
  {
    category: "OS & Docker",
    items: [
      {
        name: "docker(docker)",
        fileName: "OS/Docker",
        codeKeyType: "Docker",
      },
      {
        name: "Linux(linux)",
        fileName: "OS/LinuxCommand",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "mySQL(mysql)",
        fileName: "database/mySql",
      },
    ],
  },
  {
    category: "Project管理",
    items: [
      {
        name: "Git",
        fileName: "Project/Git",
        codeKeyType: "Git",
      },
      {
        name: "Lint(lint)",
        fileName: "Project/Lint",
      },
    ],
  },
  {
    category: "テスト",
    items: [
      {
        name: "jest",
        fileName: "Test/Jest",
        codeKeyType: "Jest",
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
        name: "Windows(win)",
        fileName: "WebAPI/windows",
      },
    ],
  },
]
