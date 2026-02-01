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
        name: "OpenAI",
        fileName: "ai/OpenAI",
      },
      {
        name: "ClaudeCode",
        fileName: "ai/ClaudeCode",
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
        name: "AWS 概要",
        fileName: "aws/_AWS",
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
        name: "IAM: Identity and Access Management",
        fileName: "aws/IAM",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "STS: Security Token Service",
        fileName: "aws/STS",
        codeKeyTypes: [codeKeys.AWSSTS],
        case_sensitive: false,
      },
      {
        name: "Cognito: Amazon Cognito",
        fileName: "aws/Cognito",
        codeKeyTypes: [codeKeys.AWSCognito],
        case_sensitive: false,
      },
      {
        name: "CloudWatch",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "Secrets Manager",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "WAF: Web Application Firewall",
        fileName: "aws/WAF",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS 開発ツール",
    items: [
      {
        name: "🔺SDK: AWS Software Development Kit",
        fileName: "aws/SDK",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CLI: AWS Command Line Interface",
        fileName: "",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CDK: Cloud Development Kit",
        fileName: "aws/CDK",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS インフラ",
    items: [
      {
        name: "VPC: Virtual Private Cloud",
        fileName: "aws/VPC",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CloudFront",
        fileName: "aws/CloudFront",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺EC2: Elastic Compute Cloud",
        fileName: "aws/EC2",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺ECS: Elastic Container Service",
        fileName: "aws/ECS",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "API Gateway",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "Route 53",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS 開発",
    items: [
      {
        name: "🔺Amplify(BE): AWS Amplify Backend",
        fileName: "aws/AmplifyBE",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺Amplify(FE): AWS Amplify Frontend",
        fileName: "aws/AmplifyFE",
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
        name: "Lambda: AWS Lambda",
        fileName: "aws/Lambda",
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
        name: "GraphQL(Amplify)",
        fileName: "aws/GraphQL",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "DynamoDB",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "MemoryDB",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS インテグレーション",
    items: [
      {
        name: "Step Functions",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "🔺EventBridge",
        fileName: "aws/EventBridge",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "SNS: Simple Notification Service",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "SQS: Simple Queue Service",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS Storage",
    items: [
      {
        name: "S3: Simple Storage Service",
        fileName: "aws/S3",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "EBS: Elastic Block Store",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "EFS: Elastic File System",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
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
        case_sensitive: false,
      },
      {
        name: "GitHub",
        fileName: "git/GitHub",
        codeKeyTypes: [codeKeys.GitHub],
        case_sensitive: false,
      },
      {
        name: "GitHub CLI",
        fileName: "git/GitHubCLI",
        codeKeyTypes: [codeKeys.GitCLI],
        case_sensitive: false,
      },
      {
        name: "Husky",
        fileName: "git/husky",
        codeKeyTypes: [codeKeys.Git],
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
        fileName: "OS/Shell",
        codeKeyTypes: [codeKeys.Shell],
        case_sensitive: false,
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
        name: "実行環境",
        fileName: "TypeScript/Transpiler",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Topics",
        fileName: "TypeScript/Topics",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TypeScript",
        fileName: "TypeScript/TypeScript",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Utilities",
        fileName: "TypeScript/Utilities",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "非同期",
        fileName: "TypeScript/Async",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Version 履歴",
        fileName: "TypeScript/Version",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TSConfig",
        fileName: "TypeScript/TSConfig",
        codeKeyTypes: [codeKeys.TSConfig, codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Challenge",
        fileName: "TypeScript/TSChallenge",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "tRPC",
        fileName: "TypeScript/tRPC",
        codeKeyTypes: [codeKeys.tRPC],
        case_sensitive: false,
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
        name: "Library",
        fileName: "React/Query/Library",
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
        name: "SQL",
        fileName: "database/SQL",
        codeKeyTypes: [codeKeys.Sql],
        case_sensitive: false,
      },
      {
        name: "SQL(型、変数、関数)",
        fileName: "database/SQLVarFunc",
        codeKeyTypes: [codeKeys.Sql, codeKeys.SqlVarFunc],
        case_sensitive: false,
      },
      {
        name: "SQL(分析、ストアド、トランザクション)",
        fileName: "database/SQLAnalyzeStored",
        codeKeyTypes: [codeKeys.Sql, codeKeys.SqlAnalyzeStored],
        case_sensitive: false,
      },
      {
        name: "MySQL Topics",
        fileName: "database/mySql",
        codeKeyTypes: [codeKeys.Sql],
        case_sensitive: false,
      },
      {
        name: "🔺PostgreSQL Topics",
        fileName: "database/PostgreSQL",
        codeKeyTypes: [codeKeys.Sql],
      },
      {
        name: "MongoDB",
        fileName: "database/mongo",
        codeKeyTypes: [codeKeys.Mongo, codeKeys.Python],
        case_sensitive: false,
        encodeRequired: false,
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
    category: "Web",
    items: [
      {
        name: "WebAPI",
        fileName: "Web/WebAPI",
        codeKeyTypes: [codeKeys.WebAPI],
        case_sensitive: false,
      },
      {
        name: "Session",
        fileName: "Web/Session",
        codeKeyTypes: [codeKeys.Session],
        case_sensitive: false,
      },
      {
        name: "JWT",
        fileName: "Web/JWT",
        codeKeyTypes: [codeKeys.JWT],
        case_sensitive: false,
      },
      {
        name: "Cookie",
        fileName: "Web/Cookie",
        codeKeyTypes: [codeKeys.Cookie],
        case_sensitive: false,
      },
      {
        name: "Security",
        fileName: "Web/Security",
        codeKeyTypes: [codeKeys.Security],
        case_sensitive: false,
      },
      {
        name: "Storage",
        fileName: "Web/Storage",
        codeKeyTypes: [codeKeys.Storage],
        case_sensitive: false,
      },
      {
        name: "ServiceWorkers",
        fileName: "Web/ServiceWorker",
        codeKeyTypes: [codeKeys.ServiceWorker],
        case_sensitive: false,
      },
      {
        name: "SVG",
        fileName: "Web/SVG",
        codeKeyTypes: [codeKeys.SVG],
      },
      {
        name: "Google関連",
        fileName: "Web/Google",
        codeKeyTypes: [codeKeys.CSS, codeKeys.HTML, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "window",
        fileName: "Web/window",
        case_sensitive: false,
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
        name: "WebSocket",
        fileName: "network/WebSocket",
        codeKeyTypes: [codeKeys.WebSocket],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "HTML",
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
