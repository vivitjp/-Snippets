class A {
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
A.a = 2 // Static値
A.f(3) // Static関数
