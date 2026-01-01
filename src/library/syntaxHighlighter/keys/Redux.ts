import { KeyDef } from "../../../types/type"

export const keysRedux: KeyDef = {
  // ■ Main(赤) - 主要概念、ライブラリ、パターン
  Crimson: [
    "Redux",
    "Redux Toolkit",
    "Ducks",
    "Re-ducks",
    "Flux",
    "Immer",
    "RTK Query",
  ],
  // ■ 青(Methods) - 関数、メソッド
  RoyalBlue: [
    "createStore",
    "createSlice",
    "configureStore",
    "createAsyncThunk",
    "createEntityAdapter",
    "combineReducers",
    "applyMiddleware",
    "compose",
    "getState",
    "dispatch",
    "subscribe",
    "replaceReducer",
    "increment",
    "decrement",
    "incrementByAmount",
    "getCount",
  ],
  // ■ 緑(Properties) - プロパティ、オプション
  ForestGreen: [
    "initialState",
    "reducers",
    "name",
    "type",
    "payload",
    "state",
    "action",
    "reducer",
    "middleware",
    "devTools",
    "preloadedState",
    "enhancer",
    "value",
    "count",
    "counter",
  ],
  // ■ オレンジ(Property Values) - 値、定数
  DarkOrange: [
    "INCREMENT",
    "DECREMENT",
    "counter/INCREMENT",
    "counter/DECREMENT",
  ],
  // ■ 青緑(型) - TypeScript 型
  CadetBlue: [
    "Action",
    "Reducer",
    "Store",
    "Dispatch",
    "Subscribe",
    "Middleware",
    "ThunkAction",
    "AnyAction",
  ],
  // ■ 紫(その他特別) - 特別な用語、概念
  DarkOrchid: [
    "rootReducer",
    "rootSaga",
    "sagaMiddleware",
    "Provider",
    "useSelector",
    "useDispatch",
    "connect",
    "mapStateToProps",
    "mapDispatchToProps",
    "store",
  ],
}
