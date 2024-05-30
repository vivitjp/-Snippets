import { KeyDef } from "../syntaxHighlighter"

export const keysPackageRHF: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "Crimson",
    keys: [
      "useForm",
      "SubmitHandler",
      "FormProvider",
      "UseFormReturn",
      "useFormContext",
      "UseFormProps",
      "Path",
      "useWatch",
      "Controller",
    ],
  },
  // ■ Sub(青)
  {
    color: "RoyalBlue",
    keys: [
      "register",
      "handleSubmit",
      "formState",
      "watch",
      "control",
      "method",
      "setFocus",
      "setValue",
      "getValues",
    ],
  },
  // // ■ オレンジ
  {
    color: "darkOrange",
    keys: ["react-hook-form", "Person", "GFieldType", "MyInput"],
  },
  // // ■ 緑
  {
    color: "ForestGreen",
    keys: [
      "methods",
      "errors",
      "value",
      "message",
      "defaultValues",
      "isValid",
      "fieldState",
      "shouldUnregister",
      "error",
      "field",
      "render",
      "rules",
      "mode",
    ],
  },
  // // ■ グレー
  {
    color: "#555",
    keys: ["extends", "type"],
  },
  // ■ コンポーネント
  {
    color: "DarkOrchid",
    keys: ["MyInput", "ChildByMethod", "ChildByContext", "SampleControlInput"],
  },
  // ■ Validation
  {
    color: "Goldenrod",
    keys: [
      "required",
      "min",
      "max",
      "minLength",
      "maxLength",
      "validate",
      "valueAsNumber",
      "pattern",
    ],
  },
  // // ■
  // {
  //   color: "LightSeaGreen",
  //   keys: [],
  // },
  // // ■
  {
    color: "Goldenrod",
    keys: ["SimpleType"],
  },
  // // ■
  // {
  //   color: "DodgerBlue",
  //   keys: [],
  // },
]
