import { KeyDef } from "../syntaxHighlighter"

export const keysClassTransformer: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: [
      "Type",
      "Exclude",
      "Expose",
      "Transform",
      "classToPlain",
      "plainToClass",
      "TransformClassToPlain",
      "TransformClassToClass",
      "TransformPlainToClass",
    ],
  },
  // ■ 青
  {
    color: "RoyalBlue",
    keys: [
      "classToPlain",
      "plainToClass",
      "plainToClassFromExist",
      "instanceToInstance",
      "serialize",
      "deserialize",
      "deserializeArray",
    ],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: [
      "discriminator",
      "property",
      "subTypes",
      "excludePrefixes",
      "groups",
      "version",
      "toClassOnly",
      "excludeExtraneousValues",
      "since",
      "until",
      "toPlainOnly",
      "name",
      "value",
    ],
  },
]
