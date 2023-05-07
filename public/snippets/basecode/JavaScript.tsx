import { useMemo } from "react"

//-------------------------------
// JSON
//-------------------------------
namespace JSONs {
  //構造付log
  //js.log.json
  console.log(JSON.stringify(obj, undefined, 3))
}

//-------------------------------
// Object
//-------------------------------
namespace objects {
  //js.obj.isObject
  const isObject = (obj: any) => {
    return obj !== null && typeof obj === "object"
  }

  //js.obj.isEmpty
  // new Date() も 0 対策
  const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  //object から値が undefined を削除
  //js.obj.removeUndefined
  const removeUndefined = (obj: object) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([, v]) => v !== undefined)
    )
  }

  //js.obj.deepCopyNG
  //Undefined が削除される
  const deepCopyNG = (objOrArr: object) => {
    return JSON.parse(JSON.stringify(objOrArr))
  }

  //js.obj.shallowCopy
  //配列 & 階層限定のコピー
  const shallowCopy = <T,>(arr: T[]) => {
    return arr.map((list) => ({ ...list }))
  }

  //js.obj.deepCopyLodash
  //npm i --save lodash
  // import _ from "lodash"
  // let copyLists = _.cloneDeep(lists)
}

//Object -> Array
//js.arr.obj2arr
namespace obj2arr {
  const objArr = { id: 23, name: "apple", address: "Tokyo" }
  const arr = Object.entries(objArr)
  console.log(arr)
}

//-------------------------------
// Map
//-------------------------------
namespace map {
  //Object -> Map
  //js.map.obj2map
  namespace obj2map {
    const objArr = [
      { id: 23, name: "apple" },
      { id: 45, name: "orange" },
    ]
    const map = new Map<number, string>(
      objArr.map(({ id, name }) => [id, name])
    )
    console.log(map)
  }

  //Map -> Array
  //js.arr.map2arr
  namespace map2arr {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ])
    const arr = Array.from(map)
    console.log(arr)
  }

  //Map -> Object
  //js.obj.map2obj
  namespace map2obj {
    const map = new Map([
      [1, "a"],
      [2, "b"],
    ])
    const obj = Object.fromEntries(map)
    console.log(obj)
  }
}

//-------------------------------
// 連番
//-------------------------------
namespace array {
  //連番配列作成
  //js.arr.sequence
  const arrNumbers1 = [...Array(20)].map((_, idx) => idx)
  const arrNumbers2 = Array.from({ length: 20 }, (_, i) => i)

  //数配列の平均値
  //js.arr.average
  const getAverage = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length

  // フィッシャーイェーツの配列シャッフルアルゴリズム
  // js.arr.shuffle
  const shuffleArray_FisherYates = (arrParam: number[]) => {
    let arr = [...arrParam]
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }
}

//-------------------------------
// 乱数
//-------------------------------
namespace random {
  //ランダム数
  //js.number.randomDigit
  const getRandomDigit = (digit: number) => {
    return Math.floor(Math.random() * 10 ** digit)
  }

  //ランダム数
  //js.number.randomMinMax
  const getRandomMinMax = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  //ランダム文字列(*useMemo必須)
  // js.string.randomValueID
  const randStr1 = useMemo(() => window.crypto.randomUUID(), [])
  const typedArray = new Uint32Array(6)
  const randStr2 = useMemo(() => window.crypto.getRandomValues(typedArray), [])
}

//-------------------------------
// 処理時間計測
//-------------------------------
namespace performance {
  //処理時間計測
  //js.function.performance
  const performanceAbout = (func: () => void) => {
    const startTime = Date.now()
    func()
    console.log(`経過時間: ${Date.now() - startTime}`)
  }

  //js.function.performanceAccurate
  const performanceAccurate = (func: () => void) => {
    const start = performance.now()
    func()
    const elapsed = performance.now() - start
    const elapsedStr = elapsed.toPrecision(3)
    console.log(`経過時間: ${elapsedStr}`)
  }
}
