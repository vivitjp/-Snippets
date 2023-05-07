import React from "react"
import ReactDOM from "react-dom/client"
import "./main.css"
import { Layout } from "./layout/Layout"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
