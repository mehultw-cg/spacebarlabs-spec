import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface LineUpProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    constellationLines?: number;
    constellationNodes?: number;
    triangle?: number;
    xAxis?: number;
    yAxis?: number;
    graphLines?: number;
    rectangles?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const LineUp = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: LineUpProps) => {
  const constellationLinesStroke = strokeWidths?.constellationLines;
  const constellationNodesStroke = strokeWidths?.constellationNodes;
  const triangleStroke = strokeWidths?.triangle;
  const xAxisStroke = strokeWidths?.xAxis;
  const yAxisStroke = strokeWidths?.yAxis;
  const graphLinesStroke = strokeWidths?.graphLines;
  const rectanglesStroke = strokeWidths?.rectangles;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1216 885"
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
      <g id="Line-Graph-Up">
        <g id="Constellation-line-graph-up">
          <ellipse
            cx={127}
            cy={337.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <ellipse
            cx={269}
            cy={381.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <ellipse
            cx={276}
            cy={274.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <ellipse
            cx={473}
            cy={266.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <ellipse
            cx={678}
            cy={213.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <ellipse
            cx={856}
            cy={107.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <ellipse
            cx={349}
            cy={166.5}
            rx={6}
            ry={5.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationNodesStroke}px`,
            }}
          />
          <path
            d="M128,337l151,-63l192,-6l207,-56l99,-98l79,-10l130,-30"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${constellationLinesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
        </g>
        <path
          d="M18.5,2l16.5,33l-33,0l16.5,-33Z"
          style={{
            fill: fillColor || "#95c9ff",
            stroke: "currentColor",
            strokeWidth: `${triangleStroke}px`,
          }}
        />
        <path
          d="M1127.447,142.613l-34.967,73.026l-43.852,-54.506l78.82,-18.52Z"
          style={{
            fill: fillColor || "#95c9ff",
            stroke: "currentColor",
            strokeWidth: `${triangleStroke}px`,
          }}
        />
        <g>
          <path
            d="M1214,866.5l-33,16.5l0,-33l33,16.5Z"
            style={{
              fill: fillColor || "#95c9ff",
              stroke: "currentColor",
              strokeWidth: `${triangleStroke}px`,
            }}
          />
          <path
            d="M1190.999,869.134l-1163.293,5.981l-5.706,0.045"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${xAxisStroke}px`,
            }}
          />
        </g>
        <path
          d="M50,637l179,-27l188,-97l199,40l191,-117l180,-180l84,-67"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${graphLinesStroke}px`,
            strokeLinecap: "butt",
          }}
        />
        <g>
          <rect
            x={85}
            y={727}
            width={83}
            height={146}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
          <rect
            x={281}
            y={673}
            width={83}
            height={199}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
          <rect
            x={476}
            y={687}
            width={82}
            height={183}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
          <rect
            x={671}
            y={616}
            width={81}
            height={254}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
          <rect
            x={863}
            y={491}
            width={84}
            height={378}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
          <rect
            x={1054}
            y={387}
            width={87}
            height={483}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
              strokeLinecap: "butt",
            }}
          />
        </g>
        <path
          d="M19.005,34l2.995,839"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${yAxisStroke}px`,
          }}
        />
      </g>
    </svg>
  )
}

export default LineUp;
