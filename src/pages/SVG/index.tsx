import React from "react"
import SvgGraph, { GraphColor, GraphLineType } from "./SvgGraph"

const sampleData = {
  //prettier-ignore
  data: [
    {
      data: { 1: 62, 2: 68, 3: 74, 4: 70, 5: 85, 6: 78, 7: 90, 8: 81, 9: 87, 10: 76, 11: 73, 12: 69 },
      lineColor: GraphColor.Yellow, // 例: 黄色
      label: "食費",
    },
    {
      data: { 1: 53, 2: 59, 3: 65, 4: 61, 5: 72, 6: 77, 7: 80, 8: 74, 9: 79, 10: 66, 11: 68, 12: 63 },
      lineColor: GraphColor.Green, // 例: 緑
      label: "光熱費",
    },
    {
      data: { 1: 44, 2: 49, 3: 55, 4: 51, 5: 60, 6: 67, 7: 70, 8: 65, 9: 69, 10: 58, 11: 54, 12: 50 },
      lineColor: GraphColor.Red, // 例: 赤
      label: "賃貸",
    },
    {
      data: { 1: 91, 2: 85, 3: 88, 4: 80, 5: 75, 6: 70, 7: 65, 8: 60, 9: 55, 10: 50, 11: 45, 12: 42 },
      lineColor: GraphColor.Blue, // 例: 青
      label: "遊行費",
    },
  ],
  line: {
    width: 2,
    type: GraphLineType.Solid,
  },
  marker: {
    size: 3.5,
  },
  title: {
    text: "サンプルグラフ",
    fontSize: 18,
    fontColor: "#333",
    fontOpacity: 1,
  },
  axis: {
    xLabel: "月",
    yLabel: "金額",
    fontSize: 12,
    fontColor: "#333",
    fontOpacity: 1,
  },
  legend: {
    show: true,
    label: "食費・光熱費・賃貸・遊行費",
    fontSize: 12,
    fontColor: "#333",
    fontOpacity: 1,
  },
  width: 900,
  height: 350,
}

const SvgGraphSample: React.FC = () => {
  return (
    <div style={{ margin: "2em 1rem" }}>
      <SvgGraph data={sampleData} />
    </div>
  )
}

export default SvgGraphSample
