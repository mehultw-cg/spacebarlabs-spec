import React, { useState, useEffect } from "react"
import { motion, useAnimation, Variants } from "framer-motion"

// 7 colors from globals.css
const colors = [
  "var(--color-1)", // #27ae60
  "var(--color-2)", // #16a085
  "var(--color-3)", // #3498db
  "var(--color-4)", // #2980b9
  "var(--color-5)", // #9e59b6
  "var(--color-6)", // #2ecc71
  "var(--color-7)", // #00cec9
];

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({ 
    pathLength: 1, 
    opacity: 0.2, // increased opacity for visibility
    transition: { duration: 1.5, delay: i * 0.2, ease: "easeInOut" }
  }),
  pulse: {
    opacity: [0.2, 0.5, 0.2],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  },
  hover: {
    opacity: 1,
    pathLength: 1,
    filter: "drop-shadow(0px 0px 4px rgba(62, 162, 255, 0.8))",
    stroke: "var(--color-3)", // glow color
    transition: { duration: 0.3 }
  }
};

const sphereVariants: Variants = {
  animate: (i) => ({
    offsetDistance: "100%",
    opacity: [0, 1, 1, 0],
    scale: [0.5, 1.5, 0.5],
    fill: colors[i % colors.length], // Cycle through colors
    transition: {
      duration: 3 + Math.random() * 2, // Varied duration
      repeat: Infinity,
      ease: "linear",
      delay: Math.random() * 2 // Varied start
    }
  })
};

const safeLineVariants: Variants = {
  hidden: { opacity: 0.2, stroke: "currentColor" }, // Use currentColor 
  idle: (i) => ({
    opacity: [0.2, 0.6, 0.2], // Pulse effect
    transition: {
      delay: i * 0.05,
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }),
  hover: {
    // stroke: "url(#rainbowGradient)", // Removed rainbow effect
    strokeWidth: "2px",
    filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.3))",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const rotaryVariants: Variants = {
    idle: { rotate: 0 },
    hover: { 
        rotate: 360,
        transition: {
            duration: 20, // Much slower rotation
            repeat: Infinity,
            ease: "linear"
        }
    }
};

const constellationPaths = [
  "M744,19l126,246l121,117l208,80l46,155l125,9l-2,-97c0,0 178.817,193.021 175,191",
  "M770,364l140,134l80,-115l209,80l46,155l125,7l-3,-96l176,192",
  "M745,747l183,-80l-76,-222c102.256,97.837 189.601,211.273 287,327l105,-154l126,7l-2,-95l174,191",
  "M745,748l194,132l-98,145l90,159l94,-127l112,8l98,-225l135,-7l-1,88l174,-195",
  "M770,1388l72,-362l89,159l94,-128l113,8l97,-224l135,-7l-2,87l174,-196",
  "M1023,1323l-92,-139l94,-126l112,6l97,-223l136,-7l-1,86l175,-194"
];

const ServerSafeAnimation = ({ className, style, ...props }: React.SVGProps<SVGSVGElement>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (

  <svg
    width="100%"
    height="100%"
    viewBox="0 0 2641 1506"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    preserveAspectRatio="xMidYMid meet"
    
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
      cursor: 'pointer',
      ...style
    }}
    className={className || "h-full w-full stroke-neutral-900 dark:stroke-cyan-100/50"} // Base colors: dark in light mode, light cyan in dark mode
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    {...props}
  >
    <defs>
        <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="20%" stopColor="#ffff00" />
            <stop offset="40%" stopColor="#00ff00" />
            <stop offset="60%" stopColor="#00ffff" />
            <stop offset="80%" stopColor="#0000ff" />
            <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
    </defs>

    <g id="Server-constellation-safe">
      <g id="Safe">
        <g id="Safe-Right-Panel" >
          <g id="Hash-Right-panel-safe" >
            <motion.path
              d="M2510,347c37.572,16.88 58.724,25.627 96,41"
              style={{
                fill: "none",
                //  removed to inherit
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={0}
            />
            <motion.path
              d="M2506,1079l108,-45"
              style={{
                fill: "none",
                // 
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={1}
            />
            <motion.path
              d="M2561,385l-2,647"
              style={{
                fill: "none",
                // 
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={2}
            />
            <motion.path
              d="M2516,1030l77,-34"
              style={{
                fill: "none",
                // 
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={3}
            />
            <motion.path
              d="M2583.293,949.754l0.415,82.491"
              style={{
                fill: "none",
                // 
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={4}
            />
            <motion.path
              d="M2604,406l2,622"
              style={{
                fill: "none",
                // 
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={5}
            />
            <motion.path
              d="M2527,439l83,34"
              style={{
                fill: "none",
                // 
                strokeWidth: "1.87px",
              }}
              variants={safeLineVariants}
              initial="hidden"
              animate={isHovered ? "hover" : "idle"}
              custom={6}
            />
          </g>
          <motion.path
            id="Safe-Right-Line"
            d="M2450,287l150,50c22.254,9.473 35.447,26.125 37,52l-4,679c-0.523,24.111 -8.249,40.742 -25,48l-174,64"
            style={{
              fillOpacity: 0,
              // 
              strokeWidth: "6.25px",
            }}
             variants={safeLineVariants}
             initial="hidden"
             animate={isHovered ? "hover" : "idle"}
             custom={7}
          />
        </g>
        <g id="Safe-Front" >
          <g id="Sasfe-Feet" >
            <g id="Leg-Right-Safe" >
              <motion.path
                id="Leg-rightSafe"
                d="M2222,1177c-2.073,46.991 6.631,73.873 32,74l100,3c29.103,-1.914 35.875,-30.25 33,-70"
                style={{
                  fillOpacity: 0,
                  // 
                  strokeWidth: "10.42px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={8}
              />
              <motion.path
                d="M2355,1256c14.286,-2.795 42.857,-8.385 54.367,-12.824c7.307,-2.818 13.067,-8.26 14.694,-13.811c2.939,-10.029 2.939,-34.253 2.939,-46.365"
                style={{
                  fill: "none",
                  // 
                  strokeWidth: "6.25px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={9}
              />
            </g>
            <g id="Leg-Left-siafe" >
              <motion.path
                d="M1812.82,1231.901c13.139,-3.25 44.072,-8.491 51.466,-11.901c5.798,-2.674 10.055,-8.392 11.429,-14c2.286,-9.333 2.286,-31.111 2.286,-42"
                style={{
                  fill: "none",
                  // 
                  strokeWidth: "6.25px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={10}
              />
              <motion.path
                d="M1685.993,1158c-3.459,34.432 -0.43,63.198 27.823,69.932l98.382,3.068c25.977,-9.842 31.944,-31.548 29.804,-64.892"
                style={{
                  fillOpacity: 0,
                  // 
                  strokeWidth: "9.38px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={11}
              />
            </g>
          </g>
          <g id="Safe-Front-Warp" >
            <g id="Safe-Front-Rectangles" >
              <motion.path
                id="Outer-Rectangle-Safe"
                d="M2483,341.948l0,775.365c-0,36.566 -30.998,65.276 -69.21,63.891c-250.875,-9.091 -501.75,-18.182 -752.626,-27.274c-35.174,-1.275 -63.626,-30.111 -63.439,-64.452c1.313,-241.912 2.627,-483.825 3.94,-725.737c0.185,-34.118 28.786,-62.58 63.794,-63.613c249.569,-7.365 499.138,-14.731 748.707,-22.096c38.008,-1.122 68.834,27.598 68.834,63.916Z"
                style={{
                  fillOpacity: 0,
                  
                  strokeWidth: "10.42px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={5}
              />
              <motion.path
                id="Middle-Rectangle-Safe"
                d="M2440.297,346.011c-0.066,253.309 -0.132,506.619 -0.198,759.928c-0.005,18.305 -15.54,32.695 -34.644,32.062c-242.864,-8.042 -485.728,-16.084 -728.591,-24.126c-17.687,-0.586 -32.028,-15.082 -31.94,-32.352c1.225,-238.705 2.451,-477.41 3.676,-716.114c0.088,-17.159 14.5,-31.484 32.113,-31.958c241.709,-6.503 483.418,-13.005 725.127,-19.508c19.012,-0.511 34.461,13.884 34.456,32.069Z"
                style={{
                  fillOpacity: 0,
                  
                  strokeWidth: "3.13px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={4}
              />
              <motion.path
                id="Inner-Rectangle-HInges-Safe"
                d="M1693.584,818.787c0.313,-64.718 0.626,-129.435 0.94,-194.153c4.515,-0.02 9.03,-0.04 13.544,-0.061c7.479,-0.033 13.591,-5.995 13.625,-13.272c0.176,-37.727 0.352,-75.453 0.528,-113.18c0.034,-7.269 -6.018,-13.105 -13.491,-12.992c-4.511,0.068 -9.022,0.137 -13.533,0.205c0.109,-22.634 0.219,-45.269 0.328,-67.903c0.112,-23.255 19.633,-42.566 43.543,-43.131c199.675,-4.721 399.349,-9.442 599.024,-14.163c25.513,-0.603 46.204,18.815 46.189,43.243c-0.13,216.496 -0.261,432.992 -0.391,649.488c-0.015,24.568 -20.826,43.958 -46.446,43.183c-200.53,-6.057 -401.06,-12.115 -601.589,-18.172c-24.005,-0.725 -43.427,-20.266 -43.314,-43.649c0.122,-25.255 0.244,-50.509 0.367,-75.764c4.2,0.089 8.401,0.178 12.601,0.266c7.493,0.158 13.617,-5.663 13.651,-12.959c0.177,-37.827 0.354,-75.655 0.531,-113.482c0.034,-7.289 -6.029,-13.296 -13.516,-13.374c-4.197,-0.044 -8.394,-0.088 -12.591,-0.131Z"
                style={{
                  fillOpacity: 0,
                  
                  strokeWidth: "8.33px",
                }}
                variants={safeLineVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "idle"}
                custom={3}
              />
            </g>
            <g
              id="Safe-MIddle-Circle-Rotary"
            >
             <motion.g variants={rotaryVariants} initial="idle" animate={isHovered ? "hover" : "idle"} style={{transformBox: "fill-box", transformOrigin: "center"}} >
              <g id="Center-Circle-Safe" >
                <motion.path
                  id="Outer-circle-1"
                  d="M2015.653,537.348c110.089,-1.201 199.008,85.057 198.834,191.263c-0.174,106.393 -89.673,192.161 -199.922,190.214c-107.832,-1.905 -195.358,-87.199 -194.934,-191.546c0.423,-104.165 88.347,-188.756 196.022,-189.931Z"
                  style={{
                    fillOpacity: 0,
                    
                    strokeWidth: "12.5px",
                  }}
                  variants={safeLineVariants}
                  initial="hidden"
                  animate={isHovered ? "hover" : "idle"}
                  custom={0}
                />
                <motion.path
                  id="Inner-circle-2"
                  d="M2015.395,628.023c57.418,-0.236 103.832,44.864 103.709,100.266c-0.123,55.453 -46.817,100.27 -104.279,99.646c-56.799,-0.617 -102.829,-45.452 -102.638,-100.344c0.191,-54.841 46.452,-99.335 103.208,-99.568Z"
                  style={{
                    fillOpacity: 0,
                    
                    strokeWidth: "4.17px",
                  }}
                  variants={safeLineVariants}
                  initial="hidden"
                  animate={isHovered ? "hover" : "idle"}
                  custom={1}
                />
                <motion.path
                  id="Inner-crcle-3"
                  d="M2015.795,662.766c37.649,-0.057 68.108,29.55 68.02,65.889c-0.088,36.361 -30.727,65.773 -68.394,65.459c-37.383,-0.311 -67.676,-29.807 -67.558,-65.923c0.118,-36.094 30.567,-65.369 67.932,-65.426Z"
                  style={{
                    fillOpacity: 0,
                    
                    strokeWidth: "6.25px",
                  }}
                  variants={safeLineVariants}
                  initial="hidden"
                  animate={isHovered ? "hover" : "idle"}
                  custom={2}
                />
                <motion.path
                  id="inner-circle-4"
                  d="M2015.76,675.315c30.98,-0.018 56.058,24.356 55.983,54.269c-0.075,29.927 -25.298,54.135 -56.291,53.902c-30.799,-0.232 -55.765,-24.528 -55.669,-54.291c0.095,-29.748 25.191,-53.861 55.978,-53.879Z"
                  style={{
                    fillOpacity: 0,
                    
                    strokeWidth: "3.13px",
                  }}
                  variants={safeLineVariants}
                  initial="hidden"
                  animate={isHovered ? "hover" : "idle"}
                  custom={3}
                />
              </g> 
              </motion.g> {/* End of rotary animate group */}
              <g
                id="Radial-DIal-Lines-safe-rotary"
                
              >
                <path
                  d="M2015.636,592.323c0.026,-9.003 0.051,-18.006 0.077,-27.009"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M2014.779,892.714c0.026,-9.025 0.051,-18.05 0.077,-27.075"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M1874.305,728.897c-9.185,-0.032 -18.37,-0.064 -27.555,-0.096"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M2185.612,729.981c-9.475,-0.033 -18.95,-0.066 -28.425,-0.099"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M1944.912,611.275c-4.599,-7.724 -9.198,-15.447 -13.798,-23.171"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M2099.737,872.232c-4.686,-7.922 -9.372,-15.845 -14.058,-23.767"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M1893.537,661.038c-7.951,-4.442 -15.903,-8.884 -23.854,-13.325"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M2162.687,812.44c-8.183,-4.63 -16.367,-9.26 -24.55,-13.89"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M2086.337,610.512c4.716,-7.873 9.432,-15.746 14.148,-23.619"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M1930.246,869.845c4.658,-7.708 9.316,-15.416 13.974,-23.124"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M2138.427,660.633c8.194,-4.567 16.389,-9.135 24.583,-13.702"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M1869.076,809.623c7.991,-4.392 15.982,-8.784 23.974,-13.176"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "2.08px",
                  }}
                />
                <path
                  d="M1979.189,596.463c-1.273,-4.637 -2.546,-9.273 -3.82,-13.91"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M2055.516,874.819c-1.287,-4.701 -2.575,-9.402 -3.862,-14.103"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M1879.151,763.295c-4.764,1.207 -9.528,2.414 -14.292,3.622"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M2167.297,689.712c-4.899,1.26 -9.798,2.52 -14.696,3.779"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M1915.975,632.278c-3.483,-3.37 -6.966,-6.74 -10.449,-10.111"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M2126.156,836.682c-3.566,-3.484 -7.132,-6.968 -10.698,-10.452"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M1879.624,692.974c-4.753,-1.239 -9.506,-2.478 -14.259,-3.717"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M2167.365,768.532c-4.896,-1.294 -9.792,-2.588 -14.688,-3.882"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M2052.261,596.303c1.31,-4.682 2.619,-9.363 3.929,-14.045"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M1974.38,873.97c1.304,-4.638 2.608,-9.277 3.912,-13.915"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M2115.923,631.464c3.577,-3.454 7.154,-6.907 10.731,-10.361"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
                <path
                  d="M1904.806,834.106c3.511,-3.352 7.022,-6.704 10.533,-10.056"
                  style={{
                    fill: "none",
                    
                    strokeWidth: "1.67px",
                  }}
                />
              </g>
              <path
                id="Rotary-right-curve"
                
                d="M2245.182,684.024c4.646,24.352 33.895,255.507 -224.183,261.049"
                style={{
                  fill: "none",
                  
                  strokeWidth: "3.13px",
                }}
              />
            </g>
            <g id="Safe-Hinges" >
              <path
                d="M1720.656,833.249c-0.172,36.884 -0.344,73.768 -0.517,110.653c-0.034,7.299 -6.161,13.119 -13.652,12.962c-9.041,-0.19 -18.082,-0.38 -27.122,-0.57c-7.458,-0.157 -13.503,-6.203 -13.466,-13.476c0.184,-36.731 0.368,-73.462 0.552,-110.193c0.036,-7.266 6.135,-13.115 13.588,-13.037c9.034,0.095 18.067,0.19 27.101,0.285c7.486,0.079 13.551,6.085 13.517,13.376Z"
                style={{
                  fillOpacity: 0,
                  
                  strokeWidth: "8.33px",
                }}
              />
              <path
                d="M1722.217,499.064c-0.172,36.783 -0.343,73.567 -0.515,110.35c-0.034,7.278 -6.148,13.239 -13.625,13.274c-9.023,0.042 -18.046,0.083 -27.069,0.125c-7.444,0.034 -13.477,-5.84 -13.44,-13.094c0.183,-36.631 0.367,-73.262 0.55,-109.892c0.036,-7.246 6.123,-13.234 13.561,-13.347c9.016,-0.136 18.032,-0.272 27.048,-0.409c7.471,-0.113 13.525,5.722 13.491,12.993Z"
                style={{
                  fillOpacity: 0,
                  
                  strokeWidth: "8.33px",
                }}
              />
            </g>
            <g id="Safe-right-hash-front" >
              <path
                d="M2194.601,453.34c24.807,-0.421 49.614,-0.843 74.421,-1.264"
                style={{
                  fill: "none",
                  
                  strokeWidth: "3.13px",
                }}
              />
              <path
                d="M2296.343,753.05c-0.453,96.436 -0.905,192.872 -1.358,289.308"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2335.424,805.687c0.273,80.245 0.545,160.489 0.818,240.734"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2262.337,861.147c-0.766,61.411 -1.532,122.822 -2.299,184.234"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2214.172,921.37c-2.445,38.572 -4.89,77.145 -7.336,115.717"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2165.27,935.184c-1.758,33.233 -3.516,66.466 -5.273,99.699"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2115.569,954.727c-1.739,24.012 -3.478,48.023 -5.217,72.035"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2159.127,960.498c58.718,1.538 117.436,3.076 176.154,4.615"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2057.006,989.466c91.714,4.411 183.428,8.823 275.143,13.234"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
              <path
                d="M2084.071,1038.744c83.024,1.871 166.049,3.741 249.073,5.612"
                style={{
                  fill: "none",
                  
                  strokeWidth: "0.83px",
                }}
              />
            </g>
          </g>
        </g>
      </g>
      <g id="server-Path-Safe" >
        <g id="Server">
          <g id="Front-warped" >
            <g>
              <g>
                <g id="Front-Facet-_-stacks" >
                  <path
                    d="M739,7l0,1492c-243.667,-30.333 -487.333,-60.667 -731,-91c1,-446 2,-892 3,-1338c242.667,-21 485.333,-42 728,-63Z"
                    style={{
                      fillOpacity: 0,
                      
                      strokeWidth: "8.33px",
                    }}
                  />
                  <g>
                    <path
                      d="M103.914,623.467c7.271,0.011 13.191,5.763 13.178,12.778c-0.013,7.016 -5.956,12.728 -13.228,12.688c-7.249,-0.039 -13.155,-5.782 -13.141,-12.779c0.014,-6.996 5.941,-12.699 13.191,-12.688Z"
                      style={{
                        
                        strokeWidth: "2.08px",
                      }}
                    />
                    <path
                      d="M684.87,555.46c-0.009,54.879 -0.018,109.759 -0.027,164.638c-210.564,-3.052 -421.128,-6.104 -631.692,-9.157c0.105,-49.937 0.211,-99.874 0.316,-149.812c210.468,-1.89 420.935,-3.78 631.403,-5.67Z"
                      style={{
                        fillOpacity: 0,
                        
                        strokeWidth: "3.13px",
                      }}
                    />
                    <g>
                      <path d="M381.597,592.548c1.341,-0.006 2.491,1.257 2.489,2.835c-0.002,1.577 -1.155,2.85 -2.496,2.855c-1.34,0.005 -2.49,-1.258 -2.488,-2.835c0.002,-1.577 1.154,-2.849 2.494,-2.855Z" />
                      <path
                        d="M381.597,592.548c1.341,-0.006 2.491,1.257 2.489,2.835c-0.002,1.577 -1.155,2.85 -2.496,2.855c-1.34,0.005 -2.49,-1.258 -2.488,-2.835c0.002,-1.577 1.154,-2.849 2.494,-2.855Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M381.564,621.949c1.341,-0 2.491,1.269 2.49,2.846c-0.002,1.578 -1.155,2.846 -2.496,2.845c-1.34,-0.001 -2.49,-1.269 -2.488,-2.846c0.002,-1.577 1.155,-2.844 2.495,-2.845Z" />
                      <path
                        d="M381.564,621.949c1.341,-0 2.491,1.269 2.49,2.846c-0.002,1.578 -1.155,2.846 -2.496,2.845c-1.34,-0.001 -2.49,-1.269 -2.488,-2.846c0.002,-1.577 1.155,-2.844 2.495,-2.845Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M381.532,651.352c1.341,0.006 2.492,1.28 2.49,2.857c-0.002,1.578 -1.155,2.841 -2.496,2.834c-1.34,-0.007 -2.49,-1.28 -2.489,-2.857c0.002,-1.577 1.155,-2.84 2.495,-2.834Z" />
                      <path
                        d="M381.532,651.352c1.341,0.006 2.492,1.28 2.49,2.857c-0.002,1.578 -1.155,2.841 -2.496,2.834c-1.34,-0.007 -2.49,-1.28 -2.489,-2.857c0.002,-1.577 1.155,-2.84 2.495,-2.834Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M411.588,592.411c1.349,-0.006 2.506,1.263 2.505,2.848c-0.002,1.584 -1.161,2.863 -2.51,2.868c-1.348,0.005 -2.505,-1.264 -2.503,-2.848c0.002,-1.584 1.161,-2.862 2.509,-2.868Z" />
                      <path
                        d="M411.588,592.411c1.349,-0.006 2.506,1.263 2.505,2.848c-0.002,1.584 -1.161,2.863 -2.51,2.868c-1.348,0.005 -2.505,-1.264 -2.503,-2.848c0.002,-1.584 1.161,-2.862 2.509,-2.868Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M411.559,621.945c1.349,-0 2.506,1.274 2.505,2.859c-0.002,1.585 -1.162,2.859 -2.51,2.858c-1.348,-0.001 -2.505,-1.275 -2.503,-2.859c0.002,-1.584 1.161,-2.857 2.509,-2.858Z" />
                      <path
                        d="M411.559,621.945c1.349,-0 2.506,1.274 2.505,2.859c-0.002,1.585 -1.162,2.859 -2.51,2.858c-1.348,-0.001 -2.505,-1.275 -2.503,-2.859c0.002,-1.584 1.161,-2.857 2.509,-2.858Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M411.529,651.481c1.349,0.006 2.507,1.286 2.505,2.87c-0.002,1.585 -1.162,2.854 -2.511,2.847c-1.348,-0.007 -2.505,-1.286 -2.504,-2.87c0.002,-1.584 1.161,-2.852 2.509,-2.847Z" />
                      <path
                        d="M411.529,651.481c1.349,0.006 2.507,1.286 2.505,2.87c-0.002,1.585 -1.162,2.854 -2.511,2.847c-1.348,-0.007 -2.505,-1.286 -2.504,-2.87c0.002,-1.584 1.161,-2.852 2.509,-2.847Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M441.758,592.273c1.357,-0.006 2.521,1.269 2.52,2.86c-0.001,1.592 -1.168,2.876 -2.525,2.881c-1.356,0.005 -2.52,-1.27 -2.518,-2.86c0.001,-1.591 1.167,-2.875 2.524,-2.881Z" />
                      <path
                        d="M441.758,592.273c1.357,-0.006 2.521,1.269 2.52,2.86c-0.001,1.592 -1.168,2.876 -2.525,2.881c-1.356,0.005 -2.52,-1.27 -2.518,-2.86c0.001,-1.591 1.167,-2.875 2.524,-2.881Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M441.731,621.94c1.357,-0 2.521,1.28 2.52,2.872c-0.001,1.592 -1.168,2.871 -2.525,2.871c-1.356,-0.001 -2.52,-1.281 -2.519,-2.872c0.001,-1.591 1.168,-2.87 2.524,-2.871Z" />
                      <path
                        d="M441.731,621.94c1.357,-0 2.521,1.28 2.52,2.872c-0.001,1.592 -1.168,2.871 -2.525,2.871c-1.356,-0.001 -2.52,-1.281 -2.519,-2.872c0.001,-1.591 1.168,-2.87 2.524,-2.871Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M441.704,651.609c1.357,0.006 2.522,1.291 2.52,2.883c-0.001,1.592 -1.168,2.867 -2.525,2.86c-1.356,-0.007 -2.52,-1.292 -2.519,-2.883c0.001,-1.591 1.168,-2.865 2.524,-2.86Z" />
                      <path
                        d="M441.704,651.609c1.357,0.006 2.522,1.291 2.52,2.883c-0.001,1.592 -1.168,2.867 -2.525,2.86c-1.356,-0.007 -2.52,-1.292 -2.519,-2.883c0.001,-1.591 1.168,-2.865 2.524,-2.86Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M472.106,593.094c1.365,-0.006 2.536,1.275 2.535,2.874c-0.001,1.599 -1.174,2.889 -2.54,2.894c-1.364,0.005 -2.535,-1.276 -2.534,-2.874c0.001,-1.598 1.174,-2.888 2.538,-2.894Z" />
                      <path
                        d="M472.106,593.094c1.365,-0.006 2.536,1.275 2.535,2.874c-0.001,1.599 -1.174,2.889 -2.54,2.894c-1.364,0.005 -2.535,-1.276 -2.534,-2.874c0.001,-1.598 1.174,-2.888 2.538,-2.894Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M472.082,622.895c1.365,-0 2.536,1.286 2.535,2.885c-0.001,1.599 -1.175,2.884 -2.54,2.883c-1.364,-0.001 -2.535,-1.287 -2.534,-2.885c0.001,-1.598 1.174,-2.883 2.539,-2.883Z" />
                      <path
                        d="M472.082,622.895c1.365,-0 2.536,1.286 2.535,2.885c-0.001,1.599 -1.175,2.884 -2.54,2.883c-1.364,-0.001 -2.535,-1.287 -2.534,-2.885c0.001,-1.598 1.174,-2.883 2.539,-2.883Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M472.058,652.699c1.365,0.006 2.537,1.298 2.535,2.897c-0.001,1.599 -1.175,2.879 -2.54,2.872c-1.365,-0.007 -2.535,-1.299 -2.534,-2.897c0.001,-1.598 1.174,-2.878 2.539,-2.872Z" />
                      <path
                        d="M472.058,652.699c1.365,0.006 2.537,1.298 2.535,2.897c-0.001,1.599 -1.175,2.879 -2.54,2.872c-1.365,-0.007 -2.535,-1.299 -2.534,-2.897c0.001,-1.598 1.174,-2.878 2.539,-2.872Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M502.635,591.992c1.373,-0.006 2.551,1.28 2.55,2.886c-0.001,1.606 -1.181,2.902 -2.554,2.908c-1.372,0.005 -2.55,-1.281 -2.549,-2.886c0.001,-1.605 1.181,-2.901 2.553,-2.908Z" />
                      <path
                        d="M502.635,591.992c1.373,-0.006 2.551,1.28 2.55,2.886c-0.001,1.606 -1.181,2.902 -2.554,2.908c-1.372,0.005 -2.55,-1.281 -2.549,-2.886c0.001,-1.605 1.181,-2.901 2.553,-2.908Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M502.614,621.928c1.373,-0 2.551,1.292 2.55,2.898c-0.001,1.606 -1.181,2.898 -2.554,2.897c-1.373,-0.001 -2.55,-1.293 -2.549,-2.898c0.001,-1.605 1.181,-2.896 2.553,-2.897Z" />
                      <path
                        d="M502.614,621.928c1.373,-0 2.551,1.292 2.55,2.898c-0.001,1.606 -1.181,2.898 -2.554,2.897c-1.373,-0.001 -2.55,-1.293 -2.549,-2.898c0.001,-1.605 1.181,-2.896 2.553,-2.897Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M502.592,651.867c1.373,0.006 2.552,1.303 2.551,2.909c-0.001,1.606 -1.181,2.893 -2.555,2.886c-1.373,-0.007 -2.55,-1.304 -2.549,-2.909c0.001,-1.605 1.181,-2.891 2.553,-2.886Z" />
                      <path
                        d="M502.592,651.867c1.373,0.006 2.552,1.303 2.551,2.909c-0.001,1.606 -1.181,2.893 -2.555,2.886c-1.373,-0.007 -2.55,-1.304 -2.549,-2.909c0.001,-1.605 1.181,-2.891 2.553,-2.886Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M533.344,591.85c1.381,-0.006 2.566,1.286 2.565,2.899c-0.001,1.613 -1.188,2.916 -2.569,2.921c-1.381,0.005 -2.565,-1.287 -2.564,-2.899c0.001,-1.612 1.187,-2.914 2.568,-2.921Z" />
                      <path
                        d="M533.344,591.85c1.381,-0.006 2.566,1.286 2.565,2.899c-0.001,1.613 -1.188,2.916 -2.569,2.921c-1.381,0.005 -2.565,-1.287 -2.564,-2.899c0.001,-1.612 1.187,-2.914 2.568,-2.921Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M533.325,621.922c1.382,-0 2.567,1.298 2.566,2.911c-0.001,1.613 -1.188,2.911 -2.569,2.91c-1.381,-0.001 -2.565,-1.299 -2.564,-2.911c0.001,-1.612 1.187,-2.909 2.568,-2.91Z" />
                      <path
                        d="M533.325,621.922c1.382,-0 2.567,1.298 2.566,2.911c-0.001,1.613 -1.188,2.911 -2.569,2.91c-1.381,-0.001 -2.565,-1.299 -2.564,-2.911c0.001,-1.612 1.187,-2.909 2.568,-2.91Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M533.306,651.997c1.382,0.006 2.567,1.309 2.566,2.923c-0.001,1.613 -1.188,2.906 -2.57,2.899c-1.381,-0.007 -2.566,-1.31 -2.565,-2.923c0.001,-1.612 1.187,-2.905 2.568,-2.899Z" />
                      <path
                        d="M533.306,651.997c1.382,0.006 2.567,1.309 2.566,2.923c-0.001,1.613 -1.188,2.906 -2.57,2.899c-1.381,-0.007 -2.566,-1.31 -2.565,-2.923c0.001,-1.612 1.187,-2.905 2.568,-2.899Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M564.234,591.707c1.39,-0.006 2.582,1.292 2.581,2.912c-0.001,1.62 -1.194,2.929 -2.584,2.934c-1.389,0.005 -2.58,-1.293 -2.58,-2.912c0.001,-1.619 1.194,-2.928 2.583,-2.934Z" />
                      <path
                        d="M564.234,591.707c1.39,-0.006 2.582,1.292 2.581,2.912c-0.001,1.62 -1.194,2.929 -2.584,2.934c-1.389,0.005 -2.58,-1.293 -2.58,-2.912c0.001,-1.619 1.194,-2.928 2.583,-2.934Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M564.218,621.916c1.39,-0 2.582,1.304 2.581,2.924c-0.001,1.62 -1.194,2.924 -2.584,2.923c-1.389,-0.001 -2.581,-1.305 -2.58,-2.924c0.001,-1.62 1.194,-2.923 2.583,-2.923Z" />
                      <path
                        d="M564.218,621.916c1.39,-0 2.582,1.304 2.581,2.924c-0.001,1.62 -1.194,2.924 -2.584,2.923c-1.389,-0.001 -2.581,-1.305 -2.58,-2.924c0.001,-1.62 1.194,-2.923 2.583,-2.923Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M564.202,652.127c1.39,0.006 2.582,1.315 2.581,2.936c-0.001,1.621 -1.195,2.919 -2.584,2.912c-1.389,-0.007 -2.581,-1.316 -2.58,-2.936c0.001,-1.62 1.194,-2.918 2.583,-2.912Z" />
                      <path
                        d="M564.202,652.127c1.39,0.006 2.582,1.315 2.581,2.936c-0.001,1.621 -1.195,2.919 -2.584,2.912c-1.389,-0.007 -2.581,-1.316 -2.58,-2.936c0.001,-1.62 1.194,-2.918 2.583,-2.912Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M595.305,591.564c1.398,-0.006 2.597,1.298 2.596,2.926c-0.001,1.627 -1.201,2.942 -2.599,2.947c-1.397,0.005 -2.596,-1.299 -2.595,-2.926c0.001,-1.627 1.2,-2.941 2.598,-2.947Z" />
                      <path
                        d="M595.305,591.564c1.398,-0.006 2.597,1.298 2.596,2.926c-0.001,1.627 -1.201,2.942 -2.599,2.947c-1.397,0.005 -2.596,-1.299 -2.595,-2.926c0.001,-1.627 1.2,-2.941 2.598,-2.947Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M595.292,621.91c1.398,-0 2.597,1.31 2.597,2.938c-0.001,1.628 -1.201,2.937 -2.599,2.936c-1.397,-0.001 -2.596,-1.311 -2.595,-2.938c0.001,-1.627 1.201,-2.936 2.598,-2.936Z" />
                      <path
                        d="M595.292,621.91c1.398,-0 2.597,1.31 2.597,2.938c-0.001,1.628 -1.201,2.937 -2.599,2.936c-1.397,-0.001 -2.596,-1.311 -2.595,-2.938c0.001,-1.627 1.201,-2.936 2.598,-2.936Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M595.279,652.259c1.398,0.006 2.597,1.322 2.597,2.949c-0.001,1.628 -1.201,2.932 -2.599,2.925c-1.397,-0.007 -2.596,-1.322 -2.595,-2.949c0.001,-1.627 1.201,-2.931 2.598,-2.925Z" />
                      <path
                        d="M595.279,652.259c1.398,0.006 2.597,1.322 2.597,2.949c-0.001,1.628 -1.201,2.932 -2.599,2.925c-1.397,-0.007 -2.596,-1.322 -2.595,-2.949c0.001,-1.627 1.201,-2.931 2.598,-2.925Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M626.56,591.421c1.406,-0.006 2.612,1.304 2.612,2.939c-0.001,1.635 -1.208,2.956 -2.614,2.961c-1.405,0.005 -2.611,-1.305 -2.611,-2.939c0.001,-1.634 1.207,-2.954 2.613,-2.961Z" />
                      <path
                        d="M626.56,591.421c1.406,-0.006 2.612,1.304 2.612,2.939c-0.001,1.635 -1.208,2.956 -2.614,2.961c-1.405,0.005 -2.611,-1.305 -2.611,-2.939c0.001,-1.634 1.207,-2.954 2.613,-2.961Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M626.549,621.905c1.406,-0 2.613,1.316 2.612,2.951c-0.001,1.635 -1.208,2.951 -2.614,2.95c-1.406,-0.001 -2.611,-1.317 -2.611,-2.951c0.001,-1.634 1.207,-2.949 2.613,-2.95Z" />
                      <path
                        d="M626.549,621.905c1.406,-0 2.613,1.316 2.612,2.951c-0.001,1.635 -1.208,2.951 -2.614,2.95c-1.406,-0.001 -2.611,-1.317 -2.611,-2.951c0.001,-1.634 1.207,-2.949 2.613,-2.95Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M626.539,652.392c1.406,0.006 2.613,1.328 2.612,2.963c-0.001,1.635 -1.208,2.946 -2.614,2.938c-1.406,-0.007 -2.612,-1.329 -2.611,-2.963c0.001,-1.634 1.207,-2.944 2.613,-2.938Z" />
                      <path
                        d="M626.539,652.392c1.406,0.006 2.613,1.328 2.612,2.963c-0.001,1.635 -1.208,2.946 -2.614,2.938c-1.406,-0.007 -2.612,-1.329 -2.611,-2.963c0.001,-1.634 1.207,-2.944 2.613,-2.938Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M396.552,609.59c1.345,-0.003 2.499,1.267 2.497,2.848c-0.002,1.581 -1.158,2.854 -2.503,2.856c-1.344,0.002 -2.498,-1.267 -2.496,-2.848c0.002,-1.58 1.158,-2.853 2.502,-2.856Z" />
                      <path
                        d="M396.552,609.59c1.345,-0.003 2.499,1.267 2.497,2.848c-0.002,1.581 -1.158,2.854 -2.503,2.856c-1.344,0.002 -2.498,-1.267 -2.496,-2.848c0.002,-1.58 1.158,-2.853 2.502,-2.856Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M396.521,639.058c1.345,0.003 2.499,1.278 2.497,2.859c-0.002,1.581 -1.158,2.849 -2.503,2.845c-1.344,-0.004 -2.498,-1.279 -2.496,-2.859c0.002,-1.58 1.158,-2.848 2.502,-2.845Z" />
                      <path
                        d="M396.521,639.058c1.345,0.003 2.499,1.278 2.497,2.859c-0.002,1.581 -1.158,2.849 -2.503,2.845c-1.344,-0.004 -2.498,-1.279 -2.496,-2.859c0.002,-1.58 1.158,-2.848 2.502,-2.845Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M396.49,668.529c1.345,0.009 2.499,1.289 2.498,2.87c-0.002,1.581 -1.159,2.844 -2.504,2.834c-1.344,-0.01 -2.498,-1.29 -2.496,-2.87c0.002,-1.581 1.158,-2.843 2.502,-2.834Z" />
                      <path
                        d="M396.49,668.529c1.345,0.009 2.499,1.289 2.498,2.87c-0.002,1.581 -1.159,2.844 -2.504,2.834c-1.344,-0.01 -2.498,-1.29 -2.496,-2.87c0.002,-1.581 1.158,-2.843 2.502,-2.834Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M426.635,609.529c1.353,-0.003 2.514,1.272 2.512,2.861c-0.002,1.588 -1.165,2.867 -2.518,2.869c-1.352,0.002 -2.512,-1.273 -2.511,-2.861c0.002,-1.587 1.164,-2.866 2.516,-2.869Z" />
                      <path
                        d="M426.635,609.529c1.353,-0.003 2.514,1.272 2.512,2.861c-0.002,1.588 -1.165,2.867 -2.518,2.869c-1.352,0.002 -2.512,-1.273 -2.511,-2.861c0.002,-1.587 1.164,-2.866 2.516,-2.869Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M426.606,639.131c1.353,0.003 2.514,1.284 2.512,2.872c-0.002,1.588 -1.165,2.862 -2.518,2.858c-1.352,-0.004 -2.513,-1.285 -2.511,-2.872c0.002,-1.587 1.164,-2.861 2.517,-2.858Z" />
                      <path
                        d="M426.606,639.131c1.353,0.003 2.514,1.284 2.512,2.872c-0.002,1.588 -1.165,2.862 -2.518,2.858c-1.352,-0.004 -2.513,-1.285 -2.511,-2.872c0.002,-1.587 1.164,-2.861 2.517,-2.858Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M426.578,668.735c1.353,0.009 2.514,1.295 2.513,2.883c-0.002,1.588 -1.165,2.857 -2.518,2.847c-1.352,-0.01 -2.513,-1.296 -2.511,-2.883c0.002,-1.588 1.165,-2.856 2.517,-2.847Z" />
                      <path
                        d="M426.578,668.735c1.353,0.009 2.514,1.295 2.513,2.883c-0.002,1.588 -1.165,2.857 -2.518,2.847c-1.352,-0.01 -2.513,-1.296 -2.511,-2.883c0.002,-1.588 1.165,-2.856 2.517,-2.847Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M456.895,609.467c1.361,-0.003 2.529,1.278 2.527,2.873c-0.001,1.595 -1.171,2.88 -2.532,2.882c-1.36,0.002 -2.527,-1.279 -2.526,-2.873c0.001,-1.594 1.171,-2.879 2.531,-2.882Z" />
                      <path
                        d="M456.895,609.467c1.361,-0.003 2.529,1.278 2.527,2.873c-0.001,1.595 -1.171,2.88 -2.532,2.882c-1.36,0.002 -2.527,-1.279 -2.526,-2.873c0.001,-1.594 1.171,-2.879 2.531,-2.882Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M456.87,639.203c1.361,0.003 2.529,1.29 2.528,2.885c-0.001,1.595 -1.171,2.875 -2.533,2.871c-1.36,-0.004 -2.528,-1.29 -2.526,-2.885c0.001,-1.595 1.171,-2.874 2.531,-2.871Z" />
                      <path
                        d="M456.87,639.203c1.361,0.003 2.529,1.29 2.528,2.885c-0.001,1.595 -1.171,2.875 -2.533,2.871c-1.36,-0.004 -2.528,-1.29 -2.526,-2.885c0.001,-1.595 1.171,-2.874 2.531,-2.871Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M456.844,668.941c1.361,0.009 2.529,1.301 2.528,2.896c-0.001,1.596 -1.172,2.87 -2.533,2.86c-1.361,-0.01 -2.528,-1.302 -2.527,-2.896c0.001,-1.595 1.171,-2.869 2.532,-2.86Z" />
                      <path
                        d="M456.844,668.941c1.361,0.009 2.529,1.301 2.528,2.896c-0.001,1.596 -1.172,2.87 -2.533,2.86c-1.361,-0.01 -2.528,-1.302 -2.527,-2.896c0.001,-1.595 1.171,-2.869 2.532,-2.86Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M487.335,609.405c1.369,-0.003 2.544,1.284 2.543,2.886c-0.001,1.602 -1.178,2.893 -2.547,2.895c-1.368,0.002 -2.543,-1.285 -2.541,-2.886c0.001,-1.601 1.177,-2.892 2.546,-2.895Z" />
                      <path
                        d="M487.335,609.405c1.369,-0.003 2.544,1.284 2.543,2.886c-0.001,1.602 -1.178,2.893 -2.547,2.895c-1.368,0.002 -2.543,-1.285 -2.541,-2.886c0.001,-1.601 1.177,-2.892 2.546,-2.895Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M487.312,639.275c1.369,0.003 2.544,1.296 2.543,2.898c-0.001,1.602 -1.178,2.888 -2.547,2.884c-1.369,-0.004 -2.543,-1.296 -2.542,-2.898c0.001,-1.602 1.177,-2.887 2.546,-2.884Z" />
                      <path
                        d="M487.312,639.275c1.369,0.003 2.544,1.296 2.543,2.898c-0.001,1.602 -1.178,2.888 -2.547,2.884c-1.369,-0.004 -2.543,-1.296 -2.542,-2.898c0.001,-1.602 1.177,-2.887 2.546,-2.884Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M487.289,669.148c1.369,0.009 2.544,1.307 2.543,2.91c-0.001,1.603 -1.178,2.883 -2.547,2.873c-1.369,-0.01 -2.543,-1.308 -2.542,-2.91c0.001,-1.602 1.178,-2.882 2.546,-2.873Z" />
                      <path
                        d="M487.289,669.148c1.369,0.009 2.544,1.307 2.543,2.91c-0.001,1.603 -1.178,2.883 -2.547,2.873c-1.369,-0.01 -2.543,-1.308 -2.542,-2.91c0.001,-1.602 1.178,-2.882 2.546,-2.873Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M517.955,609.342c1.377,-0.003 2.559,1.29 2.558,2.899c-0.001,1.609 -1.184,2.906 -2.562,2.908c-1.377,0.002 -2.558,-1.291 -2.557,-2.9c0.001,-1.609 1.184,-2.905 2.561,-2.908Z" />
                      <path
                        d="M517.955,609.342c1.377,-0.003 2.559,1.29 2.558,2.899c-0.001,1.609 -1.184,2.906 -2.562,2.908c-1.377,0.002 -2.558,-1.291 -2.557,-2.9c0.001,-1.609 1.184,-2.905 2.561,-2.908Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M517.935,639.348c1.377,0.003 2.559,1.302 2.558,2.911c-0.001,1.61 -1.185,2.901 -2.562,2.897c-1.377,-0.004 -2.558,-1.302 -2.557,-2.911c0.001,-1.609 1.184,-2.9 2.561,-2.897Z" />
                      <path
                        d="M517.935,639.348c1.377,0.003 2.559,1.302 2.558,2.911c-0.001,1.61 -1.185,2.901 -2.562,2.897c-1.377,-0.004 -2.558,-1.302 -2.557,-2.911c0.001,-1.609 1.184,-2.9 2.561,-2.897Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M517.915,669.356c1.378,0.009 2.559,1.313 2.558,2.923c-0.001,1.61 -1.185,2.896 -2.562,2.886c-1.377,-0.011 -2.558,-1.314 -2.557,-2.923c0.001,-1.609 1.184,-2.895 2.561,-2.886Z" />
                      <path
                        d="M517.915,669.356c1.378,0.009 2.559,1.313 2.558,2.923c-0.001,1.61 -1.185,2.896 -2.562,2.886c-1.377,-0.011 -2.558,-1.314 -2.557,-2.923c0.001,-1.609 1.184,-2.895 2.561,-2.886Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M548.756,609.279c1.386,-0.003 2.574,1.296 2.573,2.913c-0.001,1.617 -1.191,2.919 -2.577,2.921c-1.385,0.002 -2.573,-1.297 -2.572,-2.913c0.001,-1.616 1.191,-2.918 2.575,-2.921Z" />
                      <path
                        d="M548.756,609.279c1.386,-0.003 2.574,1.296 2.573,2.913c-0.001,1.617 -1.191,2.919 -2.577,2.921c-1.385,0.002 -2.573,-1.297 -2.572,-2.913c0.001,-1.616 1.191,-2.918 2.575,-2.921Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M548.739,639.421c1.386,0.003 2.574,1.308 2.573,2.924c-0.001,1.617 -1.191,2.914 -2.577,2.91c-1.385,-0.004 -2.573,-1.308 -2.572,-2.924c0.001,-1.616 1.191,-2.913 2.576,-2.91Z" />
                      <path
                        d="M548.739,639.421c1.386,0.003 2.574,1.308 2.573,2.924c-0.001,1.617 -1.191,2.914 -2.577,2.91c-1.385,-0.004 -2.573,-1.308 -2.572,-2.924c0.001,-1.616 1.191,-2.913 2.576,-2.91Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M548.721,669.566c1.386,0.009 2.575,1.319 2.574,2.936c-0.001,1.617 -1.191,2.909 -2.577,2.899c-1.385,-0.011 -2.573,-1.32 -2.572,-2.936c0.001,-1.616 1.191,-2.908 2.576,-2.899Z" />
                      <path
                        d="M548.721,669.566c1.386,0.009 2.575,1.319 2.574,2.936c-0.001,1.617 -1.191,2.909 -2.577,2.899c-1.385,-0.011 -2.573,-1.32 -2.572,-2.936c0.001,-1.616 1.191,-2.908 2.576,-2.899Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M579.738,609.215c1.394,-0.003 2.589,1.302 2.589,2.926c-0.001,1.624 -1.198,2.933 -2.592,2.934c-1.393,0.002 -2.588,-1.303 -2.587,-2.926c0.001,-1.623 1.197,-2.931 2.59,-2.934Z" />
                      <path
                        d="M579.738,609.215c1.394,-0.003 2.589,1.302 2.589,2.926c-0.001,1.624 -1.198,2.933 -2.592,2.934c-1.393,0.002 -2.588,-1.303 -2.587,-2.926c0.001,-1.623 1.197,-2.931 2.59,-2.934Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M579.724,639.494c1.394,0.003 2.59,1.314 2.589,2.938c-0.001,1.624 -1.198,2.928 -2.592,2.923c-1.393,-0.005 -2.588,-1.314 -2.588,-2.938c0.001,-1.623 1.197,-2.926 2.59,-2.923Z" />
                      <path
                        d="M579.724,639.494c1.394,0.003 2.59,1.314 2.589,2.938c-0.001,1.624 -1.198,2.928 -2.592,2.923c-1.393,-0.005 -2.588,-1.314 -2.588,-2.938c0.001,-1.623 1.197,-2.926 2.59,-2.923Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M579.709,669.777c1.394,0.009 2.59,1.325 2.589,2.949c-0.001,1.624 -1.198,2.923 -2.592,2.912c-1.393,-0.011 -2.589,-1.326 -2.588,-2.949c0.001,-1.623 1.197,-2.921 2.591,-2.912Z" />
                      <path
                        d="M579.709,669.777c1.394,0.009 2.59,1.325 2.589,2.949c-0.001,1.624 -1.198,2.923 -2.592,2.912c-1.393,-0.011 -2.589,-1.326 -2.588,-2.949c0.001,-1.623 1.197,-2.921 2.591,-2.912Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M610.903,609.152c1.402,-0.003 2.605,1.308 2.604,2.939c-0.001,1.631 -1.204,2.946 -2.606,2.948c-1.401,0.002 -2.604,-1.309 -2.603,-2.939c0.001,-1.63 1.204,-2.945 2.605,-2.948Z" />
                      <path
                        d="M610.903,609.152c1.402,-0.003 2.605,1.308 2.604,2.939c-0.001,1.631 -1.204,2.946 -2.606,2.948c-1.401,0.002 -2.604,-1.309 -2.603,-2.939c0.001,-1.63 1.204,-2.945 2.605,-2.948Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M610.891,639.569c1.402,0.003 2.605,1.32 2.604,2.951c-0.001,1.631 -1.204,2.941 -2.607,2.936c-1.401,-0.005 -2.604,-1.321 -2.603,-2.951c0.001,-1.631 1.204,-2.94 2.605,-2.936Z" />
                      <path
                        d="M610.891,639.569c1.402,0.003 2.605,1.32 2.604,2.951c-0.001,1.631 -1.204,2.941 -2.607,2.936c-1.401,-0.005 -2.604,-1.321 -2.603,-2.951c0.001,-1.631 1.204,-2.94 2.605,-2.936Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M610.879,669.989c1.402,0.01 2.605,1.332 2.605,2.963c-0.001,1.632 -1.205,2.936 -2.607,2.925c-1.402,-0.011 -2.604,-1.332 -2.603,-2.963c0.001,-1.631 1.204,-2.935 2.606,-2.925Z" />
                      <path
                        d="M610.879,669.989c1.402,0.01 2.605,1.332 2.605,2.963c-0.001,1.632 -1.205,2.936 -2.607,2.925c-1.402,-0.011 -2.604,-1.332 -2.603,-2.963c0.001,-1.631 1.204,-2.935 2.606,-2.925Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M105.418,818.229c7.278,0.227 13.204,6.163 13.19,13.186c-0.013,7.023 -5.962,12.565 -13.24,12.309c-7.256,-0.255 -13.167,-6.181 -13.153,-13.185c0.014,-7.004 5.947,-12.536 13.203,-12.309Z"
                      style={{
                        
                        strokeWidth: "2.08px",
                      }}
                    />
                    <path
                      d="M686.95,767.769c-0.009,54.944 -0.017,109.887 -0.026,164.831c-210.771,-9.436 -421.543,-18.871 -632.314,-28.307c0.105,-49.991 0.21,-99.983 0.315,-149.974c210.675,4.484 421.35,8.967 632.025,13.451Z"
                      style={{
                        fillOpacity: 0,
                        
                        strokeWidth: "3.13px",
                      }}
                    />
                    <g>
                      <path d="M383.368,795.616c1.342,0.035 2.494,1.335 2.492,2.914c-0.002,1.579 -1.156,2.818 -2.498,2.782c-1.342,-0.036 -2.492,-1.336 -2.491,-2.914c0.002,-1.578 1.156,-2.817 2.497,-2.782Z" />
                      <path
                        d="M383.368,795.616c1.342,0.035 2.494,1.335 2.492,2.914c-0.002,1.579 -1.156,2.818 -2.498,2.782c-1.342,-0.036 -2.492,-1.336 -2.491,-2.914c0.002,-1.578 1.156,-2.817 2.497,-2.782Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M383.336,825.047c1.342,0.041 2.494,1.347 2.492,2.925c-0.002,1.58 -1.156,2.813 -2.498,2.771c-1.342,-0.042 -2.493,-1.347 -2.491,-2.926c0.002,-1.579 1.156,-2.812 2.497,-2.771Z" />
                      <path
                        d="M383.336,825.047c1.342,0.041 2.494,1.347 2.492,2.925c-0.002,1.58 -1.156,2.813 -2.498,2.771c-1.342,-0.042 -2.493,-1.347 -2.491,-2.926c0.002,-1.579 1.156,-2.812 2.497,-2.771Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M383.303,854.481c1.343,0.047 2.494,1.358 2.492,2.937c-0.002,1.58 -1.157,2.809 -2.499,2.761c-1.342,-0.048 -2.493,-1.359 -2.491,-2.937c0.002,-1.579 1.156,-2.807 2.497,-2.761Z" />
                      <path
                        d="M383.303,854.481c1.343,0.047 2.494,1.358 2.492,2.937c-0.002,1.58 -1.157,2.809 -2.499,2.761c-1.342,-0.048 -2.493,-1.359 -2.491,-2.937c0.002,-1.579 1.156,-2.807 2.497,-2.761Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M413.39,796.398c1.35,0.035 2.509,1.341 2.507,2.927c-0.002,1.586 -1.163,2.831 -2.513,2.795c-1.35,-0.036 -2.507,-1.342 -2.506,-2.927c0.002,-1.586 1.162,-2.83 2.512,-2.795Z" />
                      <path
                        d="M413.39,796.398c1.35,0.035 2.509,1.341 2.507,2.927c-0.002,1.586 -1.163,2.831 -2.513,2.795c-1.35,-0.036 -2.507,-1.342 -2.506,-2.927c0.002,-1.586 1.162,-2.83 2.512,-2.795Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M413.36,825.962c1.351,0.041 2.509,1.353 2.507,2.939c-0.002,1.587 -1.163,2.826 -2.513,2.784c-1.35,-0.042 -2.508,-1.354 -2.506,-2.939c0.002,-1.586 1.162,-2.825 2.512,-2.784Z" />
                      <path
                        d="M413.36,825.962c1.351,0.041 2.509,1.353 2.507,2.939c-0.002,1.587 -1.163,2.826 -2.513,2.784c-1.35,-0.042 -2.508,-1.354 -2.506,-2.939c0.002,-1.586 1.162,-2.825 2.512,-2.784Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M413.331,855.53c1.351,0.047 2.509,1.364 2.507,2.95c-0.002,1.587 -1.163,2.821 -2.513,2.773c-1.35,-0.048 -2.508,-1.365 -2.506,-2.95c0.002,-1.586 1.163,-2.82 2.512,-2.773Z" />
                      <path
                        d="M413.331,855.53c1.351,0.047 2.509,1.364 2.507,2.95c-0.002,1.587 -1.163,2.821 -2.513,2.773c-1.35,-0.048 -2.508,-1.365 -2.506,-2.95c0.002,-1.586 1.163,-2.82 2.512,-2.773Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M443.59,797.183c1.358,0.035 2.524,1.348 2.522,2.941c-0.001,1.593 -1.169,2.844 -2.527,2.807c-1.358,-0.036 -2.522,-1.348 -2.521,-2.941c0.001,-1.593 1.169,-2.842 2.526,-2.807Z" />
                      <path
                        d="M443.59,797.183c1.358,0.035 2.524,1.348 2.522,2.941c-0.001,1.593 -1.169,2.844 -2.527,2.807c-1.358,-0.036 -2.522,-1.348 -2.521,-2.941c0.001,-1.593 1.169,-2.842 2.526,-2.807Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M443.563,826.881c1.359,0.041 2.524,1.359 2.522,2.952c-0.001,1.594 -1.169,2.839 -2.528,2.796c-1.358,-0.042 -2.523,-1.36 -2.521,-2.952c0.001,-1.593 1.169,-2.838 2.526,-2.796Z" />
                      <path
                        d="M443.563,826.881c1.359,0.041 2.524,1.359 2.522,2.952c-0.001,1.594 -1.169,2.839 -2.528,2.796c-1.358,-0.042 -2.523,-1.36 -2.521,-2.952c0.001,-1.593 1.169,-2.838 2.526,-2.796Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M443.536,856.583c1.359,0.047 2.524,1.37 2.523,2.964c-0.001,1.594 -1.17,2.834 -2.528,2.786c-1.358,-0.049 -2.523,-1.371 -2.521,-2.964c0.001,-1.593 1.169,-2.833 2.527,-2.786Z" />
                      <path
                        d="M443.536,856.583c1.359,0.047 2.524,1.37 2.523,2.964c-0.001,1.594 -1.17,2.834 -2.528,2.786c-1.358,-0.049 -2.523,-1.371 -2.521,-2.964c0.001,-1.593 1.169,-2.833 2.527,-2.786Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M473.969,798.934c1.367,0.036 2.539,1.354 2.537,2.954c-0.001,1.601 -1.176,2.856 -2.542,2.82c-1.366,-0.037 -2.537,-1.355 -2.536,-2.954c0.001,-1.6 1.175,-2.855 2.541,-2.82Z" />
                      <path
                        d="M473.969,798.934c1.367,0.036 2.539,1.354 2.537,2.954c-0.001,1.601 -1.176,2.856 -2.542,2.82c-1.366,-0.037 -2.537,-1.355 -2.536,-2.954c0.001,-1.6 1.175,-2.855 2.541,-2.82Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M473.945,828.767c1.367,0.042 2.539,1.366 2.538,2.966c-0.001,1.601 -1.176,2.852 -2.542,2.809c-1.366,-0.043 -2.538,-1.367 -2.536,-2.966c0.001,-1.6 1.176,-2.85 2.541,-2.809Z" />
                      <path
                        d="M473.945,828.767c1.367,0.042 2.539,1.366 2.538,2.966c-0.001,1.601 -1.176,2.852 -2.542,2.809c-1.366,-0.043 -2.538,-1.367 -2.536,-2.966c0.001,-1.6 1.176,-2.85 2.541,-2.809Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M473.92,858.604c1.367,0.048 2.539,1.377 2.538,2.978c-0.001,1.601 -1.176,2.847 -2.543,2.798c-1.366,-0.049 -2.538,-1.378 -2.537,-2.978c0.001,-1.6 1.176,-2.846 2.541,-2.798Z" />
                      <path
                        d="M473.92,858.604c1.367,0.048 2.539,1.377 2.538,2.978c-0.001,1.601 -1.176,2.847 -2.543,2.798c-1.366,-0.049 -2.538,-1.378 -2.537,-2.978c0.001,-1.6 1.176,-2.846 2.541,-2.798Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M504.529,798.765c1.375,0.036 2.554,1.36 2.553,2.967c-0.001,1.608 -1.182,2.869 -2.557,2.833c-1.374,-0.037 -2.553,-1.361 -2.551,-2.967c0.001,-1.607 1.182,-2.868 2.556,-2.833Z" />
                      <path
                        d="M504.529,798.765c1.375,0.036 2.554,1.36 2.553,2.967c-0.001,1.608 -1.182,2.869 -2.557,2.833c-1.374,-0.037 -2.553,-1.361 -2.551,-2.967c0.001,-1.607 1.182,-2.868 2.556,-2.833Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M504.507,828.734c1.375,0.042 2.554,1.372 2.553,2.979c-0.001,1.608 -1.183,2.865 -2.557,2.822c-1.374,-0.043 -2.553,-1.373 -2.552,-2.979c0.001,-1.607 1.182,-2.863 2.556,-2.822Z" />
                      <path
                        d="M504.507,828.734c1.375,0.042 2.554,1.372 2.553,2.979c-0.001,1.608 -1.183,2.865 -2.557,2.822c-1.374,-0.043 -2.553,-1.373 -2.552,-2.979c0.001,-1.607 1.182,-2.863 2.556,-2.822Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M504.486,858.706c1.375,0.048 2.554,1.383 2.553,2.991c-0.001,1.608 -1.183,2.86 -2.557,2.811c-1.374,-0.049 -2.553,-1.384 -2.552,-2.991c0.001,-1.607 1.182,-2.859 2.556,-2.811Z" />
                      <path
                        d="M504.486,858.706c1.375,0.048 2.554,1.383 2.553,2.991c-0.001,1.608 -1.183,2.86 -2.557,2.811c-1.374,-0.049 -2.553,-1.384 -2.552,-2.991c0.001,-1.607 1.182,-2.859 2.556,-2.811Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M535.268,799.563c1.383,0.036 2.569,1.367 2.568,2.981c-0.001,1.615 -1.189,2.883 -2.572,2.845c-1.382,-0.037 -2.568,-1.367 -2.567,-2.981c0.001,-1.614 1.189,-2.881 2.57,-2.845Z" />
                      <path
                        d="M535.268,799.563c1.383,0.036 2.569,1.367 2.568,2.981c-0.001,1.615 -1.189,2.883 -2.572,2.845c-1.382,-0.037 -2.568,-1.367 -2.567,-2.981c0.001,-1.614 1.189,-2.881 2.57,-2.845Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M535.25,829.668c1.383,0.042 2.569,1.378 2.568,2.993c-0.001,1.615 -1.189,2.878 -2.572,2.834c-1.382,-0.043 -2.568,-1.379 -2.567,-2.993c0.001,-1.614 1.189,-2.876 2.571,-2.834Z" />
                      <path
                        d="M535.25,829.668c1.383,0.042 2.569,1.378 2.568,2.993c-0.001,1.615 -1.189,2.878 -2.572,2.834c-1.382,-0.043 -2.568,-1.379 -2.567,-2.993c0.001,-1.614 1.189,-2.876 2.571,-2.834Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M535.231,859.776c1.383,0.048 2.569,1.39 2.568,3.005c-0.001,1.615 -1.189,2.873 -2.572,2.823c-1.383,-0.049 -2.568,-1.391 -2.567,-3.005c0.001,-1.615 1.189,-2.872 2.571,-2.823Z" />
                      <path
                        d="M535.231,859.776c1.383,0.048 2.569,1.39 2.568,3.005c-0.001,1.615 -1.189,2.873 -2.572,2.823c-1.383,-0.049 -2.568,-1.391 -2.567,-3.005c0.001,-1.615 1.189,-2.872 2.571,-2.823Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M566.19,800.365c1.391,0.036 2.584,1.373 2.583,2.995c-0.001,1.622 -1.196,2.896 -2.587,2.858c-1.39,-0.037 -2.583,-1.374 -2.582,-2.995c0.001,-1.621 1.195,-2.894 2.585,-2.858Z" />
                      <path
                        d="M566.19,800.365c1.391,0.036 2.584,1.373 2.583,2.995c-0.001,1.622 -1.196,2.896 -2.587,2.858c-1.39,-0.037 -2.583,-1.374 -2.582,-2.995c0.001,-1.621 1.195,-2.894 2.585,-2.858Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M566.174,830.607c1.391,0.042 2.585,1.385 2.584,3.007c-0.001,1.622 -1.196,2.891 -2.587,2.847c-1.391,-0.043 -2.583,-1.385 -2.582,-3.007c0.001,-1.622 1.195,-2.889 2.586,-2.847Z" />
                      <path
                        d="M566.174,830.607c1.391,0.042 2.585,1.385 2.584,3.007c-0.001,1.622 -1.196,2.891 -2.587,2.847c-1.391,-0.043 -2.583,-1.385 -2.582,-3.007c0.001,-1.622 1.195,-2.889 2.586,-2.847Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M566.158,860.853c1.392,0.048 2.585,1.396 2.584,3.018c-0.001,1.623 -1.196,2.886 -2.587,2.836c-1.391,-0.05 -2.584,-1.397 -2.583,-3.018c0.001,-1.622 1.196,-2.885 2.586,-2.836Z" />
                      <path
                        d="M566.158,860.853c1.392,0.048 2.585,1.396 2.584,3.018c-0.001,1.623 -1.196,2.886 -2.587,2.836c-1.391,-0.05 -2.584,-1.397 -2.583,-3.018c0.001,-1.622 1.196,-2.885 2.586,-2.836Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M597.293,801.173c1.4,0.036 2.6,1.38 2.599,3.008c-0.001,1.629 -1.202,2.909 -2.601,2.871c-1.399,-0.038 -2.598,-1.38 -2.598,-3.008c0.001,-1.629 1.202,-2.908 2.6,-2.871Z" />
                      <path
                        d="M597.293,801.173c1.4,0.036 2.6,1.38 2.599,3.008c-0.001,1.629 -1.202,2.909 -2.601,2.871c-1.399,-0.038 -2.598,-1.38 -2.598,-3.008c0.001,-1.629 1.202,-2.908 2.6,-2.871Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M597.28,831.553c1.4,0.043 2.6,1.391 2.599,3.02c-0.001,1.63 -1.203,2.904 -2.602,2.86c-1.399,-0.044 -2.599,-1.392 -2.598,-3.02c0.001,-1.629 1.202,-2.903 2.6,-2.86Z" />
                      <path
                        d="M597.28,831.553c1.4,0.043 2.6,1.391 2.599,3.02c-0.001,1.63 -1.203,2.904 -2.602,2.86c-1.399,-0.044 -2.599,-1.392 -2.598,-3.02c0.001,-1.629 1.202,-2.903 2.6,-2.86Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M597.267,861.937c1.4,0.049 2.6,1.403 2.599,3.032c-0.001,1.63 -1.203,2.899 -2.602,2.849c-1.399,-0.05 -2.599,-1.404 -2.598,-3.032c0.001,-1.629 1.202,-2.898 2.601,-2.849Z" />
                      <path
                        d="M597.267,861.937c1.4,0.049 2.6,1.403 2.599,3.032c-0.001,1.63 -1.203,2.899 -2.602,2.849c-1.399,-0.05 -2.599,-1.404 -2.598,-3.032c0.001,-1.629 1.202,-2.898 2.601,-2.849Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M628.579,801.986c1.408,0.037 2.615,1.386 2.615,3.022c-0.001,1.637 -1.209,2.922 -2.616,2.884c-1.407,-0.038 -2.614,-1.387 -2.613,-3.022c0.001,-1.636 1.209,-2.921 2.615,-2.884Z" />
                      <path
                        d="M628.579,801.986c1.408,0.037 2.615,1.386 2.615,3.022c-0.001,1.637 -1.209,2.922 -2.616,2.884c-1.407,-0.038 -2.614,-1.387 -2.613,-3.022c0.001,-1.636 1.209,-2.921 2.615,-2.884Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M628.569,832.505c1.408,0.043 2.615,1.398 2.615,3.034c-0.001,1.637 -1.209,2.917 -2.617,2.873c-1.407,-0.044 -2.614,-1.399 -2.613,-3.034c0.001,-1.636 1.209,-2.916 2.615,-2.873Z" />
                      <path
                        d="M628.569,832.505c1.408,0.043 2.615,1.398 2.615,3.034c-0.001,1.637 -1.209,2.917 -2.617,2.873c-1.407,-0.044 -2.614,-1.399 -2.613,-3.034c0.001,-1.636 1.209,-2.916 2.615,-2.873Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M628.559,863.027c1.408,0.049 2.616,1.41 2.615,3.046c-0.001,1.637 -1.209,2.912 -2.617,2.862c-1.407,-0.05 -2.614,-1.41 -2.614,-3.046c0.001,-1.636 1.209,-2.911 2.616,-2.862Z" />
                      <path
                        d="M628.559,863.027c1.408,0.049 2.616,1.41 2.615,3.046c-0.001,1.637 -1.209,2.912 -2.617,2.862c-1.407,-0.05 -2.614,-1.41 -2.614,-3.046c0.001,-1.636 1.209,-2.911 2.616,-2.862Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M398.339,813.133c1.346,0.039 2.501,1.345 2.5,2.927c-0.002,1.583 -1.16,2.822 -2.506,2.782c-1.346,-0.04 -2.5,-1.346 -2.498,-2.927c0.002,-1.582 1.159,-2.82 2.504,-2.782Z" />
                      <path
                        d="M398.339,813.133c1.346,0.039 2.501,1.345 2.5,2.927c-0.002,1.583 -1.16,2.822 -2.506,2.782c-1.346,-0.04 -2.5,-1.346 -2.498,-2.927c0.002,-1.582 1.159,-2.82 2.504,-2.782Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M398.308,842.633c1.347,0.045 2.501,1.356 2.5,2.939c-0.002,1.583 -1.16,2.817 -2.506,2.771c-1.346,-0.046 -2.5,-1.357 -2.499,-2.939c0.002,-1.582 1.159,-2.816 2.505,-2.771Z" />
                      <path
                        d="M398.308,842.633c1.347,0.045 2.501,1.356 2.5,2.939c-0.002,1.583 -1.16,2.817 -2.506,2.771c-1.346,-0.046 -2.5,-1.357 -2.499,-2.939c0.002,-1.582 1.159,-2.816 2.505,-2.771Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M398.277,872.136c1.347,0.05 2.502,1.368 2.5,2.95c-0.002,1.583 -1.16,2.812 -2.506,2.761c-1.346,-0.052 -2.5,-1.368 -2.499,-2.95c0.002,-1.583 1.159,-2.811 2.505,-2.761Z" />
                      <path
                        d="M398.277,872.136c1.347,0.05 2.502,1.368 2.5,2.95c-0.002,1.583 -1.16,2.812 -2.506,2.761c-1.346,-0.052 -2.5,-1.368 -2.499,-2.95c0.002,-1.583 1.159,-2.811 2.505,-2.761Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M428.451,813.994c1.355,0.039 2.516,1.351 2.515,2.941c-0.002,1.59 -1.166,2.834 -2.52,2.795c-1.354,-0.04 -2.515,-1.352 -2.513,-2.941c0.002,-1.589 1.166,-2.833 2.519,-2.795Z" />
                      <path
                        d="M428.451,813.994c1.355,0.039 2.516,1.351 2.515,2.941c-0.002,1.59 -1.166,2.834 -2.52,2.795c-1.354,-0.04 -2.515,-1.352 -2.513,-2.941c0.002,-1.589 1.166,-2.833 2.519,-2.795Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M428.423,843.628c1.355,0.045 2.516,1.363 2.515,2.952c-0.002,1.59 -1.166,2.83 -2.52,2.784c-1.354,-0.046 -2.515,-1.363 -2.514,-2.952c0.002,-1.589 1.166,-2.828 2.519,-2.784Z" />
                      <path
                        d="M428.423,843.628c1.355,0.045 2.516,1.363 2.515,2.952c-0.002,1.59 -1.166,2.83 -2.52,2.784c-1.354,-0.046 -2.515,-1.363 -2.514,-2.952c0.002,-1.589 1.166,-2.828 2.519,-2.784Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M428.395,873.265c1.355,0.051 2.517,1.374 2.515,2.964c-0.002,1.591 -1.166,2.825 -2.521,2.773c-1.354,-0.052 -2.515,-1.375 -2.514,-2.964c0.002,-1.59 1.166,-2.824 2.519,-2.773Z" />
                      <path
                        d="M428.395,873.265c1.355,0.051 2.517,1.374 2.515,2.964c-0.002,1.591 -1.166,2.825 -2.521,2.773c-1.354,-0.052 -2.515,-1.375 -2.514,-2.964c0.002,-1.59 1.166,-2.824 2.519,-2.773Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M458.743,814.86c1.363,0.039 2.531,1.357 2.53,2.954c-0.001,1.597 -1.173,2.847 -2.535,2.807c-1.362,-0.04 -2.53,-1.358 -2.529,-2.954c0.001,-1.596 1.172,-2.846 2.534,-2.807Z" />
                      <path
                        d="M458.743,814.86c1.363,0.039 2.531,1.357 2.53,2.954c-0.001,1.597 -1.173,2.847 -2.535,2.807c-1.362,-0.04 -2.53,-1.358 -2.529,-2.954c0.001,-1.596 1.172,-2.846 2.534,-2.807Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M458.717,844.627c1.363,0.045 2.531,1.369 2.53,2.966c-0.001,1.597 -1.173,2.842 -2.535,2.796c-1.362,-0.046 -2.53,-1.37 -2.529,-2.966c0.001,-1.597 1.172,-2.841 2.534,-2.796Z" />
                      <path
                        d="M458.717,844.627c1.363,0.045 2.531,1.369 2.53,2.966c-0.001,1.597 -1.173,2.842 -2.535,2.796c-1.362,-0.046 -2.53,-1.37 -2.529,-2.966c0.001,-1.597 1.172,-2.841 2.534,-2.796Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M458.691,874.399c1.363,0.051 2.532,1.38 2.53,2.977c-0.001,1.598 -1.173,2.838 -2.535,2.786c-1.362,-0.052 -2.53,-1.381 -2.529,-2.977c0.001,-1.597 1.172,-2.836 2.534,-2.786Z" />
                      <path
                        d="M458.691,874.399c1.363,0.051 2.532,1.38 2.53,2.977c-0.001,1.598 -1.173,2.838 -2.535,2.786c-1.362,-0.052 -2.53,-1.381 -2.529,-2.977c0.001,-1.597 1.172,-2.836 2.534,-2.786Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M489.213,815.729c1.371,0.039 2.546,1.364 2.545,2.967c-0.001,1.604 -1.179,2.86 -2.55,2.82c-1.37,-0.04 -2.545,-1.364 -2.544,-2.967c0.001,-1.603 1.179,-2.859 2.548,-2.82Z" />
                      <path
                        d="M489.213,815.729c1.371,0.039 2.546,1.364 2.545,2.967c-0.001,1.604 -1.179,2.86 -2.55,2.82c-1.37,-0.04 -2.545,-1.364 -2.544,-2.967c0.001,-1.603 1.179,-2.859 2.548,-2.82Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M489.19,845.632c1.371,0.045 2.547,1.375 2.545,2.979c-0.001,1.605 -1.179,2.855 -2.55,2.809c-1.37,-0.046 -2.545,-1.376 -2.544,-2.979c0.001,-1.604 1.179,-2.854 2.549,-2.809Z" />
                      <path
                        d="M489.19,845.632c1.371,0.045 2.547,1.375 2.545,2.979c-0.001,1.605 -1.179,2.855 -2.55,2.809c-1.37,-0.046 -2.545,-1.376 -2.544,-2.979c0.001,-1.604 1.179,-2.854 2.549,-2.809Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M489.168,875.539c1.371,0.051 2.547,1.387 2.546,2.991c-0.001,1.605 -1.18,2.851 -2.55,2.798c-1.37,-0.052 -2.546,-1.388 -2.544,-2.991c0.001,-1.604 1.179,-2.849 2.549,-2.798Z" />
                      <path
                        d="M489.168,875.539c1.371,0.051 2.547,1.387 2.546,2.991c-0.001,1.605 -1.18,2.851 -2.55,2.798c-1.37,-0.052 -2.546,-1.388 -2.544,-2.991c0.001,-1.604 1.179,-2.849 2.549,-2.798Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M519.864,816.603c1.379,0.039 2.562,1.37 2.56,2.981c-0.001,1.611 -1.186,2.873 -2.564,2.833c-1.378,-0.04 -2.56,-1.371 -2.559,-2.981c0.001,-1.611 1.185,-2.872 2.563,-2.833Z" />
                      <path
                        d="M519.864,816.603c1.379,0.039 2.562,1.37 2.56,2.981c-0.001,1.611 -1.186,2.873 -2.564,2.833c-1.378,-0.04 -2.56,-1.371 -2.559,-2.981c0.001,-1.611 1.185,-2.872 2.563,-2.833Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M519.844,846.642c1.379,0.045 2.562,1.382 2.561,2.993c-0.001,1.612 -1.186,2.868 -2.565,2.822c-1.378,-0.047 -2.561,-1.382 -2.559,-2.993c0.001,-1.611 1.186,-2.867 2.563,-2.822Z" />
                      <path
                        d="M519.844,846.642c1.379,0.045 2.562,1.382 2.561,2.993c-0.001,1.612 -1.186,2.868 -2.565,2.822c-1.378,-0.047 -2.561,-1.382 -2.559,-2.993c0.001,-1.611 1.186,-2.867 2.563,-2.822Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M519.824,876.685c1.379,0.052 2.562,1.393 2.561,3.005c-0.001,1.612 -1.186,2.863 -2.565,2.811c-1.379,-0.053 -2.561,-1.394 -2.56,-3.004c0.001,-1.611 1.186,-2.862 2.564,-2.811Z" />
                      <path
                        d="M519.824,876.685c1.379,0.052 2.562,1.393 2.561,3.005c-0.001,1.612 -1.186,2.863 -2.565,2.811c-1.379,-0.053 -2.561,-1.394 -2.56,-3.004c0.001,-1.611 1.186,-2.862 2.564,-2.811Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M550.696,817.483c1.387,0.04 2.577,1.377 2.576,2.995c-0.001,1.619 -1.192,2.886 -2.579,2.845c-1.386,-0.041 -2.576,-1.377 -2.575,-2.995c0.001,-1.618 1.192,-2.885 2.578,-2.845Z" />
                      <path
                        d="M550.696,817.483c1.387,0.04 2.577,1.377 2.576,2.995c-0.001,1.619 -1.192,2.886 -2.579,2.845c-1.386,-0.041 -2.576,-1.377 -2.575,-2.995c0.001,-1.618 1.192,-2.885 2.578,-2.845Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M550.679,847.658c1.387,0.046 2.577,1.388 2.576,3.006c-0.001,1.619 -1.193,2.881 -2.579,2.834c-1.387,-0.047 -2.576,-1.389 -2.575,-3.006c0.001,-1.618 1.192,-2.88 2.578,-2.834Z" />
                      <path
                        d="M550.679,847.658c1.387,0.046 2.577,1.388 2.576,3.006c-0.001,1.619 -1.193,2.881 -2.579,2.834c-1.387,-0.047 -2.576,-1.389 -2.575,-3.006c0.001,-1.618 1.192,-2.88 2.578,-2.834Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M550.661,877.838c1.388,0.052 2.577,1.4 2.576,3.018c-0.001,1.619 -1.193,2.876 -2.58,2.823c-1.387,-0.053 -2.576,-1.401 -2.575,-3.018c0.001,-1.618 1.192,-2.875 2.578,-2.823Z" />
                      <path
                        d="M550.661,877.838c1.388,0.052 2.577,1.4 2.576,3.018c-0.001,1.619 -1.193,2.876 -2.58,2.823c-1.387,-0.053 -2.576,-1.401 -2.575,-3.018c0.001,-1.618 1.192,-2.875 2.578,-2.823Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M581.71,818.368c1.395,0.04 2.592,1.383 2.591,3.008c-0.001,1.626 -1.199,2.899 -2.594,2.858c-1.395,-0.041 -2.591,-1.384 -2.59,-3.008c0.001,-1.625 1.199,-2.898 2.593,-2.858Z" />
                      <path
                        d="M581.71,818.368c1.395,0.04 2.592,1.383 2.591,3.008c-0.001,1.626 -1.199,2.899 -2.594,2.858c-1.395,-0.041 -2.591,-1.384 -2.59,-3.008c0.001,-1.625 1.199,-2.898 2.593,-2.858Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M581.695,848.681c1.396,0.046 2.592,1.395 2.592,3.02c-0.001,1.626 -1.199,2.894 -2.594,2.847c-1.395,-0.047 -2.591,-1.396 -2.59,-3.02c0.001,-1.625 1.199,-2.893 2.593,-2.847Z" />
                      <path
                        d="M581.695,848.681c1.396,0.046 2.592,1.395 2.592,3.02c-0.001,1.626 -1.199,2.894 -2.594,2.847c-1.395,-0.047 -2.591,-1.396 -2.59,-3.02c0.001,-1.625 1.199,-2.893 2.593,-2.847Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M581.681,878.998c1.396,0.052 2.593,1.406 2.592,3.032c-0.001,1.626 -1.199,2.889 -2.595,2.836c-1.395,-0.053 -2.591,-1.407 -2.591,-3.032c0.001,-1.626 1.199,-2.888 2.593,-2.836Z" />
                      <path
                        d="M581.681,878.998c1.396,0.052 2.593,1.406 2.592,3.032c-0.001,1.626 -1.199,2.889 -2.595,2.836c-1.395,-0.053 -2.591,-1.407 -2.591,-3.032c0.001,-1.626 1.199,-2.888 2.593,-2.836Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M612.906,819.258c1.404,0.04 2.607,1.39 2.607,3.022c-0.001,1.633 -1.206,2.912 -2.609,2.871c-1.403,-0.041 -2.606,-1.39 -2.606,-3.022c0.001,-1.632 1.205,-2.911 2.608,-2.871Z" />
                      <path
                        d="M612.906,819.258c1.404,0.04 2.607,1.39 2.607,3.022c-0.001,1.633 -1.206,2.912 -2.609,2.871c-1.403,-0.041 -2.606,-1.39 -2.606,-3.022c0.001,-1.632 1.205,-2.911 2.608,-2.871Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M612.895,849.71c1.404,0.046 2.608,1.401 2.607,3.034c-0.001,1.634 -1.206,2.907 -2.609,2.86c-1.403,-0.048 -2.606,-1.402 -2.606,-3.034c0.001,-1.633 1.205,-2.906 2.608,-2.86Z" />
                      <path
                        d="M612.895,849.71c1.404,0.046 2.608,1.401 2.607,3.034c-0.001,1.634 -1.206,2.907 -2.609,2.86c-1.403,-0.048 -2.606,-1.402 -2.606,-3.034c0.001,-1.633 1.205,-2.906 2.608,-2.86Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M612.883,880.165c1.404,0.053 2.608,1.413 2.607,3.046c-0.001,1.634 -1.206,2.903 -2.61,2.849c-1.403,-0.054 -2.607,-1.414 -2.606,-3.046c0.001,-1.633 1.206,-2.901 2.608,-2.849Z" />
                      <path
                        d="M612.883,880.165c1.404,0.053 2.608,1.413 2.607,3.046c-0.001,1.634 -1.206,2.903 -2.61,2.849c-1.403,-0.054 -2.607,-1.414 -2.606,-3.046c0.001,-1.633 1.206,-2.901 2.608,-2.849Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M102.822,422.8c7.322,-0.215 13.283,5.393 13.27,12.457c-0.013,7.065 -5.998,13.001 -13.32,13.187c-7.3,0.186 -13.247,-5.414 -13.232,-12.459c0.014,-7.045 5.983,-12.97 13.282,-13.185Z"
                      style={{
                        
                        strokeWidth: "2.08px",
                      }}
                    />
                    <path
                      d="M688.073,336.001c-0.008,55.29 -0.017,110.58 -0.025,165.869c-212.113,3.524 -424.227,7.049 -636.34,10.573c0.106,-50.278 0.212,-100.556 0.318,-150.834c212.016,-8.536 424.031,-17.073 636.047,-25.609Z"
                      style={{
                        fillOpacity: 0,
                        
                        strokeWidth: "3.13px",
                      }}
                    />
                    <g>
                      <path d="M382.499,382.953c1.35,-0.049 2.51,1.188 2.508,2.778c-0.002,1.589 -1.163,2.909 -2.514,2.956c-1.35,0.047 -2.508,-1.189 -2.507,-2.778c0.002,-1.588 1.163,-2.907 2.513,-2.956Z" />
                      <path
                        d="M382.499,382.953c1.35,-0.049 2.51,1.188 2.508,2.778c-0.002,1.589 -1.163,2.909 -2.514,2.956c-1.35,0.047 -2.508,-1.189 -2.507,-2.778c0.002,-1.588 1.163,-2.907 2.513,-2.956Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M382.467,412.578c1.35,-0.043 2.51,1.199 2.508,2.789c-0.002,1.589 -1.163,2.904 -2.514,2.945c-1.35,0.041 -2.509,-1.2 -2.507,-2.789c0.002,-1.588 1.163,-2.902 2.513,-2.945Z" />
                      <path
                        d="M382.467,412.578c1.35,-0.043 2.51,1.199 2.508,2.789c-0.002,1.589 -1.163,2.904 -2.514,2.945c-1.35,0.041 -2.509,-1.2 -2.507,-2.789c0.002,-1.588 1.163,-2.902 2.513,-2.945Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M382.435,442.203c1.351,-0.037 2.51,1.21 2.508,2.8c-0.002,1.589 -1.163,2.899 -2.514,2.934c-1.35,0.035 -2.509,-1.211 -2.507,-2.8c0.002,-1.589 1.163,-2.897 2.513,-2.934Z" />
                      <path
                        d="M382.435,442.203c1.351,-0.037 2.51,1.21 2.508,2.8c-0.002,1.589 -1.163,2.899 -2.514,2.934c-1.35,0.035 -2.509,-1.211 -2.507,-2.8c0.002,-1.589 1.163,-2.897 2.513,-2.934Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M412.713,381.867c1.359,-0.049 2.525,1.193 2.523,2.79c-0.002,1.596 -1.17,2.922 -2.529,2.97c-1.358,0.048 -2.523,-1.194 -2.522,-2.79c0.002,-1.595 1.169,-2.921 2.528,-2.969Z" />
                      <path
                        d="M412.713,381.867c1.359,-0.049 2.525,1.193 2.523,2.79c-0.002,1.596 -1.17,2.922 -2.529,2.97c-1.358,0.048 -2.523,-1.194 -2.522,-2.79c0.002,-1.595 1.169,-2.921 2.528,-2.969Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M412.683,411.624c1.359,-0.043 2.525,1.204 2.523,2.801c-0.002,1.596 -1.17,2.917 -2.529,2.958c-1.358,0.042 -2.524,-1.205 -2.522,-2.801c0.002,-1.595 1.169,-2.916 2.528,-2.958Z" />
                      <path
                        d="M412.683,411.624c1.359,-0.043 2.525,1.204 2.523,2.801c-0.002,1.596 -1.17,2.917 -2.529,2.958c-1.358,0.042 -2.524,-1.205 -2.522,-2.801c0.002,-1.595 1.169,-2.916 2.528,-2.958Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M412.654,441.383c1.359,-0.037 2.525,1.216 2.524,2.812c-0.002,1.596 -1.17,2.912 -2.529,2.947c-1.358,0.036 -2.524,-1.216 -2.522,-2.813c0.002,-1.596 1.169,-2.911 2.528,-2.947Z" />
                      <path
                        d="M412.654,441.383c1.359,-0.037 2.525,1.216 2.524,2.812c-0.002,1.596 -1.17,2.912 -2.529,2.947c-1.358,0.036 -2.524,-1.216 -2.522,-2.813c0.002,-1.596 1.169,-2.911 2.528,-2.947Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M443.107,380.773c1.367,-0.049 2.54,1.198 2.538,2.802c-0.001,1.603 -1.176,2.935 -2.544,2.983c-1.366,0.048 -2.539,-1.199 -2.537,-2.802c0.001,-1.602 1.176,-2.934 2.542,-2.983Z" />
                      <path
                        d="M443.107,380.773c1.367,-0.049 2.54,1.198 2.538,2.802c-0.001,1.603 -1.176,2.935 -2.544,2.983c-1.366,0.048 -2.539,-1.199 -2.537,-2.802c0.001,-1.602 1.176,-2.934 2.542,-2.983Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M443.08,410.665c1.367,-0.043 2.54,1.21 2.539,2.814c-0.001,1.603 -1.176,2.93 -2.544,2.972c-1.366,0.042 -2.539,-1.211 -2.537,-2.814c0.001,-1.603 1.176,-2.929 2.543,-2.972Z" />
                      <path
                        d="M443.08,410.665c1.367,-0.043 2.54,1.21 2.539,2.814c-0.001,1.603 -1.176,2.93 -2.544,2.972c-1.366,0.042 -2.539,-1.211 -2.537,-2.814c0.001,-1.603 1.176,-2.929 2.543,-2.972Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M443.054,440.558c1.367,-0.037 2.54,1.221 2.539,2.825c-0.001,1.604 -1.177,2.925 -2.544,2.961c-1.366,0.036 -2.539,-1.222 -2.538,-2.825c0.001,-1.603 1.176,-2.924 2.543,-2.961Z" />
                      <path
                        d="M443.054,440.558c1.367,-0.037 2.54,1.221 2.539,2.825c-0.001,1.604 -1.177,2.925 -2.544,2.961c-1.366,0.036 -2.539,-1.222 -2.538,-2.825c0.001,-1.603 1.176,-2.924 2.543,-2.961Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M473.682,380.642c1.375,-0.049 2.555,1.204 2.554,2.815c-0.001,1.61 -1.183,2.948 -2.559,2.996c-1.374,0.048 -2.554,-1.205 -2.553,-2.815c0.001,-1.61 1.182,-2.947 2.557,-2.996Z" />
                      <path
                        d="M473.682,380.642c1.375,-0.049 2.555,1.204 2.554,2.815c-0.001,1.61 -1.183,2.948 -2.559,2.996c-1.374,0.048 -2.554,-1.205 -2.553,-2.815c0.001,-1.61 1.182,-2.947 2.557,-2.996Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M473.658,410.668c1.375,-0.043 2.555,1.216 2.554,2.827c-0.001,1.611 -1.183,2.943 -2.559,2.985c-1.374,0.042 -2.554,-1.216 -2.553,-2.827c0.001,-1.61 1.183,-2.942 2.558,-2.985Z" />
                      <path
                        d="M473.658,410.668c1.375,-0.043 2.555,1.216 2.554,2.827c-0.001,1.611 -1.183,2.943 -2.559,2.985c-1.374,0.042 -2.554,-1.216 -2.553,-2.827c0.001,-1.61 1.183,-2.942 2.558,-2.985Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M473.634,440.697c1.375,-0.037 2.556,1.227 2.554,2.838c-0.001,1.611 -1.183,2.938 -2.559,2.974c-1.375,0.036 -2.554,-1.228 -2.553,-2.838c0.001,-1.61 1.183,-2.937 2.558,-2.974Z" />
                      <path
                        d="M473.634,440.697c1.375,-0.037 2.556,1.227 2.554,2.838c-0.001,1.611 -1.183,2.938 -2.559,2.974c-1.375,0.036 -2.554,-1.228 -2.553,-2.838c0.001,-1.61 1.183,-2.937 2.558,-2.974Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M504.441,378.566c1.383,-0.05 2.571,1.209 2.569,2.827c-0.001,1.618 -1.19,2.962 -2.573,3.01c-1.383,0.049 -2.569,-1.21 -2.568,-2.827c0.001,-1.617 1.189,-2.96 2.572,-3.01Z" />
                      <path
                        d="M504.441,378.566c1.383,-0.05 2.571,1.209 2.569,2.827c-0.001,1.618 -1.19,2.962 -2.573,3.01c-1.383,0.049 -2.569,-1.21 -2.568,-2.827c0.001,-1.617 1.189,-2.96 2.572,-3.01Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M504.42,408.729c1.383,-0.044 2.571,1.221 2.57,2.839c-0.001,1.618 -1.19,2.957 -2.574,2.999c-1.383,0.042 -2.569,-1.221 -2.568,-2.839c0.001,-1.617 1.189,-2.955 2.572,-2.999Z" />
                      <path
                        d="M504.42,408.729c1.383,-0.044 2.571,1.221 2.57,2.839c-0.001,1.618 -1.19,2.957 -2.574,2.999c-1.383,0.042 -2.569,-1.221 -2.568,-2.839c0.001,-1.617 1.189,-2.955 2.572,-2.999Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M504.398,438.893c1.384,-0.038 2.571,1.232 2.57,2.85c-0.001,1.618 -1.19,2.952 -2.574,2.988c-1.383,0.036 -2.57,-1.233 -2.569,-2.851c0.001,-1.617 1.189,-2.95 2.573,-2.988Z" />
                      <path
                        d="M504.398,438.893c1.384,-0.038 2.571,1.232 2.57,2.85c-0.001,1.618 -1.19,2.952 -2.574,2.988c-1.383,0.036 -2.57,-1.233 -2.569,-2.851c0.001,-1.617 1.189,-2.95 2.573,-2.988Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M535.382,377.453c1.392,-0.05 2.586,1.215 2.585,2.84c-0.001,1.625 -1.196,2.975 -2.589,3.024c-1.391,0.049 -2.585,-1.215 -2.584,-2.84c0.001,-1.624 1.196,-2.974 2.587,-3.024Z" />
                      <path
                        d="M535.382,377.453c1.392,-0.05 2.586,1.215 2.585,2.84c-0.001,1.625 -1.196,2.975 -2.589,3.024c-1.391,0.049 -2.585,-1.215 -2.584,-2.84c0.001,-1.624 1.196,-2.974 2.587,-3.024Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M535.363,407.752c1.392,-0.044 2.586,1.226 2.585,2.852c-0.001,1.625 -1.196,2.97 -2.589,3.013c-1.391,0.043 -2.585,-1.227 -2.584,-2.852c0.001,-1.624 1.196,-2.969 2.587,-3.013Z" />
                      <path
                        d="M535.363,407.752c1.392,-0.044 2.586,1.226 2.585,2.852c-0.001,1.625 -1.196,2.97 -2.589,3.013c-1.391,0.043 -2.585,-1.227 -2.584,-2.852c0.001,-1.624 1.196,-2.969 2.587,-3.013Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M535.345,438.052c1.392,-0.038 2.586,1.238 2.585,2.863c-0.001,1.625 -1.197,2.965 -2.589,3.002c-1.391,0.037 -2.585,-1.239 -2.584,-2.863c0.001,-1.624 1.196,-2.964 2.588,-3.002Z" />
                      <path
                        d="M535.345,438.052c1.392,-0.038 2.586,1.238 2.585,2.863c-0.001,1.625 -1.197,2.965 -2.589,3.002c-1.391,0.037 -2.585,-1.239 -2.584,-2.863c0.001,-1.624 1.196,-2.964 2.588,-3.002Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M566.507,376.333c1.4,-0.05 2.601,1.22 2.601,2.853c-0.001,1.632 -1.203,2.989 -2.604,3.038c-1.399,0.049 -2.6,-1.221 -2.599,-2.853c0.001,-1.631 1.203,-2.987 2.602,-3.038Z" />
                      <path
                        d="M566.507,376.333c1.4,-0.05 2.601,1.22 2.601,2.853c-0.001,1.632 -1.203,2.989 -2.604,3.038c-1.399,0.049 -2.6,-1.221 -2.599,-2.853c0.001,-1.631 1.203,-2.987 2.602,-3.038Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M566.491,406.769c1.4,-0.044 2.602,1.232 2.601,2.865c-0.001,1.632 -1.203,2.984 -2.604,3.027c-1.399,0.043 -2.6,-1.233 -2.6,-2.865c0.001,-1.631 1.203,-2.982 2.603,-3.027Z" />
                      <path
                        d="M566.491,406.769c1.4,-0.044 2.602,1.232 2.601,2.865c-0.001,1.632 -1.203,2.984 -2.604,3.027c-1.399,0.043 -2.6,-1.233 -2.6,-2.865c0.001,-1.631 1.203,-2.982 2.603,-3.027Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M566.475,437.207c1.4,-0.038 2.602,1.243 2.601,2.876c-0.001,1.632 -1.203,2.978 -2.604,3.015c-1.399,0.037 -2.601,-1.244 -2.6,-2.876c0.001,-1.632 1.203,-2.977 2.603,-3.015Z" />
                      <path
                        d="M566.475,437.207c1.4,-0.038 2.602,1.243 2.601,2.876c-0.001,1.632 -1.203,2.978 -2.604,3.015c-1.399,0.037 -2.601,-1.244 -2.6,-2.876c0.001,-1.632 1.203,-2.977 2.603,-3.015Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M597.816,375.207c1.408,-0.051 2.617,1.226 2.616,2.866c-0.001,1.639 -1.21,3.002 -2.619,3.052c-1.408,0.049 -2.616,-1.227 -2.615,-2.866c0.001,-1.638 1.209,-3.001 2.617,-3.052Z" />
                      <path
                        d="M597.816,375.207c1.408,-0.051 2.617,1.226 2.616,2.866c-0.001,1.639 -1.21,3.002 -2.619,3.052c-1.408,0.049 -2.616,-1.227 -2.615,-2.866c0.001,-1.638 1.209,-3.001 2.617,-3.052Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M597.803,405.781c1.409,-0.044 2.617,1.237 2.616,2.877c-0.001,1.639 -1.21,2.997 -2.619,3.04c-1.408,0.043 -2.616,-1.238 -2.615,-2.878c0.001,-1.639 1.209,-2.996 2.618,-3.04Z" />
                      <path
                        d="M597.803,405.781c1.409,-0.044 2.617,1.237 2.616,2.877c-0.001,1.639 -1.21,2.997 -2.619,3.04c-1.408,0.043 -2.616,-1.238 -2.615,-2.878c0.001,-1.639 1.209,-2.996 2.618,-3.04Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M597.79,436.358c1.409,-0.038 2.617,1.249 2.617,2.889c-0.001,1.64 -1.21,2.992 -2.619,3.029c-1.408,0.037 -2.616,-1.25 -2.615,-2.889c0.001,-1.639 1.21,-2.991 2.618,-3.029Z" />
                      <path
                        d="M597.79,436.358c1.409,-0.038 2.617,1.249 2.617,2.889c-0.001,1.64 -1.21,2.992 -2.619,3.029c-1.408,0.037 -2.616,-1.25 -2.615,-2.889c0.001,-1.639 1.21,-2.991 2.618,-3.029Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M629.311,374.075c1.417,-0.051 2.633,1.231 2.632,2.879c-0.001,1.647 -1.217,3.016 -2.634,3.066c-1.416,0.05 -2.631,-1.232 -2.631,-2.879c0.001,-1.646 1.216,-3.015 2.633,-3.066Z" />
                      <path
                        d="M629.311,374.075c1.417,-0.051 2.633,1.231 2.632,2.879c-0.001,1.647 -1.217,3.016 -2.634,3.066c-1.416,0.05 -2.631,-1.232 -2.631,-2.879c0.001,-1.646 1.216,-3.015 2.633,-3.066Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M629.301,404.788c1.417,-0.045 2.633,1.243 2.632,2.89c-0.001,1.647 -1.217,3.011 -2.634,3.054c-1.416,0.043 -2.632,-1.244 -2.631,-2.891c0.001,-1.646 1.216,-3.01 2.633,-3.054Z" />
                      <path
                        d="M629.301,404.788c1.417,-0.045 2.633,1.243 2.632,2.89c-0.001,1.647 -1.217,3.011 -2.634,3.054c-1.416,0.043 -2.632,-1.244 -2.631,-2.891c0.001,-1.646 1.216,-3.01 2.633,-3.054Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M629.291,435.503c1.417,-0.038 2.633,1.255 2.632,2.902c-0.001,1.647 -1.217,3.006 -2.634,3.043c-1.416,0.037 -2.632,-1.256 -2.631,-2.902c0.001,-1.646 1.216,-3.004 2.633,-3.043Z" />
                      <path
                        d="M629.291,435.503c1.417,-0.038 2.633,1.255 2.632,2.902c-0.001,1.647 -1.217,3.006 -2.634,3.043c-1.416,0.037 -2.632,-1.256 -2.631,-2.902c0.001,-1.646 1.216,-3.004 2.633,-3.043Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M397.565,399.651c1.354,-0.045 2.517,1.197 2.516,2.79c-0.002,1.593 -1.166,2.912 -2.522,2.956c-1.354,0.044 -2.516,-1.198 -2.514,-2.79c0.002,-1.592 1.166,-2.911 2.52,-2.956Z" />
                      <path
                        d="M397.565,399.651c1.354,-0.045 2.517,1.197 2.516,2.79c-0.002,1.593 -1.166,2.912 -2.522,2.956c-1.354,0.044 -2.516,-1.198 -2.514,-2.79c0.002,-1.592 1.166,-2.911 2.52,-2.956Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M397.535,429.342c1.355,-0.039 2.517,1.208 2.516,2.801c-0.002,1.593 -1.167,2.907 -2.522,2.945c-1.354,0.038 -2.516,-1.209 -2.515,-2.802c0.002,-1.592 1.166,-2.906 2.521,-2.945Z" />
                      <path
                        d="M397.535,429.342c1.355,-0.039 2.517,1.208 2.516,2.801c-0.002,1.593 -1.167,2.907 -2.522,2.945c-1.354,0.038 -2.516,-1.209 -2.515,-2.802c0.002,-1.592 1.166,-2.906 2.521,-2.945Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M397.504,459.035c1.355,-0.033 2.518,1.219 2.516,2.813c-0.002,1.593 -1.167,2.902 -2.522,2.934c-1.354,0.032 -2.516,-1.22 -2.515,-2.813c0.002,-1.592 1.166,-2.901 2.521,-2.934Z" />
                      <path
                        d="M397.504,459.035c1.355,-0.033 2.518,1.219 2.516,2.813c-0.002,1.593 -1.167,2.902 -2.522,2.934c-1.354,0.032 -2.516,-1.22 -2.515,-2.813c0.002,-1.592 1.166,-2.901 2.521,-2.934Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M427.871,398.638c1.363,-0.046 2.532,1.202 2.531,2.803c-0.001,1.6 -1.173,2.925 -2.536,2.97c-1.362,0.044 -2.531,-1.203 -2.53,-2.803c0.002,-1.599 1.173,-2.924 2.535,-2.97Z" />
                      <path
                        d="M427.871,398.638c1.363,-0.046 2.532,1.202 2.531,2.803c-0.001,1.6 -1.173,2.925 -2.536,2.97c-1.362,0.044 -2.531,-1.203 -2.53,-2.803c0.002,-1.599 1.173,-2.924 2.535,-2.97Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M427.843,428.464c1.363,-0.04 2.533,1.214 2.531,2.814c-0.001,1.6 -1.173,2.92 -2.537,2.959c-1.362,0.038 -2.531,-1.214 -2.53,-2.814c0.002,-1.599 1.173,-2.919 2.535,-2.959Z" />
                      <path
                        d="M427.843,428.464c1.363,-0.04 2.533,1.214 2.531,2.814c-0.001,1.6 -1.173,2.92 -2.537,2.959c-1.362,0.038 -2.531,-1.214 -2.53,-2.814c0.002,-1.599 1.173,-2.919 2.535,-2.959Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M427.815,458.29c1.363,-0.033 2.533,1.225 2.531,2.825c-0.001,1.6 -1.173,2.915 -2.537,2.948c-1.362,0.032 -2.532,-1.226 -2.53,-2.825c0.002,-1.599 1.173,-2.914 2.536,-2.948Z" />
                      <path
                        d="M427.815,458.29c1.363,-0.033 2.533,1.225 2.531,2.825c-0.001,1.6 -1.173,2.915 -2.537,2.948c-1.362,0.032 -2.532,-1.226 -2.53,-2.825c0.002,-1.599 1.173,-2.914 2.536,-2.948Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M458.358,397.62c1.371,-0.046 2.548,1.208 2.546,2.815c-0.001,1.607 -1.18,2.939 -2.551,2.983c-1.37,0.045 -2.546,-1.209 -2.545,-2.815c0.001,-1.606 1.179,-2.938 2.55,-2.983Z" />
                      <path
                        d="M458.358,397.62c1.371,-0.046 2.548,1.208 2.546,2.815c-0.001,1.607 -1.18,2.939 -2.551,2.983c-1.37,0.045 -2.546,-1.209 -2.545,-2.815c0.001,-1.606 1.179,-2.938 2.55,-2.983Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M458.332,427.579c1.371,-0.04 2.548,1.219 2.547,2.827c-0.001,1.607 -1.18,2.934 -2.551,2.972c-1.37,0.039 -2.547,-1.22 -2.545,-2.827c0.001,-1.606 1.179,-2.932 2.55,-2.972Z" />
                      <path
                        d="M458.332,427.579c1.371,-0.04 2.548,1.219 2.547,2.827c-0.001,1.607 -1.18,2.934 -2.551,2.972c-1.37,0.039 -2.547,-1.22 -2.545,-2.827c0.001,-1.606 1.179,-2.932 2.55,-2.972Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M458.307,457.541c1.371,-0.034 2.548,1.23 2.547,2.838c-0.001,1.607 -1.18,2.929 -2.552,2.961c-1.37,0.033 -2.547,-1.231 -2.545,-2.838c0.001,-1.606 1.18,-2.927 2.55,-2.961Z" />
                      <path
                        d="M458.307,457.541c1.371,-0.034 2.548,1.23 2.547,2.838c-0.001,1.607 -1.18,2.929 -2.552,2.961c-1.37,0.033 -2.547,-1.231 -2.545,-2.838c0.001,-1.606 1.18,-2.927 2.55,-2.961Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M489.026,396.594c1.379,-0.046 2.563,1.213 2.562,2.828c-0.001,1.614 -1.186,2.952 -2.566,2.997c-1.378,0.045 -2.562,-1.214 -2.56,-2.828c0.001,-1.613 1.186,-2.951 2.565,-2.997Z" />
                      <path
                        d="M489.026,396.594c1.379,-0.046 2.563,1.213 2.562,2.828c-0.001,1.614 -1.186,2.952 -2.566,2.997c-1.378,0.045 -2.562,-1.214 -2.56,-2.828c0.001,-1.613 1.186,-2.951 2.565,-2.997Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M489.003,426.69c1.379,-0.04 2.563,1.225 2.562,2.839c-0.001,1.614 -1.186,2.947 -2.566,2.986c-1.379,0.039 -2.562,-1.225 -2.561,-2.839c0.001,-1.613 1.186,-2.946 2.565,-2.986Z" />
                      <path
                        d="M489.003,426.69c1.379,-0.04 2.563,1.225 2.562,2.839c-0.001,1.614 -1.186,2.947 -2.566,2.986c-1.379,0.039 -2.562,-1.225 -2.561,-2.839c0.001,-1.613 1.186,-2.946 2.565,-2.986Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M488.981,456.787c1.38,-0.034 2.563,1.236 2.562,2.851c-0.001,1.614 -1.187,2.942 -2.567,2.975c-1.379,0.033 -2.562,-1.237 -2.561,-2.851c0.001,-1.613 1.186,-2.941 2.565,-2.975Z" />
                      <path
                        d="M488.981,456.787c1.38,-0.034 2.563,1.236 2.562,2.851c-0.001,1.614 -1.187,2.942 -2.567,2.975c-1.379,0.033 -2.562,-1.237 -2.561,-2.851c0.001,-1.613 1.186,-2.941 2.565,-2.975Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M519.877,395.563c1.388,-0.046 2.578,1.219 2.577,2.84c-0.001,1.621 -1.193,2.965 -2.581,3.011c-1.387,0.045 -2.577,-1.219 -2.576,-2.84c0.001,-1.62 1.193,-2.964 2.58,-3.011Z" />
                      <path
                        d="M519.877,395.563c1.388,-0.046 2.578,1.219 2.577,2.84c-0.001,1.621 -1.193,2.965 -2.581,3.011c-1.387,0.045 -2.577,-1.219 -2.576,-2.84c0.001,-1.62 1.193,-2.964 2.58,-3.011Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M519.857,425.795c1.388,-0.04 2.579,1.23 2.578,2.852c-0.001,1.621 -1.193,2.96 -2.581,2.999c-1.387,0.039 -2.577,-1.231 -2.576,-2.852c0.001,-1.621 1.193,-2.959 2.58,-2.999Z" />
                      <path
                        d="M519.857,425.795c1.388,-0.04 2.579,1.23 2.578,2.852c-0.001,1.621 -1.193,2.96 -2.581,2.999c-1.387,0.039 -2.577,-1.231 -2.576,-2.852c0.001,-1.621 1.193,-2.959 2.58,-2.999Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M519.837,456.028c1.388,-0.034 2.579,1.242 2.578,2.864c-0.001,1.622 -1.193,2.955 -2.582,2.988c-1.387,0.033 -2.578,-1.242 -2.576,-2.864c0.001,-1.621 1.193,-2.954 2.58,-2.988Z" />
                      <path
                        d="M519.837,456.028c1.388,-0.034 2.579,1.242 2.578,2.864c-0.001,1.622 -1.193,2.955 -2.582,2.988c-1.387,0.033 -2.578,-1.242 -2.576,-2.864c0.001,-1.621 1.193,-2.954 2.58,-2.988Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M550.911,394.526c1.396,-0.047 2.594,1.224 2.593,2.853c-0.001,1.628 -1.2,2.979 -2.596,3.024c-1.395,0.045 -2.593,-1.225 -2.592,-2.853c0.001,-1.628 1.199,-2.978 2.595,-3.024Z" />
                      <path
                        d="M550.911,394.526c1.396,-0.047 2.594,1.224 2.593,2.853c-0.001,1.628 -1.2,2.979 -2.596,3.024c-1.395,0.045 -2.593,-1.225 -2.592,-2.853c0.001,-1.628 1.199,-2.978 2.595,-3.024Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M550.894,424.895c1.396,-0.04 2.594,1.236 2.593,2.865c-0.001,1.629 -1.2,2.974 -2.596,3.013c-1.395,0.039 -2.593,-1.237 -2.592,-2.865c0.001,-1.628 1.199,-2.973 2.595,-3.013Z" />
                      <path
                        d="M550.894,424.895c1.396,-0.04 2.594,1.236 2.593,2.865c-0.001,1.629 -1.2,2.974 -2.596,3.013c-1.395,0.039 -2.593,-1.237 -2.592,-2.865c0.001,-1.628 1.199,-2.973 2.595,-3.013Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M550.877,455.265c1.396,-0.034 2.594,1.247 2.593,2.877c-0.001,1.629 -1.2,2.969 -2.597,3.002c-1.395,0.033 -2.593,-1.248 -2.592,-2.877c0.001,-1.628 1.2,-2.968 2.595,-3.002Z" />
                      <path
                        d="M550.877,455.265c1.396,-0.034 2.594,1.247 2.593,2.877c-0.001,1.629 -1.2,2.969 -2.597,3.002c-1.395,0.033 -2.593,-1.248 -2.592,-2.877c0.001,-1.628 1.2,-2.968 2.595,-3.002Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M582.13,393.483c1.404,-0.047 2.609,1.23 2.609,2.866c-0.001,1.636 -1.206,2.992 -2.611,3.038c-1.403,0.046 -2.608,-1.231 -2.607,-2.866c0.001,-1.635 1.206,-2.991 2.61,-3.038Z" />
                      <path
                        d="M582.13,393.483c1.404,-0.047 2.609,1.23 2.609,2.866c-0.001,1.636 -1.206,2.992 -2.611,3.038c-1.403,0.046 -2.608,-1.231 -2.607,-2.866c0.001,-1.635 1.206,-2.991 2.61,-3.038Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M582.115,423.989c1.404,-0.041 2.61,1.241 2.609,2.878c-0.001,1.636 -1.207,2.987 -2.612,3.027c-1.404,0.039 -2.608,-1.242 -2.607,-2.878c0.001,-1.635 1.206,-2.986 2.61,-3.027Z" />
                      <path
                        d="M582.115,423.989c1.404,-0.041 2.61,1.241 2.609,2.878c-0.001,1.636 -1.207,2.987 -2.612,3.027c-1.404,0.039 -2.608,-1.242 -2.607,-2.878c0.001,-1.635 1.206,-2.986 2.61,-3.027Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M582.101,454.498c1.405,-0.035 2.61,1.253 2.609,2.89c-0.001,1.636 -1.207,2.982 -2.612,3.016c-1.404,0.033 -2.608,-1.254 -2.608,-2.89c0.001,-1.635 1.206,-2.981 2.61,-3.016Z" />
                      <path
                        d="M582.101,454.498c1.405,-0.035 2.61,1.253 2.609,2.89c-0.001,1.636 -1.207,2.982 -2.612,3.016c-1.404,0.033 -2.608,-1.254 -2.608,-2.89c0.001,-1.635 1.206,-2.981 2.61,-3.016Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M613.533,392.434c1.413,-0.047 2.625,1.235 2.624,2.879c-0.001,1.643 -1.213,3.006 -2.626,3.052c-1.412,0.046 -2.624,-1.236 -2.623,-2.879c0.001,-1.642 1.213,-3.005 2.625,-3.052Z" />
                      <path
                        d="M613.533,392.434c1.413,-0.047 2.625,1.235 2.624,2.879c-0.001,1.643 -1.213,3.006 -2.626,3.052c-1.412,0.046 -2.624,-1.236 -2.623,-2.879c0.001,-1.642 1.213,-3.005 2.625,-3.052Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M613.522,423.079c1.413,-0.041 2.625,1.247 2.624,2.891c-0.001,1.643 -1.213,3.001 -2.627,3.041c-1.412,0.04 -2.624,-1.248 -2.623,-2.891c0.001,-1.642 1.213,-3 2.625,-3.041Z" />
                      <path
                        d="M613.522,423.079c1.413,-0.041 2.625,1.247 2.624,2.891c-0.001,1.643 -1.213,3.001 -2.627,3.041c-1.412,0.04 -2.624,-1.248 -2.623,-2.891c0.001,-1.642 1.213,-3 2.625,-3.041Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M613.51,453.727c1.413,-0.035 2.625,1.259 2.625,2.903c-0.001,1.643 -1.214,2.996 -2.627,3.029c-1.412,0.033 -2.624,-1.26 -2.623,-2.903c0.001,-1.643 1.213,-2.995 2.626,-3.029Z" />
                      <path
                        d="M613.51,453.727c1.413,-0.035 2.625,1.259 2.625,2.903c-0.001,1.643 -1.214,2.996 -2.627,3.029c-1.412,0.033 -2.624,-1.26 -2.623,-2.903c0.001,-1.643 1.213,-2.995 2.626,-3.029Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M102.809,224.568c7.261,-0.439 13.171,4.94 13.158,11.944c-0.013,7.006 -5.947,13.076 -13.207,13.485c-7.238,0.408 -13.135,-4.961 -13.121,-11.947c0.014,-6.986 5.933,-13.045 13.17,-13.483Z"
                      style={{
                        
                        strokeWidth: "2.08px",
                      }}
                    />
                    <path
                      d="M682.831,120.7c-0.009,54.775 -0.018,109.55 -0.027,164.325c-210.226,9.999 -420.453,19.997 -630.679,29.996c0.105,-49.853 0.21,-99.705 0.315,-149.558c210.13,-14.921 420.261,-29.842 630.391,-44.763Z"
                      style={{
                        fillOpacity: 0,
                        
                        strokeWidth: "3.13px",
                      }}
                    />
                    <g>
                      <path d="M380.052,176.453c1.338,-0.089 2.487,1.102 2.486,2.679c-0.002,1.576 -1.152,2.92 -2.492,3.008c-1.337,0.088 -2.486,-1.103 -2.484,-2.679c0.002,-1.575 1.152,-2.919 2.49,-3.008Z" />
                      <path
                        d="M380.052,176.453c1.338,-0.089 2.487,1.102 2.486,2.679c-0.002,1.576 -1.152,2.92 -2.492,3.008c-1.337,0.088 -2.486,-1.103 -2.484,-2.679c0.002,-1.575 1.152,-2.919 2.49,-3.008Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M380.022,205.835c1.338,-0.083 2.487,1.113 2.486,2.69c-0.002,1.576 -1.152,2.915 -2.492,2.997c-1.337,0.082 -2.486,-1.113 -2.485,-2.69c0.002,-1.575 1.152,-2.914 2.491,-2.997Z" />
                      <path
                        d="M380.022,205.835c1.338,-0.083 2.487,1.113 2.486,2.69c-0.002,1.576 -1.152,2.915 -2.492,2.997c-1.337,0.082 -2.486,-1.113 -2.485,-2.69c0.002,-1.575 1.152,-2.914 2.491,-2.997Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M379.991,235.217c1.338,-0.077 2.488,1.123 2.486,2.7c-0.002,1.576 -1.153,2.91 -2.492,2.986c-1.338,0.076 -2.486,-1.124 -2.485,-2.701c0.002,-1.575 1.152,-2.909 2.491,-2.986Z" />
                      <path
                        d="M379.991,235.217c1.338,-0.077 2.488,1.123 2.486,2.7c-0.002,1.576 -1.153,2.91 -2.492,2.986c-1.338,0.076 -2.486,-1.124 -2.485,-2.701c0.002,-1.575 1.152,-2.909 2.491,-2.986Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M409.996,174.462c1.346,-0.089 2.502,1.107 2.501,2.691c-0.002,1.583 -1.159,2.933 -2.506,3.021c-1.345,0.088 -2.501,-1.107 -2.499,-2.691c0.002,-1.582 1.158,-2.932 2.505,-3.021Z" />
                      <path
                        d="M409.996,174.462c1.346,-0.089 2.502,1.107 2.501,2.691c-0.002,1.583 -1.159,2.933 -2.506,3.021c-1.345,0.088 -2.501,-1.107 -2.499,-2.691c0.002,-1.582 1.158,-2.932 2.505,-3.021Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M409.968,203.974c1.346,-0.084 2.502,1.117 2.501,2.701c-0.002,1.583 -1.159,2.928 -2.506,3.011c-1.346,0.083 -2.501,-1.118 -2.5,-2.701c0.002,-1.582 1.158,-2.927 2.505,-3.01Z" />
                      <path
                        d="M409.968,203.974c1.346,-0.084 2.502,1.117 2.501,2.701c-0.002,1.583 -1.159,2.928 -2.506,3.011c-1.346,0.083 -2.501,-1.118 -2.5,-2.701c0.002,-1.582 1.158,-2.927 2.505,-3.01Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M409.939,233.485c1.346,-0.078 2.503,1.128 2.501,2.712c-0.002,1.583 -1.159,2.923 -2.507,3c-1.346,0.077 -2.501,-1.129 -2.5,-2.712c0.002,-1.582 1.159,-2.922 2.505,-3Z" />
                      <path
                        d="M409.939,233.485c1.346,-0.078 2.503,1.128 2.501,2.712c-0.002,1.583 -1.159,2.923 -2.507,3c-1.346,0.077 -2.501,-1.129 -2.5,-2.712c0.002,-1.582 1.159,-2.922 2.505,-3Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M440.118,172.46c1.354,-0.09 2.517,1.111 2.516,2.702c-0.001,1.589 -1.165,2.946 -2.521,3.035c-1.353,0.089 -2.516,-1.112 -2.514,-2.702c0.001,-1.589 1.165,-2.945 2.519,-3.035Z" />
                      <path
                        d="M440.118,172.46c1.354,-0.09 2.517,1.111 2.516,2.702c-0.001,1.589 -1.165,2.946 -2.521,3.035c-1.353,0.089 -2.516,-1.112 -2.514,-2.702c0.001,-1.589 1.165,-2.945 2.519,-3.035Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M440.092,202.101c1.354,-0.084 2.517,1.122 2.516,2.713c-0.001,1.59 -1.165,2.941 -2.521,3.024c-1.354,0.083 -2.516,-1.123 -2.515,-2.713c0.001,-1.589 1.165,-2.94 2.52,-3.024Z" />
                      <path
                        d="M440.092,202.101c1.354,-0.084 2.517,1.122 2.516,2.713c-0.001,1.59 -1.165,2.941 -2.521,3.024c-1.354,0.083 -2.516,-1.123 -2.515,-2.713c0.001,-1.589 1.165,-2.94 2.52,-3.024Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M440.066,231.742c1.354,-0.078 2.517,1.133 2.516,2.724c-0.001,1.59 -1.166,2.936 -2.521,3.013c-1.354,0.077 -2.516,-1.134 -2.515,-2.724c0.001,-1.589 1.165,-2.935 2.52,-3.013Z" />
                      <path
                        d="M440.066,231.742c1.354,-0.078 2.517,1.133 2.516,2.724c-0.001,1.59 -1.166,2.936 -2.521,3.013c-1.354,0.077 -2.516,-1.134 -2.515,-2.724c0.001,-1.589 1.165,-2.935 2.52,-3.013Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M470.416,171.406c1.362,-0.09 2.532,1.116 2.531,2.714c-0.001,1.596 -1.172,2.959 -2.535,3.048c-1.362,0.089 -2.531,-1.117 -2.53,-2.714c0.001,-1.596 1.171,-2.958 2.534,-3.048Z" />
                      <path
                        d="M470.416,171.406c1.362,-0.09 2.532,1.116 2.531,2.714c-0.001,1.596 -1.172,2.959 -2.535,3.048c-1.362,0.089 -2.531,-1.117 -2.53,-2.714c0.001,-1.596 1.171,-2.958 2.534,-3.048Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M470.393,201.177c1.362,-0.085 2.532,1.127 2.531,2.725c-0.001,1.596 -1.172,2.954 -2.536,3.037c-1.362,0.083 -2.531,-1.128 -2.53,-2.725c0.001,-1.596 1.172,-2.953 2.534,-3.037Z" />
                      <path
                        d="M470.393,201.177c1.362,-0.085 2.532,1.127 2.531,2.725c-0.001,1.596 -1.172,2.954 -2.536,3.037c-1.362,0.083 -2.531,-1.128 -2.53,-2.725c0.001,-1.596 1.172,-2.953 2.534,-3.037Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M470.37,230.949c1.363,-0.079 2.532,1.138 2.531,2.736c-0.001,1.597 -1.172,2.949 -2.536,3.026c-1.362,0.077 -2.531,-1.139 -2.53,-2.736c0.001,-1.596 1.172,-2.948 2.535,-3.026Z" />
                      <path
                        d="M470.37,230.949c1.363,-0.079 2.532,1.138 2.531,2.736c-0.001,1.597 -1.172,2.949 -2.536,3.026c-1.362,0.077 -2.531,-1.139 -2.53,-2.736c0.001,-1.596 1.172,-2.948 2.535,-3.026Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M500.896,168.42c1.37,-0.091 2.547,1.121 2.546,2.725c-0.001,1.603 -1.178,2.972 -2.55,3.062c-1.37,0.09 -2.546,-1.122 -2.545,-2.725c0.001,-1.602 1.178,-2.971 2.549,-3.062Z" />
                      <path
                        d="M500.896,168.42c1.37,-0.091 2.547,1.121 2.546,2.725c-0.001,1.603 -1.178,2.972 -2.55,3.062c-1.37,0.09 -2.546,-1.122 -2.545,-2.725c0.001,-1.602 1.178,-2.971 2.549,-3.062Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M500.875,198.322c1.371,-0.085 2.547,1.132 2.546,2.736c-0.001,1.603 -1.179,2.967 -2.55,3.051c-1.37,0.084 -2.546,-1.133 -2.545,-2.736c0.001,-1.603 1.178,-2.966 2.549,-3.051Z" />
                      <path
                        d="M500.875,198.322c1.371,-0.085 2.547,1.132 2.546,2.736c-0.001,1.603 -1.179,2.967 -2.55,3.051c-1.37,0.084 -2.546,-1.133 -2.545,-2.736c0.001,-1.603 1.178,-2.966 2.549,-3.051Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M500.854,228.225c1.371,-0.079 2.548,1.143 2.546,2.747c-0.001,1.603 -1.179,2.962 -2.55,3.04c-1.37,0.078 -2.546,-1.144 -2.545,-2.748c0.001,-1.603 1.178,-2.961 2.549,-3.04Z" />
                      <path
                        d="M500.854,228.225c1.371,-0.079 2.548,1.143 2.546,2.747c-0.001,1.603 -1.179,2.962 -2.55,3.04c-1.37,0.078 -2.546,-1.144 -2.545,-2.748c0.001,-1.603 1.178,-2.961 2.549,-3.04Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M531.554,166.382c1.379,-0.092 2.562,1.126 2.561,2.737c-0.001,1.61 -1.185,2.985 -2.565,3.076c-1.378,0.09 -2.561,-1.127 -2.56,-2.737c0.001,-1.609 1.185,-2.984 2.564,-3.076Z" />
                      <path
                        d="M531.554,166.382c1.379,-0.092 2.562,1.126 2.561,2.737c-0.001,1.61 -1.185,2.985 -2.565,3.076c-1.378,0.09 -2.561,-1.127 -2.56,-2.737c0.001,-1.609 1.185,-2.984 2.564,-3.076Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M531.536,196.415c1.379,-0.086 2.562,1.137 2.562,2.748c-0.001,1.61 -1.185,2.98 -2.565,3.065c-1.378,0.085 -2.561,-1.138 -2.56,-2.748c0.001,-1.61 1.185,-2.979 2.564,-3.065Z" />
                      <path
                        d="M531.536,196.415c1.379,-0.086 2.562,1.137 2.562,2.748c-0.001,1.61 -1.185,2.98 -2.565,3.065c-1.378,0.085 -2.561,-1.138 -2.56,-2.748c0.001,-1.61 1.185,-2.979 2.564,-3.065Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M531.518,226.45c1.379,-0.08 2.563,1.148 2.562,2.759c-0.001,1.61 -1.185,2.975 -2.565,3.054c-1.378,0.079 -2.561,-1.149 -2.56,-2.76c0.001,-1.61 1.185,-2.974 2.564,-3.054Z" />
                      <path
                        d="M531.518,226.45c1.379,-0.08 2.563,1.148 2.562,2.759c-0.001,1.61 -1.185,2.975 -2.565,3.054c-1.378,0.079 -2.561,-1.149 -2.56,-2.76c0.001,-1.61 1.185,-2.974 2.564,-3.054Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M562.394,164.332c1.387,-0.092 2.577,1.131 2.577,2.749c-0.001,1.617 -1.192,2.998 -2.58,3.09c-1.386,0.091 -2.576,-1.131 -2.575,-2.749c0.001,-1.616 1.191,-2.997 2.578,-3.089Z" />
                      <path
                        d="M562.394,164.332c1.387,-0.092 2.577,1.131 2.577,2.749c-0.001,1.617 -1.192,2.998 -2.58,3.09c-1.386,0.091 -2.576,-1.131 -2.575,-2.749c0.001,-1.616 1.191,-2.997 2.578,-3.089Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M562.378,194.498c1.387,-0.086 2.578,1.142 2.577,2.76c-0.001,1.617 -1.192,2.993 -2.58,3.079c-1.386,0.085 -2.576,-1.143 -2.576,-2.76c0.001,-1.617 1.191,-2.992 2.579,-3.079Z" />
                      <path
                        d="M562.378,194.498c1.387,-0.086 2.578,1.142 2.577,2.76c-0.001,1.617 -1.192,2.993 -2.58,3.079c-1.386,0.085 -2.576,-1.143 -2.576,-2.76c0.001,-1.617 1.191,-2.992 2.579,-3.079Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M562.363,224.666c1.387,-0.08 2.578,1.153 2.577,2.771c-0.001,1.617 -1.192,2.989 -2.58,3.068c-1.386,0.079 -2.577,-1.154 -2.576,-2.772c0.001,-1.617 1.191,-2.987 2.579,-3.068Z" />
                      <path
                        d="M562.363,224.666c1.387,-0.08 2.578,1.153 2.577,2.771c-0.001,1.617 -1.192,2.989 -2.58,3.068c-1.386,0.079 -2.577,-1.154 -2.576,-2.772c0.001,-1.617 1.191,-2.987 2.579,-3.068Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M593.414,162.27c1.395,-0.093 2.593,1.135 2.592,2.761c-0.001,1.624 -1.198,3.012 -2.595,3.103c-1.394,0.092 -2.591,-1.136 -2.591,-2.761c0.001,-1.623 1.198,-3.011 2.593,-3.103Z" />
                      <path
                        d="M593.414,162.27c1.395,-0.093 2.593,1.135 2.592,2.761c-0.001,1.624 -1.198,3.012 -2.595,3.103c-1.394,0.092 -2.591,-1.136 -2.591,-2.761c0.001,-1.623 1.198,-3.011 2.593,-3.103Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M593.401,192.57c1.395,-0.087 2.593,1.147 2.592,2.772c-0.001,1.624 -1.198,3.007 -2.595,3.092c-1.395,0.086 -2.592,-1.148 -2.591,-2.772c0.001,-1.624 1.198,-3.006 2.593,-3.092Z" />
                      <path
                        d="M593.401,192.57c1.395,-0.087 2.593,1.147 2.592,2.772c-0.001,1.624 -1.198,3.007 -2.595,3.092c-1.395,0.086 -2.592,-1.148 -2.591,-2.772c0.001,-1.624 1.198,-3.006 2.593,-3.092Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M593.389,222.871c1.395,-0.081 2.593,1.158 2.592,2.784c-0.001,1.625 -1.199,3.002 -2.595,3.081c-1.395,0.08 -2.592,-1.159 -2.591,-2.784c0.001,-1.624 1.198,-3.001 2.594,-3.081Z" />
                      <path
                        d="M593.389,222.871c1.395,-0.081 2.593,1.158 2.592,2.784c-0.001,1.625 -1.199,3.002 -2.595,3.081c-1.395,0.08 -2.592,-1.159 -2.591,-2.784c0.001,-1.624 1.198,-3.001 2.594,-3.081Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M624.617,160.196c1.403,-0.093 2.608,1.14 2.608,2.773c-0.001,1.631 -1.205,3.025 -2.609,3.117c-1.403,0.092 -2.607,-1.141 -2.606,-2.773c0.001,-1.63 1.204,-3.024 2.608,-3.117Z" />
                      <path
                        d="M624.617,160.196c1.403,-0.093 2.608,1.14 2.608,2.773c-0.001,1.631 -1.205,3.025 -2.609,3.117c-1.403,0.092 -2.607,-1.141 -2.606,-2.773c0.001,-1.63 1.204,-3.024 2.608,-3.117Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M624.607,190.63c1.404,-0.087 2.608,1.152 2.608,2.784c-0.001,1.632 -1.205,3.02 -2.61,3.106c-1.403,0.086 -2.607,-1.153 -2.606,-2.784c0.001,-1.631 1.205,-3.019 2.608,-3.106Z" />
                      <path
                        d="M624.607,190.63c1.404,-0.087 2.608,1.152 2.608,2.784c-0.001,1.632 -1.205,3.02 -2.61,3.106c-1.403,0.086 -2.607,-1.153 -2.606,-2.784c0.001,-1.631 1.205,-3.019 2.608,-3.106Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M624.597,221.066c1.404,-0.081 2.609,1.163 2.608,2.796c-0.001,1.632 -1.205,3.015 -2.61,3.095c-1.403,0.08 -2.607,-1.164 -2.607,-2.796c0.001,-1.631 1.205,-3.014 2.609,-3.095Z" />
                      <path
                        d="M624.597,221.066c1.404,-0.081 2.609,1.163 2.608,2.796c-0.001,1.632 -1.205,3.015 -2.61,3.095c-1.403,0.08 -2.607,-1.164 -2.607,-2.796c0.001,-1.631 1.205,-3.014 2.609,-3.095Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M394.985,192.557c1.342,-0.086 2.495,1.111 2.493,2.691c-0.002,1.579 -1.156,2.924 -2.499,3.008c-1.341,0.085 -2.494,-1.111 -2.492,-2.691c0.002,-1.578 1.155,-2.922 2.498,-3.008Z" />
                      <path
                        d="M394.985,192.557c1.342,-0.086 2.495,1.111 2.493,2.691c-0.002,1.579 -1.156,2.924 -2.499,3.008c-1.341,0.085 -2.494,-1.111 -2.492,-2.691c0.002,-1.578 1.155,-2.922 2.498,-3.008Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M394.955,222.004c1.342,-0.08 2.495,1.121 2.493,2.702c-0.002,1.579 -1.156,2.919 -2.499,2.998c-1.342,0.079 -2.494,-1.122 -2.492,-2.702c0.002,-1.579 1.155,-2.917 2.498,-2.997Z" />
                      <path
                        d="M394.955,222.004c1.342,-0.08 2.495,1.121 2.493,2.702c-0.002,1.579 -1.156,2.919 -2.499,2.998c-1.342,0.079 -2.494,-1.122 -2.492,-2.702c0.002,-1.579 1.155,-2.917 2.498,-2.997Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M394.926,251.45c1.342,-0.074 2.495,1.132 2.494,2.712c-0.002,1.579 -1.156,2.913 -2.499,2.987c-1.342,0.073 -2.494,-1.133 -2.492,-2.713c0.002,-1.579 1.155,-2.912 2.498,-2.987Z" />
                      <path
                        d="M394.926,251.45c1.342,-0.074 2.495,1.132 2.494,2.712c-0.002,1.579 -1.156,2.913 -2.499,2.987c-1.342,0.073 -2.494,-1.133 -2.492,-2.713c0.002,-1.579 1.155,-2.912 2.498,-2.987Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M425.019,190.636c1.35,-0.086 2.51,1.115 2.508,2.703c-0.001,1.586 -1.162,2.936 -2.513,3.022c-1.349,0.085 -2.508,-1.116 -2.507,-2.703c0.001,-1.585 1.162,-2.935 2.512,-3.022Z" />
                      <path
                        d="M425.019,190.636c1.35,-0.086 2.51,1.115 2.508,2.703c-0.001,1.586 -1.162,2.936 -2.513,3.022c-1.349,0.085 -2.508,-1.116 -2.507,-2.703c0.001,-1.585 1.162,-2.935 2.512,-3.022Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M424.992,220.212c1.35,-0.081 2.51,1.126 2.508,2.713c-0.001,1.586 -1.162,2.931 -2.514,3.011c-1.35,0.079 -2.509,-1.127 -2.507,-2.713c0.001,-1.585 1.162,-2.93 2.512,-3.011Z" />
                      <path
                        d="M424.992,220.212c1.35,-0.081 2.51,1.126 2.508,2.713c-0.001,1.586 -1.162,2.931 -2.514,3.011c-1.35,0.079 -2.509,-1.127 -2.507,-2.713c0.001,-1.585 1.162,-2.93 2.512,-3.011Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M424.965,249.788c1.351,-0.075 2.51,1.137 2.509,2.724c-0.001,1.586 -1.162,2.926 -2.514,3c-1.35,0.074 -2.509,-1.138 -2.507,-2.724c0.001,-1.585 1.162,-2.925 2.513,-3Z" />
                      <path
                        d="M424.965,249.788c1.351,-0.075 2.51,1.137 2.509,2.724c-0.001,1.586 -1.162,2.926 -2.514,3c-1.35,0.074 -2.509,-1.138 -2.507,-2.724c0.001,-1.585 1.162,-2.925 2.513,-3Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M455.231,188.703c1.358,-0.087 2.525,1.12 2.523,2.714c-0.001,1.593 -1.169,2.949 -2.528,3.035c-1.358,0.086 -2.523,-1.121 -2.522,-2.714c0.001,-1.592 1.168,-2.948 2.527,-3.035Z" />
                      <path
                        d="M455.231,188.703c1.358,-0.087 2.525,1.12 2.523,2.714c-0.001,1.593 -1.169,2.949 -2.528,3.035c-1.358,0.086 -2.523,-1.121 -2.522,-2.714c0.001,-1.592 1.168,-2.948 2.527,-3.035Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M455.206,218.409c1.358,-0.081 2.525,1.131 2.524,2.725c-0.001,1.593 -1.169,2.944 -2.528,3.024c-1.358,0.08 -2.524,-1.132 -2.522,-2.725c0.001,-1.592 1.168,-2.943 2.527,-3.024Z" />
                      <path
                        d="M455.206,218.409c1.358,-0.081 2.525,1.131 2.524,2.725c-0.001,1.593 -1.169,2.944 -2.528,3.024c-1.358,0.08 -2.524,-1.132 -2.522,-2.725c0.001,-1.592 1.168,-2.943 2.527,-3.024Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M455.182,248.115c1.359,-0.075 2.525,1.142 2.524,2.736c-0.001,1.593 -1.169,2.939 -2.529,3.014c-1.358,0.074 -2.524,-1.143 -2.523,-2.736c0.001,-1.592 1.169,-2.938 2.527,-3.014Z" />
                      <path
                        d="M455.182,248.115c1.359,-0.075 2.525,1.142 2.524,2.736c-0.001,1.593 -1.169,2.939 -2.529,3.014c-1.358,0.074 -2.524,-1.143 -2.523,-2.736c0.001,-1.592 1.169,-2.938 2.527,-3.014Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M485.621,186.759c1.366,-0.087 2.54,1.125 2.539,2.726c-0.001,1.6 -1.175,2.963 -2.543,3.049c-1.366,0.086 -2.538,-1.126 -2.537,-2.726c0.001,-1.599 1.175,-2.961 2.542,-3.049Z" />
                      <path
                        d="M485.621,186.759c1.366,-0.087 2.54,1.125 2.539,2.726c-0.001,1.6 -1.175,2.963 -2.543,3.049c-1.366,0.086 -2.538,-1.126 -2.537,-2.726c0.001,-1.599 1.175,-2.961 2.542,-3.049Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M485.599,216.595c1.367,-0.082 2.54,1.136 2.539,2.737c-0.001,1.6 -1.175,2.958 -2.543,3.038c-1.366,0.08 -2.539,-1.137 -2.537,-2.737c0.001,-1.599 1.175,-2.956 2.542,-3.038Z" />
                      <path
                        d="M485.599,216.595c1.367,-0.082 2.54,1.136 2.539,2.737c-0.001,1.6 -1.175,2.958 -2.543,3.038c-1.366,0.08 -2.539,-1.137 -2.537,-2.737c0.001,-1.599 1.175,-2.956 2.542,-3.038Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M485.577,246.433c1.367,-0.076 2.54,1.147 2.539,2.748c-0.001,1.6 -1.176,2.953 -2.543,3.027c-1.366,0.074 -2.539,-1.148 -2.538,-2.748c0.001,-1.599 1.175,-2.951 2.542,-3.027Z" />
                      <path
                        d="M485.577,246.433c1.367,-0.076 2.54,1.147 2.539,2.748c-0.001,1.6 -1.176,2.953 -2.543,3.027c-1.366,0.074 -2.539,-1.148 -2.538,-2.748c0.001,-1.599 1.175,-2.951 2.542,-3.027Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M516.191,184.803c1.375,-0.088 2.555,1.13 2.554,2.738c-0.001,1.607 -1.182,2.976 -2.558,3.063c-1.374,0.087 -2.554,-1.131 -2.553,-2.738c0.001,-1.606 1.181,-2.975 2.556,-3.062Z" />
                      <path
                        d="M516.191,184.803c1.375,-0.088 2.555,1.13 2.554,2.738c-0.001,1.607 -1.182,2.976 -2.558,3.063c-1.374,0.087 -2.554,-1.131 -2.553,-2.738c0.001,-1.606 1.181,-2.975 2.556,-3.062Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M516.172,214.771c1.375,-0.082 2.555,1.141 2.554,2.749c-0.001,1.607 -1.182,2.971 -2.558,3.052c-1.374,0.081 -2.554,-1.142 -2.553,-2.749c0.001,-1.606 1.181,-2.97 2.556,-3.052Z" />
                      <path
                        d="M516.172,214.771c1.375,-0.082 2.555,1.141 2.554,2.749c-0.001,1.607 -1.182,2.971 -2.558,3.052c-1.374,0.081 -2.554,-1.142 -2.553,-2.749c0.001,-1.606 1.181,-2.97 2.556,-3.052Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M516.152,244.74c1.375,-0.076 2.555,1.152 2.554,2.76c-0.001,1.607 -1.182,2.966 -2.558,3.041c-1.374,0.075 -2.554,-1.153 -2.553,-2.76c0.001,-1.606 1.182,-2.965 2.557,-3.041Z" />
                      <path
                        d="M516.152,244.74c1.375,-0.076 2.555,1.152 2.554,2.76c-0.001,1.607 -1.182,2.966 -2.558,3.041c-1.374,0.075 -2.554,-1.153 -2.553,-2.76c0.001,-1.606 1.182,-2.965 2.557,-3.041Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M546.942,182.835c1.383,-0.088 2.57,1.135 2.569,2.75c-0.001,1.614 -1.188,2.989 -2.572,3.076c-1.382,0.087 -2.569,-1.135 -2.568,-2.75c0.001,-1.613 1.188,-2.988 2.571,-3.076Z" />
                      <path
                        d="M546.942,182.835c1.383,-0.088 2.57,1.135 2.569,2.75c-0.001,1.614 -1.188,2.989 -2.572,3.076c-1.382,0.087 -2.569,-1.135 -2.568,-2.75c0.001,-1.613 1.188,-2.988 2.571,-3.076Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M546.925,212.936c1.383,-0.083 2.57,1.146 2.569,2.761c-0.001,1.614 -1.189,2.984 -2.573,3.065c-1.382,0.081 -2.569,-1.147 -2.568,-2.761c0.001,-1.613 1.188,-2.983 2.571,-3.065Z" />
                      <path
                        d="M546.925,212.936c1.383,-0.083 2.57,1.146 2.569,2.761c-0.001,1.614 -1.189,2.984 -2.573,3.065c-1.382,0.081 -2.569,-1.147 -2.568,-2.761c0.001,-1.613 1.188,-2.983 2.571,-3.065Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M546.908,243.038c1.383,-0.077 2.57,1.157 2.57,2.772c-0.001,1.614 -1.189,2.979 -2.573,3.054c-1.382,0.075 -2.569,-1.158 -2.568,-2.772c0.001,-1.613 1.188,-2.978 2.572,-3.054Z" />
                      <path
                        d="M546.908,243.038c1.383,-0.077 2.57,1.157 2.57,2.772c-0.001,1.614 -1.189,2.979 -2.573,3.054c-1.382,0.075 -2.569,-1.158 -2.568,-2.772c0.001,-1.613 1.188,-2.978 2.572,-3.054Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M577.873,180.857c1.391,-0.089 2.585,1.139 2.584,2.761c-0.001,1.621 -1.195,3.002 -2.587,3.09c-1.39,0.088 -2.584,-1.14 -2.583,-2.762c0.001,-1.62 1.195,-3.001 2.586,-3.09Z" />
                      <path
                        d="M577.873,180.857c1.391,-0.089 2.585,1.139 2.584,2.761c-0.001,1.621 -1.195,3.002 -2.587,3.09c-1.39,0.088 -2.584,-1.14 -2.583,-2.762c0.001,-1.62 1.195,-3.001 2.586,-3.09Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M577.859,211.091c1.391,-0.083 2.585,1.151 2.585,2.773c-0.001,1.621 -1.195,2.997 -2.587,3.079c-1.39,0.082 -2.584,-1.152 -2.583,-2.773c0.001,-1.62 1.195,-2.996 2.586,-3.079Z" />
                      <path
                        d="M577.859,211.091c1.391,-0.083 2.585,1.151 2.585,2.773c-0.001,1.621 -1.195,2.997 -2.587,3.079c-1.39,0.082 -2.584,-1.152 -2.583,-2.773c0.001,-1.62 1.195,-2.996 2.586,-3.079Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M577.845,241.326c1.391,-0.077 2.586,1.162 2.585,2.784c-0.001,1.621 -1.195,2.992 -2.588,3.068c-1.391,0.076 -2.584,-1.163 -2.584,-2.784c0.001,-1.62 1.195,-2.991 2.586,-3.068Z" />
                      <path
                        d="M577.845,241.326c1.391,-0.077 2.586,1.162 2.585,2.784c-0.001,1.621 -1.195,2.992 -2.588,3.068c-1.391,0.076 -2.584,-1.163 -2.584,-2.784c0.001,-1.62 1.195,-2.991 2.586,-3.068Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M608.986,178.867c1.399,-0.09 2.601,1.144 2.6,2.773c-0.001,1.628 -1.202,3.016 -2.602,3.104c-1.399,0.088 -2.599,-1.145 -2.599,-2.774c0.001,-1.627 1.201,-3.014 2.601,-3.104Z" />
                      <path
                        d="M608.986,178.867c1.399,-0.09 2.601,1.144 2.6,2.773c-0.001,1.628 -1.202,3.016 -2.602,3.104c-1.399,0.088 -2.599,-1.145 -2.599,-2.774c0.001,-1.627 1.201,-3.014 2.601,-3.104Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M608.975,209.234c1.399,-0.083 2.601,1.156 2.6,2.785c-0.001,1.628 -1.202,3.011 -2.602,3.093c-1.399,0.082 -2.599,-1.157 -2.599,-2.785c0.001,-1.627 1.201,-3.009 2.601,-3.093Z" />
                      <path
                        d="M608.975,209.234c1.399,-0.083 2.601,1.156 2.6,2.785c-0.001,1.628 -1.202,3.011 -2.602,3.093c-1.399,0.082 -2.599,-1.157 -2.599,-2.785c0.001,-1.627 1.201,-3.009 2.601,-3.093Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M608.963,239.604c1.4,-0.077 2.601,1.167 2.6,2.796c-0.001,1.628 -1.202,3.006 -2.603,3.082c-1.399,0.076 -2.6,-1.168 -2.599,-2.796c0.001,-1.627 1.202,-3.004 2.601,-3.082Z" />
                      <path
                        d="M608.963,239.604c1.4,-0.077 2.601,1.167 2.6,2.796c-0.001,1.628 -1.202,3.006 -2.603,3.082c-1.399,0.076 -2.6,-1.168 -2.599,-2.796c0.001,-1.627 1.202,-3.004 2.601,-3.082Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M99.377,1016.456c7.273,0.449 13.195,6.566 13.182,13.59c-0.013,7.024 -5.958,12.385 -13.231,11.907c-7.251,-0.477 -13.159,-6.584 -13.145,-13.589c0.014,-7.004 5.943,-12.356 13.194,-11.908Z"
                      style={{
                        
                        strokeWidth: "2.08px",
                      }}
                    />
                    <path
                      d="M680.572,983.926c-0.01,54.945 -0.019,109.889 -0.029,164.834c-210.648,-15.928 -421.295,-31.855 -631.943,-47.783c0.106,-49.992 0.212,-99.985 0.317,-149.977c210.552,10.975 421.103,21.95 631.655,32.926Z"
                      style={{
                        fillOpacity: 0,
                        
                        strokeWidth: "3.13px",
                      }}
                    />
                    <g>
                      <path d="M377.155,1002.329c1.342,0.077 2.492,1.414 2.49,2.992c-0.002,1.58 -1.156,2.783 -2.497,2.705c-1.341,-0.078 -2.491,-1.414 -2.489,-2.992c0.002,-1.579 1.155,-2.781 2.496,-2.705Z" />
                      <path
                        d="M377.155,1002.329c1.342,0.077 2.492,1.414 2.49,2.992c-0.002,1.58 -1.156,2.783 -2.497,2.705c-1.341,-0.078 -2.491,-1.414 -2.489,-2.992c0.002,-1.579 1.155,-2.781 2.496,-2.705Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M377.122,1031.765c1.342,0.083 2.492,1.425 2.491,3.004c-0.002,1.58 -1.156,2.778 -2.497,2.694c-1.341,-0.084 -2.491,-1.426 -2.489,-3.004c0.002,-1.579 1.156,-2.777 2.496,-2.694Z" />
                      <path
                        d="M377.122,1031.765c1.342,0.083 2.492,1.425 2.491,3.004c-0.002,1.58 -1.156,2.778 -2.497,2.694c-1.341,-0.084 -2.491,-1.426 -2.489,-3.004c0.002,-1.579 1.156,-2.777 2.496,-2.694Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M377.09,1061.208c1.342,0.089 2.493,1.436 2.491,3.015c-0.002,1.581 -1.156,2.773 -2.497,2.684c-1.341,-0.09 -2.491,-1.437 -2.49,-3.015c0.002,-1.58 1.156,-2.772 2.496,-2.684Z" />
                      <path
                        d="M377.09,1061.208c1.342,0.089 2.493,1.436 2.491,3.015c-0.002,1.581 -1.156,2.773 -2.497,2.684c-1.341,-0.09 -2.491,-1.437 -2.49,-3.015c0.002,-1.58 1.156,-2.772 2.496,-2.684Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M407.16,1004.046c1.35,0.077 2.507,1.42 2.506,3.006c-0.002,1.587 -1.162,2.795 -2.511,2.717c-1.349,-0.078 -2.506,-1.421 -2.504,-3.006c0.002,-1.586 1.162,-2.794 2.51,-2.717Z" />
                      <path
                        d="M407.16,1004.046c1.35,0.077 2.507,1.42 2.506,3.006c-0.002,1.587 -1.162,2.795 -2.511,2.717c-1.349,-0.078 -2.506,-1.421 -2.504,-3.006c0.002,-1.586 1.162,-2.794 2.51,-2.717Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M407.13,1033.615c1.35,0.083 2.507,1.431 2.506,3.017c-0.002,1.587 -1.163,2.791 -2.512,2.706c-1.349,-0.084 -2.506,-1.432 -2.505,-3.017c0.002,-1.586 1.162,-2.789 2.51,-2.706Z" />
                      <path
                        d="M407.13,1033.615c1.35,0.083 2.507,1.431 2.506,3.017c-0.002,1.587 -1.163,2.791 -2.512,2.706c-1.349,-0.084 -2.506,-1.432 -2.505,-3.017c0.002,-1.586 1.162,-2.789 2.51,-2.706Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M407.1,1063.19c1.35,0.089 2.508,1.443 2.506,3.029c-0.002,1.588 -1.163,2.786 -2.512,2.696c-1.35,-0.09 -2.506,-1.444 -2.505,-3.029c0.002,-1.587 1.162,-2.785 2.511,-2.696Z" />
                      <path
                        d="M407.1,1063.19c1.35,0.089 2.508,1.443 2.506,3.029c-0.002,1.588 -1.163,2.786 -2.512,2.696c-1.35,-0.09 -2.506,-1.444 -2.505,-3.029c0.002,-1.587 1.162,-2.785 2.511,-2.696Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M437.343,1005.771c1.358,0.078 2.522,1.427 2.521,3.02c-0.001,1.594 -1.169,2.808 -2.526,2.729c-1.357,-0.079 -2.521,-1.427 -2.519,-3.02c0.001,-1.593 1.168,-2.807 2.525,-2.729Z" />
                      <path
                        d="M437.343,1005.771c1.358,0.078 2.522,1.427 2.521,3.02c-0.001,1.594 -1.169,2.808 -2.526,2.729c-1.357,-0.079 -2.521,-1.427 -2.519,-3.02c0.001,-1.593 1.168,-2.807 2.525,-2.729Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M437.316,1035.474c1.358,0.084 2.522,1.438 2.521,3.031c-0.001,1.594 -1.169,2.803 -2.526,2.718c-1.357,-0.085 -2.521,-1.439 -2.52,-3.031c0.001,-1.593 1.169,-2.802 2.525,-2.718Z" />
                      <path
                        d="M437.316,1035.474c1.358,0.084 2.522,1.438 2.521,3.031c-0.001,1.594 -1.169,2.803 -2.526,2.718c-1.357,-0.085 -2.521,-1.439 -2.52,-3.031c0.001,-1.593 1.169,-2.802 2.525,-2.718Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M437.288,1065.182c1.358,0.09 2.523,1.45 2.521,3.043c-0.001,1.595 -1.169,2.798 -2.526,2.708c-1.358,-0.091 -2.521,-1.45 -2.52,-3.043c0.001,-1.594 1.169,-2.797 2.525,-2.708Z" />
                      <path
                        d="M437.288,1065.182c1.358,0.09 2.523,1.45 2.521,3.043c-0.001,1.595 -1.169,2.798 -2.526,2.708c-1.358,-0.091 -2.521,-1.45 -2.52,-3.043c0.001,-1.594 1.169,-2.797 2.525,-2.708Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M467.705,1008.468c1.366,0.078 2.537,1.434 2.536,3.034c-0.001,1.601 -1.176,2.82 -2.541,2.741c-1.365,-0.079 -2.536,-1.435 -2.535,-3.034c0.001,-1.6 1.175,-2.819 2.539,-2.741Z" />
                      <path
                        d="M467.705,1008.468c1.366,0.078 2.537,1.434 2.536,3.034c-0.001,1.601 -1.176,2.82 -2.541,2.741c-1.365,-0.079 -2.536,-1.435 -2.535,-3.034c0.001,-1.6 1.175,-2.819 2.539,-2.741Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M467.68,1038.305c1.366,0.084 2.537,1.445 2.536,3.045c-0.001,1.601 -1.176,2.816 -2.541,2.73c-1.366,-0.085 -2.536,-1.446 -2.535,-3.045c0.001,-1.601 1.175,-2.814 2.54,-2.73Z" />
                      <path
                        d="M467.68,1038.305c1.366,0.084 2.537,1.445 2.536,3.045c-0.001,1.601 -1.176,2.816 -2.541,2.73c-1.366,-0.085 -2.536,-1.446 -2.535,-3.045c0.001,-1.601 1.175,-2.814 2.54,-2.73Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M467.655,1068.148c1.366,0.09 2.538,1.457 2.536,3.057c-0.001,1.602 -1.176,2.811 -2.541,2.719c-1.366,-0.091 -2.536,-1.457 -2.535,-3.057c0.001,-1.601 1.175,-2.81 2.54,-2.719Z" />
                      <path
                        d="M467.655,1068.148c1.366,0.09 2.538,1.457 2.536,3.057c-0.001,1.602 -1.176,2.811 -2.541,2.719c-1.366,-0.091 -2.536,-1.457 -2.535,-3.057c0.001,-1.601 1.175,-2.81 2.54,-2.719Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M498.248,1009.25c1.374,0.078 2.552,1.44 2.551,3.047c-0.001,1.608 -1.182,2.833 -2.555,2.754c-1.374,-0.08 -2.551,-1.441 -2.55,-3.047c0.001,-1.607 1.182,-2.832 2.554,-2.754Z" />
                      <path
                        d="M498.248,1009.25c1.374,0.078 2.552,1.44 2.551,3.047c-0.001,1.608 -1.182,2.833 -2.555,2.754c-1.374,-0.08 -2.551,-1.441 -2.55,-3.047c0.001,-1.607 1.182,-2.832 2.554,-2.754Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M498.226,1039.222c1.375,0.085 2.553,1.452 2.551,3.059c-0.001,1.608 -1.182,2.828 -2.556,2.743c-1.374,-0.086 -2.551,-1.452 -2.55,-3.059c0.001,-1.608 1.182,-2.827 2.554,-2.743Z" />
                      <path
                        d="M498.226,1039.222c1.375,0.085 2.553,1.452 2.551,3.059c-0.001,1.608 -1.182,2.828 -2.556,2.743c-1.374,-0.086 -2.551,-1.452 -2.55,-3.059c0.001,-1.608 1.182,-2.827 2.554,-2.743Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M498.204,1069.199c1.375,0.091 2.553,1.463 2.552,3.071c-0.001,1.609 -1.182,2.824 -2.556,2.732c-1.374,-0.092 -2.552,-1.464 -2.55,-3.071c0.001,-1.608 1.182,-2.822 2.555,-2.732Z" />
                      <path
                        d="M498.204,1069.199c1.375,0.091 2.553,1.463 2.552,3.071c-0.001,1.609 -1.182,2.824 -2.556,2.732c-1.374,-0.092 -2.552,-1.464 -2.55,-3.071c0.001,-1.608 1.182,-2.822 2.555,-2.732Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M528.971,1011.003c1.383,0.079 2.568,1.447 2.567,3.061c-0.001,1.615 -1.189,2.846 -2.57,2.766c-1.382,-0.08 -2.566,-1.448 -2.565,-3.061c0.001,-1.615 1.188,-2.845 2.569,-2.766Z" />
                      <path
                        d="M528.971,1011.003c1.383,0.079 2.568,1.447 2.567,3.061c-0.001,1.615 -1.189,2.846 -2.57,2.766c-1.382,-0.08 -2.566,-1.448 -2.565,-3.061c0.001,-1.615 1.188,-2.845 2.569,-2.766Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M528.951,1041.111c1.383,0.085 2.568,1.459 2.567,3.073c-0.001,1.616 -1.189,2.841 -2.571,2.755c-1.382,-0.086 -2.567,-1.459 -2.566,-3.073c0.001,-1.615 1.188,-2.84 2.569,-2.755Z" />
                      <path
                        d="M528.951,1041.111c1.383,0.085 2.568,1.459 2.567,3.073c-0.001,1.616 -1.189,2.841 -2.571,2.755c-1.382,-0.086 -2.567,-1.459 -2.566,-3.073c0.001,-1.615 1.188,-2.84 2.569,-2.755Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M528.932,1071.224c1.383,0.091 2.568,1.47 2.567,3.085c-0.001,1.616 -1.189,2.836 -2.571,2.744c-1.382,-0.092 -2.567,-1.471 -2.566,-3.085c0.001,-1.615 1.188,-2.835 2.569,-2.744Z" />
                      <path
                        d="M528.932,1071.224c1.383,0.091 2.568,1.47 2.567,3.085c-0.001,1.616 -1.189,2.836 -2.571,2.744c-1.382,-0.092 -2.567,-1.471 -2.566,-3.085c0.001,-1.615 1.188,-2.835 2.569,-2.744Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M559.875,1012.768c1.391,0.079 2.583,1.454 2.582,3.075c-0.001,1.623 -1.195,2.859 -2.585,2.778c-1.39,-0.081 -2.582,-1.455 -2.581,-3.075c0.001,-1.622 1.195,-2.857 2.584,-2.778Z" />
                      <path
                        d="M559.875,1012.768c1.391,0.079 2.583,1.454 2.582,3.075c-0.001,1.623 -1.195,2.859 -2.585,2.778c-1.39,-0.081 -2.582,-1.455 -2.581,-3.075c0.001,-1.622 1.195,-2.857 2.584,-2.778Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M559.859,1043.012c1.391,0.086 2.583,1.465 2.582,3.087c-0.001,1.623 -1.195,2.854 -2.585,2.767c-1.39,-0.087 -2.582,-1.466 -2.581,-3.087c0.001,-1.622 1.195,-2.853 2.584,-2.767Z" />
                      <path
                        d="M559.859,1043.012c1.391,0.086 2.583,1.465 2.582,3.087c-0.001,1.623 -1.195,2.854 -2.585,2.767c-1.39,-0.087 -2.582,-1.466 -2.581,-3.087c0.001,-1.622 1.195,-2.853 2.584,-2.767Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M559.842,1073.261c1.391,0.092 2.583,1.477 2.582,3.099c-0.001,1.623 -1.196,2.849 -2.586,2.756c-1.39,-0.093 -2.582,-1.478 -2.581,-3.099c0.001,-1.622 1.195,-2.848 2.584,-2.756Z" />
                      <path
                        d="M559.842,1073.261c1.391,0.092 2.583,1.477 2.582,3.099c-0.001,1.623 -1.196,2.849 -2.586,2.756c-1.39,-0.093 -2.582,-1.478 -2.581,-3.099c0.001,-1.622 1.195,-2.848 2.584,-2.756Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M590.962,1014.542c1.399,0.08 2.598,1.461 2.598,3.089c-0.001,1.63 -1.202,2.872 -2.6,2.791c-1.398,-0.081 -2.597,-1.462 -2.596,-3.089c0.001,-1.629 1.202,-2.87 2.599,-2.791Z" />
                      <path
                        d="M590.962,1014.542c1.399,0.08 2.598,1.461 2.598,3.089c-0.001,1.63 -1.202,2.872 -2.6,2.791c-1.398,-0.081 -2.597,-1.462 -2.596,-3.089c0.001,-1.629 1.202,-2.87 2.599,-2.791Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M590.948,1044.924c1.399,0.086 2.598,1.472 2.598,3.101c-0.001,1.63 -1.202,2.867 -2.6,2.779c-1.398,-0.087 -2.597,-1.473 -2.596,-3.101c0.001,-1.629 1.202,-2.865 2.599,-2.78Z" />
                      <path
                        d="M590.948,1044.924c1.399,0.086 2.598,1.472 2.598,3.101c-0.001,1.63 -1.202,2.867 -2.6,2.779c-1.398,-0.087 -2.597,-1.473 -2.596,-3.101c0.001,-1.629 1.202,-2.865 2.599,-2.78Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M590.934,1075.311c1.399,0.092 2.599,1.484 2.598,3.113c-0.001,1.63 -1.202,2.862 -2.601,2.768c-1.399,-0.093 -2.597,-1.485 -2.597,-3.113c0.001,-1.63 1.202,-2.861 2.599,-2.768Z" />
                      <path
                        d="M590.934,1075.311c1.399,0.092 2.599,1.484 2.598,3.113c-0.001,1.63 -1.202,2.862 -2.601,2.768c-1.399,-0.093 -2.597,-1.485 -2.597,-3.113c0.001,-1.63 1.202,-2.861 2.599,-2.768Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M622.231,1016.328c1.407,0.08 2.614,1.468 2.613,3.104c-0.001,1.637 -1.209,2.884 -2.615,2.803c-1.407,-0.082 -2.612,-1.469 -2.612,-3.104c0.001,-1.636 1.208,-2.883 2.614,-2.803Z" />
                      <path
                        d="M622.231,1016.328c1.407,0.08 2.614,1.468 2.613,3.104c-0.001,1.637 -1.209,2.884 -2.615,2.803c-1.407,-0.082 -2.612,-1.469 -2.612,-3.104c0.001,-1.636 1.208,-2.883 2.614,-2.803Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M622.221,1046.848c1.408,0.087 2.614,1.48 2.613,3.116c-0.001,1.637 -1.209,2.88 -2.615,2.792c-1.407,-0.088 -2.613,-1.48 -2.612,-3.116c0.001,-1.637 1.208,-2.878 2.614,-2.792Z" />
                      <path
                        d="M622.221,1046.848c1.408,0.087 2.614,1.48 2.613,3.116c-0.001,1.637 -1.209,2.88 -2.615,2.792c-1.407,-0.088 -2.613,-1.48 -2.612,-3.116c0.001,-1.637 1.208,-2.878 2.614,-2.792Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M622.21,1077.373c1.408,0.093 2.614,1.491 2.614,3.128c-0.001,1.638 -1.209,2.875 -2.616,2.781c-1.407,-0.094 -2.613,-1.492 -2.612,-3.128c0.001,-1.637 1.208,-2.873 2.614,-2.781Z" />
                      <path
                        d="M622.21,1077.373c1.408,0.093 2.614,1.491 2.614,3.128c-0.001,1.638 -1.209,2.875 -2.616,2.781c-1.407,-0.094 -2.613,-1.492 -2.612,-3.128c0.001,-1.637 1.208,-2.873 2.614,-2.781Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M392.117,1020.316c1.346,0.08 2.5,1.423 2.498,3.006c-0.002,1.584 -1.159,2.786 -2.504,2.705c-1.345,-0.082 -2.499,-1.424 -2.497,-3.006c0.002,-1.583 1.159,-2.785 2.503,-2.705Z" />
                      <path
                        d="M392.117,1020.316c1.346,0.08 2.5,1.423 2.498,3.006c-0.002,1.584 -1.159,2.786 -2.504,2.705c-1.345,-0.082 -2.499,-1.424 -2.497,-3.006c0.002,-1.583 1.159,-2.785 2.503,-2.705Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M392.086,1049.822c1.346,0.086 2.5,1.435 2.498,3.017c-0.002,1.584 -1.159,2.782 -2.504,2.694c-1.345,-0.088 -2.499,-1.436 -2.497,-3.017c0.002,-1.583 1.159,-2.78 2.503,-2.694Z" />
                      <path
                        d="M392.086,1049.822c1.346,0.086 2.5,1.435 2.498,3.017c-0.002,1.584 -1.159,2.782 -2.504,2.694c-1.345,-0.088 -2.499,-1.436 -2.497,-3.017c0.002,-1.583 1.159,-2.78 2.503,-2.694Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M392.055,1079.334c1.346,0.092 2.5,1.446 2.499,3.029c-0.002,1.584 -1.159,2.777 -2.505,2.684c-1.346,-0.093 -2.499,-1.447 -2.497,-3.029c0.002,-1.583 1.159,-2.776 2.503,-2.684Z" />
                      <path
                        d="M392.055,1079.334c1.346,0.092 2.5,1.446 2.499,3.029c-0.002,1.584 -1.159,2.777 -2.505,2.684c-1.346,-0.093 -2.499,-1.447 -2.497,-3.029c0.002,-1.583 1.159,-2.776 2.503,-2.684Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M422.212,1022.115c1.354,0.081 2.515,1.43 2.513,3.019c-0.002,1.591 -1.166,2.799 -2.519,2.717c-1.353,-0.082 -2.514,-1.431 -2.512,-3.019c0.002,-1.59 1.165,-2.798 2.518,-2.717Z" />
                      <path
                        d="M422.212,1022.115c1.354,0.081 2.515,1.43 2.513,3.019c-0.002,1.591 -1.166,2.799 -2.519,2.717c-1.353,-0.082 -2.514,-1.431 -2.512,-3.019c0.002,-1.59 1.165,-2.798 2.518,-2.717Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M422.184,1051.754c1.354,0.087 2.515,1.441 2.513,3.031c-0.002,1.591 -1.166,2.794 -2.519,2.706c-1.353,-0.088 -2.514,-1.442 -2.512,-3.031c0.002,-1.59 1.165,-2.793 2.518,-2.706Z" />
                      <path
                        d="M422.184,1051.754c1.354,0.087 2.515,1.441 2.513,3.031c-0.002,1.591 -1.166,2.794 -2.519,2.706c-1.353,-0.088 -2.514,-1.442 -2.512,-3.031c0.002,-1.59 1.165,-2.793 2.518,-2.706Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M422.155,1081.398c1.354,0.093 2.515,1.453 2.514,3.043c-0.002,1.591 -1.166,2.79 -2.519,2.696c-1.354,-0.094 -2.514,-1.454 -2.512,-3.043c0.002,-1.59 1.166,-2.788 2.518,-2.696Z" />
                      <path
                        d="M422.155,1081.398c1.354,0.093 2.515,1.453 2.514,3.043c-0.002,1.591 -1.166,2.79 -2.519,2.696c-1.354,-0.094 -2.514,-1.454 -2.512,-3.043c0.002,-1.59 1.166,-2.788 2.518,-2.696Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M452.487,1023.922c1.362,0.081 2.53,1.437 2.528,3.033c-0.001,1.598 -1.172,2.811 -2.533,2.729c-1.361,-0.082 -2.529,-1.437 -2.527,-3.033c0.001,-1.597 1.172,-2.81 2.532,-2.729Z" />
                      <path
                        d="M452.487,1023.922c1.362,0.081 2.53,1.437 2.528,3.033c-0.001,1.598 -1.172,2.811 -2.533,2.729c-1.361,-0.082 -2.529,-1.437 -2.527,-3.033c0.001,-1.597 1.172,-2.81 2.532,-2.729Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M452.461,1053.695c1.362,0.087 2.53,1.448 2.529,3.045c-0.001,1.598 -1.172,2.807 -2.534,2.718c-1.362,-0.088 -2.529,-1.449 -2.527,-3.045c0.001,-1.597 1.172,-2.805 2.532,-2.718Z" />
                      <path
                        d="M452.461,1053.695c1.362,0.087 2.53,1.448 2.529,3.045c-0.001,1.598 -1.172,2.807 -2.534,2.718c-1.362,-0.088 -2.529,-1.449 -2.527,-3.045c0.001,-1.597 1.172,-2.805 2.532,-2.718Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M452.435,1083.474c1.363,0.093 2.53,1.46 2.529,3.057c-0.001,1.598 -1.173,2.802 -2.534,2.708c-1.362,-0.094 -2.529,-1.46 -2.528,-3.057c0.001,-1.597 1.172,-2.801 2.533,-2.708Z" />
                      <path
                        d="M452.435,1083.474c1.363,0.093 2.53,1.46 2.529,3.057c-0.001,1.598 -1.173,2.802 -2.534,2.708c-1.362,-0.094 -2.529,-1.46 -2.528,-3.057c0.001,-1.597 1.172,-2.801 2.533,-2.708Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M482.94,1025.74c1.37,0.082 2.545,1.443 2.544,3.047c-0.001,1.605 -1.179,2.824 -2.548,2.741c-1.37,-0.083 -2.544,-1.444 -2.542,-3.047c0.001,-1.604 1.178,-2.823 2.547,-2.741Z" />
                      <path
                        d="M482.94,1025.74c1.37,0.082 2.545,1.443 2.544,3.047c-0.001,1.605 -1.179,2.824 -2.548,2.741c-1.37,-0.083 -2.544,-1.444 -2.542,-3.047c0.001,-1.604 1.178,-2.823 2.547,-2.741Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M482.917,1055.647c1.371,0.088 2.545,1.455 2.544,3.059c-0.001,1.605 -1.179,2.819 -2.548,2.73c-1.37,-0.089 -2.544,-1.456 -2.543,-3.059c0.001,-1.604 1.179,-2.818 2.547,-2.73Z" />
                      <path
                        d="M482.917,1055.647c1.371,0.088 2.545,1.455 2.544,3.059c-0.001,1.605 -1.179,2.819 -2.548,2.73c-1.37,-0.089 -2.544,-1.456 -2.543,-3.059c0.001,-1.604 1.179,-2.818 2.547,-2.73Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M482.894,1085.56c1.371,0.094 2.545,1.466 2.544,3.071c-0.001,1.605 -1.179,2.815 -2.549,2.72c-1.37,-0.095 -2.544,-1.467 -2.543,-3.07c0.001,-1.605 1.179,-2.813 2.547,-2.72Z" />
                      <path
                        d="M482.894,1085.56c1.371,0.094 2.545,1.466 2.544,3.071c-0.001,1.605 -1.179,2.815 -2.549,2.72c-1.37,-0.095 -2.544,-1.467 -2.543,-3.07c0.001,-1.605 1.179,-2.813 2.547,-2.72Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M513.574,1027.567c1.379,0.082 2.56,1.45 2.559,3.061c-0.001,1.612 -1.185,2.837 -2.563,2.753c-1.378,-0.083 -2.559,-1.451 -2.558,-3.061c0.001,-1.611 1.185,-2.835 2.562,-2.753Z" />
                      <path
                        d="M513.574,1027.567c1.379,0.082 2.56,1.45 2.559,3.061c-0.001,1.612 -1.185,2.837 -2.563,2.753c-1.378,-0.083 -2.559,-1.451 -2.558,-3.061c0.001,-1.611 1.185,-2.835 2.562,-2.753Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M513.554,1057.61c1.379,0.088 2.56,1.462 2.559,3.073c-0.001,1.612 -1.186,2.832 -2.563,2.743c-1.378,-0.089 -2.559,-1.463 -2.558,-3.073c0.001,-1.611 1.185,-2.831 2.562,-2.743Z" />
                      <path
                        d="M513.554,1057.61c1.379,0.088 2.56,1.462 2.559,3.073c-0.001,1.612 -1.186,2.832 -2.563,2.743c-1.378,-0.089 -2.559,-1.463 -2.558,-3.073c0.001,-1.611 1.185,-2.831 2.562,-2.743Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M513.534,1087.658c1.379,0.094 2.561,1.473 2.56,3.085c-0.001,1.613 -1.186,2.827 -2.563,2.732c-1.378,-0.096 -2.559,-1.474 -2.558,-3.085c0.001,-1.612 1.185,-2.826 2.562,-2.732Z" />
                      <path
                        d="M513.534,1087.658c1.379,0.094 2.561,1.473 2.56,3.085c-0.001,1.613 -1.186,2.827 -2.563,2.732c-1.378,-0.096 -2.559,-1.474 -2.558,-3.085c0.001,-1.612 1.185,-2.826 2.562,-2.732Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M544.39,1029.405c1.387,0.083 2.575,1.457 2.574,3.075c-0.001,1.619 -1.192,2.849 -2.578,2.766c-1.386,-0.084 -2.574,-1.458 -2.573,-3.075c0.001,-1.618 1.192,-2.848 2.577,-2.766Z" />
                      <path
                        d="M544.39,1029.405c1.387,0.083 2.575,1.457 2.574,3.075c-0.001,1.619 -1.192,2.849 -2.578,2.766c-1.386,-0.084 -2.574,-1.458 -2.573,-3.075c0.001,-1.618 1.192,-2.848 2.577,-2.766Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M544.372,1059.584c1.387,0.089 2.576,1.469 2.575,3.087c-0.001,1.619 -1.192,2.845 -2.578,2.755c-1.386,-0.09 -2.574,-1.47 -2.573,-3.087c0.001,-1.619 1.192,-2.843 2.577,-2.755Z" />
                      <path
                        d="M544.372,1059.584c1.387,0.089 2.576,1.469 2.575,3.087c-0.001,1.619 -1.192,2.845 -2.578,2.755c-1.386,-0.09 -2.574,-1.47 -2.573,-3.087c0.001,-1.619 1.192,-2.843 2.577,-2.755Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M544.354,1089.768c1.387,0.095 2.576,1.48 2.575,3.099c-0.001,1.62 -1.192,2.84 -2.578,2.744c-1.386,-0.096 -2.575,-1.481 -2.574,-3.099c0.001,-1.619 1.192,-2.839 2.577,-2.744Z" />
                      <path
                        d="M544.354,1089.768c1.387,0.095 2.576,1.48 2.575,3.099c-0.001,1.62 -1.192,2.84 -2.578,2.744c-1.386,-0.096 -2.575,-1.481 -2.574,-3.099c0.001,-1.619 1.192,-2.839 2.577,-2.744Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M575.387,1031.254c1.395,0.083 2.591,1.464 2.59,3.089c-0.001,1.626 -1.199,2.862 -2.593,2.778c-1.394,-0.084 -2.589,-1.465 -2.589,-3.089c0.001,-1.626 1.198,-2.861 2.592,-2.778Z" />
                      <path
                        d="M575.387,1031.254c1.395,0.083 2.591,1.464 2.59,3.089c-0.001,1.626 -1.199,2.862 -2.593,2.778c-1.394,-0.084 -2.589,-1.465 -2.589,-3.089c0.001,-1.626 1.198,-2.861 2.592,-2.778Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M575.372,1061.57c1.395,0.089 2.591,1.476 2.59,3.101c-0.001,1.627 -1.199,2.857 -2.593,2.767c-1.394,-0.091 -2.59,-1.477 -2.589,-3.101c0.001,-1.626 1.198,-2.856 2.592,-2.767Z" />
                      <path
                        d="M575.372,1061.57c1.395,0.089 2.591,1.476 2.59,3.101c-0.001,1.627 -1.199,2.857 -2.593,2.767c-1.394,-0.091 -2.59,-1.477 -2.589,-3.101c0.001,-1.626 1.198,-2.856 2.592,-2.767Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M575.357,1091.89c1.395,0.096 2.591,1.487 2.59,3.113c-0.001,1.627 -1.199,2.853 -2.593,2.756c-1.395,-0.097 -2.59,-1.488 -2.589,-3.113c0.001,-1.626 1.199,-2.851 2.592,-2.756Z" />
                      <path
                        d="M575.357,1091.89c1.395,0.096 2.591,1.487 2.59,3.113c-0.001,1.627 -1.199,2.853 -2.593,2.756c-1.395,-0.097 -2.59,-1.488 -2.589,-3.113c0.001,-1.626 1.199,-2.851 2.592,-2.756Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M606.566,1033.115c1.403,0.084 2.606,1.471 2.605,3.104c-0.001,1.634 -1.205,2.875 -2.608,2.79c-1.403,-0.085 -2.605,-1.472 -2.604,-3.104c0.001,-1.633 1.205,-2.874 2.607,-2.79Z" />
                      <path
                        d="M606.566,1033.115c1.403,0.084 2.606,1.471 2.605,3.104c-0.001,1.634 -1.205,2.875 -2.608,2.79c-1.403,-0.085 -2.605,-1.472 -2.604,-3.104c0.001,-1.633 1.205,-2.874 2.607,-2.79Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M606.554,1063.568c1.404,0.09 2.606,1.483 2.606,3.116c-0.001,1.634 -1.206,2.87 -2.608,2.779c-1.403,-0.091 -2.605,-1.484 -2.604,-3.115c0.001,-1.633 1.205,-2.869 2.607,-2.779Z" />
                      <path
                        d="M606.554,1063.568c1.404,0.09 2.606,1.483 2.606,3.116c-0.001,1.634 -1.206,2.87 -2.608,2.779c-1.403,-0.091 -2.605,-1.484 -2.604,-3.115c0.001,-1.633 1.205,-2.869 2.607,-2.779Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M606.542,1094.026c1.404,0.096 2.607,1.495 2.606,3.127c-0.001,1.634 -1.206,2.865 -2.608,2.768c-1.403,-0.097 -2.605,-1.495 -2.605,-3.127c0.001,-1.633 1.205,-2.864 2.607,-2.768Z" />
                      <path
                        d="M606.542,1094.026c1.404,0.096 2.607,1.495 2.606,3.127c-0.001,1.634 -1.206,2.865 -2.608,2.768c-1.403,-0.097 -2.605,-1.495 -2.605,-3.127c0.001,-1.633 1.205,-2.864 2.607,-2.768Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M102.772,1209.228c7.283,0.668 13.213,6.97 13.199,14.002c-0.013,7.032 -5.965,12.222 -13.249,11.526c-7.261,-0.694 -13.176,-6.986 -13.162,-13.999c0.014,-7.013 5.951,-12.195 13.212,-11.529Z"
                      style={{
                        
                        strokeWidth: "2.08px",
                      }}
                    />
                    <path
                      d="M684.766,1194.043c-0.009,55.026 -0.018,110.051 -0.027,165.077c-210.937,-22.26 -421.875,-44.52 -632.812,-66.781c0.105,-50.057 0.211,-100.114 0.316,-150.171c210.841,17.292 421.682,34.583 632.523,51.875Z"
                      style={{
                        fillOpacity: 0,
                        
                        strokeWidth: "3.13px",
                      }}
                    />
                    <g>
                      <path d="M380.927,1203.366c1.344,0.117 2.496,1.491 2.494,3.072c-0.002,1.582 -1.158,2.752 -2.5,2.634c-1.343,-0.118 -2.494,-1.492 -2.493,-3.071c0.002,-1.582 1.157,-2.751 2.499,-2.634Z" />
                      <path
                        d="M380.927,1203.366c1.344,0.117 2.496,1.491 2.494,3.072c-0.002,1.582 -1.158,2.752 -2.5,2.634c-1.343,-0.118 -2.494,-1.492 -2.493,-3.071c0.002,-1.582 1.157,-2.751 2.499,-2.634Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M380.895,1232.843c1.344,0.123 2.496,1.502 2.494,3.082c-0.002,1.582 -1.158,2.747 -2.5,2.623c-1.343,-0.124 -2.495,-1.503 -2.493,-3.082c0.002,-1.581 1.157,-2.746 2.499,-2.623Z" />
                      <path
                        d="M380.895,1232.843c1.344,0.123 2.496,1.502 2.494,3.082c-0.002,1.582 -1.158,2.747 -2.5,2.623c-1.343,-0.124 -2.495,-1.503 -2.493,-3.082c0.002,-1.581 1.157,-2.746 2.499,-2.623Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M380.863,1262.318c1.344,0.129 2.496,1.513 2.494,3.094c-0.002,1.582 -1.158,2.742 -2.501,2.612c-1.344,-0.13 -2.495,-1.514 -2.493,-3.093c0.002,-1.581 1.157,-2.741 2.499,-2.612Z" />
                      <path
                        d="M380.863,1262.318c1.344,0.129 2.496,1.513 2.494,3.094c-0.002,1.582 -1.158,2.742 -2.501,2.612c-1.344,-0.13 -2.495,-1.514 -2.493,-3.093c0.002,-1.581 1.157,-2.741 2.499,-2.612Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M410.974,1205.986c1.352,0.118 2.511,1.498 2.509,3.086c-0.002,1.589 -1.164,2.764 -2.515,2.645c-1.351,-0.119 -2.509,-1.499 -2.508,-3.085c0.002,-1.589 1.164,-2.763 2.514,-2.646Z" />
                      <path
                        d="M410.974,1205.986c1.352,0.118 2.511,1.498 2.509,3.086c-0.002,1.589 -1.164,2.764 -2.515,2.645c-1.351,-0.119 -2.509,-1.499 -2.508,-3.085c0.002,-1.589 1.164,-2.763 2.514,-2.646Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M410.944,1235.596c1.352,0.124 2.511,1.509 2.509,3.097c-0.002,1.589 -1.164,2.759 -2.515,2.634c-1.352,-0.125 -2.51,-1.51 -2.508,-3.096c0.002,-1.588 1.164,-2.758 2.514,-2.634Z" />
                      <path
                        d="M410.944,1235.596c1.352,0.124 2.511,1.509 2.509,3.097c-0.002,1.589 -1.164,2.759 -2.515,2.634c-1.352,-0.125 -2.51,-1.51 -2.508,-3.096c0.002,-1.588 1.164,-2.758 2.514,-2.634Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M410.914,1265.205c1.352,0.13 2.511,1.52 2.509,3.108c-0.002,1.589 -1.164,2.754 -2.515,2.623c-1.352,-0.131 -2.51,-1.521 -2.508,-3.108c0.002,-1.589 1.164,-2.753 2.514,-2.623Z" />
                      <path
                        d="M410.914,1265.205c1.352,0.13 2.511,1.52 2.509,3.108c-0.002,1.589 -1.164,2.754 -2.515,2.623c-1.352,-0.131 -2.51,-1.521 -2.508,-3.108c0.002,-1.589 1.164,-2.753 2.514,-2.623Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M441.199,1208.62c1.36,0.119 2.526,1.505 2.524,3.1c-0.001,1.596 -1.171,2.777 -2.529,2.657c-1.36,-0.12 -2.524,-1.506 -2.523,-3.1c0.001,-1.596 1.17,-2.776 2.528,-2.657Z" />
                      <path
                        d="M441.199,1208.62c1.36,0.119 2.526,1.505 2.524,3.1c-0.001,1.596 -1.171,2.777 -2.529,2.657c-1.36,-0.12 -2.524,-1.506 -2.523,-3.1c0.001,-1.596 1.17,-2.776 2.528,-2.657Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M441.172,1238.363c1.36,0.125 2.526,1.516 2.524,3.111c-0.001,1.596 -1.171,2.771 -2.53,2.646c-1.36,-0.126 -2.525,-1.517 -2.523,-3.111c0.001,-1.596 1.17,-2.77 2.528,-2.646Z" />
                      <path
                        d="M441.172,1238.363c1.36,0.125 2.526,1.516 2.524,3.111c-0.001,1.596 -1.171,2.771 -2.53,2.646c-1.36,-0.126 -2.525,-1.517 -2.523,-3.111c0.001,-1.596 1.17,-2.77 2.528,-2.646Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M441.145,1268.107c1.361,0.131 2.526,1.528 2.525,3.122c-0.001,1.596 -1.171,2.766 -2.53,2.635c-1.36,-0.132 -2.525,-1.528 -2.523,-3.122c0.001,-1.596 1.17,-2.765 2.529,-2.635Z" />
                      <path
                        d="M441.145,1268.107c1.361,0.131 2.526,1.528 2.525,3.122c-0.001,1.596 -1.171,2.766 -2.53,2.635c-1.36,-0.132 -2.525,-1.528 -2.523,-3.122c0.001,-1.596 1.17,-2.765 2.529,-2.635Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M471.602,1212.232c1.368,0.119 2.541,1.512 2.54,3.114c-0.001,1.604 -1.177,2.789 -2.544,2.669c-1.368,-0.12 -2.54,-1.513 -2.538,-3.114c0.001,-1.603 1.177,-2.788 2.543,-2.669Z" />
                      <path
                        d="M471.602,1212.232c1.368,0.119 2.541,1.512 2.54,3.114c-0.001,1.604 -1.177,2.789 -2.544,2.669c-1.368,-0.12 -2.54,-1.513 -2.538,-3.114c0.001,-1.603 1.177,-2.788 2.543,-2.669Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M471.578,1242.111c1.369,0.125 2.541,1.524 2.54,3.126c-0.001,1.604 -1.177,2.784 -2.544,2.657c-1.368,-0.127 -2.54,-1.524 -2.538,-3.125c0.001,-1.603 1.177,-2.783 2.543,-2.657Z" />
                      <path
                        d="M471.578,1242.111c1.369,0.125 2.541,1.524 2.54,3.126c-0.001,1.604 -1.177,2.784 -2.544,2.657c-1.368,-0.127 -2.54,-1.524 -2.538,-3.125c0.001,-1.603 1.177,-2.783 2.543,-2.657Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M471.554,1271.989c1.369,0.132 2.541,1.535 2.54,3.137c-0.001,1.604 -1.177,2.779 -2.545,2.646c-1.368,-0.133 -2.54,-1.536 -2.539,-3.137c0.001,-1.603 1.177,-2.778 2.543,-2.646Z" />
                      <path
                        d="M471.554,1271.989c1.369,0.132 2.541,1.535 2.54,3.137c-0.001,1.604 -1.177,2.779 -2.545,2.646c-1.368,-0.133 -2.54,-1.536 -2.539,-3.137c0.001,-1.603 1.177,-2.778 2.543,-2.646Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M502.188,1213.932c1.377,0.12 2.556,1.519 2.555,3.128c-0.001,1.611 -1.184,2.802 -2.559,2.681c-1.376,-0.121 -2.555,-1.52 -2.554,-3.128c0.001,-1.61 1.183,-2.801 2.558,-2.681Z" />
                      <path
                        d="M502.188,1213.932c1.377,0.12 2.556,1.519 2.555,3.128c-0.001,1.611 -1.184,2.802 -2.559,2.681c-1.376,-0.121 -2.555,-1.52 -2.554,-3.128c0.001,-1.61 1.183,-2.801 2.558,-2.681Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M502.166,1243.946c1.377,0.126 2.556,1.531 2.555,3.14c-0.001,1.611 -1.184,2.797 -2.559,2.67c-1.376,-0.127 -2.555,-1.531 -2.554,-3.14c0.001,-1.61 1.183,-2.795 2.558,-2.67Z" />
                      <path
                        d="M502.166,1243.946c1.377,0.126 2.556,1.531 2.555,3.14c-0.001,1.611 -1.184,2.797 -2.559,2.67c-1.376,-0.127 -2.555,-1.531 -2.554,-3.14c0.001,-1.61 1.183,-2.795 2.558,-2.67Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M502.144,1273.961c1.377,0.132 2.556,1.542 2.555,3.151c-0.001,1.611 -1.184,2.791 -2.559,2.658c-1.376,-0.133 -2.555,-1.543 -2.554,-3.151c0.001,-1.61 1.184,-2.79 2.558,-2.658Z" />
                      <path
                        d="M502.144,1273.961c1.377,0.132 2.556,1.542 2.555,3.151c-0.001,1.611 -1.184,2.791 -2.559,2.658c-1.376,-0.133 -2.555,-1.543 -2.554,-3.151c0.001,-1.61 1.184,-2.79 2.558,-2.658Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M532.953,1216.611c1.385,0.121 2.571,1.527 2.57,3.143c-0.001,1.618 -1.19,2.814 -2.574,2.693c-1.384,-0.122 -2.57,-1.527 -2.569,-3.143c0.001,-1.617 1.19,-2.813 2.573,-2.693Z" />
                      <path
                        d="M532.953,1216.611c1.385,0.121 2.571,1.527 2.57,3.143c-0.001,1.618 -1.19,2.814 -2.574,2.693c-1.384,-0.122 -2.57,-1.527 -2.569,-3.143c0.001,-1.617 1.19,-2.813 2.573,-2.693Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M532.935,1246.762c1.385,0.127 2.571,1.538 2.57,3.154c-0.001,1.618 -1.191,2.809 -2.574,2.681c-1.384,-0.128 -2.57,-1.539 -2.569,-3.154c0.001,-1.617 1.19,-2.808 2.573,-2.681Z" />
                      <path
                        d="M532.935,1246.762c1.385,0.127 2.571,1.538 2.57,3.154c-0.001,1.618 -1.191,2.809 -2.574,2.681c-1.384,-0.128 -2.57,-1.539 -2.569,-3.154c0.001,-1.617 1.19,-2.808 2.573,-2.681Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M532.916,1276.913c1.385,0.133 2.572,1.55 2.571,3.166c-0.001,1.618 -1.191,2.804 -2.574,2.67c-1.384,-0.134 -2.57,-1.55 -2.569,-3.166c0.001,-1.617 1.19,-2.803 2.573,-2.67Z" />
                      <path
                        d="M532.916,1276.913c1.385,0.133 2.572,1.55 2.571,3.166c-0.001,1.618 -1.191,2.804 -2.574,2.67c-1.384,-0.134 -2.57,-1.55 -2.569,-3.166c0.001,-1.617 1.19,-2.803 2.573,-2.67Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M563.901,1219.305c1.393,0.121 2.587,1.534 2.586,3.158c-0.001,1.625 -1.197,2.827 -2.589,2.705c-1.392,-0.122 -2.585,-1.535 -2.584,-3.157c0.001,-1.624 1.197,-2.826 2.587,-2.705Z" />
                      <path
                        d="M563.901,1219.305c1.393,0.121 2.587,1.534 2.586,3.158c-0.001,1.625 -1.197,2.827 -2.589,2.705c-1.392,-0.122 -2.585,-1.535 -2.584,-3.157c0.001,-1.624 1.197,-2.826 2.587,-2.705Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M563.885,1249.594c1.393,0.127 2.587,1.546 2.586,3.169c-0.001,1.625 -1.197,2.822 -2.589,2.693c-1.393,-0.129 -2.585,-1.546 -2.585,-3.169c0.001,-1.624 1.197,-2.821 2.588,-2.693Z" />
                      <path
                        d="M563.885,1249.594c1.393,0.127 2.587,1.546 2.586,3.169c-0.001,1.625 -1.197,2.822 -2.589,2.693c-1.393,-0.129 -2.585,-1.546 -2.585,-3.169c0.001,-1.624 1.197,-2.821 2.588,-2.693Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M563.869,1279.883c1.393,0.134 2.587,1.557 2.586,3.181c-0.001,1.625 -1.197,2.817 -2.589,2.682c-1.393,-0.135 -2.586,-1.558 -2.585,-3.181c0.001,-1.625 1.197,-2.816 2.588,-2.682Z" />
                      <path
                        d="M563.869,1279.883c1.393,0.134 2.587,1.557 2.586,3.181c-0.001,1.625 -1.197,2.817 -2.589,2.682c-1.393,-0.135 -2.586,-1.558 -2.585,-3.181c0.001,-1.625 1.197,-2.816 2.588,-2.682Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M595.031,1222.016c1.401,0.122 2.602,1.541 2.601,3.172c-0.001,1.632 -1.204,2.84 -2.604,2.717c-1.401,-0.123 -2.601,-1.542 -2.6,-3.172c0.001,-1.632 1.203,-2.839 2.602,-2.717Z" />
                      <path
                        d="M595.031,1222.016c1.401,0.122 2.602,1.541 2.601,3.172c-0.001,1.632 -1.204,2.84 -2.604,2.717c-1.401,-0.123 -2.601,-1.542 -2.6,-3.172c0.001,-1.632 1.203,-2.839 2.602,-2.717Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M595.018,1252.443c1.402,0.128 2.602,1.553 2.601,3.184c-0.001,1.633 -1.204,2.835 -2.604,2.705c-1.401,-0.129 -2.601,-1.554 -2.6,-3.184c0.001,-1.632 1.203,-2.833 2.603,-2.705Z" />
                      <path
                        d="M595.018,1252.443c1.402,0.128 2.602,1.553 2.601,3.184c-0.001,1.633 -1.204,2.835 -2.604,2.705c-1.401,-0.129 -2.601,-1.554 -2.6,-3.184c0.001,-1.632 1.203,-2.833 2.603,-2.705Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M595.004,1282.871c1.402,0.135 2.602,1.565 2.602,3.196c-0.001,1.633 -1.204,2.83 -2.604,2.694c-1.401,-0.136 -2.601,-1.566 -2.6,-3.196c0.001,-1.632 1.204,-2.828 2.603,-2.694Z" />
                      <path
                        d="M595.004,1282.871c1.402,0.135 2.602,1.565 2.602,3.196c-0.001,1.633 -1.204,2.83 -2.604,2.694c-1.401,-0.136 -2.601,-1.566 -2.6,-3.196c0.001,-1.632 1.204,-2.828 2.603,-2.694Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M626.344,1224.744c1.41,0.123 2.617,1.549 2.617,3.187c-0.001,1.64 -1.21,2.853 -2.619,2.729c-1.409,-0.124 -2.616,-1.55 -2.616,-3.187c0.001,-1.639 1.21,-2.851 2.617,-2.729Z" />
                      <path
                        d="M626.344,1224.744c1.41,0.123 2.617,1.549 2.617,3.187c-0.001,1.64 -1.21,2.853 -2.619,2.729c-1.409,-0.124 -2.616,-1.55 -2.616,-3.187c0.001,-1.639 1.21,-2.851 2.617,-2.729Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M626.334,1255.309c1.41,0.129 2.618,1.561 2.617,3.199c-0.001,1.64 -1.211,2.847 -2.619,2.717c-1.409,-0.13 -2.616,-1.561 -2.616,-3.199c0.001,-1.639 1.21,-2.846 2.618,-2.717Z" />
                      <path
                        d="M626.334,1255.309c1.41,0.129 2.618,1.561 2.617,3.199c-0.001,1.64 -1.211,2.847 -2.619,2.717c-1.409,-0.13 -2.616,-1.561 -2.616,-3.199c0.001,-1.639 1.21,-2.846 2.618,-2.717Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M626.324,1285.876c1.41,0.135 2.618,1.572 2.617,3.211c-0.001,1.64 -1.211,2.842 -2.619,2.706c-1.409,-0.136 -2.617,-1.573 -2.616,-3.211c0.001,-1.639 1.21,-2.841 2.618,-2.706Z" />
                      <path
                        d="M626.324,1285.876c1.41,0.135 2.618,1.572 2.617,3.211c-0.001,1.64 -1.211,2.842 -2.619,2.706c-1.409,-0.136 -2.617,-1.573 -2.616,-3.211c0.001,-1.639 1.21,-2.841 2.618,-2.706Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M395.91,1221.828c1.348,0.121 2.503,1.501 2.502,3.085c-0.002,1.586 -1.161,2.755 -2.508,2.633c-1.347,-0.122 -2.502,-1.501 -2.5,-3.085c0.002,-1.585 1.16,-2.754 2.506,-2.633Z" />
                      <path
                        d="M395.91,1221.828c1.348,0.121 2.503,1.501 2.502,3.085c-0.002,1.586 -1.161,2.755 -2.508,2.633c-1.347,-0.122 -2.502,-1.501 -2.5,-3.085c0.002,-1.585 1.16,-2.754 2.506,-2.633Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M395.879,1251.371c1.348,0.127 2.503,1.512 2.502,3.096c-0.002,1.586 -1.161,2.75 -2.508,2.622c-1.348,-0.128 -2.502,-1.513 -2.501,-3.096c0.002,-1.585 1.161,-2.749 2.507,-2.622Z" />
                      <path
                        d="M395.879,1251.371c1.348,0.127 2.503,1.512 2.502,3.096c-0.002,1.586 -1.161,2.75 -2.508,2.622c-1.348,-0.128 -2.502,-1.513 -2.501,-3.096c0.002,-1.585 1.161,-2.749 2.507,-2.622Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M395.848,1280.914c1.349,0.133 2.504,1.523 2.502,3.107c-0.002,1.586 -1.161,2.745 -2.508,2.611c-1.348,-0.134 -2.502,-1.524 -2.501,-3.107c0.002,-1.585 1.161,-2.744 2.507,-2.611Z" />
                      <path
                        d="M395.848,1280.914c1.349,0.133 2.504,1.523 2.502,3.107c-0.002,1.586 -1.161,2.745 -2.508,2.611c-1.348,-0.134 -2.502,-1.524 -2.501,-3.107c0.002,-1.585 1.161,-2.744 2.507,-2.611Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M426.047,1224.533c1.356,0.122 2.518,1.508 2.517,3.099c-0.002,1.593 -1.167,2.767 -2.522,2.645c-1.356,-0.123 -2.517,-1.509 -2.516,-3.099c0.002,-1.592 1.167,-2.766 2.521,-2.645Z" />
                      <path
                        d="M426.047,1224.533c1.356,0.122 2.518,1.508 2.517,3.099c-0.002,1.593 -1.167,2.767 -2.522,2.645c-1.356,-0.123 -2.517,-1.509 -2.516,-3.099c0.002,-1.592 1.167,-2.766 2.521,-2.645Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M426.019,1254.209c1.356,0.128 2.519,1.519 2.517,3.11c-0.002,1.593 -1.168,2.762 -2.523,2.634c-1.356,-0.129 -2.517,-1.52 -2.516,-3.11c0.002,-1.592 1.167,-2.761 2.521,-2.634Z" />
                      <path
                        d="M426.019,1254.209c1.356,0.128 2.519,1.519 2.517,3.11c-0.002,1.593 -1.168,2.762 -2.523,2.634c-1.356,-0.129 -2.517,-1.52 -2.516,-3.11c0.002,-1.592 1.167,-2.761 2.521,-2.634Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M425.99,1283.886c1.357,0.134 2.519,1.531 2.517,3.122c-0.002,1.593 -1.168,2.757 -2.523,2.623c-1.356,-0.135 -2.518,-1.531 -2.516,-3.122c0.002,-1.592 1.167,-2.756 2.521,-2.623Z" />
                      <path
                        d="M425.99,1283.886c1.357,0.134 2.519,1.531 2.517,3.122c-0.002,1.593 -1.168,2.757 -2.523,2.623c-1.356,-0.135 -2.518,-1.531 -2.516,-3.122c0.002,-1.592 1.167,-2.756 2.521,-2.623Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M456.364,1227.252c1.364,0.122 2.533,1.515 2.532,3.113c-0.001,1.6 -1.174,2.78 -2.537,2.657c-1.364,-0.123 -2.532,-1.516 -2.531,-3.113c0.001,-1.599 1.174,-2.779 2.536,-2.657Z" />
                      <path
                        d="M456.364,1227.252c1.364,0.122 2.533,1.515 2.532,3.113c-0.001,1.6 -1.174,2.78 -2.537,2.657c-1.364,-0.123 -2.532,-1.516 -2.531,-3.113c0.001,-1.599 1.174,-2.779 2.536,-2.657Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M456.338,1257.063c1.365,0.128 2.534,1.526 2.532,3.125c-0.001,1.6 -1.174,2.775 -2.537,2.645c-1.364,-0.13 -2.532,-1.527 -2.531,-3.124c0.001,-1.599 1.174,-2.774 2.536,-2.645Z" />
                      <path
                        d="M456.338,1257.063c1.365,0.128 2.534,1.526 2.532,3.125c-0.001,1.6 -1.174,2.775 -2.537,2.645c-1.364,-0.13 -2.532,-1.527 -2.531,-3.124c0.001,-1.599 1.174,-2.774 2.536,-2.645Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M456.312,1286.875c1.365,0.135 2.534,1.538 2.532,3.136c-0.001,1.6 -1.174,2.77 -2.537,2.634c-1.364,-0.136 -2.533,-1.539 -2.531,-3.136c0.001,-1.599 1.174,-2.769 2.536,-2.634Z" />
                      <path
                        d="M456.312,1286.875c1.365,0.135 2.534,1.538 2.532,3.136c-0.001,1.6 -1.174,2.77 -2.537,2.634c-1.364,-0.136 -2.533,-1.539 -2.531,-3.136c0.001,-1.599 1.174,-2.769 2.536,-2.634Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M486.86,1229.986c1.373,0.123 2.548,1.522 2.547,3.128c-0.001,1.607 -1.181,2.792 -2.552,2.668c-1.372,-0.124 -2.547,-1.523 -2.546,-3.128c0.001,-1.606 1.18,-2.791 2.55,-2.668Z" />
                      <path
                        d="M486.86,1229.986c1.373,0.123 2.548,1.522 2.547,3.128c-0.001,1.607 -1.181,2.792 -2.552,2.668c-1.372,-0.124 -2.547,-1.523 -2.546,-3.128c0.001,-1.606 1.18,-2.791 2.55,-2.668Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M486.837,1259.933c1.373,0.129 2.549,1.534 2.547,3.139c-0.001,1.607 -1.181,2.787 -2.552,2.657c-1.372,-0.13 -2.547,-1.534 -2.546,-3.139c0.001,-1.606 1.18,-2.786 2.551,-2.657Z" />
                      <path
                        d="M486.837,1259.933c1.373,0.129 2.549,1.534 2.547,3.139c-0.001,1.607 -1.181,2.787 -2.552,2.657c-1.372,-0.13 -2.547,-1.534 -2.546,-3.139c0.001,-1.606 1.18,-2.786 2.551,-2.657Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M486.813,1289.881c1.373,0.135 2.549,1.545 2.548,3.151c-0.001,1.607 -1.181,2.782 -2.552,2.646c-1.372,-0.136 -2.548,-1.546 -2.546,-3.151c0.001,-1.607 1.18,-2.781 2.551,-2.646Z" />
                      <path
                        d="M486.813,1289.881c1.373,0.135 2.549,1.545 2.548,3.151c-0.001,1.607 -1.181,2.782 -2.552,2.646c-1.372,-0.136 -2.548,-1.546 -2.546,-3.151c0.001,-1.607 1.18,-2.781 2.551,-2.646Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M517.536,1232.737c1.381,0.124 2.564,1.53 2.563,3.142c-0.001,1.614 -1.187,2.805 -2.567,2.68c-1.38,-0.125 -2.562,-1.53 -2.561,-3.142c0.001,-1.613 1.187,-2.804 2.565,-2.68Z" />
                      <path
                        d="M517.536,1232.737c1.381,0.124 2.564,1.53 2.563,3.142c-0.001,1.614 -1.187,2.805 -2.567,2.68c-1.38,-0.125 -2.562,-1.53 -2.561,-3.142c0.001,-1.613 1.187,-2.804 2.565,-2.68Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M517.516,1262.819c1.381,0.13 2.564,1.541 2.563,3.154c-0.001,1.614 -1.187,2.8 -2.567,2.669c-1.38,-0.131 -2.563,-1.542 -2.562,-3.154c0.001,-1.614 1.187,-2.799 2.566,-2.669Z" />
                      <path
                        d="M517.516,1262.819c1.381,0.13 2.564,1.541 2.563,3.154c-0.001,1.614 -1.187,2.8 -2.567,2.669c-1.38,-0.131 -2.563,-1.542 -2.562,-3.154c0.001,-1.614 1.187,-2.799 2.566,-2.669Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M517.496,1292.904c1.381,0.136 2.564,1.553 2.563,3.165c-0.001,1.615 -1.187,2.795 -2.567,2.658c-1.38,-0.137 -2.563,-1.553 -2.562,-3.165c0.001,-1.614 1.187,-2.794 2.566,-2.658Z" />
                      <path
                        d="M517.496,1292.904c1.381,0.136 2.564,1.553 2.563,3.165c-0.001,1.615 -1.187,2.795 -2.567,2.658c-1.38,-0.137 -2.563,-1.553 -2.562,-3.165c0.001,-1.614 1.187,-2.794 2.566,-2.658Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M548.394,1235.503c1.389,0.125 2.579,1.537 2.578,3.157c-0.001,1.622 -1.194,2.818 -2.581,2.692c-1.388,-0.126 -2.578,-1.538 -2.577,-3.157c0.001,-1.621 1.193,-2.817 2.58,-2.692Z" />
                      <path
                        d="M548.394,1235.503c1.389,0.125 2.579,1.537 2.578,3.157c-0.001,1.622 -1.194,2.818 -2.581,2.692c-1.388,-0.126 -2.578,-1.538 -2.577,-3.157c0.001,-1.621 1.193,-2.817 2.58,-2.692Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M548.377,1265.723c1.389,0.131 2.579,1.549 2.578,3.168c-0.001,1.622 -1.194,2.813 -2.582,2.681c-1.388,-0.132 -2.578,-1.549 -2.577,-3.168c0.001,-1.621 1.194,-2.811 2.58,-2.681Z" />
                      <path
                        d="M548.377,1265.723c1.389,0.131 2.579,1.549 2.578,3.168c-0.001,1.622 -1.194,2.813 -2.582,2.681c-1.388,-0.132 -2.578,-1.549 -2.577,-3.168c0.001,-1.621 1.194,-2.811 2.58,-2.681Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M548.359,1295.945c1.389,0.137 2.579,1.56 2.579,3.18c-0.001,1.622 -1.194,2.808 -2.582,2.67c-1.389,-0.138 -2.578,-1.561 -2.577,-3.18c0.001,-1.621 1.194,-2.806 2.581,-2.67Z" />
                      <path
                        d="M548.359,1295.945c1.389,0.137 2.579,1.56 2.579,3.18c-0.001,1.622 -1.194,2.808 -2.582,2.67c-1.389,-0.138 -2.578,-1.561 -2.577,-3.18c0.001,-1.621 1.194,-2.806 2.581,-2.67Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M579.435,1238.286c1.397,0.125 2.594,1.544 2.594,3.172c-0.001,1.629 -1.201,2.83 -2.596,2.704c-1.397,-0.126 -2.593,-1.545 -2.592,-3.171c0.001,-1.628 1.2,-2.829 2.595,-2.704Z" />
                      <path
                        d="M579.435,1238.286c1.397,0.125 2.594,1.544 2.594,3.172c-0.001,1.629 -1.201,2.83 -2.596,2.704c-1.397,-0.126 -2.593,-1.545 -2.592,-3.171c0.001,-1.628 1.2,-2.829 2.595,-2.704Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M579.42,1268.643c1.398,0.131 2.595,1.556 2.594,3.183c-0.001,1.629 -1.201,2.825 -2.597,2.693c-1.397,-0.133 -2.593,-1.557 -2.593,-3.183c0.001,-1.628 1.2,-2.824 2.595,-2.693Z" />
                      <path
                        d="M579.42,1268.643c1.398,0.131 2.595,1.556 2.594,3.183c-0.001,1.629 -1.201,2.825 -2.597,2.693c-1.397,-0.133 -2.593,-1.557 -2.593,-3.183c0.001,-1.628 1.2,-2.824 2.595,-2.693Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M579.405,1299.004c1.398,0.138 2.595,1.568 2.594,3.195c-0.001,1.629 -1.201,2.82 -2.597,2.681c-1.397,-0.139 -2.594,-1.569 -2.593,-3.195c0.001,-1.628 1.2,-2.819 2.596,-2.682Z" />
                      <path
                        d="M579.405,1299.004c1.398,0.138 2.595,1.568 2.594,3.195c-0.001,1.629 -1.201,2.82 -2.597,2.681c-1.397,-0.139 -2.594,-1.569 -2.593,-3.195c0.001,-1.628 1.2,-2.819 2.596,-2.682Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M610.658,1241.085c1.406,0.126 2.61,1.552 2.609,3.186c-0.001,1.636 -1.207,2.843 -2.611,2.716c-1.405,-0.127 -2.608,-1.553 -2.608,-3.186c0.001,-1.635 1.207,-2.842 2.61,-2.716Z" />
                      <path
                        d="M610.658,1241.085c1.406,0.126 2.61,1.552 2.609,3.186c-0.001,1.636 -1.207,2.843 -2.611,2.716c-1.405,-0.127 -2.608,-1.553 -2.608,-3.186c0.001,-1.635 1.207,-2.842 2.61,-2.716Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M610.646,1271.582c1.406,0.132 2.61,1.564 2.609,3.198c-0.001,1.636 -1.207,2.838 -2.612,2.705c-1.405,-0.133 -2.609,-1.564 -2.608,-3.198c0.001,-1.635 1.207,-2.837 2.61,-2.705Z" />
                      <path
                        d="M610.646,1271.582c1.406,0.132 2.61,1.564 2.609,3.198c-0.001,1.636 -1.207,2.838 -2.612,2.705c-1.405,-0.133 -2.609,-1.564 -2.608,-3.198c0.001,-1.635 1.207,-2.837 2.61,-2.705Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                      <path d="M610.634,1302.081c1.406,0.139 2.61,1.575 2.61,3.21c-0.001,1.636 -1.207,2.833 -2.612,2.693c-1.405,-0.14 -2.609,-1.576 -2.608,-3.21c0.001,-1.636 1.207,-2.832 2.611,-2.693Z" />
                      <path
                        d="M610.634,1302.081c1.406,0.139 2.61,1.575 2.61,3.21c-0.001,1.636 -1.207,2.833 -2.612,2.693c-1.405,-0.14 -2.609,-1.576 -2.608,-3.21c0.001,-1.636 1.207,-2.832 2.611,-2.693Z"
                        style={{
                          fill: "none",
                          
                          strokeWidth: "3.13px",
                        }}
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="Side-panel-warped" >
            <g>
              <path
                d="M1015,162c1,387 2,774 3,1161c-93.333,58.667 -186.667,117.333 -280,176l0,-1492c92.333,51.667 184.667,103.333 277,155Z"
                style={{
                  fillOpacity: 0,
                  
                  strokeWidth: "8.33px",
                }}
              />
            </g>
          </g>
        </g>
      </g>
      <g id="Safe-Constellation" >
        <use
          xlinkHref="#_Image1"
          x={737.974}
          y={5.974}
          width="130px"
          height="360px"
        />
        <path d="M988.909,383.118l-122.223,-121.425l124.405,119.188l-2.182,2.237Z" />
        <path d="M909.712,496.115l80.693,-114.705l-78.117,116.475l-2.576,-1.769Z" />
        <path
          d="M909.972,495.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path d="M908.893,500.602l-141.448,-137.132l143.606,134.871l-2.157,2.261Z" />
        <use
          xlinkHref="#_Image2"
          x={849.753}
          y={441.968}
          width="80px"
          height="225px"
        />
        <path d="M742.573,747.628c184.806,-83.058 184.804,-83.058 184.808,-83.059c0.394,-0.008 0.815,-0.163 1.183,-0.02c0.016,0.006 0.866,0.823 0.867,0.832c0.009,0.394 0.163,0.815 0.02,1.183c-0.143,0.368 -0.452,0.702 -0.814,0.859c-61.96,26.877 -124.104,53.328 -186.064,80.205Z" />
        <path d="M938.88,880.603c-0.749,-0.353 -1.704,-0.035 -2.453,-0.388c-0.262,-0.124 -9.897,-6.316 -13.283,-8.632c-12.027,-8.226 -179.564,-123.893 -179.589,-123.933c-0.197,-0.315 -0.008,-0.78 -0.204,-1.094c0.547,0.367 1.394,0.005 1.942,0.373c2.377,1.594 167.719,114.155 179.5,122.25c3.381,2.324 12.631,9.078 12.841,9.278c0.599,0.571 0.647,1.577 1.247,2.148Z" />
        <path d="M841.133,1025.3c95.571,-146.173 95.569,-146.173 95.572,-146.175c0.329,-0.219 0.601,-0.578 0.988,-0.655c0.016,-0.003 1.176,0.228 1.181,0.236c0.221,0.328 0.578,0.601 0.655,0.988c0.078,0.388 -0.003,0.837 -0.225,1.164c-32.596,48.234 -65.577,96.207 -98.172,144.442Z" />
        <path d="M931.819,1184.464c-91.287,-159.651 -91.288,-159.649 -91.288,-159.653c-0.049,-0.422 -0.259,-0.857 -0.144,-1.266c0.005,-0.016 0.793,-1.013 0.802,-1.014c0.422,-0.05 0.857,-0.259 1.266,-0.144c0.409,0.115 0.799,0.413 1.004,0.784c29.6,53.684 58.761,107.608 88.36,161.292Z" />
        <path
          d="M1024.972,1055.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <use
          xlinkHref="#_Image3"
          x={930.125}
          y={1184.125}
          width="94px"
          height="140px"
        />
        <path d="M930.064,1186.251c94.689,-129.193 94.687,-129.193 94.691,-129.195c0.34,-0.201 0.631,-0.544 1.023,-0.601c0.017,-0.002 1.162,0.292 1.167,0.299c0.202,0.34 0.544,0.631 0.601,1.023c0.056,0.391 -0.049,0.836 -0.287,1.151c-32.274,42.535 -64.919,84.788 -97.193,127.323Z" />
        <path d="M769.731,1387.329l71.941,-362.608c0.192,-0.284 0.293,-0.661 0.578,-0.85c0.014,-0.009 1.02,-0.204 1.028,-0.199c0.285,0.191 0.661,0.293 0.85,0.578c0.19,0.286 0.271,0.672 0.203,1.008c-24.736,120.717 -49.864,241.353 -74.6,362.07Z" />
        <path
          d="M1197.943,459.057c0,-0.583 0.473,-1.057 1.057,-1.057c0.583,0 1.057,0.473 1.057,1.057c0.292,-0.505 0.938,-0.678 1.443,-0.387c0.505,0.292 0.678,0.938 0.387,1.443c0.505,-0.292 1.152,-0.118 1.443,0.387c0.292,0.505 0.118,1.152 -0.387,1.443c0.583,0 1.057,0.473 1.057,1.057c0,0.583 -0.473,1.057 -1.057,1.057c0.505,0.292 0.678,0.938 0.387,1.443c-0.292,0.505 -0.938,0.678 -1.443,0.387c0.292,0.505 0.118,1.152 -0.387,1.443c-0.505,0.292 -1.152,0.118 -1.443,-0.387c-0,0.583 -0.473,1.057 -1.057,1.057c-0.583,0 -1.057,-0.473 -1.057,-1.057c-0.292,0.505 -0.938,0.678 -1.443,0.387c-0.505,-0.292 -0.678,-0.938 -0.387,-1.443c-0.505,0.292 -1.152,0.118 -1.443,-0.387c-0.292,-0.505 -0.118,-1.152 0.387,-1.443c-0.583,-0 -1.057,-0.473 -1.057,-1.057c0,-0.583 0.473,-1.057 1.057,-1.057c-0.505,-0.292 -0.678,-0.938 -0.387,-1.443c0.292,-0.505 0.938,-0.678 1.443,-0.387c-0.292,-0.505 -0.118,-1.152 0.387,-1.443c0.505,-0.292 1.152,-0.118 1.443,0.387Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1148.972,498.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1124.183,633.317c0,-0.175 0.142,-0.317 0.317,-0.317c0.175,0 0.317,0.142 0.317,0.317c0.087,-0.152 0.282,-0.204 0.433,-0.116c0.152,0.087 0.204,0.282 0.116,0.433c0.152,-0.087 0.346,-0.035 0.433,0.116c0.087,0.152 0.035,0.346 -0.116,0.433c0.175,0 0.317,0.142 0.317,0.317c0,0.175 -0.142,0.317 -0.317,0.317c0.152,0.087 0.204,0.282 0.116,0.433c-0.087,0.152 -0.282,0.204 -0.433,0.116c0.087,0.152 0.035,0.346 -0.116,0.433c-0.152,0.087 -0.346,0.035 -0.433,-0.116c-0,0.175 -0.142,0.317 -0.317,0.317c-0.175,0 -0.317,-0.142 -0.317,-0.317c-0.087,0.152 -0.282,0.204 -0.433,0.116c-0.152,-0.087 -0.204,-0.282 -0.116,-0.433c-0.152,0.087 -0.346,0.035 -0.433,-0.116c-0.087,-0.152 -0.035,-0.346 0.116,-0.433c-0.175,-0 -0.317,-0.142 -0.317,-0.317c0,-0.175 0.142,-0.317 0.317,-0.317c-0.152,-0.087 -0.204,-0.282 -0.116,-0.433c0.087,-0.152 0.282,-0.204 0.433,-0.116c-0.087,-0.152 -0.035,-0.346 0.116,-0.433c0.152,-0.087 0.346,-0.035 0.433,0.116Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1243.972,615.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1138.126,770.374c0,-0.758 0.615,-1.374 1.374,-1.374c0.758,0 1.374,0.615 1.374,1.374c0.379,-0.657 1.22,-0.882 1.876,-0.503c0.657,0.379 0.882,1.22 0.503,1.876c0.657,-0.379 1.497,-0.154 1.876,0.503c0.379,0.657 0.154,1.497 -0.503,1.876c0.758,0 1.374,0.615 1.374,1.374c0,0.758 -0.615,1.374 -1.374,1.374c0.657,0.379 0.882,1.22 0.503,1.876c-0.379,0.657 -1.22,0.882 -1.876,0.503c0.379,0.657 0.154,1.497 -0.503,1.876c-0.657,0.379 -1.497,0.154 -1.876,-0.503c-0,0.758 -0.615,1.374 -1.374,1.374c-0.758,0 -1.374,-0.615 -1.374,-1.374c-0.379,0.657 -1.22,0.882 -1.876,0.503c-0.657,-0.379 -0.882,-1.22 -0.503,-1.876c-0.657,0.379 -1.497,0.154 -1.876,-0.503c-0.379,-0.657 -0.154,-1.497 0.503,-1.876c-0.758,-0 -1.374,-0.615 -1.374,-1.374c0,-0.758 0.615,-1.374 1.374,-1.374c-0.657,-0.379 -0.882,-1.22 -0.503,-1.876c0.379,-0.657 1.22,-0.882 1.876,-0.503c-0.379,-0.657 -0.154,-1.497 0.503,-1.876c0.657,-0.379 1.497,-0.154 1.876,0.503Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1269.577,714.423c0,-0.233 0.189,-0.423 0.423,-0.423c0.233,0 0.423,0.189 0.423,0.423c0.117,-0.202 0.375,-0.271 0.577,-0.155c0.202,0.117 0.271,0.375 0.155,0.577c0.202,-0.117 0.461,-0.047 0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c0.233,0 0.423,0.189 0.423,0.423c0,0.233 -0.189,0.423 -0.423,0.423c0.202,0.117 0.271,0.375 0.155,0.577c-0.117,0.202 -0.375,0.271 -0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0,0.233 -0.189,0.423 -0.423,0.423c-0.233,0 -0.423,-0.189 -0.423,-0.423c-0.117,0.202 -0.375,0.271 -0.577,0.155c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c-0.233,-0 -0.423,-0.189 -0.423,-0.423c0,-0.233 0.189,-0.423 0.423,-0.423c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c0.117,-0.202 0.375,-0.271 0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c0.202,-0.117 0.461,-0.047 0.577,0.155Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1314.577,666.423c0,-0.233 0.189,-0.423 0.423,-0.423c0.233,0 0.423,0.189 0.423,0.423c0.117,-0.202 0.375,-0.271 0.577,-0.155c0.202,0.117 0.271,0.375 0.155,0.577c0.202,-0.117 0.461,-0.047 0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c0.233,0 0.423,0.189 0.423,0.423c0,0.233 -0.189,0.423 -0.423,0.423c0.202,0.117 0.271,0.375 0.155,0.577c-0.117,0.202 -0.375,0.271 -0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0,0.233 -0.189,0.423 -0.423,0.423c-0.233,0 -0.423,-0.189 -0.423,-0.423c-0.117,0.202 -0.375,0.271 -0.577,0.155c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c-0.233,-0 -0.423,-0.189 -0.423,-0.423c0,-0.233 0.189,-0.423 0.423,-0.423c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c0.117,-0.202 0.375,-0.271 0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c0.202,-0.117 0.461,-0.047 0.577,0.155Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1342.394,672.106c0,-0.058 0.047,-0.106 0.106,-0.106c0.058,0 0.106,0.047 0.106,0.106c0.029,-0.051 0.094,-0.068 0.144,-0.039c0.051,0.029 0.068,0.094 0.039,0.144c0.051,-0.029 0.115,-0.012 0.144,0.039c0.029,0.051 0.012,0.115 -0.039,0.144c0.058,0 0.106,0.047 0.106,0.106c0,0.058 -0.047,0.106 -0.106,0.106c0.051,0.029 0.068,0.094 0.039,0.144c-0.029,0.051 -0.094,0.068 -0.144,0.039c0.029,0.051 0.012,0.115 -0.039,0.144c-0.051,0.029 -0.115,0.012 -0.144,-0.039c-0,0.058 -0.047,0.106 -0.106,0.106c-0.058,0 -0.106,-0.047 -0.106,-0.106c-0.029,0.051 -0.094,0.068 -0.144,0.039c-0.051,-0.029 -0.068,-0.094 -0.039,-0.144c-0.051,0.029 -0.115,0.012 -0.144,-0.039c-0.029,-0.051 -0.012,-0.115 0.039,-0.144c-0.058,-0 -0.106,-0.047 -0.106,-0.106c0,-0.058 0.047,-0.106 0.106,-0.106c-0.051,-0.029 -0.068,-0.094 -0.039,-0.144c0.029,-0.051 0.094,-0.068 0.144,-0.039c-0.029,-0.051 -0.012,-0.115 0.039,-0.144c0.051,-0.029 0.115,-0.012 0.144,0.039Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1338.183,652.106c0,-0.058 0.142,-0.106 0.317,-0.106c0.175,0 0.317,0.047 0.317,0.106c0.087,-0.051 0.282,-0.068 0.433,-0.039c0.152,0.029 0.204,0.094 0.116,0.144c0.152,-0.029 0.346,-0.012 0.433,0.039c0.087,0.051 0.035,0.115 -0.116,0.144c0.175,0 0.317,0.047 0.317,0.106c0,0.058 -0.142,0.106 -0.317,0.106c0.152,0.029 0.204,0.094 0.116,0.144c-0.087,0.051 -0.282,0.068 -0.433,0.039c0.087,0.051 0.035,0.115 -0.116,0.144c-0.152,0.029 -0.346,0.012 -0.433,-0.039c0,0.058 -0.142,0.106 -0.317,0.106c-0.175,0 -0.317,-0.047 -0.317,-0.106c-0.087,0.051 -0.282,0.068 -0.433,0.039c-0.152,-0.029 -0.204,-0.094 -0.116,-0.144c-0.152,0.029 -0.346,0.012 -0.433,-0.039c-0.087,-0.051 -0.035,-0.115 0.116,-0.144c-0.175,0 -0.317,-0.047 -0.317,-0.106c0,-0.058 0.142,-0.106 0.317,-0.106c-0.152,-0.029 -0.204,-0.094 -0.116,-0.144c0.087,-0.051 0.282,-0.068 0.433,-0.039c-0.087,-0.051 -0.035,-0.115 0.116,-0.144c0.152,-0.029 0.346,-0.012 0.433,0.039Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1396.577,728.423c0,-0.233 0.189,-0.423 0.423,-0.423c0.233,0 0.423,0.189 0.423,0.423c0.117,-0.202 0.375,-0.271 0.577,-0.155c0.202,0.117 0.271,0.375 0.155,0.577c0.202,-0.117 0.461,-0.047 0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c0.233,0 0.423,0.189 0.423,0.423c0,0.233 -0.189,0.423 -0.423,0.423c0.202,0.117 0.271,0.375 0.155,0.577c-0.117,0.202 -0.375,0.271 -0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0,0.233 -0.189,0.423 -0.423,0.423c-0.233,0 -0.423,-0.189 -0.423,-0.423c-0.117,0.202 -0.375,0.271 -0.577,0.155c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c-0.233,-0 -0.423,-0.189 -0.423,-0.423c0,-0.233 0.189,-0.423 0.423,-0.423c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c0.117,-0.202 0.375,-0.271 0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c0.202,-0.117 0.461,-0.047 0.577,0.155Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1325.789,765.211c0,-0.117 0.095,-0.211 0.211,-0.211c0.117,0 0.211,0.095 0.211,0.211c0.058,-0.101 0.188,-0.136 0.289,-0.077c0.101,0.058 0.136,0.188 0.077,0.289c0.101,-0.058 0.23,-0.024 0.289,0.077c0.058,0.101 0.024,0.23 -0.077,0.289c0.117,0 0.211,0.095 0.211,0.211c0,0.117 -0.095,0.211 -0.211,0.211c0.101,0.058 0.136,0.188 0.077,0.289c-0.058,0.101 -0.188,0.136 -0.289,0.077c0.058,0.101 0.024,0.23 -0.077,0.289c-0.101,0.058 -0.23,0.024 -0.289,-0.077c-0,0.117 -0.095,0.211 -0.211,0.211c-0.117,0 -0.211,-0.095 -0.211,-0.211c-0.058,0.101 -0.188,0.136 -0.289,0.077c-0.101,-0.058 -0.136,-0.188 -0.077,-0.289c-0.101,0.058 -0.23,0.024 -0.289,-0.077c-0.058,-0.101 -0.024,-0.23 0.077,-0.289c-0.117,-0 -0.211,-0.095 -0.211,-0.211c0,-0.117 0.095,-0.211 0.211,-0.211c-0.101,-0.058 -0.136,-0.188 -0.077,-0.289c0.058,-0.101 0.188,-0.136 0.289,-0.077c-0.058,-0.101 -0.024,-0.23 0.077,-0.289c0.101,-0.058 0.23,-0.024 0.289,0.077Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1306.789,770.211c0,-0.117 0.095,-0.211 0.211,-0.211c0.117,0 0.211,0.095 0.211,0.211c0.058,-0.101 0.188,-0.136 0.289,-0.077c0.101,0.058 0.136,0.188 0.077,0.289c0.101,-0.058 0.23,-0.024 0.289,0.077c0.058,0.101 0.024,0.23 -0.077,0.289c0.117,0 0.211,0.095 0.211,0.211c0,0.117 -0.095,0.211 -0.211,0.211c0.101,0.058 0.136,0.188 0.077,0.289c-0.058,0.101 -0.188,0.136 -0.289,0.077c0.058,0.101 0.024,0.23 -0.077,0.289c-0.101,0.058 -0.23,0.024 -0.289,-0.077c-0,0.117 -0.095,0.211 -0.211,0.211c-0.117,0 -0.211,-0.095 -0.211,-0.211c-0.058,0.101 -0.188,0.136 -0.289,0.077c-0.101,-0.058 -0.136,-0.188 -0.077,-0.289c-0.101,0.058 -0.23,0.024 -0.289,-0.077c-0.058,-0.101 -0.024,-0.23 0.077,-0.289c-0.117,-0 -0.211,-0.095 -0.211,-0.211c0,-0.117 0.095,-0.211 0.211,-0.211c-0.101,-0.058 -0.136,-0.188 -0.077,-0.289c0.058,-0.101 0.188,-0.136 0.289,-0.077c-0.058,-0.101 -0.024,-0.23 0.077,-0.289c0.101,-0.058 0.23,-0.024 0.289,0.077Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1360.577,811.423c0,-0.233 0.189,-0.423 0.423,-0.423c0.233,0 0.423,0.189 0.423,0.423c0.117,-0.202 0.375,-0.271 0.577,-0.155c0.202,0.117 0.271,0.375 0.155,0.577c0.202,-0.117 0.461,-0.047 0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c0.233,0 0.423,0.189 0.423,0.423c0,0.233 -0.189,0.423 -0.423,0.423c0.202,0.117 0.271,0.375 0.155,0.577c-0.117,0.202 -0.375,0.271 -0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0,0.233 -0.189,0.423 -0.423,0.423c-0.233,0 -0.423,-0.189 -0.423,-0.423c-0.117,0.202 -0.375,0.271 -0.577,0.155c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c-0.233,-0 -0.423,-0.189 -0.423,-0.423c0,-0.233 0.189,-0.423 0.423,-0.423c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c0.117,-0.202 0.375,-0.271 0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c0.202,-0.117 0.461,-0.047 0.577,0.155Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1111.577,895.423c0,-0.233 0.189,-0.423 0.423,-0.423c0.233,0 0.423,0.189 0.423,0.423c0.117,-0.202 0.375,-0.271 0.577,-0.155c0.202,0.117 0.271,0.375 0.155,0.577c0.202,-0.117 0.461,-0.047 0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c0.233,0 0.423,0.189 0.423,0.423c0,0.233 -0.189,0.423 -0.423,0.423c0.202,0.117 0.271,0.375 0.155,0.577c-0.117,0.202 -0.375,0.271 -0.577,0.155c0.117,0.202 0.047,0.461 -0.155,0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0,0.233 -0.189,0.423 -0.423,0.423c-0.233,0 -0.423,-0.189 -0.423,-0.423c-0.117,0.202 -0.375,0.271 -0.577,0.155c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c-0.202,0.117 -0.461,0.047 -0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c-0.233,-0 -0.423,-0.189 -0.423,-0.423c0,-0.233 0.189,-0.423 0.423,-0.423c-0.202,-0.117 -0.271,-0.375 -0.155,-0.577c0.117,-0.202 0.375,-0.271 0.577,-0.155c-0.117,-0.202 -0.047,-0.461 0.155,-0.577c0.202,-0.117 0.461,-0.047 0.577,0.155Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1029.183,889.634c0,-0.35 0.142,-0.634 0.317,-0.634c0.175,0 0.317,0.284 0.317,0.634c0.087,-0.303 0.282,-0.407 0.433,-0.232c0.152,0.175 0.204,0.563 0.116,0.866c0.152,-0.175 0.346,-0.071 0.433,0.232c0.087,0.303 0.035,0.691 -0.116,0.866c0.175,0 0.317,0.284 0.317,0.634c0,0.35 -0.142,0.634 -0.317,0.634c0.152,0.175 0.204,0.563 0.116,0.866c-0.087,0.303 -0.282,0.407 -0.433,0.232c0.087,0.303 0.035,0.691 -0.116,0.866c-0.152,0.175 -0.346,0.071 -0.433,-0.232c0,0.35 -0.142,0.634 -0.317,0.634c-0.175,0 -0.317,-0.284 -0.317,-0.634c-0.087,0.303 -0.282,0.407 -0.433,0.232c-0.152,-0.175 -0.204,-0.563 -0.116,-0.866c-0.152,0.175 -0.346,0.071 -0.433,-0.232c-0.087,-0.303 -0.035,-0.691 0.116,-0.866c-0.175,0 -0.317,-0.284 -0.317,-0.634c0,-0.35 0.142,-0.634 0.317,-0.634c-0.152,-0.175 -0.204,-0.563 -0.116,-0.866c0.087,-0.303 0.282,-0.407 0.433,-0.232c-0.087,-0.303 -0.035,-0.691 0.116,-0.866c0.152,-0.175 0.346,-0.071 0.433,0.232Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1135.549,1059.374c0,-0.758 0.426,-1.374 0.951,-1.374c0.525,0 0.951,0.615 0.951,1.374c0.262,-0.657 0.845,-0.882 1.299,-0.503c0.455,0.379 0.611,1.22 0.348,1.876c0.455,-0.379 1.037,-0.154 1.299,0.503c0.262,0.657 0.106,1.497 -0.348,1.876c0.525,0 0.951,0.615 0.951,1.374c0,0.758 -0.426,1.374 -0.951,1.374c0.455,0.379 0.611,1.22 0.348,1.876c-0.262,0.657 -0.845,0.882 -1.299,0.503c0.262,0.657 0.106,1.497 -0.348,1.876c-0.455,0.379 -1.037,0.154 -1.299,-0.503c0,0.758 -0.426,1.374 -0.951,1.374c-0.525,0 -0.951,-0.615 -0.951,-1.374c-0.262,0.657 -0.845,0.882 -1.299,0.503c-0.455,-0.379 -0.611,-1.22 -0.348,-1.876c-0.455,0.379 -1.037,0.154 -1.299,-0.503c-0.262,-0.657 -0.106,-1.497 0.348,-1.876c-0.525,0 -0.951,-0.615 -0.951,-1.374c0,-0.758 0.426,-1.374 0.951,-1.374c-0.455,-0.379 -0.611,-1.22 -0.348,-1.876c0.262,-0.657 0.845,-0.882 1.299,-0.503c-0.262,-0.657 -0.106,-1.497 0.348,-1.876c0.455,-0.379 1.037,-0.154 1.299,0.503Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M991,382l208,81"
          style={{
            fill: "none",
            
            strokeWidth: "3.13px",
          }}
        />
        <path d="M1198.644,461.761c46.651,153.587 46.653,153.586 46.652,153.59c-0.14,0.354 -0.152,0.793 -0.425,1.059c-0.01,0.009 -1.516,0.832 -1.524,0.832c-0.571,0.034 -1.155,0.22 -1.714,0.099c-0.372,-0.081 -0.818,-0.306 -0.922,-0.672c-14.542,-51.04 -29.041,-102.096 -42.949,-153.313c-0.159,-0.587 1.042,-1.009 0.883,-1.596Z" />
        <path d="M907.127,496.771c236.107,276.361 236.108,276.359 236.109,276.363c0.222,0.705 0.726,1.38 0.662,2.117c-0.001,0.017 -1.023,1.982 -1.031,1.984c-0.705,0.223 -1.38,0.726 -2.117,0.662c-0.737,-0.064 -1.499,-0.448 -1.971,-1.016c-77.439,-93.186 -154.212,-186.924 -231.651,-280.11Z" />
        <path d="M1012.446,622.179l135.021,-122.611l-132.901,124.906l-2.121,-2.295Z" />
        <use
          xlinkHref="#_Image4"
          x={1138.438}
          y={616.438}
          width="109px"
          height="156px"
        />
        <path d="M1244.769,617.921l126.467,4.636c1.176,1.592 1.404,1.661 0.994,3.597c-0.173,0.815 -0.196,1.677 -0.521,2.444c-0.175,0.413 -0.479,1.008 -0.926,0.975c-41.648,-3.102 -83.277,-6.497 -124.863,-10.343c-0.579,-0.054 -0.572,-1.257 -1.151,-1.31Z" />
        <path
          d="M1233.972,838.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path d="M1024.441,1056.889c113.676,6.553 113.674,6.551 113.68,6.554c0.353,0.177 0.799,0.237 1.058,0.536c0.011,0.013 0.382,1.135 0.378,1.143c-0.176,0.354 -0.237,0.799 -0.536,1.058c-0.299,0.259 -0.729,0.412 -1.123,0.38c-37.832,-3.068 -75.625,-6.603 -113.457,-9.671Z" />
        <path d="M1136.671,1065.822l-105.856,-174.121l108.514,172.477l-2.658,1.644Z" />
        <path d="M1236.562,840.673l-98.801,224.881l95.677,-226.228l3.124,1.347Z" />
        <path d="M1371.561,833.931c0.052,1.179 0.109,1.207 -0.358,2.293c-0.19,0.443 -0.569,0.975 -1.05,0.994l-135.094,4.345c-0.371,-0.138 -0.821,-0.15 -1.113,-0.418c-0.013,-0.011 -0.511,-1.076 -0.508,-1.084c0.134,-0.369 0.145,-0.815 0.41,-1.105c0.268,-0.292 0.676,-0.491 1.072,-0.515l134.946,-7.657c0.379,0.297 0.906,0.472 1.134,0.897c0.561,1.04 0.507,1.073 0.56,2.252Z" />
        <path d="M1366.833,526.443c0.786,-0.034 0.819,-0.053 1.465,0.397c0.341,0.238 0.63,0.651 0.648,1.067l3.716,98.032c-0.137,0.371 -0.147,0.821 -0.415,1.112c-0.011,0.012 -1.081,0.509 -1.09,0.506c-0.371,-0.135 -0.818,-0.145 -1.109,-0.412c-0.292,-0.268 -0.488,-0.678 -0.509,-1.073l-4.687,-97.991c0.623,-1.269 0.566,-1.578 1.98,-1.639Z" />
        <path d="M1542.713,729.783c-58.844,-67.007 -118.021,-133.72 -176.865,-200.727c-0.262,-0.299 -0.41,-0.728 -0.395,-1.125c0.001,-0.017 0.483,-1.079 0.492,-1.083c0.366,-0.134 0.712,-0.411 1.101,-0.396c0.397,0.015 0.814,0.194 1.092,0.478c62.446,63.664 124.573,127.639 187.019,191.302c-1.72,2.301 -3.438,4.605 -5.159,6.906c-0.114,0.153 -0.159,0.101 -7.286,4.644Z" />
        <path d="M1362.55,929.071c1.789,-2.11 2.493,-4.999 4.282,-7.108c58.03,-68.428 116.736,-136.28 175.104,-204.42c2.138,-2.495 5.137,-2.653 5.636,-2.68c1.042,-0.055 2.116,0.086 3.101,0.433c3.237,1.138 4.492,3.78 4.709,4.238c1.425,3.003 0.486,5.675 0.323,6.139c-0.356,1.013 -0.898,1.995 -1.634,2.778c-61.464,65.361 -123.273,130.397 -184.909,195.595c-2.863,3.028 -3.291,2.502 -6.612,5.025Z" />
        <path d="M1371.075,831.467c-0.005,0.953 1.26,1.615 1.255,2.567l-1.765,88.061c-0.267,0.585 -0.334,1.314 -0.804,1.753c-0.012,0.011 -1.815,0.687 -1.823,0.683c-0.586,-0.266 -1.314,-0.334 -1.753,-0.804c-0.439,-0.47 -0.709,-1.161 -0.684,-1.804c1.139,-29.334 2.779,-58.646 4.169,-87.969c0.07,-1.47 0.681,-1.206 1.406,-2.488Z" />
        <use
          xlinkHref="#_Image5"
          x={1422.716}
          y={621.716}
          width="94px"
          height="97px"
        />
        <path d="M1397,786c32.512,-17.636 64.814,-35.657 97.325,-53.293c0.324,-0.176 0.749,-0.208 1.102,-0.1c0.016,0.005 0.865,0.709 0.866,0.718c0.036,0.367 0.208,0.749 0.1,1.102c-0.108,0.353 -0.373,0.687 -0.7,0.856c-32.83,17.035 -65.862,33.681 -98.692,50.717Z" />
        <path d="M1411,666c28.813,14.392 57.804,28.425 86.616,42.817c0.301,0.151 0.548,0.453 0.651,0.773c0.005,0.016 -0.078,1.02 -0.085,1.026c-0.256,0.219 -0.453,0.548 -0.773,0.651c-0.321,0.104 -0.709,0.081 -1.008,-0.076c-28.529,-14.946 -56.872,-30.246 -85.402,-45.192Z" />
        <path
          d="M962.789,1305.317c0,-0.175 0.095,-0.317 0.211,-0.317c0.117,0 0.211,0.142 0.211,0.317c0.058,-0.152 0.188,-0.204 0.289,-0.116c0.101,0.087 0.136,0.282 0.077,0.433c0.101,-0.087 0.23,-0.035 0.289,0.116c0.058,0.152 0.024,0.346 -0.077,0.433c0.117,0 0.211,0.142 0.211,0.317c0,0.175 -0.095,0.317 -0.211,0.317c0.101,0.087 0.136,0.282 0.077,0.433c-0.058,0.152 -0.188,0.204 -0.289,0.116c0.058,0.152 0.024,0.346 -0.077,0.433c-0.101,0.087 -0.23,0.035 -0.289,-0.116c0,0.175 -0.095,0.317 -0.211,0.317c-0.117,0 -0.211,-0.142 -0.211,-0.317c-0.058,0.152 -0.188,0.204 -0.289,0.116c-0.101,-0.087 -0.136,-0.282 -0.077,-0.433c-0.101,0.087 -0.23,0.035 -0.289,-0.116c-0.058,-0.152 -0.024,-0.346 0.077,-0.433c-0.117,0 -0.211,-0.142 -0.211,-0.317c0,-0.175 0.095,-0.317 0.211,-0.317c-0.101,-0.087 -0.136,-0.282 -0.077,-0.433c0.058,-0.152 0.188,-0.204 0.289,-0.116c-0.058,-0.152 -0.024,-0.346 0.077,-0.433c0.101,-0.087 0.23,-0.035 0.289,0.116Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M954.577,211.528c0,-0.292 0.189,-0.528 0.423,-0.528c0.233,0 0.423,0.237 0.423,0.528c0.117,-0.253 0.375,-0.339 0.577,-0.193c0.202,0.146 0.271,0.469 0.155,0.722c0.202,-0.146 0.461,-0.059 0.577,0.193c0.117,0.253 0.047,0.576 -0.155,0.722c0.233,0 0.423,0.237 0.423,0.528c0,0.292 -0.189,0.528 -0.423,0.528c0.202,0.146 0.271,0.469 0.155,0.722c-0.117,0.253 -0.375,0.339 -0.577,0.193c0.117,0.253 0.047,0.576 -0.155,0.722c-0.202,0.146 -0.461,0.059 -0.577,-0.193c0,0.292 -0.189,0.528 -0.423,0.528c-0.233,0 -0.423,-0.237 -0.423,-0.528c-0.117,0.253 -0.375,0.339 -0.577,0.193c-0.202,-0.146 -0.271,-0.469 -0.155,-0.722c-0.202,0.146 -0.461,0.059 -0.577,-0.193c-0.117,-0.253 -0.047,-0.576 0.155,-0.722c-0.233,0 -0.423,-0.237 -0.423,-0.528c0,-0.292 0.189,-0.528 0.423,-0.528c-0.202,-0.146 -0.271,-0.469 -0.155,-0.722c0.117,-0.253 0.375,-0.339 0.577,-0.193c-0.117,-0.253 -0.047,-0.576 0.155,-0.722c0.202,-0.146 0.461,-0.059 0.577,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M870.5,253l2.031,5.5l3.913,-1.7l-0.628,3.8l6.572,-0l-5.317,3.399l3.046,2.75l-4.301,0.649l2.031,5.5l-5.317,-3.399l-2.031,3.399l-2.031,-3.399l-5.317,3.399l2.031,-5.5l-4.301,-0.649l3.046,-2.75l-5.317,-3.399l6.572,0l-0.628,-3.8l3.913,1.7l2.031,-5.5Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1541.5,704l3.33,10.25l6.418,-3.167l-1.029,7.083l10.777,-0l-8.719,6.335l4.996,5.125l-7.054,1.21l3.33,10.25l-8.719,-6.335l-3.33,6.335l-3.33,-6.335l-8.719,6.335l3.33,-10.25l-7.054,-1.21l4.996,-5.125l-8.719,-6.335l10.777,0l-1.029,-7.083l6.418,3.167l3.33,-10.25Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M991.032,377.026l0.175,0.853c0.339,0.052 0.671,0.141 0.991,0.266l0.578,-0.651c0.324,0.147 0.632,0.325 0.921,0.532l-0.275,0.826c0.268,0.214 0.511,0.458 0.726,0.726l0.826,-0.275c0.207,0.289 0.385,0.598 0.532,0.921l-0.651,0.578c0.125,0.32 0.214,0.652 0.266,0.991l0.853,0.175c0.034,0.354 0.034,0.71 0,1.064l-0.853,0.175c-0.052,0.339 -0.141,0.671 -0.266,0.991l0.651,0.578c-0.147,0.324 -0.325,0.632 -0.532,0.921l-0.826,-0.275c-0.214,0.268 -0.458,0.511 -0.726,0.726l0.275,0.826c-0.289,0.207 -0.598,0.385 -0.921,0.532l-0.578,-0.651c-0.32,0.125 -0.652,0.214 -0.991,0.266l-0.175,0.853c-0.354,0.034 -0.71,0.034 -1.064,0l-0.175,-0.853c-0.339,-0.052 -0.671,-0.141 -0.991,-0.266l-0.578,0.651c-0.324,-0.147 -0.632,-0.325 -0.921,-0.532l0.275,-0.826c-0.268,-0.214 -0.511,-0.458 -0.726,-0.726l-0.826,0.275c-0.207,-0.289 -0.385,-0.598 -0.532,-0.921l0.651,-0.578c-0.125,-0.32 -0.214,-0.652 -0.266,-0.991l-0.853,-0.175c-0.034,-0.354 -0.034,-0.71 0,-1.064l0.853,-0.175c0.052,-0.339 0.141,-0.671 0.266,-0.991l-0.651,-0.578c0.147,-0.324 0.325,-0.632 0.532,-0.921l0.826,0.275c0.214,-0.268 0.458,-0.511 0.726,-0.726l-0.275,-0.826c0.289,-0.207 0.598,-0.385 0.921,-0.532l0.578,0.651c0.32,-0.125 0.652,-0.214 0.991,-0.266l0.175,-0.853c0.354,-0.034 0.71,-0.034 1.064,0Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <ellipse
          cx={928}
          cy={666.5}
          rx={6}
          ry={5.5}
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M939.5,881l0,-7l0,7c2.07,-3.346 3.75,-6.062 3.75,-6.062c0,0 -1.68,2.716 -3.75,6.062c3.585,-1.932 6.495,-3.5 6.495,-3.5c0,0 -2.91,1.568 -6.495,3.5l7.5,0l-7.5,0c3.585,1.932 6.495,3.5 6.495,3.5c0,0 -2.91,-1.568 -6.495,-3.5c2.07,3.346 3.75,6.062 3.75,6.062c0,0 -1.68,-2.716 -3.75,-6.062l0,7l0,-7c-2.07,3.346 -3.75,6.062 -3.75,6.062c0,0 1.68,-2.716 3.75,-6.062c-3.585,1.932 -6.495,3.5 -6.495,3.5c0,0 2.91,-1.568 6.495,-3.5l-7.5,0l7.5,0c-3.585,-1.932 -6.495,-3.5 -6.495,-3.5c0,0 2.91,1.568 6.495,3.5c-2.07,-3.346 -3.75,-6.062 -3.75,-6.062c0,0 1.68,2.716 3.75,6.062Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M841.948,1024.805c0,-3.204 0.023,-5.805 0.052,-5.805c0.029,0 0.052,2.601 0.052,5.805c1.602,-2.774 2.923,-5.015 2.948,-5.001c0.025,0.014 -1.255,2.279 -2.857,5.053c2.774,-1.602 5.039,-2.882 5.053,-2.857c0.014,0.025 -2.226,1.346 -5.001,2.948c3.204,0 5.805,0.023 5.805,0.052c0,0.029 -2.601,0.052 -5.805,0.052c2.774,1.602 5.015,2.923 5.001,2.948c-0.014,0.025 -2.279,-1.255 -5.053,-2.857c1.602,2.774 2.882,5.039 2.857,5.053c-0.025,0.014 -1.346,-2.226 -2.948,-5.001c0,3.204 -0.023,5.805 -0.052,5.805c-0.029,0 -0.052,-2.601 -0.052,-5.805c-1.602,2.774 -2.923,5.015 -2.948,5.001c-0.025,-0.014 1.255,-2.279 2.857,-5.053c-2.774,1.602 -5.039,2.882 -5.053,2.857c-0.014,-0.025 2.226,-1.346 5.001,-2.948c-3.204,0 -5.805,-0.023 -5.805,-0.052c0,-0.029 2.601,-0.052 5.805,-0.052c-2.774,-1.602 -5.015,-2.923 -5.001,-2.948c0.014,-0.025 2.279,1.255 5.053,2.857c-1.602,-2.774 -2.882,-5.039 -2.857,-5.053c0.025,-0.014 1.346,2.226 2.948,5.001Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M930.155,1180.845c0,-0.467 0.379,-0.845 0.845,-0.845c0.467,0 0.845,0.379 0.845,0.845c0.233,-0.404 0.751,-0.543 1.155,-0.309c0.404,0.233 0.543,0.751 0.309,1.155c0.404,-0.233 0.921,-0.095 1.155,0.309c0.233,0.404 0.095,0.921 -0.309,1.155c0.467,0 0.845,0.379 0.845,0.845c0,0.467 -0.379,0.845 -0.845,0.845c0.404,0.233 0.543,0.751 0.309,1.155c-0.233,0.404 -0.751,0.543 -1.155,0.309c0.233,0.404 0.095,0.921 -0.309,1.155c-0.404,0.233 -0.921,0.095 -1.155,-0.309c-0,0.467 -0.379,0.845 -0.845,0.845c-0.467,0 -0.845,-0.379 -0.845,-0.845c-0.233,0.404 -0.751,0.543 -1.155,0.309c-0.404,-0.233 -0.543,-0.751 -0.309,-1.155c-0.404,0.233 -0.921,0.095 -1.155,-0.309c-0.233,-0.404 -0.095,-0.921 0.309,-1.155c-0.467,-0 -0.845,-0.379 -0.845,-0.845c0,-0.467 0.379,-0.845 0.845,-0.845c-0.404,-0.233 -0.543,-0.751 -0.309,-1.155c0.233,-0.404 0.751,-0.543 1.155,-0.309c-0.233,-0.404 -0.095,-0.921 0.309,-1.155c0.404,-0.233 0.921,-0.095 1.155,0.309Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1020.943,1319.057c0,-0.583 0.473,-1.057 1.057,-1.057c0.583,0 1.057,0.473 1.057,1.057c0.292,-0.505 0.938,-0.678 1.443,-0.387c0.505,0.292 0.678,0.938 0.387,1.443c0.505,-0.292 1.152,-0.118 1.443,0.387c0.292,0.505 0.118,1.152 -0.387,1.443c0.583,0 1.057,0.473 1.057,1.057c0,0.583 -0.473,1.057 -1.057,1.057c0.505,0.292 0.678,0.938 0.387,1.443c-0.292,0.505 -0.938,0.678 -1.443,0.387c0.292,0.505 0.118,1.152 -0.387,1.443c-0.505,0.292 -1.152,0.118 -1.443,-0.387c-0,0.583 -0.473,1.057 -1.057,1.057c-0.583,0 -1.057,-0.473 -1.057,-1.057c-0.292,0.505 -0.938,0.678 -1.443,0.387c-0.505,-0.292 -0.678,-0.938 -0.387,-1.443c-0.505,0.292 -1.152,0.118 -1.443,-0.387c-0.292,-0.505 -0.118,-1.152 0.387,-1.443c-0.583,-0 -1.057,-0.473 -1.057,-1.057c0,-0.583 0.473,-1.057 1.057,-1.057c-0.505,-0.292 -0.678,-0.938 -0.387,-1.443c0.292,-0.505 0.938,-0.678 1.443,-0.387c-0.292,-0.505 -0.118,-1.152 0.387,-1.443c0.505,-0.292 1.152,-0.118 1.443,0.387Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M848,1313l0,-2l0,2c0.552,-0.956 1,-1.732 1,-1.732c0,0 -0.448,0.776 -1,1.732c0.956,-0.552 1.732,-1 1.732,-1c0,0 -0.776,0.448 -1.732,1l2,0l-2,0c0.956,0.552 1.732,1 1.732,1c0,0 -0.776,-0.448 -1.732,-1c0.552,0.956 1,1.732 1,1.732c0,0 -0.448,-0.776 -1,-1.732l0,2l0,-2c-0.552,0.956 -1,1.732 -1,1.732c0,0 0.448,-0.776 1,-1.732c-0.956,0.552 -1.732,1 -1.732,1c0,0 0.776,-0.448 1.732,-1l-2,0l2,0c-0.956,-0.552 -1.732,-1 -1.732,-1c0,0 0.776,0.448 1.732,1c-0.552,-0.956 -1,-1.732 -1,-1.732c0,0 0.448,0.776 1,1.732Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M1449.183,723.317c0,-0.175 0.142,-0.317 0.317,-0.317c0.175,0 0.317,0.142 0.317,0.317c0.087,-0.152 0.282,-0.204 0.433,-0.116c0.152,0.087 0.204,0.282 0.116,0.433c0.152,-0.087 0.346,-0.035 0.433,0.116c0.087,0.152 0.035,0.346 -0.116,0.433c0.175,0 0.317,0.142 0.317,0.317c0,0.175 -0.142,0.317 -0.317,0.317c0.152,0.087 0.204,0.282 0.116,0.433c-0.087,0.152 -0.282,0.204 -0.433,0.116c0.087,0.152 0.035,0.346 -0.116,0.433c-0.152,0.087 -0.346,0.035 -0.433,-0.116c-0,0.175 -0.142,0.317 -0.317,0.317c-0.175,0 -0.317,-0.142 -0.317,-0.317c-0.087,0.152 -0.282,0.204 -0.433,0.116c-0.152,-0.087 -0.204,-0.282 -0.116,-0.433c-0.152,0.087 -0.346,0.035 -0.433,-0.116c-0.087,-0.152 -0.035,-0.346 0.116,-0.433c-0.175,-0 -0.317,-0.142 -0.317,-0.317c0,-0.175 0.142,-0.317 0.317,-0.317c-0.152,-0.087 -0.204,-0.282 -0.116,-0.433c0.087,-0.152 0.282,-0.204 0.433,-0.116c-0.087,-0.152 -0.035,-0.346 0.116,-0.433c0.152,-0.087 0.346,-0.035 0.433,0.116Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path d="M1439,807c22.787,-23.55 45.294,-47.37 68.081,-70.92c0.228,-0.236 0.581,-0.376 0.91,-0.379c0.017,-0 0.926,0.371 0.929,0.38c0.129,0.302 0.376,0.581 0.379,0.91c0.002,0.328 -0.133,0.683 -0.366,0.915c-23.219,23.124 -46.714,45.971 -69.933,69.094Z" />
        <path
          d="M779.972,215.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path d="M1472,727c14,-0.726 27.969,-1.989 41.969,-2.715c0.434,-0.022 0.899,0.175 1.213,0.475c0.012,0.012 0.536,1.2 0.533,1.209c-0.156,0.405 -0.175,0.899 -0.475,1.213c-0.3,0.314 -0.755,0.534 -1.189,0.532c-14.019,-0.059 -28.032,-0.655 -42.051,-0.714Z" />
        <path
          d="M770,1388l0,-3l0,3c0.828,-1.434 1.5,-2.598 1.5,-2.598c0,0 -0.672,1.164 -1.5,2.598c1.434,-0.828 2.598,-1.5 2.598,-1.5c0,0 -1.164,0.672 -2.598,1.5l3,0l-3,0c1.434,0.828 2.598,1.5 2.598,1.5c0,0 -1.164,-0.672 -2.598,-1.5c0.828,1.434 1.5,2.598 1.5,2.598c0,0 -0.672,-1.164 -1.5,-2.598l0,3l0,-3c-0.828,1.434 -1.5,2.598 -1.5,2.598c0,0 0.672,-1.164 1.5,-2.598c-1.434,0.828 -2.598,1.5 -2.598,1.5c0,0 1.164,-0.672 2.598,-1.5l-3,0l3,0c-1.434,-0.828 -2.598,-1.5 -2.598,-1.5c0,0 1.164,0.672 2.598,1.5c-0.828,-1.434 -1.5,-2.598 -1.5,-2.598c0,0 0.672,1.164 1.5,2.598Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
        <path
          d="M743.972,745.528c0,-0.292 0.237,-0.528 0.528,-0.528c0.292,0 0.528,0.237 0.528,0.528c0.146,-0.253 0.469,-0.339 0.722,-0.193c0.253,0.146 0.339,0.469 0.193,0.722c0.253,-0.146 0.576,-0.059 0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c0.292,0 0.528,0.237 0.528,0.528c0,0.292 -0.237,0.528 -0.528,0.528c0.253,0.146 0.339,0.469 0.193,0.722c-0.146,0.253 -0.469,0.339 -0.722,0.193c0.146,0.253 0.059,0.576 -0.193,0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0,0.292 -0.237,0.528 -0.528,0.528c-0.292,0 -0.528,-0.237 -0.528,-0.528c-0.146,0.253 -0.469,0.339 -0.722,0.193c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c-0.253,0.146 -0.576,0.059 -0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c-0.292,-0 -0.528,-0.237 -0.528,-0.528c0,-0.292 0.237,-0.528 0.528,-0.528c-0.253,-0.146 -0.339,-0.469 -0.193,-0.722c0.146,-0.253 0.469,-0.339 0.722,-0.193c-0.146,-0.253 -0.059,-0.576 0.193,-0.722c0.253,-0.146 0.576,-0.059 0.722,0.193Z"
          style={{
            
            strokeWidth: "3.13px",
          }}
        />
      </g>
      <g id="InvisiPath">
        {constellationPaths.map((pathD, index) => (
          <React.Fragment key={`path-${index}`}>
            {/* The Path Itself */}
            <motion.path
              id={`Path${index + 1}Safe`}
              d={pathD}
              style={{
                fill: "none",
                // Inherit stroke color from parent SVG class
                stroke: isHovered ? colors[index % colors.length] : "currentColor", 
                strokeWidth: "2px",
                fillOpacity: 0,
              }}
              variants={pathVariants}
              initial="visible"
              animate={isHovered ? "hover" : "visible"}
              custom={index}
            />
            {/* The Pulse/Sphere traveling along the path */}
            {/* We render a sphere for ALL paths now */}
             <motion.circle
                r="12"
                style={{
                    offsetPath: `path("${pathD}")`,
                    fill: colors[index % colors.length]
                }}
                variants={sphereVariants}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate="animate"
                custom={index}
            />
          </React.Fragment>
        ))}
      </g>
    </g>
    <defs>
      <image
        id="_Image1"
        width="130px"
        height="360px"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAFoCAYAAACbqyOtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAANN0lEQVR4nO3dedDVdR3F8fd92HcUUNAQFBcCRARRXFI0FzTLlDYXrNyycsnKVCwtLdtdsn2ZZrJsmbI9SVPU1CjTKNvMUnNBTA0UxRWe/jje+V2nf2rKOc/zfM5rhv/PDGcOl3u/v98X4BTgw0A/orSrgW7gcHeQ8Ho1KsJtZBVK6wJuRWU4wpwlzF5Fswr9zVnCqAv4HSrDInOWMFuIinA7WYXSuoDfojIcac4SZoeQVQievwqvN2cJs4NREf5KVqG0LmA5KsMbvFHC7ZWoCH8DBpizhFEL+A0qw1HmLGF2ECrCHWQVSutchaPNWcKsvQp3klUorQXcgspwjDlLmL2CZhUGmrOEUQu4GZXhWHOWMHs5KsJdZBVKawG/RmU4zpwlzA5ERfg7WYXSWsBNqAxvMmcJs5ehItwNDDJnCaMW8CtUhuPNWcLsAFSEe8gqlNYCfonK8GZzljDbn6xCoFVYhsrwFnOWMFuAinAvMNicJYw6V+EEc5Yw2w8V4T6yCqW1gF+gMpxozhJm+6IirCCrUFoLuBGV4SRzljDrXIUh5ixh1AJuQGU42ZwlzPZBRbifrEJpLeB6VIa3mbOE2d6oCCuBoeYsYdQCfo7KcIo5S5i9lKxCoFW4DpXh7eYsYbYXKsIDwDBzljDqXIV3mLOE2Z6oCP8gq1BaC7gWleFUc5Ywm4+K8CBZhfKuQWV4lzlHmM2nWYXh3ijhthSV4TR3kPDaAxXhIbIK5bXvjjrdHSS8dkdFeBgYYc4SZlehMpzhDhJeL6FZhZHmLGH2M1SGxe4g4bUbKsI/ySqUdyUqw5nuIOG1K80qjDJnCbMrUBne7Q4SXu1VWEVWobz2KpzlDhJeu9CswmhzljD7KSrD2e4g4bUzKsJqsgo2/dwB0Mu4dgamA0+hE01R1DyyClY9YRFAqzAPmAE8TVahtJ3QKjwCbGDOUk5PWQTQK/p2olmFpd444bQjWoVHgQ3NWUrpSYsAWoUd0So8Q1ahtKyCQU9bBNAqzEWr8Cw6/RxFzUWrsAYYY85SQk9cBNCLO3cgqxCoCO1VGGvO0uf11EUArcIcYFtgPXomIoqag1bhMbIKL6ievAig1/nOQZ8VutEzEVHUbJpVGGfO0mf19EUArcJs9Fkhq1Dc9qgEj5NVeEH0hkUAvc53e7QKoCeloqjOVdjInKXP6S2LAFqFWWgVWmQVSpuFVmEtsLE5S5/SmxYBtArb0azCFd444bQdzSqMN2fpM3rbIoBe/T/zuT9dZBVKm0lW4f+qNy4CaBW2RYXoh56fjKLaq/AEMMGcpdfrrYsAWoUZqBD9gSXeOOHU/iEqq/A/6s2LALomaDr6L+UAsgqltQ+tPAlsYs7Sa/X2RYBmFWYCA4HLvXHCaQY64PoksKk5S6/UFxYBtArT0GeFrEJx09EqPEVW4b/WVxYBdHnYi9EqDAJ+4o0TTtNoVmGiOUuv0pcWAbQKU8kqBPrnIavwX+priwC6UnAbdKxtMPBjb5xwmopW4WlgM3OWXqEvLgJoFbZGqzCErEJpU4F1aBUmmbP0eH11EeDfV+FH3jjhtA1Zhf9IX14E0EWjW6HH5YYBP/TGCaet0So8A0z2Rum5+voigFZhS7QKw8kqlNa5Cpubs/RIFRYBtApTaFbhB9444bQVzSpsYc7S41RZBND1w+1VGEFWobQt0St9n0WliOdUWgTQKmxBswrf98YJp85V2NKcpceotgigVdgcvbtxJFmF0qaQVXieiosAupR8MlqFUcD3rGnCagu0COvQdwylVV0E0CpMIqsQaBWeQauwtTlLmH0RPVZ/iTtIeG1OswrbmLOE2RfQKnzVHSS8JtOswlRvlHD7PFqFr7mDhNdktArrySqU9zm0Cpe6g4TXJJpVmGbOEmbtVfi6O0h4TUJPRq1H72WKwj6LVuEb7iDhtRlZhXjOZ9AqfNMdJLwm0qzCDHOWMPs0WoVvuYOE10T0drZumuuIo6hPoSJ82x0kvF5EswozzVnC7JOoCN9xBwmvzlXYzpwlzC5GRbjMHSS8NkU3xHSjV/ZFYZ9ARfiuO0h4bUKzCtubs4TZRagIeTKquM5VmG3OEmbtVci7FYqbgO6j7gbmmLOE2YWoCHk7W3Gdq7CDOUuYXYCKkPc7FzeeZhXmmrOE2fmoCLk3qrjxwFpUhh3NWcLs46gIuXm2uI1pVmEnc5Yw+xgqwuXuIOHVuQrzzFnC7KOoCEvcQcJrI+BxVIadzVnC7COoCD91BwmvzlXYxZwlzD6MinCFO0h4jaNZhV3NWcKsvQpXuoOE1zjgMVSG3cxZwuxDqAg/cwcJr7E0q/ASc5Yw+yAqwlXuIOE1FliDyrC7OUuYnYeKsNQdJLzG0KzCfG+UcPsAKsI15hxhNgZ4lKxCAO9HRbgWaJmzhNGGNKuwpzlLmJ2LinAdWYXSNgQeQWV4qTlLmJ2DivBzsgqlbUCzCnubs4TZ+1ARrierUNoGwGpUhn3MWcLsvagIN5BVKG00zSrsa84SZu9FRbiRrEJpnauwnzlLmJ2NirCMrEJpo4FVqAwLzFnC7CxUhF+SVShtFM0q7G/OEmbvQUX4FVmF0kYB/0RlOMCcJczejYpwE1mF0kbSrMKB5ixhdiYqwq/JKpQ2EngYleHl5ixhthgV4WayCqV1rsIrzFnC7AxUhFvIKpQ2AngIleEgc5YwOx0V4TdkFUrrXIVXmrOEWXsVlgNd5ixhNJxmFQ42Zwmz01ARfktWobThwIOoDIeYs4TZu1ARfkdWobRhNKuw0JwlzE5FRbiVrEJpw4B/oDK8ypwlzN5JViHQKjyAyvAac5Ywewcqwh/IKpTWuQqvNWcJs7fTrEI/c5YwGgqsRGV4nTlLmJ2CivBHsgqlda7CoeYsYfY2VIQ/kVUobQhwPyrDYeYsYdZehT+TVSitcxUON2cJs5NREW4D+puzhNEQYAUqwxHmLGF2EirCX8gqlDaYZhUWmbOE2YmoCLeTVShtMHAfKsPrzVnC7ARUhL+SVShtMHAvKsMbvFHC7a1kFYLnr8IbzVnC7C2oCH8DBpizhNEg4B5UhqPMWcLszagId5BVKG0QcDcqw9HmLGF2PCrCncBAc5Yw6lyFY8xZwqy9CneRVShtIM0qHGvOEmZvQkX4O1mF0gaiEnQDx5mzhNlxZBUC/eXfhcpwvDdKuB2LinA3+q9lFDUQfbnUjb6CjsLav0yuzCtX6hpE87b3Vc4g4TMA+B7NE9Qbe+OEQz/g6zSHVTb1xgmHLuBLNN8hTPLGCYcWcDEqwX3AFG+ccGgBH0IleACY6o0TLu2Lxx8GtjVnCZP2W9dWA7PNWcKk/ZPzGmCeOUuYLALWA2uB3c1ZwmQhsA54EtjbnCVMDgCefu7Py8xZwmQvtALPkpvgytoFeAx9LsireIuaAzxC3oVQ2gz0RVEOmBS2Fc2b2U8xZwmTSTQPq5xhzhImm6CzBN3AOeYsYTIO3dbSDXwE/bIYxWwALEcl+AQpQUkjgGWoBF8gdz2WNBS4BpXgK+RijpIGAUtQCb5F3pdY0gDgu6gE3ycvwiqpH3ApKsHl5PnEkrqAL6ISXI1uZoliWsBFqATXA8O9ccLlPFSCm4BR5ixhciYqwXJgQ3OWMGlf4PkH9DVyFNR+p9HtwARzljA5Ah0vuxOYaM4SJoegg6b3AJubs4RJ+9j5/cDW5ixhsifwBPAgMN2cJUzax85XAbPMWcJkNnoq+VFgrjlLmEwHHkJrsKs5S5hshT4UPoE+H0RB7WPnTwELzFnCZBN0C+szwEHmLGEyDv1usA54jTlLmIwGbkFfHS8yZwmTEcAvyL1JpQ0BlqISnGjOEiaD0CHTbuBUc5Yw6Q9chkpwljlLmPQDvoZKcB55HrGkFvB5VIILSAlKagEXohJ8hpSgrA+gEnyZPJlc1mJUgkvJk8llnYxKcBl5KLWsY1AJfkyu0i3rcPTbwZXAYHOWMDkYHTu/DhhmzhIm+6Nj58vQD0pR0Hx0vOxm9NNyFDQPHTS9FRhjzhIm26Nj538m1+WWNQ09gZTrcgvbElhBrsstbRIqwApUiChoAnpJRa7LLWwsOnae63ILax87X43uRYqChgM3ou8KdjZnCZMh6I2ma4E9zFnCZCDwE3RR5j7mLGHSH/g2eij1QHOWMOkCLkE/Jy80ZwmTFvA5dLDkMHOWMGmhZw66gTeas4TRueS63PJOJ9fllncSKsFid5DwOZpcl1veYeh/Bx8lzyOW1T52fjEpQVkL0LHzXJdb2B7o2Pkl5KHUsuYBa8h1uaXNQq+7/wF5Mrms9rHzJeS63LKmoNPGS4Gh5ixhshlwF3ADuS63rPHAX8h1uaWNBX5PrsstbTR6NP2P5LrcsoajzwO5LrewIcBV5Lrc0gait5fdS67LLat97HwluS63rC7gK+S63NJawGfJdbmltYDz0XW5O5qzhNE5wOPAbu4g4XMaOliylztI+JxIrsst7yh0zjDX5RZ2KCpBrsstbE/0z8GR7iDhdSh6BiF6iH8BzO0cMM4BmKkAAAAASUVORK5CYII="
      />
      <image
        id="_Image2"
        width="80px"
        height="225px"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAADhCAYAAABfhzJ9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGu0lEQVR4nO3dV4yUdRSG8Wd2l94RELFEisZIMTZETQQEgwUwQMSaaIyY6IUavdBELjQRSdQoFhIbGguwYqPYsGCBCNiIYImCXRF7A0QE9OJksmpkYb8DnDm77++ShN2TyZz5ZuaZ/U81MAboAXyCFDIVeBcoRQ+S1WDgL2BA9CBZVQFfAZOjB8nsRuwxUGtc0OHYGh8ZPUhWJWAVcEv0IJldA6wBaqIHyaoftsbDowfJ7B1gWvQQmV0J/Ay0iB4kqz7YGp8cPUhmrwG10UNkdimwHmgbPUhWewFbgDOiB8nsZWBe9BCZXQBsBDpHD5JVV2ATMCF6kMyeARZED5HZ2djFpEf0IFl1AP4ALokeJLPHsSfWUtB47KVdn+hBsmoNrAUmRg+S2XSUPV1Goezp0hz4CWVPl7tR9nQZjrKnSzVW7JQ9HW5F2dPlKJQ9XaqAz1D2dLkOZU+Xg1H2dCkBH6Ds6XIVyp4uB2BrrOzpsAxlT5fLUfZ02RdbY2VPh1dR9nS5CGVPl+7AZpQ9XV4AlkYPkdkE7GLSO3qQrDoDf2KfrZaCnsA+3S8FnYmtcf/oQbJqB/wOXBs9SGazgI9R9ixsLLbGg6IHyaoV8Ctwc/Qgmd0HfI01ZCngBGyNh0UPklUz4HuUPV1uR9nTZQjKni7V2BEqyp4ON6Hs6TIQZU+XEvARyp4uk1D2dOmPsqdLCfvbEmVPh4koe7qUj1BR9nR4HWVPl8tQ9nTZG7sBlT0dXkHZ0+VClD1dumFHqCh7OsxH2dPlHJQ9XTpiR6goezrMRtnT5VSUPV3aAOuw4wOkoBnYARbKngWNxtZ4dPQgWbXA7oEzowfJbBr2WNgmepCsjsPW+PToQbKqAb4B5kYPktltKHu6HI2t8XnRg2RVBXyO/amYFHQ9lj33iB4kq0NQ9nQpAR+i7OlyNcqeLgei7On2NsqeLleg7OnSE7sBlT0dFqPs6XIxyp4ue2CvSpQ9HRag7OlyPsqeLrthR6goezo8ibKny1koe7q0x45QUfZ0eARlT5dxKHu6lI9QUfZ0uB9lT5cTUfZ0aQb8gLKnyx0kyJ5V0QPUoxZ7f3B89CBZVQOrgSXRg2Q2BbuY9IoeZGsqeYWh7iXdaaFTJFbCvhBwRfQgmU3G1rhf9CBZDcBuwEnRg2RVAt7DTkOquOxZ6RcRsHvfTOxKPDB4lrT2w27IKdGDZPYGFZg9M6xwWS32HSZDgudIax9sjZU9HRZSYdkz0wqDrXFHYET0IFl1w77HSdnT4VkqKHtmW2GwNW6NPr1QWEes2Cl7OsyhQrJnRT2rb6DxwCrgrehBMiofoaLs6TCTCsieGa/CZcqeTi2w7y5R9nS4h+DsmXmFoe57S5Q9C6oBvkXZ02Uqgdkz+wpD3RrrI8EFVQFfUKHZM4sbsDU+InqQrA5F2dOlBKwkIHs2hosI1H16oTswOHiWtMpHqNwVPUhmy4Efgea76hc2lhUumwl0QtmzsF7YGs+IHiSzJezC7NnYVhjqsueo6EGy6oG91T8nepDMXsSyZ6ed/YsyZ836tMS+ZXslsCx4lpS6YEeoPB89SGZPsQuyZ2NdYbBnGGOx9wp1TmsB7YENKHu6PMpOzp6NeYXBHgPHY+VuYfAsKbUCfkPZ0+UBdmL2bIyvhf9L2dOpOXaEirKnw53spOzZFFYYtMZu1Vjy3OHZs6ncAzcDs1D2dBmEsqdLCfiUHZw9m8oKg937alH2dDkIZU+XEvA+OzB7NqUVhroPISl7OuyP3ZDKng5vsoOyZ2N/Q3VrOgDHo+xZWPkIFWVPh0XYS7zunh/SVFcY7Ep8Esqehe2O3QMXRw+S2XPYY2HPoj+gKa8w2JsKo7HvfF8UPEtKnbDng8ujB8lsLrbGfYv856a+wmXjsFPhFkQPklFbYD3Kni612Bo3+JBbrbDZhJ27sA6YHzxLSi2BX6jAQ24zuRdb42OjB8lqBMqeLjXAdzQweza1JlKfTcDDKHu6HIOyp0sV8CUNyJ5a4X/bAjyEsqfLYSh7upSws1m3K3vqWff/6woMRdmzsL4oe7qtYDuyp1Z46zoBw1H2LKw3tsbKng5L2Ub21ArXrx32uljZs6A9sVcnyp4OL1FP9tQKb1tLYCTKnoV1wd4rVPZ0eJqtZE+t8PapBsag7FlYB+wIldXoTlfYY9gaD/3nP+rW3H5bgFOw9wnnBc+SUmvsCJVdeshtY/MgtsYjowfJaiR2A06PHiSr5tgKr8VWWlmzgTZiB5q1QdmzsGHYGs+OHiSramAN9sS6ZU3wMBltBs4F+gAb/gbPKHnKIc1WdAAAAABJRU5ErkJggg=="
      />
      <image
        id="_Image3"
        width="94px"
        height="140px"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAACMCAYAAAD1JB5KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADxklEQVR4nO3aR9JVVRiF4Xdfemb9EygoYs8xmHMoFfgJYs7Zadg1R8xKxoSKOXVsWM7AnEmKsWFHbHy1izOCsxprPSNY9dWu9zbuWQDcA5wMfEaMaj3wH3CKeoibKWAX8AVwiHiLneXAAeBe9RBHG6jknKoe4ibJEerJuU89xNFGkhyJKWA3SY7ECpIcmSRHZJpKzpfAoeItdlZSyblfPcTRJur4p6mHuOnJ+YokZ3Q9OQ+ohzjaTB3/dPUQN9PAHpIciXmSHJkkR2SGJEemJ+dB9RBHW6jjnyHeYacn52vgMPEWO6uoV/+QeoijrSQ5EjPAXpIcidUkOTI9OWeqh7iZpZLzDUnO6HpyHlYPcbSNOv5Z6iFukhyhNdSrf0Q9xE0DtpPkSMwC+0hyJNaS5EgkOUJzVHK+BQ7XTvHTk/OoeoibBrxEHf9s8RY7SY7Q5dSrf0w9xE0DXqaOf454i5054FeSHIl1JDkSSY7QQio53wFHiLfY6cl5XD3ETQNeoY5/rniLnZ6c70lyRncF9eqfUA9x04BXqeOfJ95iZyHwG0mOxJUkORJJjtAiDibnSPEWOz0569VD3DTgNer454u32OnJ+YEkZ3RXkeRINGAHSY7EImA/SY7E1dSrf1I9xM0wOReIt9g5liRHpifnKfUQNw14nTr+heItdnpyfgSOEm+xcw1JjkQD3iDJkUhyhK6lXv3T6iFuhsm5SLzFznHA78BPJDmj68l5Rj3EzTA5F4u32Bkm52jxFjvXkeRINOBNkhyJJEfoeurVPyveYacBO0lyJBZTyfmZJGd0PTnPqYe4GSbnEvEWO4uBP0hyJG4gyZFowFskORJLSHJkbqRe/fPqIW4a8DZJjkRPzi/AMeItdnpyXlAPcTNMzqXiLXaWAH+S5EjcRJIj0YB3SHIkjifJkbmZevUvqoe4acC71PEvE2+x05OzC5gSb7HTk7NBPcTNMDnLxVvsJDlCt5DkSDTgPZIciROAv0hyJG6lXv1G9RA3w+SsEG+x05OzG5gWb7HTk7NJPcRNA96njr9SvMXOUpIcmdtIciQa8AFJjsRS4G+SHInbqVe/WT3EzYSDyZkXb7FzIpWcPcCMeIudnpwt6iFuJsCH1PFXibfYSXKE7iDJkUhyhJIcoTupV79VPcTNBPiIOv5q8RY7y6jk7AVmxVvs9ORsUw9xM0zOGvEWO8uAf0hyJO4iyZGYAB+T5EicRJIjczf16rdT/9vGSCbAJ9Tx14q32OnJ2QfMLRCPcbKf+iBqHvg3hx/X59SP7Kf/AzE9FvEH56d6AAAAAElFTkSuQmCC"
      />
      <image
        id="_Image4"
        width="109px"
        height="156px"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAACcCAYAAAB1NiXqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGiElEQVR4nO3dfayXYxzH8ffvnNMRPYlQEkkJIXloqcy0ZC1jTbRoyNBEm8c0D1nUskjGsqytMS3z0BoTlrY8LxpmLSR5jKwQPdPh54+ve1/nr+v673ud7fP67/z32T67rt997vu+vncj0la0BwYBe6ODSJ4a8BpQB8YFZ5FMU7DC/gGGBWeRDP2BPVhpDwVnkQztgLVYYeuw3zUp3EyssL+A04KzSIYhQAtW2l3BWSRDR2AjVtj7QFNsHMmxECtsN9AvOItkGIMVVgduCM4iGQ4DfsYKex37p1oKVgOWY4X9BhwZG0dyTMK3xfHBWSRDH2AnVtizwVkkQyPwLlbYj8AhsXEkx3R8W7wgOItkGITdoqoDTwRnkQwHAuuxwjYCHWLjSI75WGF/A2cHZ5EMI/HfsdnBWSRDV2AzVtgnQHNsHMmxFCvsT+Dk4CySYQK+Ld4enEUy9AK2Y4W9hf1TLQVrAFZhhe0Ejo2NIzluxrfFa4KzSIYBwD6ssJfRM7LiNWOX9XVgG3BEbBzJMQffFscGZ5EMw7HXuOvA08FZJENn4BussO+BLrFxJMdifFscEZxFMozFC3s0OItk6I5dJdaBz7FnZlKwGrACK6wFODM2juSYjG+L9wVnkQz9sPfu68CH2LkyKVgTsAYrbC9wQmwcyTED3xanBmeRDGfhB/9WYY9gpGAdgA1YYb9jDzmlcAvwbXFicBbJMBov7EX0jKx43YAtWGE///e3FKwGLMNX2YWxcSTHlXhhi4KzSIbewA6ssK+BTqFpJKkReBsfKnZObBzJcQe+Lc4NziIZBuIH/9YBB8TGkZT2WFHVULGBsXEkxzx8W5wenEUyjMALew8dmCjewdirb3VgF9A3No7kWIKvssnBWSTDeLywV9HN4OL1xIaJ1YFfgR6xcSSlAViJr7LLYuNIjql4YUuDs0iGE7E3qaqhYl1j40hKM/ARvspGxcaRHLPwwhYEZ5EMQ7HZVHXgSzRUrHidgE34ULEhsXEkxyJ8W3wgOItkuAgv7GM0VKx4RwBbscL2YXM+pGA1bABLtcpujY0jOa7FC3sTHZgoXl/s2VgdexWud2gaSWrCPmlVrbJJsXEkx914YS+hZ2TFOxPYjxW2FTg8No6kHITN89BQsTbkMbywp2KjSI5ReGHfoaFixTsU+Akv7bzYOJJSA57HC3skNo7kmIgX9hkaKla8o4E/sML2A2fExpGUBmA1vsrujY0jOW7DC/sAfYW9eKdgH9ypA3uA/rFxJOUA4FN8ld0UG0dyzMULewM9Iyveufjs+9+Bo2LjSEoX7PZUtcquiI0jOZ7GC3sBPSMr3ji8sC1oqFjxemAH/qrSxsTGkZQa8Bpe2JOxcSTHFLywTUDH2DiS0h+721ENFRseG0dS2gFr8VX2YGwcyTETL+xTNFSseEPw2fd/AafGxpGUjsBGfJXdGRtHcizEC3sXDRUr3hi8sF3AcbFxJOUwbOZ9Vdr1sXEkpQYsxwtbgW4GF28SXpiGirUBfYCdeGmXxsaRlEbsCrEqbElsHMkxHS9sMxoqVrxB+Oz7OnB+bBxJORBYjxf2eGwcyTEfL2wDdnpTCjYSL6wFGBwbR1K6YhccVWn3x8aRHEvxwj5CX2Ev3gS8sH3ASbFxJKUXsB0v7ZbYOJLSgH15vSpsNTowUbyb8cJ2AMfExpGUAdjvV1Xa1aFpJKkZ+AQvbDl6Rla8OXhhGirWBgzHD/7VgYtj40hKZ+AbvLDFsXEkx2K8sG+xEqVgY/HC/sHOR0vBugPb8NLmxcaRlBr22ltV2HrsI99SsMl4YfuB02PjSMrxwG68tHti40hKEzZIrCpsDRoqVrwZeGF7sFUnBRuMH/yrAzfGxpGUDtinGavCVqKbwcVbgBe2HQ0VK95ovLA6cHlsHEnphs2lqgp7Dm2LRasBy/DCfsI+YCAFu4rW2+Lo2DiS0ht7KacqbGFoGklqBN7GC/sKDRUr3jS8sL+BYbFxJGUgrQ/+zYmNIyntgXVoqFibMg8v7E80VKx4I2h9eT8tNo6kHAx8jxf2DhoqVrwltB4q1ic2jqSMp/W2eF1sHEnpCfyGF/YKuhlctAbsQWZV2C/Ye4xSsKm03hYviY0jKScCe/HCnomNIynN2GiIqrAfsEt+KdgsWm+LI2PjSMpQ7K59VdhjsXEkpRP2sZ2qsC/QULHiPYyGirUpDcDX//t7NvBhUBbJ1AQ8i22HLdiLp1K4fwHYRPEE7rcFQQAAAABJRU5ErkJggg=="
      />
      <image
        id="_Image5"
        width="94px"
        height="97px"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABhCAYAAABf/hYWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD2ElEQVR4nO3dbajeYxwH8M85Z5sdznBks3VmnA3NJNsRtiU0vBreYSnloaQ8pZRYKSWUUh5KKVZKnlJLpEkekofkqSGb54gXlChKYX8vfu7u8/I83Lt+5bo+r8/Wt2/b3XV+v///umFEk2IIY9khajWMpdkhajWCI7ND1GohjskOUavFOCE7RK0OwlR2iFodgo3ZIWp1OE7PDlGr5TgrO0StVuGc7BD/JzMdF/z238+eii/3X5x6zGZO8wtGcQq+2D9x6jHbAdlP4rQzhc8HH6cec5lM/ogjcJJW/pzNdST8HY4Wv+HuHViaigzP48++JEbKFwwoS1XmuwTZi5PFv/72sTMLg9g+fYwzsUI77czYoNZ+H2ArDtPKn5FB7lvfwTZx1v9qgH9vMwNDuBvnZgep0TAewJbsIDUawSPaVDPFQjyBM7KD1GgxdmrLlBRj2IVN2UFqdChew2nJOaq0FG+JeX5T2ATeF/OdprBJ7MaG7CA1WovPxDKlKWy9GKidmB2kRhvxtfasZoot+BbrknNUaavY467NDlKjC/E9jssOUqPLRPnt5YgE14ry12QHqdEt4jN/MjtIje4Up52jknNUZwj3i3P+quQs1RnGo+KphZXJWaozgqfEeGEiOUt1FuF58cjgiuQs1RnFK2KquTw5S3XG8DY+xbLkLNUZx4f4RLv4orhl4iNnt3gXtyloQpzxPxJPKTcFTeIH8Zj4eHKW6hyPn/GeeH6nKWgDfsW74nXQpqBN+F0cNw9OzlKdLfgTb2JJcpbqbMVfeEO7XbC4i/APXhe3TTUFXY5OzHcOTM5SnetE+S+LIVtT0K2i/F3iDZWmoLtE+S9q5Rc1JF4B7fACDsiNU5dh7BDlPye2Wk0hI3halL9TvBLaFNLb33Z4Viu/qN7+thP/AxbkxqnLEnHjSIcntfKLGhcbrA6Pa1/bUVRvf9vhMa38olbiG1H+DvO7JK+ZpdVif9uJK19a+QX19rcdHtbKL6q3v+3wkBg3NIVsFvvbDg9q5Rd1ttjfdrhPK7+o88T+tsO9WvlFXSz2tx3u0cov6gpRfCeWKq38gq7XL/8OrfyituuXf3tylqr0rvDtlX9bbpy6DImzfa/87blx6jJ9f9vh5tw4dVmAZ/TLvyk3Tl0WicdFeuXfmBunLqN4Vb/8G3Lj1GX6/rbDNblx6jJ9f9vh6tw4dVmGPfrlX5Ubpy7T97cdrsyNU5c14jsRO+wTl9w1hazT39/uw6W5ceoyJb6EuBMz/Uty49RlM/7QL39bbpy6TN/f/o1jc+PU5Xz9/e36tkUpa7W46GLPv2UJudUMKt9qAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
)
}
export { ServerSafeAnimation as ReactComponent };
export default ServerSafeAnimation;
