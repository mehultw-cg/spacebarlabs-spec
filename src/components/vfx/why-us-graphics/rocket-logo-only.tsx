import * as React from "react"
import { SVGProps } from "react"
import { cn } from "@/lib/utils"

interface RocketLogoProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  fillOpacity?: number | string;
  strokeColor?: string;
  strokeWidth?: number | string;
}

const RocketLogo = ({
  className,
  fillColor = "#90cbf9",
  fillOpacity = 0,
  strokeColor = "#a4d0f1",
  strokeWidth = "6px",
  style,
  ...props
}: RocketLogoProps) => {

  // Default stroke width for stars and smaller elements is slightly smaller
  // We can calculate it or just use a fixed ratio if strokeWidth is a number
  // For simplicity, we'll use the prop for main elements and keep relative sizing if possible, 
  // or just apply the prop to everything if that's the desired "control".
  // Given the request, applying the main prop to main elements seems best.
  
  const mainStrokeWidth = strokeWidth;
  const starStrokeWidth = typeof strokeWidth === 'number' ? strokeWidth * 0.95 : "5px"; 

  // Hardcoded opacity for the flame was 0.85. We can make it relative to fillOpacity or just keep it distinct if not overridden.
  // The user asked to control fillOpacity. 
  // If fillOpacity is provided, we should probably use it.
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 3507 2480"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      className={cn("w-full h-full", className)}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
        ...style
      }}
      {...props}
    >
      <g id="Rocket">
        <path
          id="Rocket-Curve-Main-Body"
          d="M1398.154,1468.564c224.457,-758.402 764.97,-1166.61 1507.3,-1351.203c-59.42,651.668 -353.221,1272.235 -1124.493,1713.132"
          style={{
             fill: fillColor,
             fillOpacity: fillOpacity,
             stroke: strokeColor,
             strokeWidth: mainStrokeWidth,
          }}
        />
        <path
          id="Rocket-Top-Curve"
          d="M2373.981,306.659c161.593,98.669 305.165,216.176 425.513,357.96"
          style={{
             fill: fillColor,
             fillOpacity: fillOpacity,
             stroke: strokeColor,
             strokeWidth: mainStrokeWidth,
          }}
        />
        <g id="Left-Wing-Logo">
          <path
            d="M1624.612,958.636l-370.011,75.612l-334.955,458.444c154.998,-61.931 331.866,-72.577 478.508,-24.129"
            style={{
               fill: fillColor,
               fillOpacity: fillOpacity,
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M1400.6,1468.308l-145.998,-434.06"
            style={{
               fill: "none", // These are explicitly none in original
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M1627.811,958.636l-86.105,654.699"
            style={{
               fill: "none",
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M1469.93,1709.85l-119.627,-96.515c-5.1,-25.593 0.39,-60.418 47.851,-144.772l143.552,144.772"
            style={{
               fill: fillColor,
               fillOpacity: fillOpacity,
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
        </g>
        <g id="Right-Wing-Logo">
          <path
            d="M2205.22,1531.271c14.947,179.739 23.531,332.436 6.398,419.865l-430.657,386.058c68.085,-177.596 65.256,-346.136 0,-506.701"
            style={{
               fill: fillColor,
               fillOpacity: fillOpacity,
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M2211.617,1951.136l-430.657,-120.643"
            style={{
               fill: "none",
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M2202.021,1531.271l-591.737,141.8"
            style={{
               fill: "none",
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M1612.296,1672.989l168.665,157.504c0,0 -36.675,19.347 -81.059,35.292c-20.732,7.448 -62.494,12.965 -62.494,12.965l-119.627,-120.643"
            style={{
               fill: fillColor,
               fillOpacity: fillOpacity,
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
        </g>
        <path
          id="Rocket-curve-Middle-Bottom"
          d="M1924.513,1251.406c-151.38,88.774 -274.433,210.875 -379.723,353.878c-62.352,84.686 -118.475,176.702 -170.561,273.467c227.464,-168.775 414.602,-374.491 550.284,-627.344Z"
          style={{
             fill: fillColor,
             fillOpacity: fillOpacity,
             stroke: strokeColor,
             strokeWidth: mainStrokeWidth,
          }}
        />
        <path
          id="Flame-Logo"
          d="M1087.124,1951.136c38.411,-157.534 136.84,-247.087 239.254,-241.286c-42.748,28.646 -71.596,65.834 -71.776,120.643l71.776,-24.129c-65.32,60.456 -94.686,131.274 -71.776,217.158c67.972,-5.183 148.67,-51.963 191.403,-96.515c3.064,16.058 3.68,32.138 0,48.257c43.16,-7.474 69.902,-39.233 95.702,-72.386c-2.416,112.921 -75.822,221.339 -191.403,265.415c20.49,-39.048 28.113,-79.296 23.925,-120.643c-57.101,84.462 -157.869,137.21 -287.105,168.9c-1.866,-125.785 21.077,-230.064 95.702,-289.544c-31.96,-2.486 -63.863,5.106 -95.702,24.129Z"
          style={{
             fill: fillColor,
             fillOpacity: 0.85, // Flame opacity kept high for visibility, or controlled if needed
             stroke: strokeColor,
             strokeWidth: 1, // Flame stroke usually thinner
          }}
        />
        <ellipse
          id="Rocket-Center-Circle"
          cx={2343.207}
          cy={756.769}
          rx={203.366}
          ry={205.093}
          style={{
             fill: fillColor,
             fillOpacity: fillOpacity,
             stroke: strokeColor,
             strokeWidth: mainStrokeWidth,
          }}
        />
        <g id="ConstellationLogo">
          <path
            d="M1399.687,1468.698l261.646,-217.292c0,0 -14.719,-131.694 -24.698,-218.633c-4.502,-39.224 -8.039,-69.337 -8.824,-74.137"
            style={{
               fill: fillColor,
               fillOpacity: fillOpacity,
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M1972.364,720.576l71.776,337.801l-382.806,193.029"
            style={{
               fill: fillColor,
               fillOpacity: fillOpacity,
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
          <path
            d="M2044.14,1058.377l263.179,241.286"
            style={{
               fill: "none",
               stroke: strokeColor,
               strokeWidth: mainStrokeWidth,
            }}
          />
        </g>
        <g id="RocketBigStars">
          <path
            d="M904.751,1504.192l-24.751,-11.483l24.751,-11.483l10.437,-27.23l10.437,27.23l24.751,11.483l-24.751,11.483l-10.437,27.23l-10.437,-27.23Z"
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <path
            d="M2035.978,1079.728l-42.752,-17.703l42.752,-17.703l18.028,-41.98l18.028,41.98l42.752,17.703l-42.752,17.703l-18.028,41.98l-18.028,-41.98Z"
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <path
            d="M1615.265,978.16l-31.501,-12.918l31.501,-12.918l13.284,-30.634l13.284,30.634l31.501,12.918l-31.501,12.918l-13.284,30.634l-13.284,-30.634Z"
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <path
            d="M2798.691,671.681l-28.126,-12.918l28.126,-12.918l11.86,-30.634l11.86,30.634l28.126,12.918l-28.126,12.918l-11.86,30.634l-11.86,-30.634Z"
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <path
            d="M2883.693,147.385l-42.752,-17.703l42.752,-17.703l18.028,-41.98l18.028,41.98l42.752,17.703l-42.752,17.703l-18.028,41.98l-18.028,-41.98Z"
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
        </g>
        <g id="LittleStars-rocket">
          <ellipse
            cx={1670.134}
            cy={1241.074}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <ellipse
            cx={1260.672}
            cy={1037.83}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <ellipse
            cx={2313.118}
            cy={1299.143}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <ellipse
            cx={1964.435}
            cy={721.672}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <ellipse
            cx={2194.758}
            cy={1537.875}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <ellipse
            cx={2201.156}
            cy={1941.137}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
          <ellipse
            cx={2373.898}
            cy={305.505}
            rx={15.995}
            ry={16.13}
            style={{
               fill: fillColor,
               stroke: strokeColor,
               strokeWidth: starStrokeWidth,
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export { RocketLogo as ReactComponent };
export default RocketLogo;
