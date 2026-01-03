import { UseFormReturn, Path } from "react-hook-form"
import { ExcelInput } from "."

/**
 * 型
 */
type GenericDataType = Record<string, string | number>

/**
 * テーブルTR: common 型 for ExcelTr & SelectTr
 */
export type CommonTr<T extends GenericDataType> = {
  methods: UseFormReturn<T>
  keyName: keyof T // 属性名
}

/**
 * テーブルTR: Excel tr
 * 状況によってカラム構成が異なるので、特定ページ専用
 */
export const ExcelTr = <T extends GenericDataType>({
  methods,
  keyName,
}: React.PropsWithChildren<CommonTr<T>>) => {
  return (
    <ExcelInput<T>
      methods={methods}
      keyName={`${String(keyName)}` as Path<T>}
    //error={methods.formState.errors?.[keyName]?.message}
    />
  )
}
