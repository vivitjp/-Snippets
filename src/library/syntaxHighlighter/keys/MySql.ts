import { KeyDef } from "../syntaxHighlighter"

export const keysMySql: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "Crimson",
    keys: [
      "mysql",
      "mysqldump",
      "CREATE",
      "DROP",
      "DESCRIBE",
      "SHOW",
      "EXPLAIN",
      "USE",
      "ANALYZE",
    ],
  },
  // ■ Sub(青)
  {
    color: "RoyalBlue",
    keys: [
      "SELECT",
      "FROM",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "OFFSET",
      "LIMIT",
      "JOIN",
      "ON",
      "USING",
      "union",
      "VALUES",
      "ROW",
      "INSERT",
      "UPDATE",
      "DELETE",
    ],
  },
  // ■ オレンジ
  {
    color: "Goldenrod",
    keys: [
      "AUTO_INCREMENT",
      "PRIMARY",
      "KEY",
      "FOREIGN",
      "CHECK",
      "INVISIBLE",
      "REFERENCES",
      "CASCADE",
    ],
  },
  // ■ 緑
  {
    color: "SteelBlue",
    keys: [
      "AS",
      "AND",
      "OR",
      "ASC",
      "DESC",
      "WITH",
      "ROLLUP",
      "NATURAL",
      "LEFT",
      "OUTER",
      "INNER",
      "RIGHT",
      "CROSS",
    ],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: ["INT", "SMALLINT", "BOOLEAN", "TIMESTAMP", "VARCHAR", "DATETIME"],
  },
  // ■ グレー
  {
    color: "#555",
    keys: [
      "CURRENT_TIMESTAMP",
      "NOT",
      "NULL",
      "DEFAULT",
      "COMMENT",
      "NO",
      "ACTION",
      "SET",
    ],
  },
  // ■ 別青
  {
    color: "CadetBlue",
    keys: [
      "DATABASE",
      "DATABASES",
      "TABLE",
      "TABLES",
      "COLUMN",
      "COLUMNS",
      "VIEW",
    ],
  },
  // ■
  {
    color: "DodgerBlue",
    keys: [
      "ALTER",
      "RENAME",
      "ADD",
      "MODIFY",
      "CHANGE",
      "INDEX",
      "CONSTRAINT",
      "TO",
      "AFTER",
    ],
  },
]
