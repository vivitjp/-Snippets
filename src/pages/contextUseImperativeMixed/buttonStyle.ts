import type { CSSProperties } from "react";

/** Chakra v3 の Button がテーマ未設定だと背景と文字色が潰れるため、明示スタイルを付ける */
export const sampleButtonStyle: CSSProperties = {
  backgroundColor: "#3182CE",
  padding: "10px",
  borderRadius: "8px",
  color: "white",
  border: "none",
  cursor: "pointer",
};
