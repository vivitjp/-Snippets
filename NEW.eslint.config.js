import js from "@eslint/js";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";

export default [
  // 設定項目1: lint対象ファイルの設定
  // fileのみ, ignoresのみの設定項目を作ることで、指定した内容が他の項目にも引き継がれる
  {
    // 例: JavaScriptとTypeScriptをlint対象にする
    files: ["**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}"],
  },
  {
    // 例: distディレクトリはlint対象から外す
    ignores: ["**/dist/**"],
  },


  // 設定項目2: eslintの推奨ルールを使用する
  // 従来設定における"eslint:recommended"に相当。
  // import js from "@eslint/js"; した上で以下のように書く。
  js.configs.recommended,


  // 設定項目3: グローバル変数の設定
  // ここでは例としてNode.jsのグローバル変数を使用する。
  // import globals from "globals"; が必要。
  {
    // 特定のファイルのみこの設定を適用したい場合は、↓のように`files`を設定する
    // filesの指定が無ければ全ファイルに適用される
    // files: ["src/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node, // Node.jsで動かすコードの場合
        // 他にも以下のような値が設定できる
        // ...globals.browser,
        // ...globals.worker
        // ...globals.jest
        // ...globals.jquery
        // ... etc.
      },
    },
  },


  // 設定項目4: TypeScriptパーサーの設定
  // 例: @typescript-eslint/parserを使用してTypeScriptのパースを行うよう設定する
  {
    languageOptions: {
      parser: typescriptEslintParser,
    },
  },


  // 設定項目5: プラグインの設定 (例: typescript-eslintの有効化)
  // どのルールを使用するか設定する
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      // プラグインから推奨ルールを使用したい場合はここに書く
      ...typescriptEslint.configs.recommended.rules,
      ...typescriptEslint.configs["recommended-type-checked"].rules,
      ...typescriptEslint.configs.strict.rules,
      ...typescriptEslint.configs["strict-type-checked"].rules,
      ...typescriptEslint.configs.stylistic.rules,
      // ルールの有効化/無効化を個別に設定することもできる
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-floating-promises": "off",
    },
  },


  // 設定項目6: 他のプラグインの設定
  // 例: 全errorをwarning扱いにするプラグインを使用する
  // 他のプラグインの設定も、こうして分割して配列に入れていけばよさそう
  {
    plugins: {
      "only-warn": onlyWarn,
    },
  },
];