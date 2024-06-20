export class A {
  static a: number // 初期値不要
  // コンストラクタ
  static {
    this.a = 1
  }
  //メソッド
  static f(x: number) {
    this.a = x
  }
}

export type Compo = {
  paramNum: number
  paramStr: string
}

// export const CompoA = ({ paramNum, paramStr = 1 }: Compo) => {
//   A.a = 2 // Static値
//   A.f(3) // Static関数

//   return (
//     <>
//       {Array(5)
//         .fill(0)
//         // [eslint] 'n' is defined but never used  @typescript-eslint/no-unused-vars
//         .map((n) => (
//           //[eslint] Missing "key" prop for element in iterator  react/jsx-key
//           <div>
//             {paramNum}
//             {paramStr}
//           </div>
//         ))}
//     </>
//   )
// }
