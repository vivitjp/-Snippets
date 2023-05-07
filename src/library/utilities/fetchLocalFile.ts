//---------------------
// ローカルファイル読み込み
//---------------------

type Props = {
  path: string
}

export const fetchLocalFile = async ({ path }: Props) => {
  //Fileオープン

  try {
    if (!path) throw Error("fetch file error")
    const response = await fetch(path)
    const reader = response.body?.getReader()
    if (!reader) throw Error("読み込み不可")
    const rawData = await reader.read()
    const content = rawData.value
    return content
  } catch (error) {
    return undefined
  }
}
