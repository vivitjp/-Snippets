/**
 * 数学ライブラリ
 * ・Excel処理とJS処理の違いを吸収してExcelに合致
 * ・任意の小数点、任意の桁数での数値加工可能
 * ・フォーマットは別途必要(例: Intl.NumberFormat())
 */

/**
 * 四捨五入
 * @param value 数値
 * @param fp 整数:少数点,マイナスで任意の桁
 * @returns 四捨五入された数値
 */
const round = (value: number, fp = 0) => {
  const k = value < 0 ? -1 : 1
  return (k * Math.round(value * k * 10 ** fp)) / 10 ** fp
}

/**
 * 切り上げ
 * @param value 数値
 * @param fp 整数:少数点,マイナスで任意の桁
 * @returns 切り上げされた数値
 */
const roundUp = (value: number, fp = 0) => {
  const k = value < 0 ? -1 : 1
  return (k * Math.ceil(value * k * 10 ** fp)) / 10 ** fp
}

/**
 * 切り下げ
 * @param value 数値
 * @param fp 整数:少数点,マイナスで任意の桁
 * @returns 切り下げされた数値
 */
const roundDown = (value: number, fp = 0) => {
  const k = value < 0 ? -1 : 1
  return (k * Math.floor(value * k * 10 ** fp)) / 10 ** fp
}

/**
 * Excel Ceiling(指定基準値の最も近い倍数に数値切り上げ)
 * @param value 数値
 * @param significance 倍数の基準値
 *    以下、エクセルと仕様一致
 *    1) 0値では 0 を返す
 *    2) マイナス値では null を返す
 * @param fp 整数:少数点
 * @returns 切り上げ後、丸め誤差を削除した数値
 */
const ceiling = (target: number, significance: number, fp: number) => {
  if (significance === 0) return 0
  if (significance < 0) return null
  return (
    Math.round(Math.ceil(target / significance) * significance * 10 ** fp) /
    10 ** fp
  )
}

/**
 * MIN ＆ MAX
 * @param 文字列数字配列(["","20","10"]) 空文字対応
 * @returns 空白や０以外で最も MIN/MAX を"数値"で返す
 *
 * エクセルの MIN(PARAM1[, PARAM2,...])は空白を除外するが、
 * JSの Math.min関数は0も精査するので、簡単な置換では戻り値に違いがでる。
 */

function min(...args: string[]) {
  return args.reduce((acc, cur) => {
    const curNum = Number(cur)
    if (isNaN(curNum) || cur === "") return acc
    return acc === null || (acc !== null && acc > curNum) ? curNum : acc
  }, null as null | number)
}

function max(...args: string[]) {
  return args.reduce((acc, cur) => {
    const curNum = Number(cur)
    if (isNaN(curNum) || cur === "") return acc
    return acc === null || (acc !== null && acc < curNum) ? curNum : acc
  }, null as null | number)
}

export const mathLib = {
  round,
  roundUp,
  roundDown,
  ceiling,
  min,
  max,
}
