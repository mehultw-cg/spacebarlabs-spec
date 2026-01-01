import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:-translate-y-1 hover:scale-105",
  {
    variants: {
      variant: {
        // Primary solid button
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Destructive red button
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        // Outlined button
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        // Secondary muted button
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Ghost minimal button
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        // Link styled button
        link: "text-primary underline-offset-4 hover:underline",
        // Glass button with backdrop blur
        glass:
          "backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 text-foreground hover:bg-white/20 dark:hover:bg-black/30",
        // Gradient button with solid gradient fill
        gradient:
          "bg-[image:var(--gradient-ocean)] text-white hover:brightness-110 border-0",
        // Glow button with hover glow effect
        glow:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--color-3),0.4)] transition-shadow",
        // Combined: outline + glass
        "outline-glass":
          "backdrop-blur-md bg-transparent dark:bg-black/10 border border-border text-foreground hover:bg-white/5 dark:hover:bg-black/5",
        // Combined: ghost + glow
        "ghost-glow":
          "hover:bg-accent/50 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(var(--color-3),0.3)] transition-shadow",
      },
      size: {
        xs: "h-7 rounded-md gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        default: "h-9 rounded-md px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
        "2xl": "h-14 rounded-xl px-10 text-lg has-[>svg]:px-8",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      rounded: {
        default: "",
        full: "rounded-full",
        sm: "rounded-sm",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
