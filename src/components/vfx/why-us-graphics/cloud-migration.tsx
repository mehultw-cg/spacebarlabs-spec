import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface CloudMigrationProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const CloudMigration = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: CloudMigrationProps) => {
  const mainStroke = strokeWidths?.main;

  return (
    <svg
    width="100%"
    height="100%"
    viewBox="0 0 451 332"
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
    <path
      id="Cloud-Migration"
      d="M323,277l71,-2c38.355,-13.102 53.672,-39.293 54,-74c-3.442,-36.079 -18.68,-57.172 -42,-68l-30,-7c1.54,-52.036 -15.087,-94.743 -69,-114c-26.103,-12.01 -53.768,-11.628 -79,-1c-30.466,7.316 -51.569,24.841 -62,54c-15.613,-8.23 -32.151,-10.411 -50,-4c-16.505,4.919 -29.322,14.132 -39,27c-7.939,11.499 -12.01,25.455 -12,42c-23.508,0.069 -41.983,13.234 -56,38c-9.631,32.29 -7.045,59.997 10,79c10.689,11.943 23.007,21.187 38,26l75,1l103,0l-1,55l83,-78l-81,-80l1,61l-85,1"
      style={{
        fill: fillColor || "none",
        stroke: "currentColor",
        strokeWidth: `${mainStroke}px`,
      }}
    />
  </svg>
  );
}

export default CloudMigration;
