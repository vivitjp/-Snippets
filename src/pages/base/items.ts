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
        encodeRequired: true,
      },
      {
        name: "CSS:bg,bdr,just,css",
        fileName: "html/CSS",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "⛔CSS(レスポンシブ)",
        fileName: "",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "CSSColor:color",
        fileName: "html/CSSColor",
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
        encodeRequired: true,
      },
      {
        name: "TS Tips:ts",
        fileName: "JavaScript/TypeScriptTips",
        codeKeyTypes: [codeKeys.JSTS],
        encodeRequired: true,
      },
      {
        name: "TS Util:ts",
        fileName: "JavaScript/TypeScriptUtilities",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.TS],
        encodeRequired: true,
      },
      {
        name: "非同期:js",
        fileName: "JavaScript/JavaScriptAsync",
        codeKeyTypes: [codeKeys.JSTS],
        encodeRequired: true,
      },
      {
        name: "⛔Dom",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "正規表現:reg",
        fileName: "JavaScript/RegularExpression",
        codeKeyTypes: [codeKeys.RegExp],
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
        encodeRequired: true,
      },
      {
        name: "Component:qw",
        fileName: "React/ReactComponent",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
        encodeRequired: true,
      },
      {
        name: "Routing:qw",
        fileName: "React/ReactRouting",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
        encodeRequired: true,
      },
    ],
  },
  {
    category: "React:G-State",
    items: [
      {
        name: "zustand:pk",
        fileName: "ReactPackage/zustand",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
        encodeRequired: true,
      },
      {
        name: "Jotai:pk",
        fileName: "ReactPackage/Jotai",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.Jotai],
        encodeRequired: true,
      },
      {
        name: "Recoil:pk",
        fileName: "ReactPackage/Recoil",
        codeKeyTypes: [codeKeys.Package],
        encodeRequired: true,
      },
    ],
  },
  {
    category: "React:Query",
    items: [
      {
        name: "⛔TypeORM",
        fileName: "",
        codeKeyTypes: [],
      },
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
    ],
  },
  {
    category: "React:CSS",
    items: [
      {
        name: "StyledCompo:pk",
        fileName: "ReactPackage/StyledCompo",
        codeKeyTypes: [
          codeKeys.CSS,
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
        encodeRequired: true,
      },
      {
        name: "Emotion:pk",
        fileName: "ReactPackage/Emotion",
        codeKeyTypes: [
          codeKeys.CSS,
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
        encodeRequired: true,
      },
    ],
  },

  {
    category: "React:Other",
    items: [
      {
        name: "ReactHookForm:pk",
        fileName: "ReactPackage/ReactHookForm",
        codeKeyTypes: [codeKeys.keysPackageRHF],
        encodeRequired: true,
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
    ],
  },

  {
    category: "Framework",
    items: [
      {
        name: "⛔Node",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Nextjs",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Nestjs",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "クラウド",
    items: [
      {
        name: "⛔AWS",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Python",
    items: [
      {
        name: "Python:py",
        fileName: "Python/Python",
        codeKeyTypes: [codeKeys.Python],
      },
      {
        name: "Lib List:py",
        fileName: "Python/PythonLibs",
        codeKeyTypes: [],
      },
      {
        name: "Lib Sample:py",
        fileName: "Python/PythonLibSamples",
        codeKeyTypes: [codeKeys.Python],
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
        case_sensitive: false,
      },
      {
        name: "⛔dockerCompose",
        fileName: "",
        codeKeyTypes: [codeKeys.Docker],
        case_sensitive: false,
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
        name: "⛔PostgreSQL",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "MongoDB",
        fileName: "database/mongo",
        codeKeyTypes: [codeKeys.Mongo, codeKeys.Python],
        case_sensitive: false,
      },

      {
        name: "⛔GraphQL",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Redis",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Project管理",
    items: [
      {
        name: "⛔npm/yarn",
        fileName: "",
        codeKeyTypes: [],
      },
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
      {
        name: "⛔RTL",
        fileName: "",
        codeKeyTypes: [codeKeys.Jest],
      },
    ],
  },
  {
    category: "WebAPI",
    items: [
      {
        name: "Google関連",
        fileName: "WebAPI/Google",
        codeKeyTypes: [codeKeys.CSS, codeKeys.HTML, codeKeys.React],
        encodeRequired: true,
      },
      {
        name: "SVG",
        fileName: "WebAPI/SVG",
        encodeRequired: true,
      },
      {
        name: "window:win",
        fileName: "WebAPI/window",
      },
      {
        name: "⛔LocalStorage",
        fileName: "",
      },
      {
        name: "⛔IndexedDB",
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
        name: "⛔Cookie",
        fileName: "",
      },
    ],
  },
]
