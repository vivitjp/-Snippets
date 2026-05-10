# Snippets

開発で使うコマンド・構文・設定をカテゴリ別に整理した個人用スニペット集。YAML ファイルでスニペットを管理し、React + Chakra UI で構築したビューアで閲覧・検索できる。

## 技術スタック

| 分類 | ライブラリ |
|------|-----------|
| フレームワーク | React 18 + TypeScript |
| ビルド | Vite |
| UI | Chakra UI v3 + Emotion |
| 状態管理 | Zustand |
| ルーティング | React Router v7 |
| フォーム | React Hook Form |
| Lint / Format | ESLint + Prettier + Husky |

## スニペットカテゴリ

`public/snippets/` 以下に YAML 形式で格納。

| カテゴリ | 内容 |
|----------|------|
| TypeScript | 型・Async・Utility Types・型チャレンジ |
| React | CSS-in-JS (Emotion, Tailwind)・フォーム・Query (TanStack, SWR)・UI |
| JavaScript | DOM・組み込みメソッド・正規表現 |
| Node | npm / pnpm / bun・Express・環境変数 |
| AWS | Lambda・S3・CDK・Cognito・AppSync など |
| CSS | チートシート・色・レスポンシブ |
| Database | GraphQL・MySQL・MongoDB |
| NestJS | Prisma・TypeORM・Swagger・バリデーション |
| Python | 標準ライブラリ・エラー集 |
| Git | Git コマンド・GitHub・Husky |
| OS | Docker / Docker Compose・Linux |
| AI | Claude Code・ChatGPT |
| Other | VSCode・Excel・Markdown・YAML |

## 開発

```bash
npm install
npm start       # 開発サーバー起動
npm run build   # ビルド
npm run preview # ビルド結果のプレビュー
```

### YAML の Lint

```bash
npm run lint:yaml
```

スニペット追加時はコミット前に自動で YAML 検証が走る (Husky + lint-staged)。

## ディレクトリ構成

```
public/snippets/   # スニペット YAML ファイル
src/
  pages/           # ページコンポーネント
  component/       # 共通コンポーネント
  library/         # カスタムフック・ユーティリティ
  store/           # Zustand ストア
  types/           # 型定義
scripts/           # ビルド補助スクリプト (YAML lint など)
```
