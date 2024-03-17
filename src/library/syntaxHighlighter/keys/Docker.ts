import { KeyDef } from "../syntaxHighlighter"

export const keysDocker: KeyDef[] = [
  {
    color: "IndianRed",
    keys: ["image", "container", "network", "volume"],
  },
  // ■ Methods
  {
    color: "RoyalBlue", //"LightSeaGreen",
    keys: [
      "ls",
      "build",
      "history",
      "inspect",
      "rm",
      "prune",
      "search",
      "pull",
      "push",
      "run",
      "exec",
      "create",
      "start",
      "pause",
      "unpause",
      "stop",
      "kill",
      "restart",
      "top",
      "attach",
      "inspect",
      "logs",
      "commit",
      "diff",
      "export",
      "port",
      "rename",
      "stats",
      "update",
      "wait",
      "cp",
      "connect",
      "disconnect",
    ],
  },
  // // ■
  // {
  //   color: "LightSeaGreen",
  //   keys: [],
  // },
  // // ■
  // {
  //   color: "Goldenrod",
  //   keys: [],
  // },
  // // ■
  // {
  //   color: "RoyalBlue",
  //   keys: [],
  // },
  // // ■
  // {
  //   color: "ForestGreen",
  //   keys: ["const", "let"],
  // },
  // // ■
  // {
  //   color: "DodgerBlue",
  //   keys: [],
  // },
  // // ■
  // {
  //   color: "CadetBlue",
  //   keys: [],
  // },
  // {
  //   color: "SteelBlue",
  //   keys: [],
  // },
  // //Event
  // {
  //   color: "darkOrange",
  //   keys: [],
  // },
  {
    color: "darkOrange",
    keys: ["myNetwork"],
  },
  {
    color: "CadetBlue", //"SteelBlue",
    keys: ["myImage"],
  },
  {
    color: "ForestGreen", //"SteelBlue",
    keys: ["myCont"],
  },
  {
    color: "#555",
    keys: [
      "IMAGE_KEYWORD",
      "IMAGE_NAME",
      "REGISTRY_URL",
      "RESPOSITRY_NAME",
      "TAG",
      "VERSION",
      "PATH",
      "LOCAL_FILE",
      "MASK",
    ],
  },
]
