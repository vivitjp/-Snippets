import { Box, Input, InputProps, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { CSSProperties, forwardRef } from "react"
import { useEffect, useRef } from "react"
import { Path, UseFormReturn, useWatch } from "react-hook-form"
import { Formatter } from "./formatters"

const COLOR = {
  BG: "#F1F1F1", // タイトル&UNITの背景色
  READONLY: "#F7F7F7",
  FROZEN: "#EEEEEE",
  BORDER: "#EDDEDE",
} as const

/** ExcelInput 関連型 */
const ExcelWrapper = Box

// この Wrapper で表示ON/OFFを行う。RHFで生成された Ref は使用不可
// 表示OFFにしないとタブ移動がスムーズにいかない
const ExcelInputWrapper = styled.div`
  position: absolute;
  left: -9999px;
  top: -9999px;
`

type FieldValues = Record<string, unknown>
export type ExcelInputProps<T extends FieldValues> = InputProps & {
  methods: UseFormReturn<T>
  keyName: Path<T>
  validator?: Record<string, unknown>
  formatter?: Formatter
  error?: string
  readOnly?: boolean
  textAlign?: CSSProperties["textAlign"]
  backgroundColor?: CSSProperties["backgroundColor"]
  borderLeft?: CSSProperties["border"]
}

/**
 * Excelのセルのように実際値と表示値を管理
 * onFocusで実際値(input)が表示され、onBlurで表示値が表示される
 * 実際値を隠すのにdisplay:noneを使うとSubmit時のエラー項目へのFocusが効かないので
 * 実際値は表示場所を画面外にすることで隠す
 */
export const ExcelInput = <T extends FieldValues>({
  methods,
  keyName,
  validator,
  formatter,
  error = "",
  readOnly = false,
  textAlign = "left",
  backgroundColor,
  borderLeft,
  ...props
}: ExcelInputProps<T>) => {
  //実際値の追跡
  const inputWatch = useWatch({
    control: methods.control,
    name: keyName,
  }) as string
  //表示切替
  const refInputWrapper = useRef<HTMLDivElement>(null)
  const refDisplay = useRef<HTMLInputElement>(null)

  //実際値Inputから離脱時(実際値を隠し表示用を見せる)
  const onBlurInput = () => {
    if (refDisplay.current && refInputWrapper.current) {
      refDisplay.current.style.setProperty("display", "block")
      refInputWrapper.current.style.setProperty("position", "absolute")
      refInputWrapper.current.style.setProperty("top", "-9999px")
      refInputWrapper.current.style.setProperty("left", "-9999px")
      refInputWrapper.current.style.setProperty("tabindex", "-1")
    }
  }
  //表示用inputにFocusした際(表示用を隠し実際値を見せる)
  const onFocusDisplay = () => {
    if (refDisplay.current && refInputWrapper.current) {
      refInputWrapper.current.style.setProperty("position", "relative")
      refInputWrapper.current.style.setProperty("top", "0")
      refInputWrapper.current.style.setProperty("left", "0")
      refInputWrapper.current.style.setProperty("tabindex", "0")
      refDisplay.current.style.setProperty("display", "none")
      methods.setFocus(keyName) //実際値InputにFocus
      const scrollTarget = refInputWrapper.current
      if (scrollTarget) {
        if (isElementOutOfViewport(scrollTarget)) {
          // RHFの挙動に合わせるため、エラー項目要素が画面外にあるならcenterにくるようスクロール
          scrollTarget.scrollIntoView({
            block: "center",
            behavior: "auto",
          })
        } else {
          // RHFの挙動に合わせるため、エラー項目要素の一部でも画面内にあるなら全部が画面内に収まるまでスクロール
          scrollTarget.scrollIntoView({
            block: "nearest",
            behavior: "auto",
          })
        }
      }
    }
  }
  //実際値InputにFocusした際(表示用を隠し実際値を見せる※RHFはSubmit時にエラー項目にFocusするため)
  const onFocusInput = onFocusDisplay

  //Format：コールバック関数使用
  useEffect(() => {
    if (refDisplay.current) {
      refDisplay.current.value = formatter ? formatter(inputWatch) : inputWatch
    }
  }, [inputWatch])

  return (
    <>
      <ExcelWrapper width={props.width} height={"100%"}>
        <ExcelInputWrapper ref={refInputWrapper}>
          <ExcelInputActualValue
            tabIndex={refInputWrapper.current?.tabIndex}
            error={error}
            {...props}
            {...methods.register(keyName, validator)}
            readOnly={readOnly}
            onBlurInput={onBlurInput}
            onFocusInput={onFocusInput}
            textAlign={textAlign}
            backgroundColor={backgroundColor}
          />
        </ExcelInputWrapper>
        <ExcelDisplayValue
          {...props}
          ref={refDisplay}
          readOnly={readOnly}
          error={error}
          onFocusDisplay={onFocusDisplay}
          textAlign={textAlign}
          backgroundColor={backgroundColor}
          borderLeft={borderLeft}
        />
        {error && (
          <Text color="red.400" fontSize="10px">
            {error}
          </Text>
        )}
      </ExcelWrapper>
    </>
  )
}

/** InputPropsを拡張してerrorを渡せるようにしたもの */
type ExcelInputActualValue = InputProps & {
  error?: string
  onBlurInput: () => void
  onFocusInput: () => void
  backgroundColor?: CSSProperties["backgroundColor"]
}

/**
 * 実際の値を保存,取得する input コンポーネント
 */
const ExcelInputActualValue = forwardRef<HTMLInputElement, ExcelInputActualValue>(
  ({ error, onBlurInput, onFocusInput, backgroundColor, ...props }, ref) => {
    const readonly =
      props.readOnly || props.readOnly || props.disabled || props.disabled
    const placeHolder =
      readonly && props.placeholder === undefined
        ? "自動計算"
        : props.placeholder

    return (
      <Input
        textAlign="left"
        fontSize="10px"
        border="none"
        p="8px"
        size="sm"
        minH="2rem"
        bg={error ? "lightRed" : "inherit"}
        _placeholder={{ fontSize: "10px" }}
        placeholder={placeHolder}
        _focus={{ border: "none", p: "7px" }}
        // disabledだと値も取れなくなるのでdisabledは使わずreadonlyを使います
        disabled={false}
        readOnly={readonly}
        _readOnly={{
          // 入力不可項目は入力できなさそうな見た目にする
          _focus: { border: "none", p: "8px" },
          background: "disabled",
        }}
        tabIndex={readonly ? -1 : 0} //ReadOnlyではタブを止めない
        autoComplete="off"
        {...props}
        width="100%"
        ref={ref}
        onBlur={onBlurInput}
        onFocus={onFocusInput}
        backgroundColor={backgroundColor}
      />
    )
  }
)

type ExcelDisplayValueProps = InputProps & {
  error?: string
  onFocusDisplay: () => void
  textAlign?: CSSProperties["textAlign"]
  backgroundColor?: CSSProperties["backgroundColor"]
  borderLeft?: CSSProperties["border"]
}

/**
 * 表示用の値保存 input コンポーネント
 *   *divやspanではタブ移動のfocusイベントに対応できない
 *   *useRefによる操作のため、ChakraInputではなく通常input使用
 */
const ExcelDisplayValue = forwardRef<HTMLInputElement, ExcelDisplayValueProps>(
  (
    { error, onFocusDisplay, textAlign, backgroundColor, borderLeft, ...props },
    ref
  ) => {
    const readonly =
      props.readOnly || props.readOnly || props.disabled || props.disabled
    const placeHolder =
      readonly && props.placeholder === undefined
        ? "自動計算"
        : props.placeholder

    const bgColorArranged = readonly
      ? COLOR.READONLY
      : error
        ? "#FAEAEA"
        : backgroundColor
    return (
      <ViewInput
        ref={ref}
        onFocus={onFocusDisplay}
        placeholder={placeHolder}
        disabled={false}
        readOnly={readonly}
        tabIndex={readonly ? -1 : 0} //ReadOnlyではタブを止めない
        style={{
          textAlign,
          backgroundColor: bgColorArranged,
          borderLeft: borderLeft,
        }}
      />
    )
  }
)

const ViewInput = styled.input(
  {
    height: "18px",
    width: "100%",
    fontSize: "10px",
    padding: "8px",
    minHeight: "2rem",
  },
  (props) => ({
    textAlign: props.style?.textAlign ? props.style?.textAlign : "left",
  })
)

/** 要素が完全にビューポート外にあるかどうかを判定する */
const isElementOutOfViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  return !(
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

