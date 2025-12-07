"use client"

import React, { useCallback, useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

import { cn } from "@/lib/utils"
import { useShadowBleed } from "./shadow-bleed-context"

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientVariant?: "radial" | "conic"
  cardId?: string
  rowIndex?: number
  cardIndex?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 300,
  gradientVariant = "radial",
  cardId = "",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)
  const shadowBleedContext = useShadowBleed()
  
  const reset = useCallback(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
    shadowBleedContext?.unregisterHover()
  }, [gradientSize, mouseX, mouseY, shadowBleedContext])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const localX = e.clientX - rect.left
      const localY = e.clientY - rect.top
      mouseX.set(localX)
      mouseY.set(localY)
      
      if (shadowBleedContext && cardRef.current) {
        shadowBleedContext.registerHover(cardId, rect, localX, localY)
      }
    },
    [mouseX, mouseY, shadowBleedContext, cardId]
  )

  useEffect(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [gradientSize, mouseX, mouseY])

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        reset()
      }
    }

    window.addEventListener("pointerout", handleGlobalPointerOut)
    window.addEventListener("blur", reset)

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut)
      window.removeEventListener("blur", reset)
    }
  }, [reset])

  const radialGradient = useMotionTemplate`
    radial-gradient(
      ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      var(--color-2),
      var(--color-5),
      transparent 70%
    )
  `

  const conicGradient = useMotionTemplate`
    conic-gradient(
      from 0deg at ${mouseX}px ${mouseY}px,
      var(--color-1),
      var(--color-3),
      var(--color-5),
      var(--color-1)
    )
  `

  const borderGradient = gradientVariant === "conic" ? conicGradient : radialGradient

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-[inherit]",
        "shadow-lg shadow-black/10 dark:shadow-black/30 z-10 outline outline-neutral-950/10 dark:outline-white/5",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {/* Border gradient layer - visible on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: borderGradient,
        }}
      />
      
      {/* Inner card background - inset to show border */}
      <div className="absolute inset-[2px] rounded-[inherit] bg-white/95 dark:bg-black/95 backdrop-blur-sm" />
      
      {/* Subtle inner glow */}
      <motion.div
        className="pointer-events-none absolute inset-[2px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, 
              rgba(0, 206, 201, 0.06), 
              transparent 50%
            )
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  )
}
