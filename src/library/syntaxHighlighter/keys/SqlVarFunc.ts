import { KeyDef } from "../../../types/type"

export const keysSqlVarFunc: KeyDef = {
  // ■ 赤(Main/重要単語)
  Crimson: [
    "CASE",
    "WHEN",
    "THEN",
    "ELSE",
    "END", // CASE式構文
    "CAST",
    "CONVERT",
    "DO", // 型変換・PL/pgSQL構文
  ],
  // ■ 青(Methods/関数)
  RoyalBlue: [
    // NULL関連
    "COALESCE",
    "NULLIF",
    "ISNULL",
    "IFNULL",
    // 文字列関数
    "CONCAT",
    "CONCAT_WS",
    "LOWER",
    "LCASE",
    "UPPER",
    "UCASE",
    "ASCII",
    "LENGTH",
    "SUBSTRING",
    "REPLACE",
    "LOCATE",
    "POSITION",
    "LPAD",
    "RPAD",
    "LEFT",
    "RIGHT",
    "LTRIM",
    "RTRIM",
    "TRIM",
    "INSERT",
    "SPACE",
    "REPEAT",
    "REVERSE",
    "SUBSTR",
    "CHAR_LENGTH",
    "BIT_LENGTH",
    "OCTET_LENGTH",
    "LOAD_FILE",
    // 日付関数
    "INTERVAL",
    "CURRENT_TIME",
    "CURRENT_DATE",
    "CURRENT_TIMESTAMP",
    "NOW",
    "DATE",
    "YEAR",
    "MONTH",
    "DAY",
    "UNIX_TIMESTAMP",
    "FROM_UNIXTIME",
    "ADDDATE",
    "DATE_ADD",
    "TIMESTAMPADD",
    "ADDTIME",
    "DATEDIFF",
    // 型変換
    "SIGNED",
    "UNSIGNED",
    "BINARY",
    "ARRAY",
  ],
  // ■ 緑(Properties/型)
  ForestGreen: [
    // 数値型
    "SERIAL",
    "BIT",
    "BIGINT",
    "FLOAT",
    "DOUBLE",
    "REAL",
    "DECIMAL",
    "DEC",
    "INTEGER",
    "TINYINT",
    "MEDIUMINT",
    "BOOL",
    "BIGSERIAL",
    // 文字列型
    "CHAR",
    "TEXT",
    "BINARY",
    "VARBINARY",
    "TINYTEXT",
    "MEDIUMTEXT",
    "LONGTEXT",
    "ENUM",
    "SET",
    "CITEXT",
    // 日付型
    "DATE",
    "TIME",
    "DATETIME",
    "YEAR",
    "TIMESTAMPTZ",
    "INTERVAL",
  ],
  // ■ オレンジ(Property Values/演算子)
  DarkOrange: [
    // PL/pgSQL構文
    "DECLARE",
    "BEGIN",
    "RETURN",
    "LANGUAGE",
    "PLPGSQL",
  ],
  // ■ 青緑(型変換・特殊)
  CadetBlue: ["USING", "LEADING", "TRAILING", "BOTH"],
  // ■ 紫(その他特別)
  DarkOrchid: ["DO", "$$", "::"],
}
