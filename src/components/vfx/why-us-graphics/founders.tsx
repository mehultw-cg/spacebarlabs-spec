import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface FoundersProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    outerShield?: number;
    middleShield?: number;
    innerShield?: number;
    networkLines?: number;
    networkNodes?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const Founders = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: FoundersProps) => {
  const outerShieldStroke = strokeWidths?.outerShield;
  const innerShieldStroke = strokeWidths?.innerShield;
  const networkLinesStroke = strokeWidths?.networkLines;
  const networkNodesStroke = strokeWidths?.networkNodes;

   return (
   <svg
     width="100%"
     height="100%"
     viewBox="0 0 1068 1246"
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
    <g id="Foounders">
      <g id="FoundersConstellation">
        <g>
          <path
            d="M319.333,375l378.667,426"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M710,580l165,-108"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M875,472l114.395,201"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M701,799l116,213"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M818,1012l169,-336"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M487,1039l248,143"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M816,1010l-80,176"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M481,1041l-68,-4"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
          <path
            d="M874,474l0,-65"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${networkLinesStroke}px`,
            }}
          />
        </g>
        <g>
          <path
            d="M872.553,473.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M991.553,676.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M994.553,874.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M815.553,1016.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M698.553,803.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M710.053,580l0,-7l0,7c1.932,-3.346 3.5,-6.062 3.5,-6.062c0,0 -1.568,2.716 -3.5,6.062c3.346,-1.932 6.062,-3.5 6.062,-3.5c0,0 -2.716,1.568 -6.062,3.5l7,0l-7,0c3.346,1.932 6.062,3.5 6.062,3.5c0,0 -2.716,-1.568 -6.062,-3.5c1.932,3.346 3.5,6.062 3.5,6.062c0,0 -1.568,-2.716 -3.5,-6.062l0,7l0,-7c-1.932,3.346 -3.5,6.062 -3.5,6.062c0,0 1.568,-2.716 3.5,-6.062c-3.346,1.932 -6.062,3.5 -6.062,3.5c0,0 2.716,-1.568 6.062,-3.5l-7,0l7,0c-3.346,-1.932 -6.062,-3.5 -6.062,-3.5c0,0 2.716,1.568 6.062,3.5c-1.932,-3.346 -3.5,-6.062 -3.5,-6.062c0,0 1.568,2.716 3.5,6.062Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M461.553,204.554l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M611.553,205.722l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M208.553,471.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M207.553,776.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M481.123,1034.008c0,-1.108 1.089,-2.008 2.43,-2.008c1.341,0 2.43,0.9 2.43,2.008c0.671,-0.96 2.158,-1.289 3.32,-0.735c1.162,0.554 1.56,1.783 0.89,2.742c1.162,-0.554 2.649,-0.225 3.32,0.735c0.671,0.96 0.272,2.188 -0.89,2.742c1.341,0 2.43,0.9 2.43,2.008c0,1.108 -1.089,2.008 -2.43,2.008c1.162,0.554 1.56,1.783 0.89,2.742c-0.671,0.96 -2.158,1.289 -3.32,0.735c0.671,0.96 0.272,2.188 -0.89,2.742c-1.162,0.554 -2.649,0.225 -3.32,-0.735c0,1.108 -1.089,2.008 -2.43,2.008c-1.341,0 -2.43,-0.9 -2.43,-2.008c-0.671,0.96 -2.158,1.289 -3.32,0.735c-1.162,-0.554 -1.56,-1.783 -0.89,-2.742c-1.162,0.554 -2.649,0.225 -3.32,-0.735c-0.671,-0.96 -0.272,-2.188 0.89,-2.742c-1.341,0 -2.43,-0.9 -2.43,-2.008c0,-1.108 1.089,-2.008 2.43,-2.008c-1.162,-0.554 -1.56,-1.783 -0.89,-2.742c0.671,-0.96 2.158,-1.289 3.32,-0.735c-0.671,-0.96 -0.272,-2.188 0.89,-2.742c1.162,-0.554 2.649,-0.225 3.32,0.735Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
          <path
            d="M735.553,1188.5l0,-9.5l0,9.5c3.174,-4.541 5.75,-8.227 5.75,-8.227c0,0 -2.576,3.687 -5.75,8.227c5.497,-2.622 9.959,-4.75 9.959,-4.75c0,0 -4.463,2.128 -9.959,4.75l11.5,0l-11.5,0c5.497,2.622 9.959,4.75 9.959,4.75c0,0 -4.463,-2.128 -9.959,-4.75c3.174,4.541 5.75,8.227 5.75,8.227c0,0 -2.576,-3.687 -5.75,-8.227l0,9.5l0,-9.5c-3.174,4.541 -5.75,8.227 -5.75,8.227c0,0 2.576,-3.687 5.75,-8.227c-5.497,2.622 -9.959,4.75 -9.959,4.75c0,0 4.463,-2.128 9.959,-4.75l-11.5,0l11.5,0c-5.497,-2.622 -9.959,-4.75 -9.959,-4.75c0,0 4.463,2.128 9.959,4.75c-3.174,-4.541 -5.75,-8.227 -5.75,-8.227c0,0 2.576,3.687 5.75,8.227Z"
            style={{
              stroke: "currentColor",
              strokeWidth: `${networkNodesStroke}px`,
            }}
          />
        </g>
      </g>
      <circle
        id="Client"
        cx={212.5}
        cy={1038.5}
        r={203.5}
        style={{
          fillOpacity: 0,
        }}
      />
      <clipPath id="_clip1">
        <circle cx={212.5} cy={1038.5} r={203.5} />
      </clipPath>
      <g clipPath="url(#_clip1)">
        <ellipse
          cx={208.5}
          cy={982}
          rx={69.5}
          ry={84}
          style={{
            fillOpacity: 0,
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M81.936,1190.576c1.002,-66.245 0.051,-77.362 73.975,-106.318"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M158.52,1082.903c17.039,-9.759 13.056,-7.77 19.978,-25.801"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M345.498,1189.576c-1.002,-66.245 -0.051,-77.362 -73.975,-106.318"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M268.914,1081.903c-17.039,-9.759 -17.056,-9.77 -23.978,-27.801"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M138.601,983.514c14.827,-33.53 29.891,-38.296 63.863,-42.727c4.379,-0.571 9.649,0.964 14.541,3.117c8.251,3.631 15.423,9.018 15.423,9.018c0.532,-14.956 5.88,-14.746 10.712,-15.341c10.176,-1.254 28.831,29.71 32.63,49.216"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M170,1076c30,49.333 57,41.111 89,0"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
      </g>
      <circle
        cx={212.5}
        cy={1038.5}
        r={203.5}
        style={{
          fill: fillColor || "none",
          stroke: "currentColor",
          strokeWidth: `${outerShieldStroke}px`,
        }}
      />
      <g id="topRight">
        <g>
          <circle
            cx={860.5}
            cy={207.5}
            r={203.5}
            style={{
              fillOpacity: 0,
              stroke: "currentColor",
              strokeWidth: `${outerShieldStroke}px`,
            }}
          />
          <path
            d="M855.898,44c-115.039,-2.659 -103.44,128.749 -103.44,128.749c0,0 -0.24,30.575 -0.006,47.807"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <path
            d="M754.554,222.454c17.844,4.629 38.896,6.912 64.993,5.508"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <path
            d="M858.102,44c108.039,3.341 95.202,59.31 100.44,128.749c1.25,16.573 1.24,29.575 1.006,47.807"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <path
            d="M959.446,222.454c-17.844,4.629 -38.896,6.912 -64.993,5.508"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <path
            d="M727.936,361.576c1.002,-66.245 -0.949,-74.362 72.975,-103.318"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <path
            d="M990.498,363.576c-1.002,-66.245 -0.051,-77.362 -73.975,-106.318"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <path
            d="M814.731,253.511c5.391,26.747 64.75,41.419 89.649,1.379"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${innerShieldStroke}px`,
            }}
          />
          <clipPath id="_clip2">
            <rect x={737} y={125} width={217} height={194} />
          </clipPath>
          <g clipPath="url(#_clip2)">
            <ellipse
              cx={856.5}
              cy={155}
              rx={69.5}
              ry={84}
              style={{
                fillOpacity: 0,
                stroke: "currentColor",
                strokeWidth: `${innerShieldStroke}px`,
              }}
            />
          </g>
        </g>
        <path
          d="M803.52,256.903c17.039,-9.759 13.056,-7.77 19.978,-25.801"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M913.914,255.903c-17.039,-9.759 -17.056,-9.77 -23.978,-27.801"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M793.524,127.123c30.73,-3.612 50.548,-12.606 75.454,-30.711c25.412,25.601 46.658,30.131 53.036,31.145"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
      </g>
      <circle
        id="topLeft"
        cx={207.5}
        cy={210.5}
        r={203.5}
        style={{
          fillOpacity: 0,
        }}
      />
      <clipPath id="_clip3">
        <circle cx={207.5} cy={210.5} r={203.5} />
      </clipPath>
      <g clipPath="url(#_clip3)">
        <path
          d="M201.013,292.591c1.491,10.948 -11.383,114.767 -11.663,119.532c-0.129,2.192 -0.932,1.208 21.173,1.13c29.994,-0.106 17.982,-0.967 18.173,-2.24c1.573,-10.478 -4.055,-50.65 -4.3,-59.84c-0.53,-19.902 -2.953,-55.194 -3.327,-58.998"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M141.937,156.37c13.118,-13.967 17.454,-16.56 23.519,-35.102c55.725,27.135 72.457,-3.047 75.881,-5.803c12.601,-10.14 30.967,44.199 27.602,64.929"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M78.936,364.576c1.002,-66.245 0.051,-77.362 73.975,-106.318"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M155.52,256.903c17.039,-9.759 13.056,-7.77 19.978,-25.801"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M342.498,363.576c-1.002,-66.245 -0.051,-77.362 -73.975,-106.318"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M265.914,255.903c-17.039,-9.759 -17.056,-9.77 -23.978,-27.801"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M156.718,258.789c4.157,17.965 5.637,29.989 32.229,50.171c3.071,2.331 1.889,-1.246 6.898,-10.323c5.058,-9.167 14.876,-12.62 11.865,-14.029c-22.335,-10.455 -22.61,-18.307 -36.872,-38.745"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <path
          d="M264.5,258.789c-4.317,17.965 -7.777,25.989 -31.822,46.171c-3.063,2.571 -4.846,1.754 -9.01,-9.323c-3.7,-9.845 -15.258,-9.62 -12.13,-11.029c23.197,-10.455 23.484,-18.307 38.296,-38.745"
          style={{
            fill: fillColor || "none",
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
        <ellipse
          cx={203.5}
          cy={156}
          rx={69.5}
          ry={84}
          style={{
            fillOpacity: 0,
            stroke: "currentColor",
            strokeWidth: `${innerShieldStroke}px`,
          }}
        />
      </g>
      <circle
        cx={207.5}
        cy={210.5}
        r={203.5}
        style={{
          fill: fillColor || "none",
          stroke: "currentColor",
          strokeWidth: `${outerShieldStroke}px`,
        }}
       />
     </g>
   </svg>
   );
};

export default Founders;
