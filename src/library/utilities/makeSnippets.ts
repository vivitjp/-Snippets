import { YAMLData, Snippets } from "../../types/type"
import { getLocalYmlFile } from "./getLocalYmlFile"

type Props = {
  file: string
  scope: string
}

export const makeSnippets = async ({ file, scope }: Props) => {
  const jsonData = (await getLocalYmlFile({
    path: file,
  })) as YAMLData[]
  if (!jsonData) return

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
    return
  }

  //Snippets Making
  const returnData: Snippets = {}
  try {
    jsonData.forEach(({ KEY, BODY, EXPLAIN, OPTIONS, SAMPLE, STYLE }) => {
      const key = EXPLAIN ?? KEY
      returnData[key] = {
        prefix: KEY,
        body: BODY?.trim().split("\n"),
      }
      if (OPTIONS) returnData[key].options = OPTIONS
      if (scope) returnData[key].scope = scope
      if (SAMPLE) {
        if (SAMPLE === "BODY") {
          returnData[key].sample = BODY
        } else {
          returnData[key].sample = SAMPLE
        }
      }
      if (STYLE) returnData[key].style = STYLE
    })
  } catch (error) {
    console.log("error")
  }

  return returnData
}
