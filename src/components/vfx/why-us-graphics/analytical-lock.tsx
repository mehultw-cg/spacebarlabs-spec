import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface AnalyticalLockProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    rectangles?: number;
    keyhole?: number;
    outerLock?: number;
    innerLockTop?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const AnalyticalLock = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: AnalyticalLockProps) => {
  const rectanglesStroke = strokeWidths?.rectangles;
  const keyholeStroke = strokeWidths?.keyhole;
  const outerLockStroke = strokeWidths?.outerLock;
  const innerLockTopStroke = strokeWidths?.innerLockTop;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 392 372"
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
      <g id="Analytics-Lock">
        <g id="analytics-Lock-rectangles">
          <rect
            x={3}
            y={211}
            width={58}
            height={115}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={101}
            y={142}
            width={54}
            height={184}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <rect
            x={192}
            y={82}
            width={59}
            height={243}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
          <path
            d="M289,194l0,-191l59,0l0,182"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${rectanglesStroke}px`,
            }}
          />
        </g>
        <g id="Closed-Lock-Kehole">
          <path
            id="Keyhole-Lock"
            d="M320.125,334.393c-6.56,-5.481 -8.663,-11.393 -3.002,-18.871c6.092,-5.273 11.956,-5.497 17.584,-0.429c4.965,5.852 4.694,13.049 -1.716,18.871l-0.429,21.444l-12.438,0l0,-21.015Z"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${keyholeStroke}px`,
            }}
          />
          <path
            id="Inner-curve-closed-lock-top"
            d="M298.252,270.06l0.858,-41.173c0.106,-8.777 4.185,-14.771 11.58,-18.442c11.908,-5.39 22.862,-4.912 33.024,0.429c5.906,3.937 9.96,9.24 9.864,17.155l-0.429,40.744"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${keyholeStroke}px`,
            }}
          />
          <path
            id="Outer-Lock"
            d="M266.086,280.353l0,78.915c0.776,7.516 4.209,10.291 9.436,9.864l100.359,0c8.407,0.769 13.238,-2.883 13.295,-12.438l0,-73.34c1.071,-10.111 -2.221,-14.718 -10.293,-13.295l-100.359,-0.429c-7.289,-1.632 -11.873,1.216 -12.438,10.722Z"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${outerLockStroke}px`,
            }}
          />
          <path
            d="M282.405,269.647l-0.405,-41.647c5.357,-21.004 20.017,-33.965 45,-38c22.189,3.742 36.957,15.6 43,37l1,42"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerLockTopStroke}px`,
            }}
          />
        </g>
      </g>
    </svg>
  )
}

export default AnalyticalLock;
