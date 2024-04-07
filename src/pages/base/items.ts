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
        name: "HTML",
        fileName: "html/HTML",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS],
      },
      {
        name: "CSS:bg,bdr,just,css",
        fileName: "html/CSS",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "CSS(レスポンシブ)",
        fileName: "",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "CSSColor:color",
        fileName: "html/CSSColor",
        html_encode: false,
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "JavaScript:js",
        fileName: "JavaScript/JavaScript",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "TypeScript:ts",
        fileName: "JavaScript/TypeScript",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "TypeScript(Util):ts",
        fileName: "JavaScript/TypeScriptUtilities",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.TS],
      },
      {
        name: "非同期:js",
        fileName: "JavaScript/JavaScriptAsync",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "Dom",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        name: "React:qw",
        fileName: "React/React",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
      {
        name: "Component:qw",
        fileName: "React/ReactComponent",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
      {
        name: "Routing:qw",
        fileName: "React/ReactRouting",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
    ],
  },
  {
    category: "React Packages",
    items: [
      {
        name: "Fetch/State:pk",
        fileName: "ReactPackage/ReactFetchState",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "ReactHookForm:pk",
        fileName: "ReactPackage/ReactHookForm",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "Storybook(v6):pk",
        fileName: "ReactPackage/Storybook",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "StyledComponent:pk",
        fileName: "ReactPackage/StyledCompo",
        codeKeyTypes: [
          codeKeys.CSS,
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "zustand:pk",
        fileName: "ReactPackage/zustand",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
    ],
  },

  {
    category: "React Framework",
    items: [
      {
        name: "Nextjs",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "Nestjs",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "TypeORM",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "クラウド",
    items: [
      {
        name: "AWSサービス",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "他言語",
    items: [
      {
        name: "Python",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "OS & Docker",
    items: [
      {
        name: "docker",
        fileName: "OS/Docker",
        codeKeyTypes: [codeKeys.Docker],
      },
      {
        name: "dockerCompose",
        fileName: "",
        codeKeyTypes: [codeKeys.Docker],
      },
      {
        name: "Linux",
        fileName: "OS/LinuxCommand",
        codeKeyTypes: [codeKeys.Linux],
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "mySQL",
        fileName: "database/mySql",
        codeKeyTypes: [codeKeys.MySql],
        case_sensitive: false,
      },
      {
        name: "PostgreSQL",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "MongoDB",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "Project管理",
    items: [
      {
        name: "Git",
        fileName: "Project/Git",
        codeKeyTypes: [codeKeys.Git],
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
        codeKeyTypes: [codeKeys.Jest],
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
        name: "window:win",
        fileName: "WebAPI/window",
      },
      {
        name: "LocalStorage",
        fileName: "",
      },
      {
        name: "IndexedDB",
        fileName: "",
      },
    ],
  },
  {
    category: "Network",
    items: [
      {
        name: "HTTPレスポンス",
        fileName: "network/http_response",
      },
      {
        name: "Curl",
        fileName: "network/curl",
        codeKeyTypes: [codeKeys.Curl],
      },
      {
        name: "Cookie",
        fileName: "",
      },
    ],
  },
]
