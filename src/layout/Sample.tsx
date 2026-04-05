import { MenuGroupTitle, MenuItemGroupItems, MenuNav } from "./Layout.style";
import { Link, Route, Routes } from "react-router-dom";
import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";

import LocalStoragePage from "../pages/localStorage";
import RegressionPage from "../pages/regression";
import ExcelInputPage from "../pages/excelInput";
import SvgGraphSample from "../pages/SVG";
import { ReactChildrenWith } from "../pages/React-children-with";
import { ReactChildren } from "../pages/React-children";
import { ContextParentHasMethod } from "../pages/contextParentHasMethod";
import { ContextChildrenHaveMethod } from "../pages/contextChildrenHaveMethod";
import { ContextUseImperativeMixedSample } from "../pages/contextUseImperativeMixed";
import WebSocketClientPage from "../pages/webSocketClient";

type SampleType = {
  name: string;
  to: string;
  element: JSX.Element;
};

type GroupName = string;

const samples: Record<GroupName, SampleType[]> = {
  React: [
    {
      name: "Children",
      to: "/samples/react-children",
      element: <ReactChildren />,
    },
    {
      name: "Children With",
      to: "/samples/react-children-with",
      element: <ReactChildrenWith />,
    },
    {
      name: "Context 子で登録",
      to: "/samples/react-context-children-register",
      element: <ContextChildrenHaveMethod />,
    },
    {
      name: "Context 親で登録",
      to: "/samples/react-context-parent-register",
      element: <ContextParentHasMethod />,
    },
    {
      name: "Context + imperative",
      to: "/samples/react-context-imperative-mixed",
      element: <ContextUseImperativeMixedSample />,
    },
  ],
  Form: [
    {
      name: "Excel Input",
      to: "/samples/excel-input",
      element: <ExcelInputPage />,
    },
  ],
  Storage: [
    {
      name: "LocalStorage",
      to: "/samples/localStorage",
      element: <LocalStoragePage />,
    },
  ],
  SVG: [
    {
      name: "SVG",
      to: "/samples/SVG",
      element: <SvgGraphSample />,
    },
  ],
  統計: [
    {
      name: "Regression",
      to: "/samples/regression",
      element: <RegressionPage />,
    },
  ],
  Network: [
    {
      name: "WebSocket チャット",
      to: "/samples/websocket-client",
      element: <WebSocketClientPage />,
    },
  ],
};

//------------------------------
// Sample
//------------------------------
export const Sample = () => {
  return (
    <HStack
      align="stretch"
      width={"100%"}
      flex={1}
      minH={0}
      h="100%"
      overflow="hidden"
    >
      <MenuNav
        data-testid="body"
        style={{ minHeight: "100%", overflowY: "auto", flexShrink: 0 }}
      >
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
        alignItems={"stretch"}
        justifyContent={"flex-start"}
        flex={1}
        minWidth={0}
        minH={0}
        h="100%"
        overflow="hidden"
      >
        <Box flex={1} minH={0} h="100%" display="flex" flexDirection="column">
          <Routes>
            {Object.values(samples).flatMap((groupSamples, groupIndex) =>
              groupSamples.map((sample, sIndex) => (
                <Route
                  key={`${groupIndex}-${sIndex}`}
                  path={sample.to}
                  element={sample.element}
                />
              ))
            )}
          </Routes>
        </Box>
      </Stack>
    </HStack>
  );
};
