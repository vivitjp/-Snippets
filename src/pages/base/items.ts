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
        name: "🔺目的別",
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
        name: "正規表現(JS)",
        fileName: "JavaScript/RegularExpression",
        codeKeyTypes: [codeKeys.RegExp],
      },
      {
        name: "⛔JQuery to JS",
        fileName: "",
        codeKeyTypes: [],
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
        name: "TSConfig",
        fileName: "TypeScript/TSConfig",
        codeKeyTypes: [codeKeys.TSConfig, codeKeys.JSTS],
      },
      {
        name: "⛔TS Challenge",
        fileName: "TypeScript/TSChallenge",
        codeKeyTypes: [codeKeys.JSTS],
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
        name: "🔺Routing",
        fileName: "React/ReactRouting",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
      // {
      //   name: "🔺React 型定義",
      //   fileName: "React/ReactTypeScript",
      //   codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
      // },
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
        name: "⛔Pandas",
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
        name: "🔺Chakra",
        fileName: "ReactPackage/Chakra",
        codeKeyTypes: [],
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
    category: "JS Runtime",
    items: [
      {
        name: "🔺Nodejs(Topics)",
        fileName: "JSRuntime/nodejs/NodeTopics",
        codeKeyTypes: [],
      },
      {
        name: "⛔Deno",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "🔺Bun",
        fileName: "JSRuntime/bun",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Nodejs",
    items: [
      {
        name: "npm/yarn:ny",
        fileName: "JSRuntime/nodejs/npm/npm_yarn",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "npm:npm",
        fileName: "JSRuntime/nodejs/npm/npm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "module管理史",
        fileName: "JSRuntime/nodejs/npm/npm _history",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "⛔pnpm",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Webpack",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "⛔Babel",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "環境変数",
        fileName: "/JSRuntime/nodejs/env",
        codeKeyTypes: [codeKeys.Env],
      },
      {
        name: "🔺Express",
        fileName: "/JSRuntime/nodejs/Express",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "Express API",
        fileName: "/JSRuntime/nodejs/ExpressAPI",
        codeKeyTypes: [codeKeys.Express],
      },
    ],
  },
  {
    category: "JS Framework:FE",
    items: [
      {
        name: "🔺Nextjs",
        fileName: "frameWork/front/Nextjs",
        codeKeyTypes: [codeKeys.Nextjs],
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
        name: "🔺AWS",
        fileName: "cloud/AWS",
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
        name: "Linux Command",
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
        encodeRequired: false,
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
        fileName: "git/Git",
        codeKeyTypes: [codeKeys.Git],
      },
      {
        name: "⛔GitHub",
        fileName: "",
        codeKeyTypes: [codeKeys.Git],
      },
      {
        name: "Husky",
        fileName: "git/husky",
        codeKeyTypes: [codeKeys.Git],
      },
    ],
  },
  {
    category: "Lint",
    items: [
      {
        name: "Lint",
        fileName: "Lint/Lint",
        codeKeyTypes: [codeKeys.Lint],
      },
      {
        name: "🔺JS Rules",
        fileName: "Lint/LintRulesJS",
        codeKeyTypes: [codeKeys.Lint],
      },
      {
        name: "🔺TS Rules",
        fileName: "Lint/LintRulesTS",
        codeKeyTypes: [codeKeys.Lint],
      },
      {
        name: "🔺React Rules",
        fileName: "Lint/LintRulesReact",
        codeKeyTypes: [codeKeys.Lint],
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
        name: "RTL(React Testing Library)",
        fileName: "Test/RTL",
        codeKeyTypes: [codeKeys.Jest, codeKeys.RTL],
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
        name: "Excel関数",
        fileName: "office/Excel",
        codeKeyTypes: [codeKeys.Excel],
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
