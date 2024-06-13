import { keysCSS } from "./keys/CSS"
import { keysClassTransformer } from "./keys/ClassTransformer"
import { keysClassValidator } from "./keys/ClassValidator"
import { keysDOM } from "./keys/DOM"
import { keysDocker } from "./keys/Docker"
import { keysEnv } from "./keys/Env"
import { keysExcel } from "./keys/Excel"
import { keysExpress } from "./keys/Express"
import { keysGit } from "./keys/Git"
import { keysHTML } from "./keys/HTML"
import { keysJSTS } from "./keys/JSTS"
import { keysJest } from "./keys/Jest"
import { keysJotai } from "./keys/Jotai"
import { keysLinux } from "./keys/Linux"
import { keysMongo } from "./keys/Mongo"
import { keysMySql } from "./keys/MySql"
import { keysNestjs } from "./keys/Nestjs"
import { keysPackage } from "./keys/Package"
import { keysPackageRHF } from "./keys/PackageRHF"
import { keysPython } from "./keys/Python"
import { keysReact } from "./keys/React"
import { keysRegExp } from "./keys/RegExp"
import { keysSwagger } from "./keys/Swagger"
import { keysTS } from "./keys/TS"
import { keysTypeORM } from "./keys/TypeORM"
import { keysCurl } from "./keys/curl"
import { keysNPM } from "./keys/npm"

export type KeyDef = {
  [index: string]: string[]
}

export const codeKeys = {
  CSS: "CSS",
  HTML: "HTML",
  JSTS: "JSTS",
  TS: "TS",
  DOM: "DOM",
  RegExp: "RegExp",
  React: "React",
  Package: "Package",
  keysPackageRHF: "keysPackageRHF",
  Python: "Python",
  Mongo: "Mongo",
  Docker: "Docker",
  Git: "Git",
  Jest: "Jest",
  Jotai: "Jotai",
  Linux: "Linux",
  MySql: "MySql",
  Curl: "Curl",
  NPM: "NPM",
  TypeORM: "TypeORM",
  ClassValidator: "ClassValidator",
  ClassTransformer: "ClassTransformer",
  Nestjs: "Nestjs",
  Express: "Express",
  Swagger: "Swagger",
  Unknown: "Unknown",
  Env: "Env",
  Excel: "Excel",
} as const

export const defaultSnippetsStyle = codeKeys.Unknown

export type CodeKeyType = (typeof codeKeys)[keyof typeof codeKeys]

export const KeyAndCodes: Record<string, KeyDef> = {
  CSS: keysCSS,
  HTML: keysHTML,
  JSTS: keysJSTS,
  TS: keysTS,
  DOM: keysDOM,
  RegExp: keysRegExp,
  React: keysReact,
  Package: keysPackage,
  keysPackageRHF: keysPackageRHF,
  Python: keysPython,
  Mongo: keysMongo,
  Docker: keysDocker,
  Git: keysGit,
  Jest: keysJest,
  Jotai: keysJotai,
  Linux: keysLinux,
  MySql: keysMySql,
  Curl: keysCurl,
  NPM: keysNPM,
  TypeORM: keysTypeORM,
  ClassValidator: keysClassValidator,
  ClassTransformer: keysClassTransformer,
  Nestjs: keysNestjs,
  Express: keysExpress,
  Swagger: keysSwagger,
  Env: keysEnv,
  Excel: keysExcel,
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
