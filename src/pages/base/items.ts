import { codeKeys } from "../../library/syntaxHighlighter/getKey"
import { MenuItemType } from "../../store/menuStore"

type menuByCategories = {
  category: string
  items: MenuItemType[]
}

export const menuItems: menuByCategories[] = [
  {
    category: "AI",
    items: [
      {
        name: "AI一般",
        fileName: "ai/AI",
      },
      {
        name: "ChatGPT",
        fileName: "ai/ChatGPT",
      },
      {
        name: "ClaudeCode",
        fileName: "ai/ClaudeCode",
      },
    ],
  },
  {
    category: "Git",
    items: [
      {
        name: "Git",
        fileName: "git/Git",
        codeKeyTypes: [codeKeys.Git],
      },
      {
        name: "GitHub",
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
    category: "クラウド",
    items: [
      {
        name: "🔺Cloud",
        fileName: "cloud/Cloud",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS",
    items: [
      {
        name: "AWS",
        fileName: "aws/AWS",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺SDK",
        fileName: "aws/SDK",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CLI",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CDK",
        fileName: "aws/CDK",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺SystemManager",
        fileName: "aws/SystemManagers",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "IAM",
        fileName: "aws/IAM",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "VPC",
        fileName: "aws/VPC",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "Lambda",
        fileName: "aws/Lambda",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺Amplify(BE)",
        fileName: "aws/AmplifyBE",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺Amplify(FE)",
        fileName: "aws/AmplifyFE",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺AppSync",
        fileName: "aws/AppSync",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺Aurora",
        fileName: "aws/Aurora",
        codeKeyTypes: [codeKeys.AWSAurora, codeKeys.Sql],
        case_sensitive: false,
      },
      {
        name: "CloudFormation",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CloudWatch",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺CloudFront",
        fileName: "aws/CloudFront",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "Cognito",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺EC2",
        fileName: "aws/EC2",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺ECS",
        fileName: "aws/ECS",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺EventBridge",
        fileName: "aws/EventBridge",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "S3",
        fileName: "aws/S3",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "Step Functions",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
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
        name: "dockerCompose",
        fileName: "OS/DockerCompose",
        codeKeyTypes: [codeKeys.Docker],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "Linux",
    items: [
      {
        name: "Linux",
        fileName: "OS/Linux",
        codeKeyTypes: [codeKeys.Linux],
      },
      {
        name: "Shell",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "Objects List",
        fileName: "JavaScript/JSObjects",
        codeKeyTypes: [codeKeys.JS],
      },
      {
        name: "Methods List",
        fileName: "JavaScript/JSMethods",
        codeKeyTypes: [codeKeys.JS],
      },
      {
        name: "Topics",
        fileName: "JavaScript/JSTopics",
        codeKeyTypes: [codeKeys.JS],
      },
      {
        name: "DOM",
        fileName: "JavaScript/DOM",
        codeKeyTypes: [codeKeys.DOM],
      },
      {
        name: "正規表現",
        fileName: "JavaScript/RegularExpression",
        codeKeyTypes: [codeKeys.RegExp],
      },
      {
        name: "JQuery to JS",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "JS Library",
    items: [
      {
        name: "ライブラリ",
        fileName: "JavaScriptLib/Libraries",
        codeKeyTypes: [codeKeys.JS, codeKeys.JSUtilities],
        case_sensitive: false,
      },
      {
        name: "lodash",
        fileName: "JavaScriptLib/lodash",
        codeKeyTypes: [codeKeys.lodash],
        case_sensitive: false,
      },
      {
        name: "カスタム",
        fileName: "JavaScriptLib/custom",
        codeKeyTypes: [codeKeys.JS],
      },
    ],
  },
  {
    category: "TypeScript",
    items: [
      {
        name: "TypeScript",
        fileName: "TypeScript/TypeScript",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TS Topics",
        fileName: "TypeScript/TSTopics",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TS Utilities",
        fileName: "TypeScript/Utilities",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TS 非同期",
        fileName: "TypeScript/Async",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TSConfig",
        fileName: "TypeScript/TSConfig",
        codeKeyTypes: [codeKeys.TSConfig, codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TS Challenge",
        fileName: "TypeScript/TSChallenge",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        name: "React",
        fileName: "React/React",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JS, codeKeys.React],
      },
      {
        name: "DOM",
        fileName: "React/ReactDom",
        codeKeyTypes: [codeKeys.React, codeKeys.ReactDom],
      },
      {
        name: "Component",
        fileName: "React/ReactComponent",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JS, codeKeys.React],
      },
      {
        name: "Routing",
        fileName: "React/ReactRouting",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JS, codeKeys.ReactRouter],
      },
    ],
  },
  {
    category: "React Framework",
    items: [
      {
        name: "Nextjs",
        fileName: "React/FrameWork/Nextjs",
        codeKeyTypes: [codeKeys.Nextjs],
      },
      {
        name: "Vite",
        fileName: "React/FrameWork/Vite",
        codeKeyTypes: [codeKeys.Vite],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "React CSS",
    items: [
      {
        name: "StyledCompo",
        fileName: "React/CSS/StyledCompo",
        codeKeyTypes: [
          codeKeys.CSS,
          codeKeys.HTML,
          codeKeys.JS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "Emotion",
        fileName: "React/CSS/Emotion",
        codeKeyTypes: [
          codeKeys.CSS,
          codeKeys.HTML,
          codeKeys.JS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
      {
        name: "Tailwind",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "Pandas",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "React Form",
    items: [
      {
        name: "ReactHookForm",
        fileName: "React/Form/ReactHookForm",
        codeKeyTypes: [codeKeys.RHF],
      },
      {
        name: "Yup",
        fileName: "React/Form/Yup",
        codeKeyTypes: [codeKeys.RHF, codeKeys.Yup],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "React UI",
    items: [
      {
        name: "UI Package",
        fileName: "React/UI/UI",
        codeKeyTypes: [],
      },
      {
        name: "Chakra",
        fileName: "React/UI/Chakra",
        codeKeyTypes: [codeKeys.Chakra],
      },
      {
        name: "MUI",
        fileName: "React/UI/MUI",
        codeKeyTypes: [codeKeys.MUI],
        case_sensitive: false,
      },
      {
        name: "Storybook(v6)",
        fileName: "React/UI/Storybook",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
    ],
  },
  {
    category: "React State",
    items: [
      {
        name: "Redux",
        fileName: "React/GState/redux",
        codeKeyTypes: [codeKeys.Redux],
      },
      {
        name: "Zustand",
        fileName: "React/GState/zustand",
        codeKeyTypes: [codeKeys.JS, codeKeys.React, codeKeys.Zustand],
      },
      {
        name: "Jotai",
        fileName: "React/GState/Jotai",
        codeKeyTypes: [codeKeys.JS, codeKeys.Jotai],
      },
      {
        name: "Recoil(開発中止)",
        fileName: "React/GState/Recoil",
        codeKeyTypes: [codeKeys.Package],
      },
    ],
  },
  {
    category: "React Query",
    items: [
      {
        name: "TanStack",
        fileName: "React/Query/TanStack",
        codeKeyTypes: [codeKeys.TanStack],
        case_sensitive: false,
      },
      {
        name: "Topics",
        fileName: "React/Query/Topics",
        codeKeyTypes: [codeKeys.TanStack, codeKeys.JS],
        case_sensitive: false,
      },
      {
        name: "🔺SWR",
        fileName: "",
        codeKeyTypes: [
          codeKeys.HTML,
          codeKeys.JS,
          codeKeys.React,
          codeKeys.Package,
        ],
      },
    ],
  },
  {
    category: "React Library",
    items: [
      {
        name: "言語系",
        fileName: "React/Libraries/Lang",
        codeKeyTypes: [codeKeys.ReactLibrariesLang, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Graph系",
        fileName: "React/Libraries/Graph",
        codeKeyTypes: [codeKeys.ReactLibrariesGraph, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Drag & Drop系",
        fileName: "React/Libraries/DnD",
        codeKeyTypes: [codeKeys.ReactLibrariesDnD, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Excel系",
        fileName: "React/Libraries/Excel",
        codeKeyTypes: [codeKeys.ReactLibrariesExcel, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "他Libraries",
        fileName: "React/Libraries/Libraries",
        codeKeyTypes: [codeKeys.ReactLibrary],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "Nodejs",
    items: [
      {
        name: "Nodejs(Topics)",
        fileName: "Node/NodeTopics",
        codeKeyTypes: [codeKeys.Nodejs],
        case_sensitive: false,
      },
      {
        name: "環境変数",
        fileName: "/Node/env",
        codeKeyTypes: [codeKeys.Env],
      },
      {
        name: "Express",
        fileName: "Node/Express",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "Express API",
        fileName: "Node/ExpressAPI",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "🔺Bun",
        fileName: "Node/bun",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "NPM",
    items: [
      {
        name: "npm/yarn",
        fileName: "Node/npm/npm_yarn",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "npm",
        fileName: "Node/npm/npm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "🔺pnpm",
        fileName: "Node/npm/pnpm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "module管理史",
        fileName: "Node/npm/npm _history",
        codeKeyTypes: [codeKeys.NPM],
      },
    ],
  },
  {
    category: "Nestjs,ORM",
    items: [
      {
        name: "Nestjs",
        fileName: "Nestjs/Nestjs",
        codeKeyTypes: [
          codeKeys.Nestjs,
          codeKeys.TypeORM,
          codeKeys.ClassValidator,
          codeKeys.ClassTransformer,
        ],
      },
      {
        name: "TypeORM",
        fileName: "Nestjs/TypeORM",
        codeKeyTypes: [codeKeys.TypeORM],
      },
      {
        name: "🔺Prisma",
        fileName: "Nestjs/Prisma",
        codeKeyTypes: [codeKeys.Prisma],
      },
      {
        name: "ClassValidator",
        fileName: "Nestjs/ClassValidator",
        codeKeyTypes: [codeKeys.ClassValidator],
      },
      {
        name: "ClassTransformer",
        fileName: "Nestjs/ClassTransformer",
        codeKeyTypes: [codeKeys.ClassTransformer],
      },
      {
        name: "🔺Swagger",
        fileName: "Nestjs/Swagger",
        codeKeyTypes: [codeKeys.Swagger],
      },
    ],
  },
  {
    category: "Vue",
    items: [
      {
        name: "🔺Vue",
        fileName: "vue/Vue",
        codeKeyTypes: [codeKeys.HTML, codeKeys.Vue],
      },
      {
        name: "🔺Nuxt",
        fileName: "vue/Nuxt",
        codeKeyTypes: [codeKeys.HTML, codeKeys.Vue],
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
        name: "Jest",
        fileName: "Test/Jest",
        codeKeyTypes: [codeKeys.Jest],
      },
      {
        name: "RTL(React Testing Library)",
        fileName: "Test/RTL",
        codeKeyTypes: [codeKeys.Jest, codeKeys.RTL],
      },
      {
        name: "Vitest",
        fileName: "Test/Vitest",
        codeKeyTypes: [codeKeys.Vitest],
        case_sensitive: false,
      },
      {
        name: "Cypress",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "Playwright",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Python",
    items: [
      {
        name: "Python",
        fileName: "Python/Python",
        codeKeyTypes: [codeKeys.Python],
        encodeRequired: false,
      },
      {
        name: "Lib List",
        fileName: "Python/PythonLibs",
        codeKeyTypes: [],
        encodeRequired: false,
      },
      {
        name: "Lib Sample",
        fileName: "Python/PythonLibSamples",
        codeKeyTypes: [codeKeys.Python],
        encodeRequired: false,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        fileName: "database/mySql",
        codeKeyTypes: [codeKeys.Sql],
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
        name: "🔺PostgreSQL",
        fileName: "database/PostgreSQL",
        codeKeyTypes: [codeKeys.Sql],
      },
      {
        name: "GraphQL",
        fileName: "database/GraphQL",
        codeKeyTypes: [codeKeys.graphQL, codeKeys.JS],
        case_sensitive: false,
      },
      {
        name: "Redis",
        fileName: "database/Redis",
        codeKeyTypes: [codeKeys.Redis],
      },
    ],
  },
  {
    category: "Html",
    items: [
      {
        name: "🔺HTML",
        fileName: "html/HTML",
        codeKeyTypes: [codeKeys.HTML],
      },
      {
        name: "🔺HTML目的別",
        fileName: "html/Purpose",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JS],
      },
    ],
  },
  {
    category: "CSS",
    items: [
      {
        name: "CSS",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "CSS(Topics)",
        fileName: "css/CSSTopics",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "SCSS",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "CSS(Responsive)",
        fileName: "",
        codeKeyTypes: [codeKeys.CSS],
      },
      {
        name: "CheatSheet",
        fileName: "css/CheatSheet",
        codeKeyTypes: [],
        idInitialOpened: true,
      },
      {
        name: "CSSColor:color",
        fileName: "css/CSSColor",
        encodeRequired: false,
      },
    ],
  },
  {
    category: "WebAPI",
    items: [
      {
        name: "Session",
        fileName: "WebAPI/Session",
        codeKeyTypes: [codeKeys.Session],
      },
      {
        name: "JWT",
        fileName: "WebAPI/JWT",
        codeKeyTypes: [codeKeys.JWT],
      },
      {
        name: "Security",
        fileName: "WebAPI/Security",
        codeKeyTypes: [codeKeys.Security],
      },
      {
        name: "Storage",
        fileName: "WebAPI/Storage",
        codeKeyTypes: [codeKeys.Storage],
      },
      {
        name: "ServiceWorkers",
        fileName: "WebAPI/ServiceWorker",
        // codeKeyTypes: [codeKeys.ServiceWorker],
      },
      {
        name: "SVG",
        fileName: "WebAPI/SVG",
        codeKeyTypes: [codeKeys.SVG],
      },
      {
        name: "Google関連",
        fileName: "WebAPI/Google",
        codeKeyTypes: [codeKeys.CSS, codeKeys.HTML, codeKeys.React],
      },
      {
        name: "window",
        fileName: "WebAPI/window",
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
        name: "Cookie",
        fileName: "",
      },
    ],
  },
  // {
  //   category: "Computer Science",
  //   items: [
  //     {
  //       name: "デザインパターン",
  //       fileName: "",
  //     },
  //   ],
  // },
  {
    category: "Office",
    items: [
      {
        name: "Excel関数",
        fileName: "office/Excel",
        codeKeyTypes: [codeKeys.Excel],
      },
      {
        name: "Excel VBScript",
        fileName: "office/ExcelVBScript",
        codeKeyTypes: [codeKeys.ExcelVBS],
      },
      {
        name: "Excel2JS関数",
        fileName: "office/ExcelJS",
        codeKeyTypes: [codeKeys.Excel, codeKeys.JS],
      },
    ],
  },
  // {
  //   category: "他言語",
  //   items: [
  //     {
  //       name: "🔺Fortran",
  //       fileName: "languages/Fortran",
  //       codeKeyTypes: [],
  //     },
  //   ],
  // },
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
