import { KeyDef } from "../syntaxHighlighter"

export const keysDOM: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: [
      "createElement",
      "getElementById",
      "getElementsByClassName",
      "getElementsByTagName",
      "querySelector",
      "querySelectorAll",
      "addEventListener",
      "removeEventListener",
      "dispatchEvent",
      "getAttribute",
      "getAttributeNS",
      "setAttribute",
      "removeAttribute",
      "hasAttribute",
    ],
  },
  // ■ 青
  {
    color: "RoyalBlue",
    keys: [
      "appendChild",
      "cloneNode",
      "contains",
      "hasChildNodes",
      "isEqualNode",
      "normalize",
      "prepend",
      "append",
      "insertBefore",
      "removeChild",
      "replaceChild",
      "replaceChildren",
      "remove",
      "before",
      "after",
      "replaceWith",
      "forEach",
      "entries",
      "keys",
      "values",
      "add",
      "remove",
      "toggle",
      "contains",
      "getComputedStyle",
      "getAttributeNames",
      "matches",
      "closest",
      "matches",
      "insertAdjacentElement",
      "insertAdjacentHTML",
      "insertAdjacentText",
      "attachShadow",
    ],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: [
      "nodeName",
      "nodeType",
      "textContent",
      "parentNode",
      "parentElement",
      "offsetParent",
      "childNodes",
      "firstChild",
      "lastChild",
      "nextSibling",
      "previousSibling",
      "childElementCount",
      "children",
      "firstElementChild",
      "lastElementChild",
      "length",
      "item",
      "length",
      "id",
      "tagName",
      "innerHTML",
      "outerHTML",
      "localName",
      "className",
      "classList",
      "client",
      "scroll",
      "offset",
      "getBoundingClientRect",
      "getClientRects",
      "attributes",
      "dataset",
      "nextElementSibling",
      "previousElementSibling",
      "shadowRoot",
    ],
  },
  // ■ オレンジ
  {
    color: "DarkOrange",
    keys: ["beforebegin", "afterend", "afterbegin", "beforeend"],
  },
]
