//-------------------------------
// React Router(v6)
// Route指定の前にRoutesを忘れずに
// Switchは要らない
// exactはなくなった
//-------------------------------

// - KEY: pkg.router.route
//   BODY: |
{
  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import { PageA } from "../pages/PageA"

  export const PageRoute = React.memo(() => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/pagea"} element={<PageA />} />
            <Route path="me" element={<Me />} />
            <Route path=":id" element={<MeId />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  })
}

// - KEY: pkg.router.defaultRoute
//   BODY: |
{
  import {
    BrowserRouter,
    Routes,
    Route,
    lazy,
    Suspense,
  } from "react-router-dom"
  import LoadingPage from "../pages/Loading"

  const PageA = lazy(() => import("../pages/pageA"))

  export const PageRoute = React.memo(() => {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={"/pagea"}
            element={
              <Suspense fallback={<LoadingPage />}>
                <PageA />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    )
  })
}

// pkg.router.route
{
  import React, {LazyExoticComponent} from "react"
  import { Home } from "../pages/Home"

  type MenuGroup = { [key: string]: Menu[] }

  type FCCompo = React.FunctionComponent<{}>
  type FixedElement = () => JSX.Element
  type LazyElement = LazyExoticComponent<() => JSX.Element>
  
  export type Menu = {
    name: string
    path: string
    element: FCCompo | FixedElement | LazyElement
  }

  export const menuGroup: MenuGroup = {
    Home: [
      { name: "Home", path: "/", element: Home },
    ],
  }

// pkg.router.Layout

import { BrowserRouter, Routes, Route } from "react-router-dom"

export const PageRoute = React.memo(() => {
    return (
      <BrowserRouter>
        <Routes>
          {links.map((item) => {
            return (
              <Route
                key={item.name}
                path={item.path}
                element={
                  <Layout>
                    <item.element />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    )
  })
}

// lazy(() => import("./pages/IndexPage"));
