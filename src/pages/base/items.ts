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
        name: "🔺Amplify",
        fileName: "aws/Amplify",
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
        codeKeyTypes: [codeKeys.AWSCloud],
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
        fileName: "",
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
    category: "TypeScript",
    items: [
      {
        name: "TypeScript",
        fileName: "TypeScript/TypeScript",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "TS Topics",
        fileName: "TypeScript/TSTopics",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "TS Utilities",
        fileName: "TypeScript/Utilities",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.TS],
      },
      {
        name: "TS 非同期",
        fileName: "TypeScript/Async",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "TSConfig",
        fileName: "TypeScript/TSConfig",
        codeKeyTypes: [codeKeys.TSConfig, codeKeys.JSTS],
      },
      {
        name: "TS Challenge",
        fileName: "TypeScript/TSChallenge",
        codeKeyTypes: [codeKeys.JSTS],
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "JS Objects",
        fileName: "JavaScript/JavaScriptObjects",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "JS Methods",
        fileName: "JavaScript/JavaScriptMethods",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "JS Topics",
        fileName: "JavaScript/JSTopics",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "JS DOM",
        fileName: "JavaScript/DOM",
        codeKeyTypes: [codeKeys.DOM],
      },
      {
        name: "JS 正規表現",
        fileName: "JavaScript/RegularExpression",
        codeKeyTypes: [codeKeys.RegExp],
      },
      {
        name: "JS ライブラリ",
        fileName: "JavaScript/Libraries",
        codeKeyTypes: [codeKeys.JSTS],
      },
      {
        name: "JQuery to JS",
        fileName: "",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        name: "React",
        fileName: "React/React",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
      {
        name: "React Component",
        fileName: "React/ReactComponent",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
      {
        name: "React 🔺Routing",
        fileName: "React/ReactRouting",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS, codeKeys.React],
      },
      // {
      //   name: "🔺React 型定義", ⚠
      //   fileName: "React/ReactTypeScript",
      //   codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
      // },
    ],
  },
  {
    category: "React State",
    items: [
      {
        name: "🔺Zustand",
        fileName: "ReactGState/zustand",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.React],
      },
      {
        name: "Jotai",
        fileName: "ReactGState/Jotai",
        codeKeyTypes: [codeKeys.JSTS, codeKeys.Jotai],
      },
      {
        name: "Recoil(開発中止)",
        fileName: "ReactGState/Recoil",
        codeKeyTypes: [codeKeys.Package],
      },
    ],
  },
  // {
  //   category: "React Query",
  //   items: [
  //     {
  //       name: "SWR:pk",
  //       fileName: "ReactQuery/SWR",
  //       codeKeyTypes: [
  //         codeKeys.HTML,
  //         codeKeys.JSTS,
  //         codeKeys.React,
  //         codeKeys.Package,
  //       ],
  //     },
  //   ],
  // },
  {
    category: "React CSS",
    items: [
      {
        name: "StyledCompo",
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
        name: "Emotion",
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
    category: "React 他",
    items: [
      {
        name: "ReactHookForm:pk",
        fileName: "ReactPackage/ReactHookForm",
        codeKeyTypes: [codeKeys.keysPackageRHF],
      },
      {
        name: "UI Package",
        fileName: "ReactPackage/UI",
        codeKeyTypes: [],
      },
      {
        name: "Chakra",
        fileName: "ReactPackage/Chakra",
        codeKeyTypes: [codeKeys.Chakra],
      },
      {
        name: "Storybook(v6)",
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
    category: "Nodejs",
    items: [
      {
        name: "🔺Nodejs(Topics)",
        fileName: "JSRuntime/nodejs/NodeTopics",
        codeKeyTypes: [],
      },
      {
        name: "Express",
        fileName: "/JSRuntime/nodejs/Express",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "Express API",
        fileName: "/JSRuntime/nodejs/ExpressAPI",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "🔺Bun",
        fileName: "JSRuntime/bun",
        codeKeyTypes: [],
      },
    ],
  },
  {
    category: "Nextjs,Vite",
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
    category: "Nestjs,ORM",
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
        name: "🔺Prisma",
        fileName: "frameWork/Nestjs/Prisma",
        codeKeyTypes: [codeKeys.Prisma],
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
    category: "パッケージ管理",
    items: [
      {
        name: "npm/yarn",
        fileName: "JSRuntime/nodejs/npm/npm_yarn",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "npm",
        fileName: "JSRuntime/nodejs/npm/npm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "🔺pnpm",
        fileName: "JSRuntime/nodejs/npm/pnpm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "module管理史",
        fileName: "JSRuntime/nodejs/npm/npm _history",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "Webpack",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "Babel",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "Turbopack",
        fileName: "",
        codeKeyTypes: [],
      },
      {
        name: "環境変数",
        fileName: "/JSRuntime/nodejs/env",
        codeKeyTypes: [codeKeys.Env],
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
        name: "Python:py",
        fileName: "Python/Python",
        codeKeyTypes: [codeKeys.Python],
        encodeRequired: false,
      },
      {
        name: "Lib List:py",
        fileName: "Python/PythonLibs",
        codeKeyTypes: [],
        encodeRequired: false,
      },
      {
        name: "Lib Sample:py",
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
        name: "🔺PostgreSQL",
        fileName: "database/PostgreSQL",
        codeKeyTypes: [codeKeys.MySql],
      },
      {
        name: "GraphQL",
        fileName: "database/GraphQL",
        codeKeyTypes: [codeKeys.graphQL, codeKeys.JSTS, codeKeys.HTML],
      },
      {
        name: "Redis",
        fileName: "",
        codeKeyTypes: [],
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
        codeKeyTypes: [codeKeys.HTML, codeKeys.JSTS],
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
        name: "Google関連",
        fileName: "WebAPI/Google",
        codeKeyTypes: [codeKeys.CSS, codeKeys.HTML, codeKeys.React],
      },
      {
        name: "SVG",
        fileName: "WebAPI/SVG",
        codeKeyTypes: [codeKeys.SVG],
      },
      {
        name: "window",
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
        codeKeyTypes: [codeKeys.Excel, codeKeys.JSTS],
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
