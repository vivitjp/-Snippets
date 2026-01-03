import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./main.css"
import { Layout } from "./layout/Layout"
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e6f7ff' },
          100: { value: '#bae7ff' },
          200: { value: '#91d5ff' },
          300: { value: '#69c0ff' },
          400: { value: '#40a9ff' },
          500: { value: '#1890ff' },
          600: { value: '#096dd9' },
          700: { value: '#0050b3' },
          800: { value: '#003a8c' },
          900: { value: '#002766' },
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <Layout />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
