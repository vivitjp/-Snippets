import React, { useState } from "react"

// Color enum for colorMap
export enum GraphColor {
  Black = "black",
  Red = "red",
  Blue = "blue",
  Green = "green",
  White = "white",
  Yellow = "yellow",
  Gray = "gray",
}

const colorMap: { [key in GraphColor]: string } = {
  [GraphColor.Black]: "#595857", // 墨（すみ）
  [GraphColor.Red]: "#e16b6b", // 珊瑚色（さんごいろ）
  [GraphColor.Blue]: "#7fbfff", // 空色（そらいろ）
  [GraphColor.Green]: "#a8d8b9", // 若草色（わかくさいろ）
  [GraphColor.White]: "#f7f6f5", // 白練（しろねり）
  [GraphColor.Yellow]: "#fff799", // 菜の花色（なのはないろ）
  [GraphColor.Gray]: "#b5b5b5", // 銀鼠（ぎんねず）
}

function getColor(c: string): string {
  return colorMap[c as GraphColor] || c
}

// 色を濃くするユーティリティ
function getDarkerColor(c: string, factor = 0.9): string {
  const base = colorMap[c as GraphColor] || c
  // #RRGGBB形式のみ対応
  if (/^#[0-9a-fA-F]{6}$/.test(base)) {
    const r = Math.floor(parseInt(base.slice(1, 3), 16) * factor)
    const g = Math.floor(parseInt(base.slice(3, 5), 16) * factor)
    const b = Math.floor(parseInt(base.slice(5, 7), 16) * factor)
    return `rgb(${r},${g},${b})`
  }
  return base
}

// 折れ線種別enum
export enum GraphLineType {
  Solid = "実線",
  // 今後 dotted, dashed など追加可能
}

// Type definition (English)
type GraphSeries = {
  data: { [key: number]: number }
  lineColor: string
  label?: string // 凡例ラベル
}

type GraphData = {
  data: GraphSeries[]
  line: {
    width: number
    type: GraphLineType
  }
  marker: {
    size: number
  }
  title: {
    text: string
    fontSize: number
    fontColor: string
    fontOpacity: number
  }
  axis: {
    xLabel: string
    yLabel: string
    fontSize: number
    fontColor: string
    fontOpacity: number
  }
  legend?: {
    show: boolean
    label: string
    fontSize?: number
    fontColor?: string
    fontOpacity?: number
  }
  width?: number
  height?: number
}

// 軸・グリッド・レイアウト用enum
export enum GraphLayout {
  Margin = 40,
  LegendWidth = 150,
  XTicks = 12,
  YTicks = 6,
}

type Props = {
  data: GraphData
}

const SvgGraph: React.FC<Props> = ({ data }) => {
  const {
    data: seriesArr,
    line,
    marker,
    title,
    axis,
    legend,
    width = 400,
    height = 240,
  } = data
  const [hovered, setHovered] = useState<{
    series: number
    key: number
  } | null>(null)

  // X軸: 1月〜12月, Y軸: 0〜100
  const minX = 1
  const maxX = 12
  const minY = 0
  const maxY = 100

  // SVG size
  const legendArea = GraphLayout.LegendWidth
  const graphWidth = width - legendArea
  const margin = GraphLayout.Margin

  // 軸メモリ数
  const xTicks = GraphLayout.XTicks
  const yTicks = GraphLayout.YTicks
  const xStep = (maxX - minX) / (xTicks - 1)
  const yStep = (maxY - minY) / (yTicks - 1)
  const xTickVals = Array.from({ length: xTicks }, (_, i) => minX + i * xStep)
  const yTickVals = Array.from({ length: yTicks }, (_, i) => minY + i * yStep)

  // Coordinate conversion
  const getX = (k: number) =>
    margin + ((k - minX) / (maxX - minX)) * (graphWidth - margin * 2)
  const getY = (v: number) =>
    height - margin - ((v - minY) / (maxY - minY)) * (height - margin * 2)

  // 各系列のパス
  const pathDs = seriesArr.map((s) => {
    const keys = Object.keys(s.data).map(Number)
    return keys
      .map((k, i) =>
        i === 0
          ? `M${getX(k)},${getY(s.data[k])}`
          : `L${getX(k)},${getY(s.data[k])}`
      )
      .join(" ")
  })

  return (
    <svg width={width} height={height}>
      {/* Title */}
      <text
        x={graphWidth / 2}
        y={margin / 2}
        fontSize={title.fontSize}
        fill={getColor(title.fontColor)}
        opacity={title.fontOpacity}
        textAnchor="middle"
      >
        {title.text}
      </text>
      {/* Legend (vertical, right area, 各系列ごと) */}
      {legend?.show && (
        <g>
          <rect
            x={graphWidth + 10}
            y={margin}
            width={legendArea - 20}
            height={seriesArr.length * 32 + 16}
            fill="#fff"
            stroke="#ccc"
            opacity={0.9}
            rx={4}
          />
          {seriesArr.map((s, i) => (
            <g key={i}>
              <line
                x1={graphWidth + 25}
                y1={margin + 20 + i * 32}
                x2={graphWidth + 55}
                y2={margin + 20 + i * 32}
                stroke={getColor(s.lineColor)}
                strokeWidth={line.width}
                strokeDasharray={
                  line.type === GraphLineType.Solid ? "none" : "5,5"
                }
              />
              <circle
                cx={graphWidth + 40}
                cy={margin + 20 + i * 32}
                r={marker.size}
                fill={getDarkerColor(s.lineColor)}
                stroke="#888"
                strokeWidth={0.5}
              />
              <text
                x={graphWidth + 60}
                y={margin + 24 + i * 32}
                fontSize={legend.fontSize || 12}
                fill={getColor(legend.fontColor || "#333")}
                opacity={legend.fontOpacity ?? 1}
                alignmentBaseline="middle"
              >
                {s.label}
              </text>
            </g>
          ))}
        </g>
      )}
      {/* Axis */}
      {/* x axis */}
      <line
        x1={margin}
        y1={height - margin}
        x2={graphWidth - margin}
        y2={height - margin}
        stroke={getColor(axis.fontColor)}
        strokeWidth={1}
        opacity={axis.fontOpacity}
      />
      {/* y axis */}
      <line
        x1={margin}
        y1={margin}
        x2={margin}
        y2={height - margin}
        stroke={getColor(axis.fontColor)}
        strokeWidth={1}
        opacity={axis.fontOpacity}
      />
      {/* x axis label */}
      <text
        x={graphWidth / 2}
        y={height - 5}
        fontSize={axis.fontSize}
        fill={getColor(axis.fontColor)}
        opacity={axis.fontOpacity}
        textAnchor="middle"
      >
        月
      </text>
      {/* y axis label */}
      <text
        x={10}
        y={height / 2}
        fontSize={axis.fontSize}
        fill={getColor(axis.fontColor)}
        opacity={axis.fontOpacity}
        textAnchor="middle"
        transform={`rotate(-90 10,${height / 2})`}
      >
        金額
      </text>
      {/* X axis ticks and grid */}
      {xTickVals.map((x, i) =>
        x === minX ? null : (
          <g key={i}>
            {/* 縦罫線 */}
            <line
              x1={getX(x)}
              y1={margin}
              x2={getX(x)}
              y2={height - margin}
              stroke={getColor(axis.fontColor)}
              strokeWidth={1}
              opacity={0.3}
              strokeDasharray="3,3"
            />
            {/* メモリラベル（月） */}
            <text
              x={getX(x)}
              y={height - margin + 16}
              fontSize={axis.fontSize - 2}
              fill={getColor(axis.fontColor)}
              opacity={0.7}
              textAnchor="middle"
            >
              {`${Math.round(x)}月`}
            </text>
          </g>
        )
      )}
      {/* Y axis ticks and grid */}
      {yTickVals.map((y, i) =>
        y === minY ? null : (
          <g key={i}>
            {/* 横罫線 */}
            <line
              x1={margin}
              y1={getY(y)}
              x2={graphWidth - margin}
              y2={getY(y)}
              stroke={getColor(axis.fontColor)}
              strokeWidth={1}
              opacity={0.3}
              strokeDasharray="3,3"
            />
            {/* メモリラベル */}
            <text
              x={margin - 8}
              y={getY(y) + 4}
              fontSize={axis.fontSize - 2}
              fill={getColor(axis.fontColor)}
              opacity={0.7}
              textAnchor="end"
            >
              {Math.round(y * 100) / 100}
            </text>
          </g>
        )
      )}
      {/* Lines and Markers for each series */}
      {/* まず全系列の線をまとめて描画 */}
      <g>
        {seriesArr.map((s, idx) => {
          const isLineHovered = hovered && hovered.series === idx
          return (
            <path
              key={idx}
              d={pathDs[idx]}
              fill="none"
              stroke={getColor(s.lineColor)}
              strokeWidth={line.width + (isLineHovered ? 1 : 0)}
              strokeDasharray={
                line.type === GraphLineType.Solid ? "none" : "5,5"
              }
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered({ series: idx, key: -1 })}
              onMouseLeave={() => setHovered(null)}
            />
          )
        })}
        {/* 線hover時のツールチップ */}
        {seriesArr.map((s, idx) => {
          const isLineHovered =
            hovered && hovered.series === idx && hovered.key === -1
          return isLineHovered ? (
            <g key={idx}>
              <rect
                x={graphWidth / 2 - 40}
                y={margin + 8}
                width={80}
                height={26}
                rx={6}
                fill="#fff"
                opacity={0.95}
                filter="url(#tooltip-shadow)"
              />
              <text
                x={graphWidth / 2}
                y={margin + 25}
                fontSize={14}
                fill="#222"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {s.label}
              </text>
            </g>
          ) : null
        })}
      </g>
      {/* 次に全系列のマーカーをまとめて描画（線より上に配置） */}
      <g>
        {seriesArr.map((s, idx) => {
          const keys = Object.keys(s.data).map(Number)
          return keys.map((k) => (
            <g key={`${idx}-${k}`} style={{ pointerEvents: "auto" }}>
              {/* 透明な大きいマーカーでhover検知UX向上 */}
              <circle
                cx={getX(k)}
                cy={getY(s.data[k])}
                r={marker.size * 2.5}
                fill="transparent"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.stopPropagation()
                  setHovered({ series: idx, key: k })
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation()
                  setHovered(null)
                }}
              />
              <circle
                cx={getX(k)}
                cy={getY(s.data[k])}
                r={
                  hovered && hovered.series === idx && hovered.key === k
                    ? marker.size * 2
                    : marker.size
                }
                fill={getDarkerColor(s.lineColor)}
                style={{
                  cursor: "pointer",
                  transition: "r 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
                pointerEvents="none"
              />
              {/* Tooltip */}
              {hovered && hovered.series === idx && hovered.key === k && (
                <g>
                  <rect
                    x={getX(k) + 8}
                    y={getY(s.data[k]) - 28}
                    width={40}
                    height={22}
                    rx={4}
                    fill="#fff"
                    opacity={0.95}
                    filter="url(#tooltip-shadow)"
                  />
                  <text
                    x={getX(k) + 28}
                    y={getY(s.data[k]) - 14}
                    fontSize={12}
                    fill="#222"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    {s.data[k]}
                  </text>
                </g>
              )}
            </g>
          ))
        })}
      </g>
      {/* Marker shadow filter（大きく濃く） */}
      <defs>
        <filter
          id="tooltip-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="4"
            floodColor="#888"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgGraph

/* Sample usage
<SvgGraph
  data={{
    data: [{ 1: 10, 2: 20, 3: 30, 4: 25, 5: 15 }],
    title: {
      text: "Sample Graph",
      fontSize: 16,
      fontColor: "赤",
      fontOpacity: 1,
    },
    axis: {
      xLabel: "X Axis",
      yLabel: "Y Axis",
      fontSize: 12,
      fontColor: "黒",
      fontOpacity: 0.8,
    },
    line: { color: "青", width: 2, type: "実線" },
    marker: { color: "red", size: 5 },
    legend: {
      show: true,
      label: "サンプル凡例",
      fontSize: 12,
      fontColor: "青",
      fontOpacity: 1,
    },
  }}
/>
*/
