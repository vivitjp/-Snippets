import styled from "@emotion/styled";
import { getMergedKeys } from "./getKey";
import { css } from "@emotion/react";

export type SyntaxHighlight = {
  code: string;
  codeKeyTypes?: string[];
  encodeRequired?: boolean;
  case_sensitive?: boolean;
  bgColor?: string;
};

export const syntaxHighlight = ({
  code,
  codeKeyTypes,
  encodeRequired = true,
  case_sensitive = true,
  bgColor = "#F9F9F9",
}: SyntaxHighlight) => {
  const escaped = encodeRequired ? escapeHtml(code) : code;
  const rebuilt: JSX.Element[] = [];
  const case_sense = case_sensitive ? "g" : "gi";

  //  const pattern = /(<\/?[^>]+>)|([^<]+)/g

  const mergedCodeKeyTypes = getMergedKeys(codeKeyTypes);

  escaped.split("\n").forEach((line, idx) => {
    let result = line;

    if (mergedCodeKeyTypes) {
      Object.entries(mergedCodeKeyTypes).forEach(([color, keys]) => {
        if (!keys.length) return;

        keys.forEach((key) => {
          if (!key) return;
          const escapedKey = key.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
          // 属性名と被る語は「直後に =」のときはマッチさせない（既出の <span style="..."> を壊さない）
          const attrLike = ["style", "class", "color", "id", "label"];
          const suffix = attrLike.includes(key) ? "(?!\\s*=)" : "";
          const re = new RegExp(`\\b${escapedKey}\\b${suffix}`, case_sense);
          result = result.replaceAll(
            re,
            (match: string) => `<span style="color:${color}">${match}</span>`
          );
        });
      });
    }

    if (result.trim()) {
      const isSubTitle = result.indexOf("■") > -1;
      rebuilt.push(
        <Pre
          key={idx}
          dangerouslySetInnerHTML={{ __html: result }}
          bgColor={isSubTitle ? "white" : bgColor}
          // fontSize={isSubTitle ? "1.05em" : undefined}
          // fontWeight={isSubTitle ? "bold" : undefined}
          subTitle={isSubTitle ? true : false}
        />
      );
    } else {
      rebuilt.push(
        <Pre key={idx} bgColor={bgColor}>
          &nbsp;
        </Pre>
      );
    }
  });
  return rebuilt;
};

const HTML_ESCAPE_REPLACE_RE = /[&<>'"]/g;
const HTML_REPLACEMENTS: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function replaceUnsafeChar(ch: string): string {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str: string): string {
  return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
}

type Options = {
  bgColor?: string;
  fontSize?: string;
  fontWeight?: string;
  subTitle?: boolean;
};
const Pre = styled.pre<Options>`
  ${(props) => css`
    background-color: ${props.bgColor ?? "#F9F9F9"};
    font-weight: ${props.subTitle ? "bold" : "normal"};
    text-decoration: ${props.subTitle ? "subTitle" : "none"};
    border-bottom: ${props.subTitle ? "1px solid #ccc" : "none"};
    padding: ${props.subTitle ? "0.7em 0.5em 0 0.5em" : undefined};
    margin-left: ${props.subTitle ? "-0.7em" : undefined};
    margin-bottom: ${props.subTitle ? "0.2em" : undefined};
    width: ${props.subTitle ? "calc(100% + 1.4em)" : undefined};
  `}
`;
