import { parse } from "papaparse"
import { useDecodeFile } from "../utilities/decodeUint8Array"
import { useFetchLocalFile } from "../utilities/fetchLocalFile"
import { useCallback } from "react"

type Props = {
  path: string
}

type Code = "shift_jis" | "utf8"

export const useGetLocalFile = ({ path }: Props) => {
  const { decodeUint8Array } = useDecodeFile()
  const { fetchLocalFile } = useFetchLocalFile()

  const getLocalFile = useCallback(
    async ({ code = "shift_jis" }: { code?: Code }) => {
      //Fetch local file raw data
      const rawData = await fetchLocalFile({ path })
      if (!rawData) {
        console.log("No Raw data")
        return Promise.resolve([])
      }

      //Decode
      const content = decodeUint8Array({ data: rawData, code: code })

      if (content) {
        const decoded = parse(content).data as string[][]
        console.log("Data Resolved")
        return Promise.resolve(decoded)
      } else {
        console.log("Data Decoded Resolved")
        return Promise.resolve([])
      }
    },
    [path]
  )

  return { getLocalFile }
}
