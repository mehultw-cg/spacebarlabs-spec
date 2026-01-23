import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface ClosedLockFingerprintProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    fingerprint?: number;
    outerLock?: number;
    lockTop?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const ClosedLockFingerprint = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: ClosedLockFingerprintProps) => {
  const fingerprintStroke = strokeWidths?.fingerprint;
  const outerLockStroke = strokeWidths?.outerLock;
  const lockTopStroke = strokeWidths?.lockTop;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 294 421"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
        ...style
      }}
      className={cn(strokeColor || "stroke-cyan-200 dark:stroke-cyan-700", className)}
      {...props}
    >
      <g id="Closed-Lock-Fingerprint">
        <g>
          <path
            id="outer-curve"
            d="M80.084,251.561c31.86,-54.158 120.039,-40.44 135.976,28.987"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
            }}
          />
          <path
            id="_2nd-last-outer-curve"
            d="M73.199,307.893c1.742,-8.908 3.032,-17.587 5.728,-24.733c35.22,-93.346 152.949,-39.48 126.806,48.798"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="inner-curve-3"
            d="M73.199,329.77c12.766,-9.082 15.201,-13.662 17.32,-23.49c15.155,-70.295 65.592,-67.363 92.177,-33.369c13.88,17.748 10.812,52.35 2.382,83.111"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="inner-curve-2"
            d="M81.231,345.99c11.099,-3.849 19.459,-13.424 21.698,-21.2c4.262,-14.802 5.221,-28.3 11.355,-37.262c28.806,-42.091 75.1,-18.688 57.024,61.744"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="inner-curve-around-middle"
            d="M90.411,359.851c10.175,-8.362 18.737,-13.052 21.818,-24.88c6.598,-25.323 17.532,-49.254 28.989,-51.895c10.84,-2.499 22.627,14.405 15.173,55.446"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="Inner"
            d="M143.195,329.223c1.817,-9.514 1.678,-18.995 -0.574,-28.44"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="bottom-middle-left"
            d="M131.721,330.864c-6.7,17.576 -15.795,30.856 -27.539,39.378"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="bottom-center-left"
            d="M123.688,375.711c8.199,-8.918 14.331,-19.177 17.786,-31.174"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="bottom-middle"
            d="M151.228,365.867c-0.051,3.892 1.223,7.463 5.164,10.391"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            id="bottom-middle-right"
            d="M174.751,369.148c-14.921,-5.335 -18.845,-12.555 -20.081,-20.236"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
        </g>
        <path
          id="Outer-Lock"
          d="M3,211l0,184c1.809,17.525 9.813,23.995 22,23l234,0c19.601,1.794 30.865,-6.722 31,-29l0,-171c2.498,-23.575 -5.178,-34.317 -24,-31l-234,-1c-16.995,-3.806 -27.684,2.834 -29,25Z"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${outerLockStroke}px`,
            strokeLinecap: "round",
          }}
        />
        <path
          d="M40.649,186.041l40.351,-0.041l-1,-95c4.298,-23.485 16.049,-39.718 37,-47c16.861,-6.167 34.496,-6.727 53,-1c17.918,6.084 31.311,17.455 36,39l1,105l40,0l-1,-102c-8.274,-28.688 -23.886,-52.725 -49,-70c-30.588,-15.703 -61.828,-18.25 -94,-2c-31.213,12.512 -51.808,38.268 -62,77l-0.351,96.041l0.351,-96.041"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${lockTopStroke}px`,
            strokeLinecap: "round",
          }}
        />
      </g>
    </svg>
  )
}

export default ClosedLockFingerprint;
