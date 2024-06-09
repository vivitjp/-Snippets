import { KeyDef } from "../getKey"

export const keysClassTransformer: KeyDef = {
  // ■ Main(赤)
  IndianRed: [
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
  // ■ 青
  RoyalBlue: [
    "classToPlain",
    "plainToClass",
    "plainToClassFromExist",
    "instanceToInstance",
    "serialize",
    "deserialize",
    "deserializeArray",
  ],
  // ■ 緑
  ForestGreen: [
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
}
