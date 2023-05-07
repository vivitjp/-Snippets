// React でない ts のクロージャ

export const useClosure = () => {
  let valueArr: string[] = [""]

  console.log("useClosure Called")

  return {
    valueArr,
    setValueArr: (val: string) => {
      valueArr[0] = val
    },
    getValueArr: () => {
      console.log(`valueArr: ${valueArr[0]}`)
      return valueArr[0]
    },
  }
}
