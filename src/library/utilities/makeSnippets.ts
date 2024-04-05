import { YAMLData, Snippets } from "../../types/type"
import { CodeKeyType } from "../syntaxHighlighter/getKey"
import { getLocalYmlFile } from "./getLocalYmlFile"

export const makeSnippets = async ({
  file,
  scope,
  codeKeyType,
}: {
  file: string
  scope: string
  codeKeyType?: CodeKeyType
}) => {
  const jsonData = (await getLocalYmlFile({
    path: file,
  })) as YAMLData[]
  if (!jsonData) return []

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
  if (dupKeys.length) {
    console.log("重複あり")
    dupKeys.forEach((key, val) => {
      console.log("K:", key, "V:", val)
    })
    return dupKeys
  }

  //Snippets Making
  const returnData: Snippets = {}
  try {
    jsonData.forEach(({ KEY, BODY, EXPLAIN }) => {
      const key = EXPLAIN ?? KEY
      returnData[key] = {
        prefix: KEY,
        body: BODY?.split("\n"),
        codeKeyType: codeKeyType ?? "Unknown",
      }
      if (scope) returnData[key].scope = scope
    })
  } catch (error) {
    console.log("error")
  }
  return returnData
}
