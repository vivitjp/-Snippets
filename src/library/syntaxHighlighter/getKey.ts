import { KeyDef } from "../../types/type"
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
import { keysMySql } from "./keys/MySql"
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

// 以下のオブジェクトをソートしてください
export const codeKeys = {
  AWSCloud: "AWSCloud",
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
  Jest: "Jest",
  Jotai: "Jotai",
  JSTS: "JSTS",
  keysPackageRHF: "keysPackageRHF",
  Lint: "Lint",
  Linux: "Linux",
  Mongo: "Mongo",
  MySql: "MySql",
  Nestjs: "Nestjs",
  Nextjs: "Nextjs",
  NPM: "NPM",
  Package: "Package",
  Prisma: "Prisma",
  Python: "Python",
  React: "React",
  RegExp: "RegExp",
  RTL: "RTL",
  SVG: "SVG",
  Swagger: "Swagger",
  TS: "TS",
  TSConfig: "TSConfig",
  TypeORM: "TypeORM",
  Unknown: "Unknown",
  Vue: "Vue",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const KeyAndCodes: Record<string, KeyDef> = {
  AWSCloud: keysAWSCloud,
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
  Jest: keysJest,
  Jotai: keysJotai,
  JSTS: keysJSTS,
  keysPackageRHF: keysPackageRHF,
  Lint: keysLint,
  Linux: keysLinux,
  Mongo: keysMongo,
  MySql: keysMySql,
  Nestjs: keysNestjs,
  Nextjs: keysNextjs,
  NPM: keysNPM,
  Package: keysPackage,
  Prisma: keysPrisma,
  Python: keysPython,
  React: keysReact,
  RegExp: keysRegExp,
  RTL: keysRTL,
  SVG: keysSVG,
  Swagger: keysSwagger,
  TS: keysTS,
  TSConfig: keysTSConfig,
  TypeORM: keysTypeORM,
  Vue: keysVue,
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
