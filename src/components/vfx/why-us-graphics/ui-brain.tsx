import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface UiBrainProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;
    };
  strokeColor?: string;
  fillColor?: string;
}

const UiBrain = ({ className, strokeWidths, strokeColor, fillColor, style, width = "100%", height = "100%", ...props }: UiBrainProps) => {
  const mainStroke = strokeWidths?.main;
  const detailStroke = 2;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1102 709"
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
      <g id="ui-brains">
        <g id="UI-brain">
          <path
            d="M1099,153.563l0,528.874c0,13.005 -10.558,23.563 -23.563,23.563l-643.874,0c-13.005,0 -23.563,-10.558 -23.563,-23.563l0,-528.874c0,-13.005 10.558,-23.563 23.563,-23.563l643.874,0c13.005,0 23.563,10.558 23.563,23.563Z"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M807,548l168,71"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M797,171l229,0"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M797,190l229,0"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M408,230.95l691,-1.119"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <ellipse
            cx={467}
            cy={181.5}
            rx={14}
            ry={14.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <ellipse
            cx={520}
            cy={181.5}
            rx={14}
            ry={14.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <ellipse
            cx={573}
            cy={181.5}
            rx={14}
            ry={14.5}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <rect
            x={470}
            y={280}
            width={561}
            height={203}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <rect
            x={778}
            y={530}
            width={253}
            height={115}
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M472,537l220,0"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M472,565l220,0"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M472,597l198,0"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
          <path
            d="M472,629l129,0"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${mainStroke}px`,
            }}
          />
        </g>
        <g id="Brain">
          <path
            d="M518,117c-8.425,-13.723 -18.437,-46.49 -45.106,-53.07c-5.99,-1.478 -10.293,-1.106 -15.894,-1.93c-4.033,-0.593 -4.305,-10.629 -11.928,-18.016c-3.691,-3.577 -17.938,-12.849 -23.628,-15.179c-13.589,-5.565 -30.077,-9.061 -41.431,-7.383c-4.879,0.721 -13.321,4.783 -17.013,1.578c-30.301,-26.299 -80.077,-22.111 -100.597,-14.887c-8.312,2.926 -12.58,6.046 -13.403,5.887c-32.707,-6.314 -68.786,3.164 -78.016,9.535c-12.218,8.433 -5.934,3.742 -11.984,8.465c-5.489,4.285 -8.13,4.824 -19.771,8.079c-28.486,7.966 -22.316,2.819 -55.188,28.719c-5.412,4.264 -14.66,15.127 -22.413,27.574c-0.952,1.528 -4.223,9.251 -6.628,14.628c-2.868,6.413 -17.236,10.739 -32.473,32.235c-45.723,64.509 -1.2,128.953 21.109,145.275c45.81,33.515 73.261,19.521 89.363,14.49c5.825,-1.82 7.738,21.449 10.635,31.19c6.564,22.067 18.326,34.969 31.66,42.024c28.436,15.045 96.567,-8.096 105.593,-11.458c52.304,-19.484 37.413,-21.02 41.112,-19.756c21.469,7.34 51.823,10.447 67,12"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M55,112c4.518,-0.1 10.507,-2.319 19.852,-1.917c10.536,0.453 4.995,-0.343 17.532,2.471c14.289,3.207 12.582,9.404 15.615,3.446c12.646,-24.836 32.882,-29.612 43,-32"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M72,110c-7.333,7.778 -22,23.333 -16,38"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M205,80c2.511,-33.429 18.198,-46.25 48,-37"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M283,32c-14.17,7.75 -19.5,18.418 -16,32"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M225,149c-5.265,-10.279 -7.53,-25.557 -5.794,-36.836c1.598,-10.388 4.196,-16.776 15.794,-28.164"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M206,149c-7.585,-7.405 -17.234,-13.32 -24,-13.224c-45.797,0.653 -49.348,53.147 -21,73.224"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M107,252c-26.809,10.553 -41.352,-1.068 -43,-36"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M80,208c-16.148,-34.784 -35.49,-35.097 -57,-12"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M364,25c-5.049,6.732 -19.646,9.862 -27.605,20.045c-7.805,9.986 -11.958,25.023 -18.395,31.955c-10.456,11.26 -34.494,14.642 -35,30c-0.655,19.874 -4.561,60.447 -23,77"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M400,86c-4.4,6.345 -17.325,2.33 -24.128,11.358c-5.052,6.703 -4.037,26.878 -7.872,30.642c-5.851,5.743 -16.617,9.248 -22,11"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M357,75c35.742,-17.343 65.244,-7.146 90,24"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M135,302c11.958,-18.747 35.875,-56.242 65,-66c27.128,-9.089 83.641,-1.718 98,-20c28.38,-36.132 49.843,-14.378 64,-4c6.542,4.796 23.757,-14.736 32,-19"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M390,272c-18.4,3.677 -52.682,-1.258 -61,0c-26.14,3.953 -32.749,14.017 -61,11c-20.171,-2.154 -45.432,34.871 -60,44"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M268,367c28.667,42.667 57.333,85.333 86,128"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
          <path
            d="M300,356c9.537,9.422 17.005,28.715 30.506,43.411c12.61,13.726 31.377,22.803 37.494,33.589c4.217,7.435 0.361,17.89 1.399,27.279c1.293,11.687 6.872,22.27 6.601,29.721"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${detailStroke}px`,
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default UiBrain;
