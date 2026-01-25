export const Sunabar1 = () => {

  type Props = {
    a: string;
  }

  const func1 = (props: Props) => props.a

  const a = { a: "a", b: "b" }
  //const b = { b: "b" }

  func1(a)                     // ⭕ 多属性の間接代入
  //func1({ a: "a", b: "b" })    // ❌ 多属性の直接代入
  //func1(b)                     // ❌ 属性不足


  type PropsWithRest = {
    a: string;
    [x: string]: unknown      // 余分引数の受け先追加 
  }

  const func2 = (props: PropsWithRest) => props.a

  // 多属性の直接代入 OK!
  func2(a)                     // ⭕ 多属性の間接代入
  func2({ a: "a", b: "b" })    // ⭕ 多属性の直接代入
  //func2(b)                     // ❌ 属性不足

}

export const sunabar2 = () => {
  type Employee = {
    id: number
  }

  type TempWorker = {
    sid: number
  }

  const isMember = (props: Employee | TempWorker): props is Employee => {
    return 'id' in props && typeof (props as Employee).id === "number"
  }

  const addMember = (props: Employee | TempWorker): string => {
    if (isMember(props)) {
      return "ABC"
    } else {
      return "XYZ"
    }
  }

  const result = addMember({ id: 123 })
  console.log(result)   // "ABC"
}

export const Sample: React.FC = () => {
  return (
    <><div>Check code</div></>
  )
}
