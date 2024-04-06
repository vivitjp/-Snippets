import { codeKeys } from "../../library/syntaxHighlighter/getKey"
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
        name: "CSS:bg,bdr,just,css",
        fileName: "html/CSS",
        codeKeyType: codeKeys.CSS,
      },
      {
        name: "CSSColor:color",
        fileName: "html/CSSColor",
        html_encode: false,
      },
      {
        name: "HTML",
        fileName: "html/HTML",
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "JavaScript:js",
        fileName: "JavaScript/JavaScript",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "TypeScript:ts",
        fileName: "JavaScript/TypeScript",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "非同期:js",
        fileName: "JavaScript/JavaScriptAsync",
        codeKeyType: codeKeys.JSTS,
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        name: "React:qw",
        fileName: "React/React",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "Component:qw",
        fileName: "React/ReactComponent",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "Routing:qw",
        fileName: "React/ReactRouting",
        codeKeyType: codeKeys.JSTS,
      },
    ],
  },
  {
    category: "React Packages",
    items: [
      {
        name: "Fetch/State:pk",
        fileName: "ReactPackage/ReactFetchState",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "ReactHookForm:pk",
        fileName: "ReactPackage/ReactHookForm",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "Storybook(v6):pk",
        fileName: "ReactPackage/Storybook",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "StyledComponent:pk",
        fileName: "ReactPackage/StyledCompo",
        codeKeyType: codeKeys.JSTS,
      },
      {
        name: "zustand:pk",
        fileName: "ReactPackage/zustand",
        codeKeyType: codeKeys.JSTS,
      },
    ],
  },
  {
    category: "OS & Docker",
    items: [
      {
        name: "docker",
        fileName: "OS/Docker",
        codeKeyType: codeKeys.Docker,
      },
      {
        name: "Linux",
        fileName: "OS/LinuxCommand",
        codeKeyType: codeKeys.Linux,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "mySQL",
        fileName: "database/mySql",
        codeKeyType: codeKeys.MySql,
      },
    ],
  },
  {
    category: "Project管理",
    items: [
      {
        name: "Git",
        fileName: "Project/Git",
        codeKeyType: codeKeys.Git,
      },
      {
        name: "Lint",
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
        codeKeyType: codeKeys.Jest,
      },
    ],
  },
  {
    category: "WebAPI",
    items: [
      {
        name: "SVG",
        fileName: "WebAPI/SVG",
      },
      {
        name: "Windows:win",
        fileName: "WebAPI/windows",
      },
    ],
  },
]
