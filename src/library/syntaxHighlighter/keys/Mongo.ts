import { KeyDef } from "../syntaxHighlighter"

export const keysMongo: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: ["mongodb", "pymongo", "MongoClient", "", "", ""],
  },
  // ■ Sub(明るい青)
  {
    color: "RoyalBlue",
    keys: [
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
      "",
    ],
  },
  // ■ オレンジ
  {
    color: "Coral",
    keys: ["regex", "gt", "lt", "", "", "", "", "count"],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: ["_id", "ObjectId"],
  },
  // ■ グレー
  {
    color: "#555",
    keys: ["count", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  },
  // ■ 別青
  {
    color: "CadetBlue",
    keys: [
      "inserted_id",
      "inserted_ids",
      "deleted_count",
      "modified_count",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    color: "SteelBlue",
    keys: [],
  },
  // ■
  {
    color: "LightSeaGreen",
    keys: [],
  },
  // ■
  {
    color: "",
    keys: [],
  },
]
