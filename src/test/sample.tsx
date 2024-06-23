// import { useEffect, useState } from "react"

// export class A {
//   static a: number // 初期値不要
//   // コンストラクタ
//   static {
//     this.a = 1
//   }
//   //メソッド
//   static f(x: number) {
//     this.a = x
//   }
// }

// export type Compo = {
//   paramNum: number
//   paramStr: string
// }

// const method = async () => {
//   return await 1
// }

// export const CompoA = ({ paramNum, paramStr = 1 }: Compo) => {
//   const [state, setState] = useState("")

//   A.a = 2 // Static値
//   A.f(3) // Static関数

//   useEffect(() => {
//     const res = method()
//     setState(res)
//   })

//   return (
//     <>
//       {Array(5)
//         .fill(0)
//         // [@typescript-eslint/no-unused-vars] 'n' is defined but never used
//         .map((n) => (
//           //[react/jsx-key] Missing "key" prop for element in iterator
//           <div>
//             {paramNum}
//             {paramStr}
//           </div>
//         ))}
//     </>
//   )
// }
