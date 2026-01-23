import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface BgNetworkProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    stars?: number;
    lines?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const BgNetwork = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: BgNetworkProps) => {
  const starsStroke = strokeWidths?.stars ?? 8.33;
  const linesStroke = strokeWidths?.lines ?? 3.75;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 873 798"
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
      <g id="bg-network">
        <path
          d="M344.088,23.403c14.395,-19.909 42.245,-24.385 62.154,-9.989c19.909,14.395 24.385,42.245 9.989,62.154c-14.395,19.909 -42.245,24.385 -62.154,9.989c-19.909,-14.395 -24.385,-42.245 -9.989,-62.154Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M28.416,142.03c6.131,-8.48 17.993,-10.386 26.473,-4.255c8.48,6.131 10.386,17.993 4.255,26.473c-6.131,8.48 -17.993,10.386 -26.473,4.255c-8.48,-6.131 -10.386,-17.993 -4.255,-26.473Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M176.722,297.075c10.13,-14.01 29.728,-17.16 43.738,-7.03c14.01,10.13 17.16,29.728 7.03,43.738c-10.13,14.01 -29.728,17.16 -43.738,7.03c-14.01,-10.13 -17.16,-29.728 -7.03,-43.738Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M13.034,498.131c14.928,-20.646 43.81,-25.288 64.456,-10.359c20.646,14.928 25.288,43.81 10.359,64.456c-14.928,20.646 -43.81,25.288 -64.456,10.359c-20.646,-14.928 -25.288,-43.81 -10.359,-64.456Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M39.487,175.466l10.111,303.559"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M63.203,141.752l271.43,-74.324"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M176.668,291.522l-119.939,-123.934"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M357.715,86.153l-139.927,201.96"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M235.217,323.095l162.291,40.037"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M445.583,302.273l-54.386,-206.152"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M97.078,514.142l304.644,-117.445"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M234.316,743.581c10.13,-14.01 29.728,-17.16 43.738,-7.03c14.01,10.13 17.16,29.728 7.03,43.738c-10.13,14.01 -29.728,17.16 -43.738,7.03c-14.01,-10.13 -17.16,-29.728 -7.03,-43.738Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M84.356,559.874l150.586,182.872"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M438.164,425.081l-164.858,303.968"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M294.23,756.385l220.334,-54.304"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M101.148,539.464l413.95,136.555"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M552.464,644.037l-66.04,-212.544"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M590.406,645.024l134.522,-228.248"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M708.32,372.215l-177.09,0.125"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M606.788,695.524l263.415,52.122"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M762.87,417.762l107.333,329.884"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M419.869,76.163l291.143,261.378"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M497.481,309.282l88.461,-184.243"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M429.015,52.26l142.395,33.789"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M80.162,489.704l104.925,-147.925"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${linesStroke}px`,
          }}
        />
        <path
          d="M411.115,330.247c20.793,-28.757 61.021,-35.222 89.778,-14.429c28.757,20.793 35.222,61.021 14.429,89.778c-20.793,28.757 -61.021,35.222 -89.778,14.429c-28.757,-20.793 -35.222,-61.021 -14.429,-89.778Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M579.139,75.361c9.597,-13.272 28.164,-16.256 41.436,-6.66c13.272,9.597 16.256,28.164 6.66,41.436c-9.597,13.272 -28.164,16.256 -41.436,6.66c-13.272,-9.597 -16.256,-28.164 -6.66,-41.436Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M712.379,349.719c14.129,-19.54 41.463,-23.933 61.003,-9.804c19.54,14.129 23.933,41.463 9.804,61.003c-14.129,19.54 -41.463,23.933 -61.003,9.804c-19.54,-14.129 -23.933,-41.463 -9.804,-61.003Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
        <path
          d="M527.173,659.319c13.595,-18.802 39.898,-23.03 58.701,-9.434c18.802,13.595 23.03,39.898 9.434,58.701c-13.595,18.802 -39.898,23.03 -58.701,9.434c-18.802,-13.595 -39.898,23.03 -58.701,9.434Z"
          style={{
            fill: fillColor || "rgba(0,0,0,0.6)",
            stroke: "currentColor",
            strokeOpacity: 0.77,
            strokeWidth: `${starsStroke}px`,
          }}
        />
      </g>
    </svg>
  )
}

export default BgNetwork;
