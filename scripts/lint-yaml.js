#!/usr/bin/env node
import fs from "fs"
import path from "path"
import YAML from "yaml"

const root = process.cwd()
const target = path.join(root, "public", "snippets")

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const ent of entries) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      walk(p)
    } else if (ent.isFile() && (p.endsWith(".yml") || p.endsWith(".yaml"))) {
      try {
        const src = fs.readFileSync(p, "utf8")
        YAML.parse(src)
        console.log("OK", p)
      } catch (e) {
        console.error("ERROR", p)
        console.error(e && e.message ? e.message : String(e))
        process.exitCode = 2
      }
    }
  }
}

try {
  if (!fs.existsSync(target)) {
    console.error("TARGET_NOT_FOUND", target)
    process.exit(2)
  }
  walk(target)
  if (process.exitCode && process.exitCode !== 0) process.exit(process.exitCode)
  process.exit(0)
} catch (err) {
  console.error("WALK_ERROR", err && err.message ? err.message : String(err))
  process.exit(2)
}
