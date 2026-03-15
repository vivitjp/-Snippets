import { YAMLData, Snippets } from "../../types/type";
import { getLocalYmlFile } from "../utilities/getLocalYmlFile";

type Props = {
  file: string;
  scope: string;
};

export const makeSnippets = async ({ file, scope }: Props) => {
  const jsonData = (await getLocalYmlFile({
    path: file,
  })) as YAMLData[];
  if (!jsonData) return;
  const returnData: Snippets = {};

  try {
    jsonData.forEach(
      (
        { BODY, EXPLAIN, CATEGORY, OPTIONS, SAMPLE, STYLE, FOLD, TABLE },
        index
      ) => {
        returnData[index] = {
          body: BODY?.trim().split("\n"),
        };
        //■ EXPLAIN
        if (EXPLAIN) returnData[index].explain = EXPLAIN;

        if (scope) returnData[index].scope = scope;

        //■ CATEGORY
        if (CATEGORY) returnData[index].category = CATEGORY;

        //■ OPTIONS
        if (OPTIONS) returnData[index].options = OPTIONS;

        //■ SAMPLE/BODY
        if (SAMPLE) {
          if (SAMPLE === "BODY") {
            returnData[index].sample = BODY;
          } else {
            returnData[index].sample = SAMPLE;
          }
        }

        //■ STYLE
        if (STYLE) returnData[index].style = STYLE;

        //■ FOLD
        if (FOLD) returnData[index].fold = FOLD.trim().split("\n");

        //■ TABLE
        if (TABLE) {
          returnData[index].table = {
            body: TABLE.BODY.trim()
              .split("\n")
              .map((n) => n.replaceAll("\\n", "\n")),
            options: TABLE.OPTION
              ? {
                  width: TABLE.OPTION.WIDTH || [],
                  align: TABLE.OPTION.ALIGN || [],
                  hasTitle: TABLE.OPTION.HAS_TITLE,
                }
              : undefined,
          };
        }
      }
    );
  } catch (error) {
    console.log(error);
  }

  return returnData;
};
