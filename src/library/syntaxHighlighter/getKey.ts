import { KeyDef } from "../../types/type"
import { keysAWSAurora } from "./keys/AWSAurora"
import { keysAWSCloud } from "./keys/AWSCloud"
import { keysCSS } from "./keys/CSS"
import { keysChakra } from "./keys/Chakra"
import { keysClassTransformer } from "./keys/ClassTransformer"
import { keysClassValidator } from "./keys/ClassValidator"
import { keysDOM } from "./keys/DOM"
import { keysDocker } from "./keys/Docker"
import { keysEnv } from "./keys/Env"
import { keysExcel } from "./keys/Excel"
import { keysExcelVBS } from "./keys/ExcelVBS"
import { keysExpress } from "./keys/Express"
import { keysGit } from "./keys/Git"
import { keysGraphQL } from "./keys/GraphQL"
import { keysHTML } from "./keys/HTML"
import { keysJSTS } from "./keys/JSTS"
import { keysJest } from "./keys/Jest"
import { keysJotai } from "./keys/Jotai"
import { keysLint } from "./keys/Lint"
import { keysLinux } from "./keys/Linux"
import { keysMongo } from "./keys/Mongo"
import { keysSql } from "./keys/Sql"
import { keysNestjs } from "./keys/Nestjs"
import { keysNextjs } from "./keys/Nextjs"
import { keysPackage } from "./keys/Package"
import { keysPackageRHF } from "./keys/PackageRHF"
import { keysPrisma } from "./keys/Prisma"
import { keysPython } from "./keys/Python"
import { keysRTL } from "./keys/RTL"
import { keysReact } from "./keys/React"
import { keysRegExp } from "./keys/RegExp"
import { keysSVG } from "./keys/SVG"
import { keysSwagger } from "./keys/Swagger"
import { keysTS } from "./keys/TS"
import { keysTSConfig } from "./keys/TSConfig"
import { keysTypeORM } from "./keys/TypeORM"
import { keysVue } from "./keys/Vue"
import { keysCurl } from "./keys/curl"
import { keysNPM } from "./keys/npm"
import { keysTanStack } from "./keys/TanStack"
import { keysReactRouter } from "./keys/ReactRouter"
import { keysYup } from "./keys/Yup"
import { keysMUI } from "./keys/MUI"
import { keysI18n } from "./keys/i18n"
import { keysVite } from "./keys/Vite"

// 以下のオブジェクトをソートしてください
export const codeKeys = {
  AWSCloud: "AWSCloud",
  AWSAurora: "AWSAurora",
  Chakra: "Chakra",
  ClassTransformer: "ClassTransformer",
  ClassValidator: "ClassValidator",
  Curl: "Curl",
  CSS: "CSS",
  Docker: "Docker",
  DOM: "DOM",
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
  JSTS: "JSTS",
  keysPackageRHF: "keysPackageRHF",
  Lint: "Lint",
  Linux: "Linux",
  Mongo: "Mongo",
  Sql: "Sql",
  Nestjs: "Nestjs",
  Nextjs: "Nextjs",
  NPM: "NPM",
  Package: "Package",
  Prisma: "Prisma",
  Python: "Python",
  React: "React",
  ReactRouter: "ReactRouter",
  Yup: "Yup",
  RegExp: "RegExp",
  RTL: "RTL",
  SVG: "SVG",
  Swagger: "Swagger",
  TanStack: "TanStack",
  TS: "TS",
  TSConfig: "TSConfig",
  TypeORM: "TypeORM",
  MUI: "MUI",
  Unknown: "Unknown",
  Vue: "Vue",
  Vite: "Vite",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const KeyAndCodes: Record<string, KeyDef> = {
  AWSCloud: keysAWSCloud,
  AWSAurora: keysAWSAurora,
  Chakra: keysChakra,
  ClassTransformer: keysClassTransformer,
  ClassValidator: keysClassValidator,
  Curl: keysCurl,
  CSS: keysCSS,
  Docker: keysDocker,
  DOM: keysDOM,
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
  JSTS: keysJSTS,
  keysPackageRHF: keysPackageRHF,
  Lint: keysLint,
  Linux: keysLinux,
  Mongo: keysMongo,
  Sql: keysSql,
  Nestjs: keysNestjs,
  Nextjs: keysNextjs,
  NPM: keysNPM,
  Package: keysPackage,
  Prisma: keysPrisma,
  Python: keysPython,
  React: keysReact,
  ReactRouter: keysReactRouter,
  Yup: keysYup,
  RegExp: keysRegExp,
  RTL: keysRTL,
  SVG: keysSVG,
  Swagger: keysSwagger,
  TanStack: keysTanStack,
  TS: keysTS,
  TSConfig: keysTSConfig,
  TypeORM: keysTypeORM,
  Vue: keysVue,
  MUI: keysMUI,
  Vite: keysVite,
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
