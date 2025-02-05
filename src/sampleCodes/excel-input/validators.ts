// 数字とピリオド(数字末がピリオドで終了を許容 *入力時に.でvalidationエラー)

// 正の実数(半角)
const regExpNumber = /^(0|[1-9]\d*)(\.\d*)?$/

// 0を含まない正の実数(半角)
const regExpNumberNonZero = /^(([1-9]\d*)(\.[0-9]+)?|0\.\d*[1-9]\d*)$/

// 正の整数(半角)
const regExpIntegerNoZero = /^([1-9]|[1-9]\d*)?$/

// 0を含まない正の整数(半角)=自然数
const regExpInteger = /^(0|[1-9]\d*)?$/

// 日付+時間(秒なし)
const regExpDateTimeNoSec =
  /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]$/

const numberOnly = {
  pattern: {
    value: regExpNumber,
    message: "半角数字を入力してください",
  },
}

const numberNonZero = {
  pattern: {
    value: regExpNumberNonZero,
    message: "0を超える半角数字を入力してください",
  },
}

const integerOnly = {
  pattern: {
    value: regExpInteger,
    message: "半角整数を入力してください",
  },
}

const integerNoZero = {
  pattern: {
    value: regExpIntegerNoZero,
    message: "1以上の半角整数を入力してください",
  },
}

const numberOnlyRequired = {
  required: "半角数字を入力してください",
  pattern: {
    value: regExpNumber,
    message: "半角数字を入力してください",
  },
}

const integerOnlyRequired = {
  required: "半角整数を入力してください",
  pattern: {
    value: regExpInteger,
    message: "半角整数を入力してください",
  },
}

const dateTimeNoSec = {
  pattern: {
    value: regExpDateTimeNoSec,
    message: "日付(YYYY/MM/DD HH:MM)を入力してください",
  },
}

const validators = {
  numberOnly: numberOnly,
  numberOnlyRequired: numberOnlyRequired,
  numberNonZero: numberNonZero,
  integerOnly: integerOnly,
  integerOnlyRequired: integerOnlyRequired,
  integerNoZero: integerNoZero,
  dateTimeNoSec: dateTimeNoSec,
}

export default validators
