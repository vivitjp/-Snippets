import { codeKeys } from "../../library/syntaxHighlighter/getKey"
import { MenuItemType } from "../../store/menuStore"

type menuByCategories = {
  category: string
  items: MenuItemType[]
}

export const menuItems: menuByCategories[] = [
  {
    category: "Html",
    items: [
      {
        name: "🔺HTML",
        fileName: "html/HTML",
        codeKeyTypes: [codeKeys.HTML],
      },
      {
        name: "🔺ByPurpose",
        fileName: "html/Purpose",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS],
      },
    ],
  },
  {
    category: "CSS",
    items: [
      {
        name: "⛔CSS",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "CSS(Topics)",
        fileName: "css/CSSTopics",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "⛔SCSS",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔CSS(Responsive)",
        fileName: "",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "CheatSheet",
        fileName: "css/CheatSheet",
        codeKeyTypes: [],
      },
      {
        name: "CSSColor:color",
        fileName: "css/CSSColor",
        encodeRequired: false,
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "Objects",
        fileName: "JavaScript/JavaScriptObjects",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "Methods",
        fileName: "JavaScript/JavaScriptMethods",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "Topics:js",
        fileName: "JavaScript/JSTopics",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "DOM:dom",
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
    category: "TypeScript",
    items: [
      {
        name: "TypeScript:ts",
        fileName: "TypeScript/TypeScript",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "Topics:ts",
        fileName: "TypeScript/TSTopics",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "Utilities:ts",
        fileName: "TypeScript/Utilities",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.TS],
      },
      {
        name: "非同期:js",
        fileName: "TypeScript/Async",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "⛔TSConfig",
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
      {
        name: "⛔React 型定義",
        fileName: "",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
      },
    ],
  },
  {
    category: "React State",
    items: [
      {
        name: "🔺zustand:pk",
        fileName: "ReactGState/zustand",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
      },
      {
        name: "Jotai:pk",
        fileName: "ReactGState/Jotai",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.Jotai],
      },
      {
        name: "Recoil:pk",
        fileName: "ReactGState/Recoil",
        codeKeyTypes: [codeKeys.Package],
      },
    ],
  },
  {
    category: "React Query",
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
    ],
  },
  {
    category: "React CSS",
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
      },
      {
        name: "⛔Tailwind",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Panda",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },

  {
    category: "React Misc",
    items: [
      {
        name: "ReactHookForm:pk",
        fileName: "ReactPackage/ReactHookForm",
        codeKeyTypes: [codeKeys.keysPackageRHF],
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
    category: "Nodejs",
    items: [
      {
        name: "npm/yarn:ny",
        fileName: "frameWork/nodejs/npm_yarn",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "npm:npm",
        fileName: "frameWork/nodejs/npm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "⛔pnpm",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "環境変数",
        fileName: "/frameWork/nodejs/env",
        codeKeyTypes: [codeKeys.Env],
      },
      {
        name: "🔺Express",
        fileName: "/frameWork/nodejs/Express",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "Express Topics",
        fileName: "/frameWork/nodejs/ExpressTopics",
        codeKeyTypes: [codeKeys.Express],
      },
    ],
  },
  {
    category: "Nodejs Bundlers",
    items: [
      {
        name: "⛔Webpack",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Bun",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "JS Framework:FE",
    items: [
      {
        name: "⛔Nextjs",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "🔺Vite",
        fileName: "frameWork/front/vite",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "JS Framework:BE",
    items: [
      {
        name: "Nestjs",
        fileName: "frameWork/Nestjs/Nestjs",
        codeKeyTypes: [
          codeKeys.Nestjs,
          codeKeys.TypeORM,
          codeKeys.ClassValidator,
          codeKeys.ClassTransformer,
        ],
      },
      {
        name: "TypeORM",
        fileName: "frameWork/Nestjs/TypeORM",
        codeKeyTypes: [codeKeys.TypeORM],
      },
      {
        name: "ClassValidator",
        fileName: "frameWork/Nestjs/ClassValidator",
        codeKeyTypes: [codeKeys.ClassValidator],
      },
      {
        name: "ClassTransformer",
        fileName: "frameWork/Nestjs/ClassTransformer",
        codeKeyTypes: [codeKeys.ClassTransformer],
      },
      {
        name: "🔺Swagger",
        fileName: "frameWork/Nestjs/Swagger",
        codeKeyTypes: [codeKeys.Swagger],
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
    category: "Docker",
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
    ],
  },
  {
    category: "OS",
    items: [
      {
        name: "Linux",
        fileName: "OS/LinuxCommand",
        codeKeyTypes: [codeKeys.Linux],
      },
      {
        name: "⛔Shell",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        fileName: "database/mySql",
        codeKeyTypes: [codeKeys.MySql],
        case_sensitive: false,
      },
      // {
      //   name: "MySQL Topics",
      //   fileName: "database/mySqlTopics",
      //   codeKeyTypes: [codeKeys.MySql],
      //   case_sensitive: false,
      // },
      {
        name: "MongoDB",
        fileName: "database/mongo",
        codeKeyTypes: [codeKeys.Mongo, codeKeys.Python],
        case_sensitive: false,
      },
      {
        name: "⛔PostgreSQL",
        fileName: "",
        codeKeyTypes: [],
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
    category: "Git管理",
    items: [
      {
        name: "Git",
        fileName: "Project/Git",
        codeKeyTypes: [codeKeys.Git],
      },
      {
        name: "⛔GitHub",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "テスト",
    items: [
      {
        name: "🔺Lint",
        fileName: "Project/Lint",
      },
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
      {
        name: "⛔Cypress",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Playwright",
        fileName: "",
        codeKeyTypes: [],
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
      },
      {
        name: "SVG",
        fileName: "WebAPI/SVG",
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
      },
      {
        name: "YAML",
        fileName: "document/YAML",
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
  {
    category: "Computer Science",
    items: [
      {
        name: "⛔デザインパターン",
        fileName: "",
      },
    ],
  },
  {
    category: "Office",
    items: [
      {
        name: "🔺Excel関数",
        fileName: "office/Excel",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "ユビキタス",
    items: [
      {
        name: "🔺IT",
        fileName: "Ubiquitous/IT",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Editor",
    items: [
      {
        name: "🔺VSCode",
        fileName: "editor/VSCode",
        codeKeyTypes: [],
      },
    ],
  },
]
