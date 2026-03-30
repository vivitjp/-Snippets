import { codeKeys } from "../../library/syntaxHighlighter/getKey";
import { MenuItemType } from "../../store/menuStore";

type menuByCategories = {
  category: string;
  items: MenuItemType[];
};

export const menuItems: menuByCategories[] = [
  {
    category: "AI",
    items: [
      {
        name: "AI一般",
        fileName: "ai/AI",
        to: "/snippets/ai/AI",
      },
      {
        name: "MCP",
        fileName: "ai/MCP",
        to: "/snippets/ai/MCP",
      },
      {
        name: "OpenAI",
        fileName: "ai/OpenAI",
        to: "/snippets/ai/OpenAI",
      },
      {
        name: "ClaudeCode",
        fileName: "ai/ClaudeCode",
        to: "/snippets/ai/ClaudeCode",
      },
    ],
  },
  {
    category: "AWS・クラウド",
    items: [
      {
        name: "🔺Cloud",
        fileName: "cloud/Cloud",
        to: "/snippets/cloud/Cloud",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "AWS 概要",
        fileName: "aws/_AWS",
        to: "/snippets/aws/_AWS",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺SystemManager",
        fileName: "aws/SystemManagers",
        to: "/snippets/aws/SystemManagers",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "IAM: Identity and Access Management",
        fileName: "aws/IAM",
        to: "/snippets/aws/IAM",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "STS: Security Token Service",
        fileName: "aws/STS",
        to: "/snippets/aws/STS",
        codeKeyTypes: [codeKeys.AWSSTS],
        case_sensitive: false,
      },
      {
        name: "Cognito: Amazon Cognito",
        fileName: "aws/Cognito",
        to: "/snippets/aws/Cognito",
        codeKeyTypes: [codeKeys.AWSCognito],
        case_sensitive: false,
      },
      {
        name: "CloudWatch: Amazon CloudWatch",
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
        to: "/snippets/aws/WAF",
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
        to: "/snippets/aws/SDK",
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
        name: "CDK: AWS Cloud Development Kit",
        fileName: "aws/CDK",
        to: "/snippets/aws/CDK",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS インフラ",
    items: [
      {
        name: "VPC: Amazon Virtual Private Cloud",
        fileName: "aws/VPC",
        to: "/snippets/aws/VPC",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "CloudFront: Amazon CloudFront",
        fileName: "aws/CloudFront",
        to: "/snippets/aws/CloudFront",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺EC2: Amazon Elastic Compute Cloud",
        fileName: "aws/EC2",
        to: "/snippets/aws/EC2",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺ECS: Amazon Elastic Container Service",
        fileName: "aws/ECS",
        to: "/snippets/aws/ECS",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "API Gateway: Amazon API Gateway",
        fileName: "aws/APIGateway",
        to: "/snippets/aws/APIGateway",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "Route 53: Amazon Route 53",
        fileName: "",
        codeKeyTypes: [],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "AWS サービス",
    items: [
      {
        name: "🔺Amplify(BE): AWS Amplify Backend",
        fileName: "aws/AmplifyBE",
        to: "/snippets/aws/AmplifyBE",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺Amplify(FE): AWS Amplify Frontend",
        fileName: "aws/AmplifyFE",
        to: "/snippets/aws/AmplifyFE",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "Amplify(GQL): AWS Amplify GraphQL",
        fileName: "aws/AmplifyGQL",
        to: "/snippets/aws/AmplifyGQL",
        codeKeyTypes: [codeKeys.AWSAmplify_GraphQL],
        case_sensitive: false,
      },
      {
        name: "CloudFormation: AWS CloudFormation",
        fileName: "aws/CloudFormation",
        to: "/snippets/aws/CloudFormation",
        codeKeyTypes: [codeKeys.AWSCloudFormation],
        case_sensitive: false,
      },
      {
        name: "Lambda: AWS Lambda",
        fileName: "aws/Lambda",
        to: "/snippets/aws/Lambda",
        codeKeyTypes: [codeKeys.AWSLambda],
        case_sensitive: false,
      },
      {
        name: "Lambda(SDK): AWS Lambda SDK",
        fileName: "aws/LambdaSDK",
        to: "/snippets/aws/LambdaSDK",
        codeKeyTypes: [codeKeys.AWSLambda],
        case_sensitive: false,
      },
      {
        name: "🔺AppSync: AWS AppSync",
        fileName: "aws/AppSync",
        to: "/snippets/aws/AppSync",
        codeKeyTypes: [codeKeys.AWSCloud],
        case_sensitive: false,
      },
      {
        name: "🔺Aurora: Amazon Aurora",
        fileName: "aws/Aurora",
        to: "/snippets/aws/Aurora",
        codeKeyTypes: [codeKeys.AWSAurora, codeKeys.Sql],
        case_sensitive: false,
      },
      {
        name: "DynamoDB: Amazon DynamoDB",
        fileName: "aws/DynamoDB",
        to: "/snippets/aws/DynamoDB",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "DynamoDB(SDK): Amazon DynamoDB(SDK)",
        fileName: "aws/DynamoDBSDK",
        to: "/snippets/aws/DynamoDBSDK",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "MemoryDB: Amazon MemoryDB",
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
        to: "/snippets/aws/EventBridge",
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
        to: "/snippets/aws/S3",
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
        to: "/snippets/git/Git",
        codeKeyTypes: [codeKeys.Git],
        case_sensitive: false,
      },
      {
        name: "GitHub",
        fileName: "git/GitHub",
        to: "/snippets/git/GitHub",
        codeKeyTypes: [codeKeys.GitHub],
        case_sensitive: false,
      },
      {
        name: "GitHub CLI",
        fileName: "git/GitHubCLI",
        to: "/snippets/git/GitHubCLI",
        codeKeyTypes: [codeKeys.GitCLI],
        case_sensitive: false,
      },
      {
        name: "Husky",
        fileName: "git/husky",
        to: "/snippets/git/husky",
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
        to: "/snippets/OS/Docker",
        codeKeyTypes: [codeKeys.Docker],
        case_sensitive: false,
      },
      {
        name: "dockerCompose",
        fileName: "OS/DockerCompose",
        to: "/snippets/OS/DockerCompose",
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
        to: "/snippets/OS/Linux",
        codeKeyTypes: [codeKeys.Linux],
      },
      {
        name: "Shell",
        fileName: "OS/Shell",
        to: "/snippets/OS/Shell",
        codeKeyTypes: [codeKeys.Shell],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        name: "Objects(List)",
        fileName: "JavaScript/JSObjects",
        to: "/snippets/JavaScript/JSObjects",
        codeKeyTypes: [codeKeys.JS],
      },
      {
        name: "Methods",
        fileName: "JavaScript/JSMethods",
        to: "/snippets/JavaScript/JSMethods",
        codeKeyTypes: [codeKeys.JS],
      },
      {
        name: "Topics",
        fileName: "JavaScript/JSTopics",
        to: "/snippets/JavaScript/JSTopics",
        codeKeyTypes: [codeKeys.JS],
      },
      {
        name: "DOM",
        fileName: "JavaScript/DOM",
        to: "/snippets/JavaScript/DOM",
        codeKeyTypes: [codeKeys.JSDOM],
      },
      {
        name: "正規表現",
        fileName: "JavaScript/RegularExpression",
        to: "/snippets/JavaScript/RegularExpression",
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
        to: "/snippets/JavaScriptLib/Libraries",
        codeKeyTypes: [codeKeys.JS, codeKeys.JSUtilities],
        case_sensitive: false,
      },
      {
        name: "lodash",
        fileName: "JavaScriptLib/lodash",
        to: "/snippets/JavaScriptLib/lodash",
        codeKeyTypes: [codeKeys.lodash],
        case_sensitive: false,
      },
      {
        name: "カスタム",
        fileName: "JavaScriptLib/custom",
        to: "/snippets/JavaScriptLib/custom",
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
        to: "/snippets/TypeScript/Transpiler",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Topics",
        fileName: "TypeScript/Topics",
        to: "/snippets/TypeScript/Topics",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TypeScript",
        fileName: "TypeScript/TypeScript",
        to: "/snippets/TypeScript/TypeScript",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Utilities",
        fileName: "TypeScript/Utilities",
        to: "/snippets/TypeScript/Utilities",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "非同期",
        fileName: "TypeScript/Async",
        to: "/snippets/TypeScript/Async",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Version 履歴",
        fileName: "TypeScript/Version",
        to: "/snippets/TypeScript/Version",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "TSConfig",
        fileName: "TypeScript/TSConfig",
        to: "/snippets/TypeScript/TSConfig",
        codeKeyTypes: [codeKeys.TSConfig, codeKeys.JS, codeKeys.TS],
      },
      {
        name: "Challenge",
        fileName: "TypeScript/TSChallenge",
        to: "/snippets/TypeScript/TSChallenge",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
      },
      {
        name: "tRPC",
        fileName: "TypeScript/tRPC",
        to: "/snippets/TypeScript/tRPC",
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
        to: "/snippets/React/React",
        codeKeyTypes: [codeKeys.HTML, codeKeys.TS, codeKeys.JS, codeKeys.React],
      },
      {
        name: "ReactDOM",
        fileName: "React/ReactDom",
        to: "/snippets/React/ReactDom",
        codeKeyTypes: [codeKeys.React, codeKeys.ReactDom],
      },
      {
        name: "Component",
        fileName: "React/ReactComponent",
        to: "/snippets/React/ReactComponent",
        codeKeyTypes: [codeKeys.HTML, codeKeys.JS, codeKeys.React],
      },
      {
        name: "Routing",
        fileName: "React/ReactRouting",
        to: "/snippets/React/ReactRouting",
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
        to: "/snippets/React/FrameWork/Nextjs",
        codeKeyTypes: [codeKeys.Nextjs],
      },
      {
        name: "Vite",
        fileName: "React/FrameWork/Vite",
        to: "/snippets/React/FrameWork/Vite",
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
        to: "/snippets/React/CSS/StyledCompo",
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
        to: "/snippets/React/CSS/Emotion",
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
        to: "/snippets/React/Form/ReactHookForm",
        codeKeyTypes: [codeKeys.RHF],
      },
      {
        name: "Yup",
        fileName: "React/Form/Yup",
        to: "/snippets/React/Form/Yup",
        codeKeyTypes: [codeKeys.RHF, codeKeys.Yup],
        case_sensitive: false,
      },
      {
        name: "Zod",
        fileName: "React/Form/Zod",
        to: "/snippets/React/Form/Zod",
        codeKeyTypes: [codeKeys.RHF, codeKeys.Zod],
        case_sensitive: false,
      },
    ],
  },
  {
    category: "React UI",
    items: [
      {
        name: "UI Packages",
        fileName: "React/UI/UI",
        to: "/snippets/React/UI/UI",
        codeKeyTypes: [],
      },
      {
        name: "Chakra",
        fileName: "React/UI/Chakra",
        to: "/snippets/React/UI/Chakra",
        codeKeyTypes: [codeKeys.Chakra],
      },
      {
        name: "MUI",
        fileName: "React/UI/MUI",
        to: "/snippets/React/UI/MUI",
        codeKeyTypes: [codeKeys.MUI],
        case_sensitive: false,
      },
      {
        name: "Storybook(v6)",
        fileName: "React/UI/Storybook",
        to: "/snippets/React/UI/Storybook",
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
        to: "/snippets/React/GState/redux",
        codeKeyTypes: [codeKeys.Redux],
      },
      {
        name: "Zustand",
        fileName: "React/GState/zustand",
        to: "/snippets/React/GState/zustand",
        codeKeyTypes: [codeKeys.JS, codeKeys.React, codeKeys.Zustand],
      },
      {
        name: "Jotai",
        fileName: "React/GState/Jotai",
        to: "/snippets/React/GState/Jotai",
        codeKeyTypes: [codeKeys.JS, codeKeys.Jotai],
      },
      {
        name: "Recoil(開発中止)",
        fileName: "React/GState/Recoil",
        to: "/snippets/React/GState/Recoil",
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
        to: "/snippets/React/Query/TanStack",
        codeKeyTypes: [codeKeys.TanStack],
        case_sensitive: false,
      },
      {
        name: "Library",
        fileName: "React/Query/Library",
        to: "/snippets/React/Query/Library",
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
        to: "/snippets/React/Libraries/Lang",
        codeKeyTypes: [codeKeys.ReactLibrariesLang, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Graph系",
        fileName: "React/Libraries/Graph",
        to: "/snippets/React/Libraries/Graph",
        codeKeyTypes: [codeKeys.ReactLibrariesGraph, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Drag & Drop系",
        fileName: "React/Libraries/DnD",
        to: "/snippets/React/Libraries/DnD",
        codeKeyTypes: [codeKeys.ReactLibrariesDnD, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Excel系",
        fileName: "React/Libraries/Excel",
        to: "/snippets/React/Libraries/Excel",
        codeKeyTypes: [codeKeys.ReactLibrariesExcel, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "他Libraries",
        fileName: "React/Libraries/Libraries",
        to: "/snippets/React/Libraries/Libraries",
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
        to: "/snippets/Node/NodeTopics",
        codeKeyTypes: [codeKeys.Nodejs],
        case_sensitive: false,
      },
      {
        name: "環境変数",
        fileName: "/Node/env",
        to: "/snippets//Node/env",
        codeKeyTypes: [codeKeys.Env],
      },
      {
        name: "Express",
        fileName: "Node/Express",
        to: "/snippets/Node/Express",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "Express API",
        fileName: "Node/ExpressAPI",
        to: "/snippets/Node/ExpressAPI",
        codeKeyTypes: [codeKeys.Express],
      },
      {
        name: "🔺Bun",
        fileName: "Node/bun",
        to: "/snippets/Node/bun",
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
        to: "/snippets/Node/npm/npm_yarn",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "npm/package.json",
        fileName: "Node/npm/npm",
        to: "/snippets/Node/npm/npm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "🔺pnpm",
        fileName: "Node/npm/pnpm",
        to: "/snippets/Node/npm/pnpm",
        codeKeyTypes: [codeKeys.NPM],
      },
      {
        name: "module管理史",
        fileName: "Node/npm/npm _history",
        to: "/snippets/Node/npm/npm _history",
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
        to: "/snippets/Nestjs/Nestjs",
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
        to: "/snippets/Nestjs/TypeORM",
        codeKeyTypes: [codeKeys.TypeORM],
      },
      {
        name: "Prisma",
        fileName: "Nestjs/Prisma",
        to: "/snippets/Nestjs/Prisma",
        codeKeyTypes: [codeKeys.Prisma],
        case_sensitive: false,
      },
      {
        name: "ClassValidator",
        fileName: "Nestjs/ClassValidator",
        to: "/snippets/Nestjs/ClassValidator",
        codeKeyTypes: [codeKeys.ClassValidator],
      },
      {
        name: "ClassTransformer",
        fileName: "Nestjs/ClassTransformer",
        to: "/snippets/Nestjs/ClassTransformer",
        codeKeyTypes: [codeKeys.ClassTransformer],
      },
      {
        name: "🔺Swagger",
        fileName: "Nestjs/Swagger",
        to: "/snippets/Nestjs/Swagger",
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
        to: "/snippets/vue/Vue",
        codeKeyTypes: [codeKeys.HTML, codeKeys.Vue],
      },
      {
        name: "🔺Nuxt",
        fileName: "vue/Nuxt",
        to: "/snippets/vue/Nuxt",
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
        to: "/snippets/Lint/Lint",
        codeKeyTypes: [codeKeys.Lint],
      },
      {
        name: "🔺JS Rules",
        fileName: "Lint/LintRulesJS",
        to: "/snippets/Lint/LintRulesJS",
        codeKeyTypes: [codeKeys.Lint],
      },
      {
        name: "🔺TS Rules",
        fileName: "Lint/LintRulesTS",
        to: "/snippets/Lint/LintRulesTS",
        codeKeyTypes: [codeKeys.Lint],
      },
      {
        name: "🔺React Rules",
        fileName: "Lint/LintRulesReact",
        to: "/snippets/Lint/LintRulesReact",
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
        to: "/snippets/Test/Jest",
        codeKeyTypes: [codeKeys.Jest],
      },
      {
        name: "RTL(React Testing Library)",
        fileName: "Test/RTL",
        to: "/snippets/Test/RTL",
        codeKeyTypes: [codeKeys.Jest, codeKeys.RTL],
      },
      {
        name: "Vitest",
        fileName: "Test/Vitest",
        to: "/snippets/Test/Vitest",
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
        to: "/snippets/Python/Python",
        codeKeyTypes: [codeKeys.Python],
        encodeRequired: false,
      },
      {
        name: "Lib List",
        fileName: "Python/PythonLibs",
        to: "/snippets/Python/PythonLibs",
        codeKeyTypes: [],
        encodeRequired: false,
      },
      {
        name: "Lib Sample",
        fileName: "Python/PythonLibSamples",
        to: "/snippets/Python/PythonLibSamples",
        codeKeyTypes: [codeKeys.Python],
        encodeRequired: false,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "RDBS",
        fileName: "database/RDBS",
        to: "/snippets/database/RDBS",
        codeKeyTypes: [codeKeys.Sql],
        case_sensitive: false,
      },
      {
        name: "SQL",
        fileName: "database/SQL",
        to: "/snippets/database/SQL",
        codeKeyTypes: [codeKeys.Sql],
        case_sensitive: false,
      },
      {
        name: "SQL(型、変数、関数)",
        fileName: "database/SQLVarFunc",
        to: "/snippets/database/SQLVarFunc",
        codeKeyTypes: [codeKeys.Sql, codeKeys.SqlVarFunc],
        case_sensitive: false,
      },
      {
        name: "SQL(Analyze,Stored,Transaction)",
        fileName: "database/SQLAnalyzeStored",
        to: "/snippets/database/SQLAnalyzeStored",
        codeKeyTypes: [codeKeys.Sql, codeKeys.SqlAnalyzeStored],
        case_sensitive: false,
      },
      {
        name: "MongoDB",
        fileName: "database/mongo",
        to: "/snippets/database/mongo",
        codeKeyTypes: [codeKeys.Mongo, codeKeys.Python],
        case_sensitive: false,
        encodeRequired: false,
      },
      {
        name: "GraphQL",
        fileName: "database/GraphQL",
        to: "/snippets/database/GraphQL",
        codeKeyTypes: [codeKeys.graphQL, codeKeys.JS],
        case_sensitive: false,
      },
      {
        name: "Redis",
        fileName: "database/Redis",
        to: "/snippets/database/Redis",
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
        to: "/snippets/Web/WebAPI",
        codeKeyTypes: [codeKeys.WebAPI],
        case_sensitive: false,
      },
      {
        name: "Session",
        fileName: "Web/Session",
        to: "/snippets/Web/Session",
        codeKeyTypes: [codeKeys.Session],
        case_sensitive: false,
      },
      {
        name: "JWT",
        fileName: "Web/JWT",
        to: "/snippets/Web/JWT",
        codeKeyTypes: [codeKeys.JWT],
        case_sensitive: false,
      },
      {
        name: "Cookie",
        fileName: "Web/Cookie",
        to: "/snippets/Web/Cookie",
        codeKeyTypes: [codeKeys.Cookie],
        case_sensitive: false,
      },
      {
        name: "Security",
        fileName: "Web/Security",
        to: "/snippets/Web/Security",
        codeKeyTypes: [codeKeys.Security],
        case_sensitive: false,
      },
      {
        name: "Storage",
        fileName: "Web/Storage",
        to: "/snippets/Web/Storage",
        codeKeyTypes: [codeKeys.Storage],
        case_sensitive: false,
      },
      {
        name: "ServiceWorkers",
        fileName: "Web/ServiceWorker",
        to: "/snippets/Web/ServiceWorker",
        codeKeyTypes: [codeKeys.ServiceWorker],
        case_sensitive: false,
      },
      {
        name: "SVG",
        fileName: "Web/SVG",
        to: "/snippets/Web/SVG",
        codeKeyTypes: [codeKeys.SVG],
      },
      {
        name: "Google関連",
        fileName: "Web/Google",
        to: "/snippets/Web/Google",
        codeKeyTypes: [codeKeys.CSS, codeKeys.HTML, codeKeys.React],
        case_sensitive: false,
      },
      {
        name: "Chrome開発ツール",
        fileName: "Web/Chrome",
        to: "/snippets/Web/Chrome",
        codeKeyTypes: [],
        case_sensitive: false,
      },
      {
        name: "window",
        fileName: "Web/window",
        to: "/snippets/Web/window",
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
        to: "/snippets/network/http_response",
      },
      {
        name: "Curl",
        fileName: "network/curl",
        to: "/snippets/network/curl",
        codeKeyTypes: [codeKeys.Curl],
      },
      {
        name: "WebSocket",
        fileName: "network/WebSocket",
        to: "/snippets/network/WebSocket",
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
        to: "/snippets/html/HTML",
        codeKeyTypes: [codeKeys.HTML],
      },
      {
        name: "🔺HTML目的別",
        fileName: "html/Purpose",
        to: "/snippets/html/Purpose",
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
        to: "/snippets/css/CSSTopics",
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
        to: "/snippets/css/CheatSheet",
        codeKeyTypes: [],
        idInitialOpened: true,
      },
      {
        name: "CSSColor:color",
        fileName: "css/CSSColor",
        to: "/snippets/css/CSSColor",
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
        to: "/snippets/document/MD",
      },
      {
        name: "YAML",
        fileName: "document/YAML",
        to: "/snippets/document/YAML",
      },
    ],
  },
  {
    category: "Office",
    items: [
      {
        name: "Excel関数",
        fileName: "office/Excel",
        to: "/snippets/office/Excel",
        codeKeyTypes: [codeKeys.Excel],
      },
      {
        name: "Excel VBScript",
        fileName: "office/ExcelVBScript",
        to: "/snippets/office/ExcelVBScript",
        codeKeyTypes: [codeKeys.ExcelVBS],
      },
      {
        name: "Excel2JS関数",
        fileName: "office/ExcelJS",
        to: "/snippets/office/ExcelJS",
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
    category: "開発・Editor・原則",
    items: [
      {
        name: "🔺IT",
        fileName: "other/IT",
        to: "/snippets/other/IT",
        codeKeyTypes: [],
      },
      {
        name: "🔺VSCode",
        fileName: "other/VSCode",
        to: "/snippets/other/VSCode",
        codeKeyTypes: [],
      },
      {
        name: "🔺開発原則",
        fileName: "other/Principle",
        to: "/snippets/other/Principle",
        codeKeyTypes: [codeKeys.JS, codeKeys.TS],
        case_sensitive: false,
      },
    ],
  },
];

/** fileName 文字列と一致するメニュー項目を返す */
export function findMenuItemByFileName(
  fileName: string,
): MenuItemType | undefined {
  for (const group of menuItems) {
    for (const item of group.items) {
      if (item.fileName === fileName) {
        return item;
      }
    }
  }
  return undefined;
}

/** ブラウザの pathname(例: /snippets/ai/AI) と item.to が一致する項目を返す */
export function findMenuItemByPathname(
  pathname: string,
): MenuItemType | undefined {
  for (const group of menuItems) {
    for (const item of group.items) {
      if (item.to === pathname) {
        return item;
      }
    }
  }
  const m = /^\/snippets\/(.+)$/.exec(pathname);
  if (m) {
    const fileName = decodeURIComponent(m[1]);
    return findMenuItemByFileName(fileName);
  }
  return undefined;
}

/** Link 用。to が無い場合は fileName から従来どおり生成 */
export function menuItemHref(item: MenuItemType): string | undefined {
  if (!item.fileName) {
    return undefined;
  }
  return item.to ?? `/snippets/${item.fileName}`;
}
