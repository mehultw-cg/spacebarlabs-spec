import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface LineDownProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    constellationLines?: number;
    constellationNodes?: number;
    triangle?: number;
    xAxis?: number;
    yAxis?: number;
    bigLine?: number;
    rectangles?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const LineDown = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: LineDownProps) => {
  const constellationLinesStroke = strokeWidths?.constellationLines;
  const constellationNodesStroke = strokeWidths?.constellationNodes;
  const triangleStroke = strokeWidths?.triangle;
  const xAxisStroke = strokeWidths?.xAxis;
  const bigLineStroke = strokeWidths?.bigLine;
  const rectanglesStroke = strokeWidths?.rectangles;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1219 885"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
        ...style
      }}
      className={cn(strokeColor || "stroke-cyan-200 dark:stroke-cyan-700", className)}
      {...props}
    >
      <g id="Line-Chart-Down" >
        <g
          id="Line-chart-down-constellation"
        >
          <circle
            cx={241}
            cy={199}
            r={3}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={414}
            cy={287}
            r={4}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={299.5}
            cy={168.5}
            r={2.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={502}
            cy={314}
            r={2}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={580.5}
            cy={219.5}
            r={4.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={770.5}
            cy={160.5}
            r={3.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={798.5}
            cy={381.5}
            r={3.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={873.5}
            cy={390.5}
            r={4.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={934.5}
            cy={498.5}
            r={2.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <circle
            cx={995}
            cy={508}
            r={2}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <path
            d="M241,200l60,-32l113,119l89,27l78,-95l191,-57l28,220l74,9l61,107l61,10"
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${constellationLinesStroke}px`,
            }}
          />
        </g>
        <g id="Line-Chart-Rectangles" >
          <rect
            x={84}
            y={404}
            width={86}
            height={464}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={280}
            y={531}
            width={85}
            height={337}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={477}
            y={536}
            width={81}
            height={333}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={669}
            y={637}
            width={84}
            height={234}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={862}
            y={776}
            width={85}
            height={91}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={1054}
            y={821}
            width={88}
            height={49}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
        </g>
        <g id="Line-Chart-Down-Big-Line" >
          <path
            id="line-chart-big-line-path"
            d="M42,125l167,243l217,117l213,-160l182,282l246,87"
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${bigLineStroke}px`,
            }}
          />
          <path
            d="M1075.485,647.894l57.136,71.697l-80.212,17.03l23.076,-88.727Z"
            style={{
              fill: fillColor || "currentColor",
              stroke: "currentColor",
              strokeWidth: `${triangleStroke}px`,
            }}
          />
        </g>
        <g id="Line-chart-down-axis" >
          <path
            d="M20,35l0,834l1165,0"
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${xAxisStroke}px`,
            }}
          />
          <path
            d="M19,4l15,30l-30,0l15,-30Z"
            style={{
              fill: fillColor || "currentColor",
              stroke: "currentColor",
              strokeWidth: `${triangleStroke}px`,
            }}
          />
          <path
            d="M1215.773,866.776l-30,15l0,-30l30,15Z"
            style={{
              fill: fillColor || "currentColor",
              stroke: "currentColor",
              strokeWidth: `${triangleStroke}px`,
            }}
          />
        </g>
      </g>
    </svg>
  );
}

export default LineDown;
