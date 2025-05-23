import { KeyDef } from "../../../types/type"

export const keysPrisma: KeyDef = {
  // ■ prismaのMainキーワード
  Crimson: ["prisma", "Prisma", "prismaClient"],
  // ■ 青
  RoyalBlue: [
    "Repository",
    "SelectQueryBuilder",
    "EntitySchema",
    "clear",
    "release",
    "query",
    "getId",
    "create",
    "merge",
    "preload",
    "save",
    "insert",
    "update",
    "upsert",
    "delete",
    "increment",
    "decrement",
    "exists",
    "existsBy",
    "find",
    "findUnique",
    "findBy",
    "findByName",
    "findOne",
    "findOneBy",
    "findOneOrFail",
    "findOneByOrFail",
    "count",
    "countBy",
    "getCount",
    "findAndCount",
    "findAndCountBy",
    "transaction",
    "getOne",
    "getOneOrFail",
    "getMany",
    "getRawOne",
    "getRawMany",
    "createAndSave",
    "hasId",
    "softDelete",
    "restore",
    "remove",
    "softRemove",
    "recover",
    "sum",
    "average",
    "minimum",
    "maximum",
    "metadata",
    "target",
    "execute",
    "loadMany",
    "Brackets",
    "NotBrackets",
    "setParameter",
    "getParameters",
    "subQuery",
    "getQuery",
    "getSql",
    "printSql",
    "stream",
    "setLock",
    "setOnLocked",
    "useIndex",
    "maxExecutionTime",
    "getQueryAndParameters",
    "addCommonTableExpression",
    "orUpdate",
    "orIgnore",
    "commitTransaction",
    "rollbackTransaction",
    "returning",
  ],
  // ■ 緑
  ForestGreen: [
    "select",
    "addSelect",
    "where",
    "andWhere",
    "orWhere",
    "from",
    "leftJoin",
    "relations",
    "order",
    "orderBy",
    "addOrderBy",
    "skip",
    "offset",
    "take",
    "limit",
    "withDeleted",
    "cache",
    "lock",
    "into",
    "values",
    "set",
    "of",
    "groupBy",
    "addGroupBy",
    "distinctOn",
    "leftJoinAndSelect",
    "innerJoin",
    "leftJoinAndMapOne",
    "leftJoinAndMapMany",
  ],
  // ■ CadetBlue
  CadetBlue: [
    "TypeORM",
    "comment",
    "unique",
    "concurrent",
    "enum",
    "cascade",
    "referencedColumnName",
    "type",
    "length",
    "expression",
    "materialized",
    "createForeignKeyConstraints",
    "persistence",
    "primary",
    "default",
    "nullable",
    "onUpdate",
    "asExpression",
    "charset",
    "collation",
    "width",
    "precision",
    "scale",
    "zerofill",
    "unsigned",
    "enumName",
    "generatedType",
    "transformer",
    "queryResultCache",
    "isAdmin",
    "milliseconds",
    "id",
    "host",
    "port",
    "tableName",
    "socket",
    "DataSource",
    "dataSource",
    "queryRunner",
    "getTreeRepository",
    "getMongoRepository",
    "withRepository",
  ],
  // ■ DarkOrange(Validator)
  DarkOrange: [
    "MaxLength",
    "IsNotEmpty",
    "Matches",
    "IsNotEmpty",
    "IsInt",
    "IsNotEmpty",
    "MaxLength",
    "Transform",
    "Not",
    "IsNull",
    "Like",
    "ILike",
    "In",
    "Any",
    "ArrayContains",
    "ArrayContainedBy",
    "ArrayOverlap",
    "Equal",
    "LessThan",
    "LessThanOrEqual",
    "MoreThan",
    "MoreThanOrEqual",
    "Between",
    "Raw",
    "Or",
    "And",
  ],
  // ■ deeppink
  deeppink: ["abstract", "readonly", "await", "async", "Promise"],
  // ■ cyan(Deprecated)
  cyan: ["getRepository", "getManager", "getConnection"],
  // ■ 紫
  DarkOrchid: ["OneToOne", "ManyToOne", "OneToMany", "ManyToMany"],
  // ■ LightSeaGreen
  LightSeaGreen: ["JoinTable", "JoinColumn", "joinColumn", "inverseJoinColumn"],
}
