import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";

// eslint-plugin-react is not compatible with eslint V9 yet - see here.

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // ...globals.node, // Node.jsで動かすコードの場合
        // ...globals.worker
        // ...globals.jest
        // ...globals.jquery
        // ... etc.
      }
    }
  },

  // TypeScriptパーサーの設定
  // 例: @typescript-eslint/parserを使用してTypeScriptのパースを行うよう設定する
  {
    languageOptions: {
      parser: typescriptEslintParser,
    },
  },

  // 従来設定の eslint:recommended
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  //【対象 & 除外】
  {
    ignores: ["**/dist/**", ".lintstagedrc.js"],
  },
  // {
  //   // lint対象ファイルの設定
  //   files: ["**/*.jsx"],
  //   languageOptions: {
  //     parserOptions: {
  //       ecmaFeatures: { jsx: true }
  //     }
  //   }
  // },

  // 【typescript-eslint】
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      // プラグインから推奨ルールを使用したい場合はここに書く
      ...typescriptEslint.configs.recommended.rules,
      // ...typescriptEslint.configs["recommended-type-checked"].rules,
      //...typescriptEslint.configs.strict.rules,
      // ...typescriptEslint.configs["strict-type-checked"].rules,
      // ...typescriptEslint.configs.stylistic.rules,
      // ルールの有効化/無効化を個別に設定することもできる
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-floating-promises": "off",
    },
  },

  ...fixupConfigRules(pluginReactConfig),
  {
    settings: { react: { version: "detect" } },
    rules: {
      // 'React' must be in scope when using JSX  react/react-in-jsx-scope
      'react/react-in-jsx-scope': 'off',
      "react/jsx-uses-react": "off",

      'react/display-name': "warn",
      'react/jsx-key': "warn",
      'react/jsx-no-comment-textnodes': "warn",
      'react/jsx-no-duplicate-props': "warn",
      'react/jsx-no-target-blank': "warn",
      'react/jsx-no-undef': "warn",
      'react/jsx-uses-vars': "warn",
      'react/no-children-prop': "warn",
      'react/no-danger-with-children': "warn",
      'react/no-deprecated': "warn",
      'react/no-direct-mutation-state': "warn",
      'react/no-find-dom-node': "warn",
      'react/no-is-mounted': "warn",
      'react/no-render-return-value': "warn",
      'react/no-string-refs': "warn",
      'react/no-unescaped-entities': "warn",
      'react/no-unknown-property': "warn",
      'react/no-unsafe': 0,
      'react/prop-types': "warn",
      'react/require-render-return': "warn",
    },
  }
];


// **ESLINT CODE FROM eslint.config.js**

// import babelParser from "@babel/eslint-parser";
// import pluginJs from "@eslint/js";
// import importConfig from "eslint-plugin-import";
// import jest from "eslint-plugin-jest";
// import jsdocConfig from "eslint-plugin-jsdoc";
// import jsoncConfig from "eslint-plugin-jsonc";
// import reactHooks from "eslint-plugin-react-hooks";
// import pluginReactAllConfig from "eslint-plugin-react/configs/all.js";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import sortKeysFixConfig from "eslint-plugin-sort-keys-fix";
// import spellcheck from "eslint-plugin-spellcheck";
// import globals from "globals";

// // export default [
// //   {languageOptions: { globals: globals.browser }},
// //   pluginJs.configs.recommended,
// //   pluginReactConfig,
// // ];

// export default [
//     pluginJs.configs.recommended,
//     {
//         files: ["**/*.{js,jsx}"],
//         ...jest.configs["flat/recommended"],
//         plugins: {
//             react: { ...pluginReactAllConfig, ...pluginReactConfig },
//             jest,
//             import: importConfig,
//             jsdoc: jsdocConfig,
//             jsonc: jsoncConfig,
//             "react-hooks": reactHooks,
//             "sort-keys-fix": sortKeysFixConfig,
//             spellcheck: spellcheck
//         },
//         languageOptions: {
//             parser: babelParser,
//             parserOptions: {
//                 requireConfigFile: false,
//                 babelOptions: {
//                     babelrc: false,
//                     configFile: false,
//                     presets: ["@babel/preset-react", "@babel/preset-env"]
//                 },
//                 ecmaFeatures: {
//                     jsx: true
//                 }
//             },
//             globals: {
//                 ...globals.browser,
//                 ...globals.node,
//                 it: "readonly",
//                 jest: "readonly",
//                 test: "readonly",
//                 expect: "readonly",
//                 indexedDB: "readonly",
//                 describe: "readonly"
//             }
//         },
//         settings: { react: { version: "detect" } },
//         rules: {
//             "array-bracket-newline": ["error", "consistent"],
//             "array-bracket-spacing": ["error", "never"],
//             "array-callback-return": "error",
//             "array-element-newline": [
//                 "error",
//                 {
//                     "ArrayExpression": "consistent",
//                     "ArrayPattern": { "minItems": 3 }
//                 }
//             ],
//             "arrow-spacing": "error",
//             "brace-style": ["error", "1tbs"],
//             "camelcase": ["error", { "ignoreDestructuring": true, "properties": "never" }],
//             "comma-dangle": ["error", "never"],
//             "comma-spacing": [
//                 "error",
//                 {
//                     "after": true,
//                     "before": false
//                 }
//             ],
//             "curly": ["error", "all"],
//             "default-case": "off",
//             "eqeqeq": ["error", "always"],
//             "func-call-spacing": ["error", "never"],
//             "function-call-argument-newline": ["error", "consistent"],
//             "import/first": "off",
//             "import/order": ["error", { "groups": ["builtin", "external", "internal", "parent", "sibling", "index"] }],
//             "indent": ["error", 4, { "SwitchCase": 1, "ignoredNodes": ["ConditionalExpression"] }],
//             "jest/no-mocks-import": "off",
//             "jsdoc/newline-after-description": 0, // Required for vs code auto formatting
//             "jsdoc/require-hyphen-before-param-description": 1,
//             "jsdoc/require-jsdoc": [
//                 "error",
//                 {
//                     "require": {
//                         "ArrowFunctionExpression": true,
//                         "ClassExpression": true,
//                         "FunctionDeclaration": true,
//                         "FunctionExpression": true,
//                         "MethodDefinition": true
//                     }
//                 }
//             ],
//             "jsonc/sort-keys": "error",
//             "keyword-spacing": ["error", { "after": true, "before": true }],
//             "max-len": [
//                 "error",
//                 {
//                     "code": 120,
//                     "ignorePattern": '".*": ".*"' // Ignore pattern for strings in json as they can't be broken in multi lines
//                 }
//             ],
//             "no-console": "error",
//             "no-dupe-else-if": "error",
//             "no-extend-native": "off",
//             "no-nested-ternary": "error",
//             "no-useless-escape": "off",
//             "no-var": "error",
//             "object-curly-newline": ["error", { "consistent": true, "multiline": true }],
//             "object-curly-spacing": ["error", "always"],
//             "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
//             "padding-line-between-statements": [
//                 "error",
//                 // Always one empty line before return statement
//                 {
//                     "blankLine": "always",
//                     "next": "return",
//                     "prev": "*"
//                 },
//                 // Always one empty line between methods
//                 {
//                     "blankLine": "always",
//                     "next": ["block-like", "multiline-block-like"],
//                     "prev": ["block-like", "multiline-block-like"]
//                 },
//                 // Avoids more than one empty line
//                 {
//                     "blankLine": "never",
//                     "next": "empty",
//                     "prev": "empty"
//                 }
//             ],
//             "prefer-const": "error",
//             "quote-props": ["error", "always"],
//             "quotes": ["error", "double"],
//             "radix": "off",
//             "react-hooks/exhaustive-deps": "error",
//             "react-hooks/rules-of-hooks": "error",
//             // "react/jsx-boolean-value": ["warn", "always"],
//             "react/jsx-closing-bracket-location": "error",
//             "react/jsx-closing-tag-location": "error",
//             "react/jsx-curly-brace-presence": [
//                 "error",
//                 {
//                     "children": "ignore",
//                     "props": "always"
//                 }
//             ],
//             "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
//             "react/no-multi-comp": ["error", { "ignoreStateless": true }],
//             "react/react-in-jsx-scope": "off",
//             "semi": ["error", "always"],
//             "sort-keys": [
//                 "error",
//                 "asc",
//                 {
//                     "caseSensitive": true,
//                     "minKeys": 2,
//                     "natural": false
//                 }
//             ],
//             "sort-keys-fix/sort-keys-fix": "error",
//             "space-before-blocks": "error",
//             "space-infix-ops": ["error", { "int32Hint": false }],
//             "spellcheck/spell-checker": [
//                 "error",
//                 {
//                     "minLength": 4,
//                     "skipWords": [
                 
//                         "datasource",
//                         "apis"
//                     ]
//                 }
//             ],
//             // Added this so test file don't give error when accessing dom element using DOM api
//             "testing-library/no-node-access": "off"
//         }
//     }
// ];
