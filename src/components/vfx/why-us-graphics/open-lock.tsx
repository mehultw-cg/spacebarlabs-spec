import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface OpenLockProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    lockMain?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const OpenLock = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: OpenLockProps) => {
  const lockMainStroke = strokeWidths?.lockMain;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 294 423"
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
      <g id="Open-Lock">
        <path
          id="Open-Lock-Top"
          d="M77,186c0.961,3.48 -36,2 -36,2l0,-95c6.342,-31.773 22.795,-57.009 52,-74c31.14,-18.14 61.806,-20.783 92,-8c48.03,24.857 60.704,62.981 63,105l-32,4c-8.635,-36.195 -17.579,-67.626 -50,-78c-25.504,-11.028 -48.421,-5.492 -69,15c-13.635,11.23 -21.108,26.89 -21,48c0,0 0.039,77.52 1,81Z"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${lockMainStroke}px`,
          }}
        />
        <path
          id="Keyhole-Lock"
          d="M132,308c-15.295,-12.779 -20.199,-26.564 -7,-44c14.204,-12.296 27.876,-12.817 41,-1c11.576,13.645 10.944,30.426 -4,44l-1,50l-29,0l0,-49Z"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${lockMainStroke}px`,
          }}
        />
        <path
          id="Outer-Lock"
          d="M3,213l0,184c1.809,17.525 9.813,23.995 22,23l234,0c19.601,1.794 30.865,-6.722 31,-29l0,-171c2.498,-23.575 -5.178,-34.317 -24,-31l-234,-1c-16.995,-3.806 -27.684,2.834 -29,25Z"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${lockMainStroke}px`,
          }}
        />
        <path
          id="Inner-Border-Lock"
          d="M35,214l223,1l0,173l-225,-2l2,-172Z"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${lockMainStroke}px`,
          }}
        />
      </g>
    </svg>
  )
}

export default OpenLock;
