import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
  default:
    "bg-primary text-primary-foreground shadow hover:bg-[#03A6A1] hover:cursor-pointer hover:scale-[1.03]",
  destructive:
    "bg-green-800 text-white text-lg px-6 py-3 shadow hover:!bg-[#03A6A1] hover:cursor-pointer hover:scale-[1.03]",
  outline:
    "border bg-background shadow hover:bg-[#03A6A1] hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-[#03A6A1] hover:cursor-pointer hover:scale-[1.03]",
  secondary:
    "bg-secondary text-secondary-foreground shadow hover:bg-[#03A6A1] hover:cursor-pointer hover:scale-[1.03]",
  ghost:
    "hover:bg-[#03A6A1] hover:text-white dark:hover:bg-[#03A6A1] hover:cursor-pointer hover:scale-[1.03]",
  link:
    "text-primary underline-offset-4 hover:underline hover:bg-[#03A6A1] hover:text-white hover:cursor-pointer hover:scale-[1.03]",
},




      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
