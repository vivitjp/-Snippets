/**
 * 正規表現
 */
// 数字とピリオド

import { mathLib } from "../../library/utilities/mathLib"

// *数字末がピリオドで終了を許容(理由: *入力時に.でvalidationエラー)
const regExpNumber = new RegExp(/^[+-]?(0|[1-9]\d*)(\.\d*)?$/)

// 非フォーマット文字群(このまま表示)
const EXEMPTION = ["－", "#VALUE!"]
// 空文字に変換
const SET_EMPTY_SPACE = ["undefined"]

// Intl フォーマッタ
const IntlFormatter = (fp: number) => (value: number) => {
  return new Intl.NumberFormat("ja", {
    minimumFractionDigits: fp > 0 ? fp : 0,
    maximumFractionDigits: fp > 0 ? fp : 0,
  }).format(value)
}

/** ----------------------------------------------------------------
 * 引数としてカリー関数を用いる場合
 * それぞれのコンポネントで第一引数を定義したメソッドを作成してから、
 * コールバック引数として使用
 * 例: const roundWithFP2 = formatter.roundWithFP(2);
 *     小数点第2位で四捨五入するメソッド
 ---------------------------------------------------------------- */

/**
 * 四捨五入フォーマッタ関数   *カリー関数
 * @param value 元値(文字列)
 * @param fp 小数点桁数
 * @returns 指定小数点で四捨五入した値(文字列)
 * ExcelとJSでの四捨五入の差異補正
 */
const roundWithFP =
  (fp: number, prefix = "", postfix = "") =>
  (value: string) => {
    if (!value || EXEMPTION.includes(value)) return value
    if (regExpNumber.test(value)) {
      return (
        prefix + IntlFormatter(fp)(mathLib.round(Number(value), fp)) + postfix
      )
    } else {
      return SET_EMPTY_SPACE.includes(value) ? "" : prefix + value + postfix
    }
  }

/**
 * 切り上げ関数   *カリー関数
 * @param value 元値(文字列)
 * @param fp 小数点桁数
 * @returns 指定小数点で切り上げした値(文字列)
 */
const roundUpWithFP =
  (fp: number, prefix = "", postfix = "") =>
  (value: string) => {
    if (!value || EXEMPTION.includes(value)) return value
    if (regExpNumber.test(value)) {
      return (
        prefix + IntlFormatter(fp)(mathLib.roundUp(Number(value), fp)) + postfix
      )
    } else {
      return SET_EMPTY_SPACE.includes(value) ? "" : prefix + value + postfix
    }
  }

/**
 * 切り下げ関数   *カリー関数
 * @param value 元値(文字列)
 * @param fp 小数点桁数
 * @returns 指定小数点で切り下げした値(文字列)
 */
const roundDownWithFP =
  (fp: number, prefix = "", postfix = "") =>
  (value: string) => {
    if (!value || EXEMPTION.includes(value)) return value
    if (regExpNumber.test(value)) {
      return (
        prefix +
        IntlFormatter(fp)(mathLib.roundDown(Number(value), fp)) +
        postfix
      )
    } else {
      return SET_EMPTY_SPACE.includes(value) ? "" : prefix + value + postfix
    }
  }

/**
 * パーセント表示(小数点対応)関数   *カリー関数
 * @param value 元値(文字列)
 * @param fp 小数点桁数
 * @returns 指定小数点で四捨五入した値(文字列)
 * ExcelとJSでの四捨五入の差異補正
 */
const percentWithFP =
  (fp = 2, prefix = "", postfix = "") =>
  (value: string) => {
    if (!value || EXEMPTION.includes(value)) return value
    if (regExpNumber.test(value)) {
      const formatter = new Intl.NumberFormat("ja", {
        style: "percent",
        minimumFractionDigits: fp,
        maximumFractionDigits: fp,
      })
      return (
        prefix +
        formatter.format(mathLib.round(Number(value), fp) / 100) +
        postfix
      )
    } else {
      return SET_EMPTY_SPACE.includes(value) ? "" : prefix + value + postfix
    }
  }

/**
 * パーセント表示(小数点対応)関数   *カリー関数
 * @param value 元値(文字列: 0.23 などの Max 1 とする指数)
 * @param fp 小数点桁数
 * @returns 指定小数点で四捨五入した値(文字列: "23%")
 * ExcelとJSでの四捨五入の差異補正
 */
const percentWithFPByMax1 =
  (fp = 2, prefix = "", postfix = "") =>
  (value: string) => {
    if (!value || EXEMPTION.includes(value)) return value
    if (regExpNumber.test(value)) {
      const formatter = new Intl.NumberFormat("ja", {
        style: "percent",
        minimumFractionDigits: fp,
        maximumFractionDigits: fp,
      })
      return (
        prefix +
        formatter.format(mathLib.round(Number(value), fp + 2)) +
        postfix
      ) //2桁遡上
    } else {
      return SET_EMPTY_SPACE.includes(value) ? "" : prefix + value + postfix
    }
  }

/**
 * 正の絶対値数のゼロ埋め(負の数、小数点はすべて除外) * 非カリー関数
 * @param value : 数
 * @param targetLen: 戻り値の桁数
 * @returns ゼロ埋め数
 */
const zeroPadding = (value: number, targetLen: number) => {
  if (!value || targetLen <= 0) return value
  const absValue = String(Math.trunc(Math.abs(value)))
  return Array(targetLen - absValue.length + 1).join("0") + absValue
}

/**
 * Prefixをつける
 * @param prefix
 * @returns
 */
const prefix = (prefix: string) => (value: string) => {
  if (!value || !prefix) return value
  if (value == "") return value
  return `${prefix}${value}`
}

/**
 * Postfixをつける
 * @param postfix
 * @returns
 */
const postfix = (postfix: string) => (value: string) => {
  if (!value || !postfix) return value
  if (value == "") return value
  return `${value}${postfix}`
}

/**
 * 値を()で囲む
 */
const brackets_percentWithFP = (fp: number) => (value: string) => {
  if (!value || !prefix) return value
  if (value == "") return value
  value = roundDownWithFP(fp)(value)
  return `(${value})`
}

/**
 * 文字列で括る
 * @param prefix
 * @param postfix
 * @returns
 */
const wrapText =
  (prefix = "(", postfix = ")") =>
  (value: string) => {
    return `${prefix}${value}${postfix}`
  }

/**
 * フォーマッター関数オブジェクト
 */
export const formatter = {
  roundWithFP,
  roundUpWithFP,
  roundDownWithFP,
  percentWithFP,
  percentWithFPByMax1,
  zeroPadding,
  wrapText,
  prefix,
  postfix,
  brackets_percentWithFP,
} as const

/**
 * カリー関数から取得したコールバック用関数の型
 * 引数->引数で型が決まっている
 */
export type Formatter = (value: string) => string
