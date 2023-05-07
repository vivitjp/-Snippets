const Scopes = { ReactTypeScript: "typescriptreact", TypeScript: "typescript" }

export const scopeOptions = Object.entries(Scopes).map(([key, value]) => ({
  title: key,
  value,
}))
