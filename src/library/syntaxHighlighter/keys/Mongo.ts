import { KeyDef } from "../getKey"

export const keysMongo: KeyDef = {
  // ■ Main(赤)
  Crimson: ["mongodb", "pymongo", "MongoClient"],
  // ■ Sub(明るい青)
  RoyalBlue: [
    "list_database_names",
    "list_collection_names",
    "find",
    "limit",
    "sort",
    "find_one",
    "count_documents",
    "estimated_document_count",
    "aggregate",
    "insert_many",
    "insert_one",
    "update_one",
    "update_many",
    "delete_one",
    "delete_many",
  ],
  Coral: ["regex", "gt", "lt", "count"],
  // ■ 緑
  ForestGreen: ["_id", "ObjectId"],
  // ■ グレー
  "#555": ["count"],
  // ■ 別青
  CadetBlue: ["inserted_id", "inserted_ids", "deleted_count", "modified_count"],
}
