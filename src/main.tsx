import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./main.css"
import { Layout } from "./layout/Layout"
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import theme from "./theme"

const system = createSystem(defaultConfig, { theme })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <Layout />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
