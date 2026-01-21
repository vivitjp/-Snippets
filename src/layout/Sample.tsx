import { MenuGroupTitle, MenuItemGroupItems, MenuNav } from "./Layout.style"
import { Link, Route, Routes } from "react-router-dom"
import { Heading, HStack, Stack, VStack } from "@chakra-ui/react"

import LocalStoragePage from "../pages/localStorage"
import RegressionPage from "../pages/regression"
import ExcelInputPage from "../pages/excelInput"
import SvgGraphSample from "../pages/SVG"
import { ReactChildrenWith } from "../pages/React-children-with"
import { ReactChildren } from "../pages/React-children"

type SampleType = {
  name: string
  to: string
  element: JSX.Element
}

type GroupName = string

const samples: Record<GroupName, SampleType[]> = {
  React: [
    {
      name: "Children",
      to: "/react-children",
      element: <ReactChildren />,
    },
    {
      name: "Children With",
      to: "/react-children-with",
      element: <ReactChildrenWith />,
    },
  ],
  Form: [
    {
      name: "Excel Input",
      to: "/excel-input",
      element: <ExcelInputPage />,
    },
  ],
  Storage: [
    {
      name: "LocalStorage",
      to: "/localStorage",
      element: <LocalStoragePage />,
    },
  ],
  SVG: [
    {
      name: "SVG",
      to: "/SVG",
      element: <SvgGraphSample />,
    },
  ],
  統計: [
    {
      name: "Regression",
      to: "/regression",
      element: <RegressionPage />,
    },
  ],
}

//------------------------------
// Sample
//------------------------------
export const Sample = () => {
  return (
    <HStack align="stretch" width={"100%"} minHeight={"fit-content"}>
      <MenuNav data-testid="body" style={{ minHeight: "100vh" }}>
        <HStack align="start" width={"100%"}>
          <VStack align="start" gap={4} width={"100%"}>
            <Heading>サンプルコード</Heading>
            <VStack gap={4} align="start" width={"100%"}>
              {Object.entries(samples).map(([groupName, samples], index) => (
                <VStack key={index} gap={2} width={"100%"}>
                  <MenuGroupTitle style={{ width: "100%" }}>
                    {groupName}
                  </MenuGroupTitle>
                  <VStack gap={2} pl={2} align="start" width={"100%"}>
                    {samples.map((sample, index) => (
                      <MenuItemGroupItems key={index}>
                        <Link
                          to={sample.to}
                          style={{
                            textDecoration: "none",
                            fontSize: "0.8rem",
                            width: "100%",
                            color: "#555",
                          }}
                        >
                          {sample.name}
                        </Link>
                      </MenuItemGroupItems>
                    ))}
                  </VStack>
                </VStack>
              ))}
            </VStack>
          </VStack>
        </HStack>
      </MenuNav>
      <Stack
        data-testid="sample-content"
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        flex={1}
        minWidth={0}
      >
        <Routes>
          {Object.entries(samples).map(([_, samples], index) =>
            samples.map((sample, sIndex) => (
              <Route
                key={`${index}-${sIndex}`}
                path={sample.to}
                element={sample.element}
              />
            )),
          )}
        </Routes>
      </Stack>
    </HStack>
  )
}
