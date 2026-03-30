//---------------------
// ローカルファイル読み込み
//---------------------

type Props = {
  path: string;
};

export const fetchLocalFile = async ({ path }: Props) => {
  //Fileオープン

  try {
    if (!path) throw Error("fetch file error");
    // 相対パスだと現在の URL が /snippets/... のとき snippets/... が
    // /snippets/ai/snippets/... に誤解決するため、常にサイトルート基準にする
    const url =
      path.startsWith("/") || path.startsWith("http") ? path : `/${path}`;
    const response = await fetch(url);
    const reader = response.body?.getReader();
    if (!reader) throw Error("読み込み不可");
    const rawData = await reader.read();
    const content = rawData.value;
    return content;
  } catch {
    return undefined;
  }
};
