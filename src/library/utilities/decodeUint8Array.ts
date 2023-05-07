//---------------------
// Raw ファイルデコード
// T: Uint8Array
//---------------------
export type DECODE_CODE = "shift_jis" | "utf8"

export const decodeUint8Array = ({
  data,
  code,
}: {
  data: Uint8Array | undefined //TODO: Generic化すること
  code: DECODE_CODE
}) => {
  try {
    if (!data) throw Error("No data to be decoded")
    const decoder = new TextDecoder(code as unknown as string)
    return decoder.decode(data)
  } catch (error) {
    return undefined
  }
}
