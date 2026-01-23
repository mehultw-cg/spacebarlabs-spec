import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface GenericGlobeProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const GenericGlobe = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: GenericGlobeProps) => {
  const mainStroke = strokeWidths?.main;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 341 342"
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
      <g id="Generic-Globe">
        <circle
          cx={170.5}
          cy={171.5}
          r={169.5}
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
        <path
          d="M170.791,2l-0.289,339"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
        <path
          d="M47.716,54.648c82.146,56.562 164.856,56.052 248.086,2.705"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
        <path
          d="M47.716,285.22c82.146,-56.562 164.856,-56.052 248.086,-2.705"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
        <path
          d="M171,1c-127.501,110.583 -128.713,223.89 0,340"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
        <path
          d="M169.919,1c127.501,110.583 128.713,223.89 0,340"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
        <path
          d="M1.003,172.43l338.997,-1.371"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${mainStroke}px`,
          }}
        />
      </g>
    </svg>
  )
}

export default GenericGlobe;
