import { parse as yamlParse } from "yaml"
import { decodeUint8Array } from "./decodeUint8Array"
import { fetchLocalFile } from "./fetchLocalFile"

type Code = "shift_jis" | "utf8"

export const getLocalYmlFile = async ({
  path,
  code = "utf8",
}: {
  path: string
  code?: Code
}) => {
  //Fetch local file raw data
  const rawData = await fetchLocalFile({ path })
  if (!rawData) {
    console.log("No Raw data")
    return Promise.resolve([])
  }

  //Decode
  const content = decodeUint8Array({ data: rawData, code })

  if (content) {
    const decodedJson = yamlParse(content)
    //console.log("Data Resolved")
    return Promise.resolve(decodedJson)
  } else {
    console.log("Data Decoded Resolved")
    return Promise.resolve([])
  }
}
