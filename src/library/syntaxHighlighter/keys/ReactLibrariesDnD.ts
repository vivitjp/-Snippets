import { KeyDef } from "../../../types/type"

export const keysReactLibrariesDnD: KeyDef = {
  // ■ Main(赤)
  Crimson: [
    "DndProvider",
    "useDrag",
    "useDrop",
    "HTML5Backend",
    "Draggable",
    "useDropzone",
    "showOpenFilePicker",
    "showSaveFilePicker",
  ],
  // ■ 青(Methods)
  RoyalBlue: [
    "getRootProps",
    "getInputProps",
    "open",
    "getFile",
    "text",
    "createWritable",
    "write",
    "close",
    "onStart",
    "onDrag",
    "onStop",
    "onDrop",
    "onDropAccepted",
    "onDropRejected",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onFileDialogOpen",
    "onFileDialogCancel",
    "onError",
    "getFilesFromEvent",
  ],
  // ■ 緑(Properties)
  ForestGreen: [
    "isDragging",
    "accept",
    "multiple",
    "maxFiles",
    "minSize",
    "maxSize",
    "disabled",
    "noClick",
    "noDrag",
    "noKeyboard",
    "noDragEventsBubbling",
    "preventDropOnDocument",
    "useFsAccessApi",
    "acceptedFiles",
    "bounds",
  ],
  // ■ オレンジ(Property Values)
  DarkOrange: ["BOX", "parent", "true", "false"],
  // ■ 青緑(型)
  CadetBlue: ["ItemType", "validator"],
  // ■ 紫(その他特別)
  DarkOrchid: ["drag", "drop"],
}
