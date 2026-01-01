import { KeyDef } from "../../types/type"
import { keysAWSAurora } from "./keys/AWSAurora"
import { keysAWSCloud } from "./keys/AWSCloud"
import { keyReactLibrary } from "./keys/ReactLibrary"
import { keysChakra } from "./keys/Chakra"
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
import { keysI18n } from "./keys/i18n"
import { keysJest } from "./keys/Jest"
import { keysJotai } from "./keys/Jotai"
import { keysJS } from "./keys/JS"
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
import { keysReactRouter } from "./keys/ReactRouter"
import { keysRegExp } from "./keys/RegExp"
import { keysRTL } from "./keys/RTL"
import { keysSVG } from "./keys/SVG"
import { keysSwagger } from "./keys/Swagger"
import { keysSql } from "./keys/Sql"
import { keysTanStack } from "./keys/TanStack"
import { keysTS } from "./keys/TS"
import { keysTSConfig } from "./keys/TSConfig"
import { keysTypeORM } from "./keys/TypeORM"
import { keysVite } from "./keys/Vite"
import { keysVue } from "./keys/Vue"
import { keysYup } from "./keys/Yup"
import { keysJSUtilities } from "./keys/JSUtilities"

// 以下のオブジェクトをソートしてください
export const codeKeys = {
  AWSAurora: "AWSAurora",
  AWSCloud: "AWSCloud",
  Misc: "Misc",
  Chakra: "Chakra",
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
  i18n: "i18n",
  Jest: "Jest",
  Jotai: "Jotai",
  JS: "JS",
  JSUtilities: "JSUtilities",
  Lint: "Lint",
  Linux: "Linux",
  lodash: "lodash",
  Mongo: "Mongo",
  NPM: "NPM",
  MUI: "MUI",
  Nestjs: "Nestjs",
  Nextjs: "Nextjs",
  Nodejs: "Nodejs",
  Package: "Package",
  Prisma: "Prisma",
  Python: "Python",
  React: "React",
  ReactRouter: "ReactRouter",
  ReactLibrary: "ReactLibrary",
  RegExp: "RegExp",
  RHF: "keysRHF",
  RTL: "RTL",
  Sql: "Sql",
  SVG: "SVG",
  Swagger: "Swagger",
  TanStack: "TanStack",
  TS: "TS",
  TSConfig: "TSConfig",
  TypeORM: "TypeORM",
  Unknown: "Unknown",
  Vite: "Vite",
  Vue: "Vue",
  Yup: "Yup",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const KeyAndCodes: Record<string, KeyDef> = {
  AWSAurora: keysAWSAurora,
  AWSCloud: keysAWSCloud,
  Chakra: keysChakra,
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
  i18n: keysI18n,
  Jest: keysJest,
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
  ReactLibrary: keyReactLibrary,
  ReactRouter: keysReactRouter,
  RegExp: keysRegExp,
  RTL: keysRTL,
  Sql: keysSql,
  SVG: keysSVG,
  Swagger: keysSwagger,
  TanStack: keysTanStack,
  TS: keysTS,
  TSConfig: keysTSConfig,
  TypeORM: keysTypeORM,
  Vite: keysVite,
  Vue: keysVue,
  Yup: keysYup,
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
