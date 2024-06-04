import { KeyDef } from "../syntaxHighlighter"

export const keysNPM: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "Crimson",
    keys: ["node", "npm", "npx", "require"],
  },

  // ■ 緑青
  {
    color: "RoyalBlue",
    keys: [
      "add",
      "audit",
      "bin",
      "cache",
      "ci",
      "clean",
      "config",
      "dedupe",
      "dir",
      "env",
      "fix",
      "help",
      "init",
      "info",
      "install",
      "ls",
      "list",
      "la",
      "ll",
      "publish",
      "outdated",
      "remove",
      "root",
      "run",
      "un",
      "uninstall",
      "update",
      "upgrade",
      "verify",
      "version",
    ],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: [
      "dev",
      "force",
      "json",
      "depth",
      "name",
      "description",
      "keyword",
      "main",
      "scripts",
      "author",
      "license",
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
      "bundledDependencies",
      "repository",
      "engines",
      "acceptDependencies",
      "exports",
      "type",
      "private",
      "save",
      "url",
    ],
  },
  // ■ ゴールド
  {
    color: "Goldenrod",
    keys: ["node_modules", "module"],
  },
  // ■ オレンジ
  {
    color: "DarkOrange",
    keys: ["yarn"],
  },
  // ■ グレー
  {
    color: "#555",
    keys: [],
  },
  // ■ 青緑
  {
    color: "CadetBlue",
    keys: ["major", "minor", "patch"],
  },
  // ■ 紫
  {
    color: "DarkOrchid",
    keys: ["package", "package名"],
  },
]
