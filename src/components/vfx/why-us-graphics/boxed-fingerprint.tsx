import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface BoxedFingerprintProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    outer?: number;
    fingerprint?: number;
  };
  strokeColor?: string;
  fillColor?: string;
}

const BoxedFingerprint = ({ className, strokeWidths, strokeColor, fillColor, style, ...props }: BoxedFingerprintProps) => {
  const outerStroke = strokeWidths?.outer;
  const fingerprintStroke = strokeWidths?.fingerprint;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 375 379"
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
      <g id="Boxed-fingerprint">
        <g id="Rounded-square-fingerprint">
          <clipPath id="_clip1">
            <rect x={4} y={4} width={85} height={89} />
          </clipPath>
          <g clipPath="url(#_clip1)">
            <path
              d="M371,35.506l0,307.988c0,17.389 -14.117,31.506 -31.506,31.506l-303.988,0c-17.389,0 -31.506,-14.117 -31.506,-31.506l0,-307.988c0,-17.389 14.117,-31.506 31.506,-31.506l303.988,0c17.389,0 31.506,14.117 31.506,31.506Z"
              style={{
                fill: fillColor || "none",
                stroke: "currentColor",
                strokeWidth: `${outerStroke}px`,
              }}
            />
          </g>
          <clipPath id="_clip2">
            <rect x={283} y={4} width={88} height={88} />
          </clipPath>
          <g clipPath="url(#_clip2)">
            <path
              d="M371,35.506l0,307.988c0,17.389 -14.117,31.506 -31.506,31.506l-303.988,0c-17.389,0 -31.506,-14.117 -31.506,-31.506l0,-307.988c0,-17.389 14.117,-31.506 31.506,-31.506l303.988,0c17.389,0 31.506,14.117 31.506,31.506Z"
              style={{
                fill: fillColor || "none",
                stroke: "currentColor",
                strokeWidth: `${outerStroke}px`,
              }}
            />
          </g>
          <clipPath id="_clip3">
            <rect x={4} y={283} width={86} height={92} />
          </clipPath>
          <g clipPath="url(#_clip3)">
            <path
              d="M371,35.506l0,307.988c0,17.389 -14.117,31.506 -31.506,31.506l-303.988,0c-17.389,0 -31.506,-14.117 -31.506,-31.506l0,-307.988c0,-17.389 14.117,-31.506 31.506,-31.506l303.988,0c17.389,0 31.506,14.117 31.506,31.506Z"
              style={{
                fill: fillColor || "none",
                stroke: "currentColor",
                strokeWidth: `${outerStroke}px`,
              }}
            />
          </g>
          <clipPath id="_clip4">
            <rect x={283} y={283} width={88} height={92} />
          </clipPath>
          <g clipPath="url(#_clip4)">
            <path
              d="M371,35.506l0,307.988c0,17.389 -14.117,31.506 -31.506,31.506l-303.988,0c-17.389,0 -31.506,-14.117 -31.506,-31.506l0,-307.988c0,-17.389 14.117,-31.506 31.506,-31.506l303.988,0c17.389,0 31.506,14.117 31.506,31.506Z"
              style={{
                fill: fillColor || "none",
                stroke: "currentColor",
                strokeWidth: `${outerStroke}px`,
              }}
            />
          </g>
        </g>
        <g id="Fingerprint">
          <path
            d="M83,100c55.53,-99.025 209.222,-73.942 237,53"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
            }}
          />
          <path
            d="M71,203c3.036,-16.288 5.284,-32.157 9.983,-45.223c61.388,-170.676 266.582,-72.187 221.017,89.223"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M71,243c22.251,-16.606 26.495,-24.979 30.188,-42.95c26.414,-128.53 114.324,-123.168 160.66,-61.012c24.192,32.451 18.844,95.718 4.152,151.963"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M85,269c19.345,-7.037 33.917,-24.545 37.819,-38.762c7.429,-27.065 9.1,-51.745 19.791,-68.132c50.207,-76.961 130.896,-34.169 99.39,112.894"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M101,298c17.734,-15.289 32.657,-23.865 38.028,-45.492c11.499,-46.301 30.558,-90.056 50.526,-94.886c18.894,-4.57 39.439,26.338 26.446,101.378"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M193,242c3.167,-17.396 2.925,-34.731 -1,-52"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M173,245c-11.679,32.137 -27.53,56.418 -48,72"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M159,327c14.29,-16.306 24.978,-35.064 31,-57"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M207,309c-0.089,7.115 2.132,13.646 9,19"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
          <path
            d="M248,315c-26.006,-9.754 -32.846,-22.955 -35,-37"
            style={{
              fill: fillColor || "none",
              stroke: "currentColor",
              strokeWidth: `${fingerprintStroke}px`,
              strokeLinecap: "round",
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default BoxedFingerprint;
