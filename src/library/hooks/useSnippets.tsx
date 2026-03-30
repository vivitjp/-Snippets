import { useEffect, useState } from "react";
import { Snippets } from "../../types/type";
import { copyToClipboard } from "../utilities/copyToClipboard";
import { makeSnippets } from "./makeSnippets";
import {
  Column,
  Div,
  Row,
  Table,
  TBody,
  TD,
  TH,
  THead,
  TR,
} from "../../common/styleDiv";
import { Button } from "../../common/styleInput";
import { syntaxHighlight } from "../syntaxHighlighter/syntaxHighlighter";
import { useSelect } from "./useSelect";
import {
  CategoryWrapper,
  DivTitle,
  FoldTitle,
  SummaryWrapper,
} from "./components/DivTitle";
import { MenuItemType } from "../../store/menuStore";
import { DetailInside, Details } from "./components/Detail";

export const useSnippets = (selectedMenu: MenuItemType | undefined) => {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<Snippets | string[] | undefined>();
  const [dataFormatted, setDataFormatted] = useState<JSX.Element[]>([]);

  const { JSX: SnippetsStyleSelection, value } = useSelect({
    title: "形式",
    initValue: "",
    values: ["", "typescriptreact", "typescript", "python"],
  });

  useEffect(() => {
    //console.log("selectedMenu", selectedMenu)

    if (!selectedMenu?.fileName) {
      console.log("File Name", selectedMenu?.fileName);
      return;
    }

    setIsPending(true);
    void (async () => {
      //ファイルからデータ読み込みEXPLAIN
      const result = await makeSnippets({
        file: `snippets/${selectedMenu.fileName}.yml`,
        scope: value,
      });
      setData(result);
      if (!result) {
        console.log("File Data");
        return;
      }

      //配列化
      const array = Object.values(result ?? {});
      //Highlight
      const codeKeyTypes = selectedMenu?.codeKeyTypes;
      //Highlightして JSX.Element[] に変換
      let highlightedBody: JSX.Element[] = [];
      //折りたたみ要素
      let highlightedFold: JSX.Element[];

      try {
        const formatted = array.map((snippetsObject, index) => {
          if (snippetsObject.category) {
            return (
              <CategoryWrapper key={index}>
                {snippetsObject.category}
              </CategoryWrapper>
            );
          } else {
            if (snippetsObject.body) {
              const code = (
                !snippetsObject.body.at(-1)
                  ? snippetsObject.body.splice(-1, 1)
                  : snippetsObject.body
              )
                .map((n) => (!n ? " " : n))
                .join("\n");

              highlightedBody = syntaxHighlight({
                code,
                codeKeyTypes,
                encodeRequired: selectedMenu.encodeRequired,
                case_sensitive: selectedMenu.case_sensitive,
              });
            } else {
              highlightedBody = [];
            }

            if (snippetsObject.fold) {
              const foldCode = (
                !snippetsObject.fold.at(-1)
                  ? snippetsObject.fold.splice(-1, 1)
                  : snippetsObject.fold
              )
                .map((n) => (!n ? " " : n))
                .join("\n");

              highlightedFold = syntaxHighlight({
                code: foldCode,
                codeKeyTypes,
                encodeRequired: selectedMenu.encodeRequired,
                case_sensitive: selectedMenu.case_sensitive,
                bgColor: "Cornsilk",
              });
            }

            return (
              <Column key={index}>
                <Details className={"detailClass"}>
                  {/* 🔴タイトル(title) */}
                  <SummaryWrapper>
                    <DivTitle>■ {snippetsObject.explain}</DivTitle>
                  </SummaryWrapper>

                  {/* 🔴[OPTIONS.COLS] highlightedBody(options) */}
                  {!!highlightedBody.length && (
                    <DetailInside colCount={snippetsObject.options?.COLS || 1}>
                      {highlightedBody}
                    </DetailInside>
                  )}

                  {/* 🔴[FOLD] 折りたたみ(Details & Summary) */}
                  {highlightedFold?.length && (
                    <Details noShadow={true}>
                      <SummaryWrapper>
                        <FoldTitle>► Open Answer</FoldTitle>
                      </SummaryWrapper>
                      <DetailInside colCount={1} bgColor="Cornsilk">
                        {highlightedFold}
                      </DetailInside>
                    </Details>
                  )}

                  {/* 🔴[STYLE & SAMPLE] HTML サンプル(style & sample) */}
                  {snippetsObject.style && (
                    <style>{snippetsObject.style}</style>
                  )}
                  {snippetsObject.sample && (
                    <Row
                      justifyContent="flex-start"
                      alignItems="center"
                      marginTop="10px"
                      padding="10px"
                      gap="10px"
                      overflow="hidden"
                      dangerouslySetInnerHTML={{
                        __html: snippetsObject.sample,
                      }}
                    />
                  )}

                  {/* 🔴[TABLE] テーブル */}
                  {snippetsObject?.table && (
                    <Div padding={"10px"} width={"100%"}>
                      <Table width="100%">
                        {snippetsObject?.table.options?.hasTitle && (
                          <THead>
                            <TR>
                              {snippetsObject?.table.body?.[0]
                                ?.split("\t")
                                .map((th, index) => (
                                  <TH
                                    key={index}
                                    width={
                                      snippetsObject?.table?.options?.width?.[
                                        index
                                      ] || "auto"
                                    }
                                  >
                                    {th}
                                  </TH>
                                ))}
                            </TR>
                          </THead>
                        )}
                        <TBody>
                          {snippetsObject?.table.body
                            ?.splice(
                              snippetsObject?.table.options?.hasTitle ? 1 : 0
                            )
                            .map((line, i) => {
                              return (
                                <TR key={i}>
                                  {line?.split("\t").map((td, j) =>
                                    // prettier-ignore
                                    <TD
                                      key={`${i}-${j}`}
                                      align={snippetsObject?.table?.options?.align?.[j] || "center"}
                                    >
                                      {td.trim().split("。").map((n, k) => {
                                        return n && (
                                          <span key={`${i}-${j}-${k}`}>
                                            {n}
                                            <br />
                                          </span>
                                        )
                                      })}
                                    </TD>
                                  )}
                                </TR>
                              );
                            })}
                        </TBody>
                      </Table>
                    </Div>
                  )}
                </Details>
              </Column>
            );
          }
        });
        setDataFormatted(formatted);
        setIsPending(false);
      } catch (error) {
        console.error(error);
        setIsPending(false);
      }
    })();
  }, [selectedMenu, value]);

  const Snippets = () => {
    return <>{dataFormatted}</>;
  };

  const [copied, setCopied] = useState<boolean>(false);
  const handleClickInputButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    void copyToClipboard(JSON.stringify(data, undefined, 2));
    e.stopPropagation();

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  const CopyButton = () => {
    return (
      <Button onClick={handleClickInputButton} width="160px">
        {copied ? "Copied" : "Copy Snippets"}
      </Button>
    );
  };

  return { SnippetsStyleSelection, Snippets, CopyButton, isPending };
};
