import { YAMLData, Snippets } from "../../types/type"
import { getLocalYmlFile } from "./getLocalYmlFile"

export const makeSnippets = async ({
  file,
  scope,
}: {
  file: string
  scope: string
}) => {
  const jsonData = (await getLocalYmlFile({
    path: file,
  })) as YAMLData[]
  if (!jsonData) return undefined

  //Preflight 検査
  const keys = new Set<string>()
  const dupKeys: string[] = []

  jsonData.forEach(({ KEY, EXPLAIN }) => {
    const key = EXPLAIN ?? KEY

    if (keys.has(key)) {
      if (!dupKeys.length)
        dupKeys.push("■ 以下の EXPLAIN or KEY に重複があります")
      dupKeys.push(key)
    } else {
      keys.add(key)
    }
  })
  if (dupKeys.length) return dupKeys

  //Snippets Making
  const returnData: Snippets = {}
  jsonData.forEach(({ KEY, BODY, EXPLAIN }) => {
    const key = EXPLAIN ?? KEY
    returnData[key] = {
      prefix: KEY,
      body: BODY?.split("\n"),
    }
    if (scope) returnData[key].scope = scope
  })
  return returnData
}
