export type ChatLineKind = "sys" | "out" | "in";

export type ChatLine = {
  id: string;
  kind: ChatLineKind;
  text: string;
};
