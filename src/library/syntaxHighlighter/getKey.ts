import { KeyDef } from "../../types/type"
import { keysAWSAurora } from "./keys/AWSAurora"
import { keysAWSCloud } from "./keys/AWSCloud"
import { keyReactLibrary } from "./keys/ReactLibrary"
import { keysChakra } from "./keys/Chakra"
import { keysCookie } from "./keys/Cookie"
import { keysClassTransformer } from "./keys/ClassTransformer"
import { keysClassValidator } from "./keys/ClassValidator"
import { keysCSS } from "./keys/CSS"
import { keysCurl } from "./keys/curl"
import { keysDOM } from "./keys/DOM"
import { keysLodash } from "./keys/lodash"
import { keysDocker } from "./keys/Docker"
import { keysEnv } from "./keys/Env"
import { keysExcel } from "./keys/Excel"
import { keysExcelVBS } from "./keys/ExcelVBS"
import { keysExpress } from "./keys/Express"
import { keysGit } from "./keys/Git"
import { keysGraphQL } from "./keys/GraphQL"
import { keysHTML } from "./keys/HTML"
import { keysJest } from "./keys/Jest"
import { keysJWT } from "./keys/JWT"
import { keysJotai } from "./keys/Jotai"
import { keysJS } from "./keys/JS"
import { keysJSUtilities } from "./keys/JSUtilities"
import { keysLint } from "./keys/Lint"
import { keysLinux } from "./keys/Linux"
import { keysMUI } from "./keys/MUI"
import { keysMongo } from "./keys/Mongo"
import { keysNPM } from "./keys/npm"
import { keysNestjs } from "./keys/Nestjs"
import { keysNextjs } from "./keys/Nextjs"
import { keysNodejs } from "./keys/Nodejs"
import { keysPackage } from "./keys/Package"
import { keysRHF } from "./keys/RHF"
import { keysPrisma } from "./keys/Prisma"
import { keysPython } from "./keys/Python"
import { keysReact } from "./keys/React"
import { keysReactDom } from "./keys/ReactDom"
import { keysReactLibrariesExcel } from "./keys/ReactLibrariesExcel"
import { keysReactLibrariesLang } from "./keys/ReactLibrariesLang"
import { keysReactRouter } from "./keys/ReactRouter"
import { keysReactLibrariesGraph } from "./keys/ReactLibrariesGraph"
import { keysReactLibrariesDnD } from "./keys/ReactLibrariesDnD"
import { keysRedis } from "./keys/Redis"
import { keysRedux } from "./keys/Redux"
import { keysRegExp } from "./keys/RegExp"
import { keysRTL } from "./keys/RTL"
import { keysSVG } from "./keys/SVG"
import { keysSwagger } from "./keys/Swagger"
import { keysSql } from "./keys/Sql"
import { keysSession } from "./keys/Session"
import { keysSecurity } from "./keys/Security"
import { keysStorage } from "./keys/Storage"
import { keysTanStack } from "./keys/TanStack"
import { keysTS } from "./keys/TS"
import { keysTSConfig } from "./keys/TSConfig"
import { keysTypeORM } from "./keys/TypeORM"
import { keysVite } from "./keys/Vite"
import { keysVitest } from "./keys/Vitest"
import { keysVue } from "./keys/Vue"
import { keysYup } from "./keys/Yup"
import { keysZustand } from "./keys/zustand"

// 以下のオブジェクトをソートしてください
export const codeKeys = {
  AWSAurora: "AWSAurora",
  AWSCloud: "AWSCloud",
  Chakra: "Chakra",
  Cookie: "Cookie",
  ClassTransformer: "ClassTransformer",
  ClassValidator: "ClassValidator",
  CSS: "CSS",
  Curl: "Curl",
  DOM: "DOM",
  Docker: "Docker",
  Env: "Env",
  Excel: "Excel",
  ExcelVBS: "ExcelVBS",
  Express: "Express",
  Git: "Git",
  graphQL: "graphQL",
  HTML: "HTML",
  Jest: "Jest",
  JWT: "JWT",
  Jotai: "Jotai",
  JS: "JS",
  JSUtilities: "JSUtilities",
  Lint: "Lint",
  Linux: "Linux",
  lodash: "lodash",
  Misc: "Misc",
  Mongo: "Mongo",
  MUI: "MUI",
  Nestjs: "Nestjs",
  Nextjs: "Nextjs",
  Nodejs: "Nodejs",
  NPM: "NPM",
  Package: "Package",
  Prisma: "Prisma",
  Python: "Python",
  React: "React",
  ReactDom: "ReactDom",
  ReactLibrary: "ReactLibrary",
  ReactRouter: "ReactRouter",
  Redis: "Redis",
  ReactLibrariesDnD: "ReactLibrariesDnD",
  ReactLibrariesLang: "ReactLibrariesLang",
  ReactLibrariesExcel: "ReactLibrariesExcel",
  ReactLibrariesGraph: "ReactLibrariesGraph",
  Redux: "Redux",
  RegExp: "RegExp",
  RHF: "keysRHF",
  RTL: "RTL",
  Sql: "Sql",
  Session: "Session",
  Security: "Security",
  Storage: "Storage",
  SVG: "SVG",
  Swagger: "Swagger",
  TanStack: "TanStack",
  TS: "TS",
  TSConfig: "TSConfig",
  TypeORM: "TypeORM",
  Unknown: "Unknown",
  Vite: "Vite",
  Vitest: "Vitest",
  Vue: "Vue",
  Yup: "Yup",
  Zustand: "Zustand",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const KeyAndCodes: Record<string, KeyDef> = {
  AWSAurora: keysAWSAurora,
  AWSCloud: keysAWSCloud,
  Chakra: keysChakra,
  Cookie: keysCookie,
  ClassTransformer: keysClassTransformer,
  ClassValidator: keysClassValidator,
  CSS: keysCSS,
  Curl: keysCurl,
  DOM: keysDOM,
  Docker: keysDocker,
  Env: keysEnv,
  Excel: keysExcel,
  ExcelVBS: keysExcelVBS,
  Express: keysExpress,
  Git: keysGit,
  graphQL: keysGraphQL,
  HTML: keysHTML,
  Jest: keysJest,
  JWT: keysJWT,
  Jotai: keysJotai,
  JS: keysJS,
  JSUtilities: keysJSUtilities,
  keysRHF: keysRHF,
  Lint: keysLint,
  Linux: keysLinux,
  lodash: keysLodash,
  MUI: keysMUI,
  Mongo: keysMongo,
  Nestjs: keysNestjs,
  Nextjs: keysNextjs,
  NPM: keysNPM,
  Nodejs: keysNodejs,
  Package: keysPackage,
  Prisma: keysPrisma,
  Python: keysPython,
  React: keysReact,
  ReactDom: keysReactDom,
  ReactLibrary: keyReactLibrary,
  ReactRouter: keysReactRouter,
  Redis: keysRedis,
  ReactLibrariesDnD: keysReactLibrariesDnD,
  ReactLibrariesLang: keysReactLibrariesLang,
  ReactLibrariesExcel: keysReactLibrariesExcel,
  ReactLibrariesGraph: keysReactLibrariesGraph,
  Redux: keysRedux,
  RegExp: keysRegExp,
  RTL: keysRTL,
  Sql: keysSql,
  Session: keysSession,
  Security: keysSecurity,
  Storage: keysStorage,
  SVG: keysSVG,
  Swagger: keysSwagger,
  TanStack: keysTanStack,
  TS: keysTS,
  TSConfig: keysTSConfig,
  TypeORM: keysTypeORM,
  Vite: keysVite,
  Vitest: keysVitest,
  Vue: keysVue,
  Yup: keysYup,
  Zustand: keysZustand,
}

export const getMergedKeys = (codeKeyTypes: string[] | undefined) => {
  if (!codeKeyTypes?.length) return undefined

  const mergedCodeKeyTypes: KeyDef = {}

  codeKeyTypes.forEach((keyDef) => {
    const target = KeyAndCodes[keyDef]
    Object.entries(target).forEach(([color, keys]) => {
      if (mergedCodeKeyTypes[color]) {
        const keySet = new Set([...mergedCodeKeyTypes[color], ...keys])
        mergedCodeKeyTypes[color] = Array.from(keySet)
      } else {
        mergedCodeKeyTypes[color] = [...keys]
      }
    })
  })

  return mergedCodeKeyTypes
}
