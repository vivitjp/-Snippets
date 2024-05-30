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
        name: "CSS(topics)",
        fileName: "html/CSSTopics",
        codeKeyTypes: [codeKeys.CSS],
        encodeRequired: true,
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
        name: "TS(Topics):ts",
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
        name: "Dom",
        fileName: "JavaScript/DOM",
        codeKeyTypes: [codeKeys.DOM],
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
        fileName: "ReactGState/zustand",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
        encodeRequired: true,
      },
      {
        name: "Jotai:pk",
        fileName: "ReactGState/Jotai",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.Jotai],
        encodeRequired: true,
      },
      {
        name: "Recoil:pk",
        fileName: "ReactGState/Recoil",
        codeKeyTypes: [codeKeys.Package],
        encodeRequired: true,
      },
    ],
  },
  {
    category: "React:Query",
    items: [
      {
        name: "SWR:pk",
        fileName: "ReactQuery/SWR",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JSTS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "TypeORM",
        fileName: "ReactQuery/TypeORM",
        codeKeyTypes: [codeKeys.TypeORM],
      },
      {
        name: "ClassValidator",
        fileName: "ReactQuery/ClassValidator",
        codeKeyTypes: [codeKeys.ClassValidator],
      },
    ],
  },
  {
    category: "React:CSS",
    items: [
      {
        name: "StyledCompo:pk",
        fileName: "ReactCSS/StyledCompo",
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
        fileName: "ReactCSS/Emotion",
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
        name: "npm/yarn",
        fileName: "Project/npm_yarn",
        codeKeyTypes: [codeKeys.NPM],
        encodeRequired: true,
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
    category: "Document",
    items: [
      {
        name: "MD",
        fileName: "document/MD",
        encodeRequired: true,
      },
      {
        name: "YAML",
        fileName: "document/YAML",
        encodeRequired: true,
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
