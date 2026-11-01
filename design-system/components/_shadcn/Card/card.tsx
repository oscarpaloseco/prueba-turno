import * as React from "react"
import { cn } from "../shared/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm [--ds-ui-fontSize-sm:var(--ds-typography-roles-body-steps-sm-fontSize)] [--ds-ui-lineHeight-sm:var(--ds-typography-roles-body-steps-sm-lineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typography-roles-body-steps-sm-letterSpacing)] text-card-foreground ring-1 [--ds-ui-focusWidth-1:var(--ds-borderWidth-md)] ring-foreground/10 [--card-spacing:var(--ds-spacing-4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:var(--ds-spacing-3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl font-[family-name:var(--ds-typography-roles-body-family)]", "shadow-[shadow:var(--ds-shadow-card)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-[var(--ds-typography-roles-heading-family)] text-base [--ds-ui-fontSize-base:var(--ds-typography-roles-heading-steps-h4-fontSize)] [--ds-ui-lineHeight-base:var(--ds-typography-roles-heading-steps-h4-lineHeight)] [--ds-ui-letterSpacing-base:var(--ds-typography-roles-heading-steps-h4-letterSpacing)] leading-snug [--ds-ui-lineHeight-snug:var(--ds-typography-roles-heading-steps-h4-lineHeight)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typography-roles-heading-steps-h4-fontWeight)] group-data-[size=sm]/card:text-sm group-data-[size=sm]/card:[--ds-ui-fontSize-sm:var(--ds-typography-roles-heading-steps-h4-fontSize)] group-data-[size=sm]/card:[--ds-ui-lineHeight-sm:var(--ds-typography-roles-heading-steps-h4-lineHeight)] group-data-[size=sm]/card:[--ds-ui-letterSpacing-sm:var(--ds-typography-roles-heading-steps-h4-letterSpacing)] font-[family-name:var(--ds-typography-roles-heading-family)]",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm [--ds-ui-fontSize-sm:var(--ds-typography-roles-body-steps-sm-fontSize)] [--ds-ui-lineHeight-sm:var(--ds-typography-roles-body-steps-sm-lineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typography-roles-body-steps-sm-letterSpacing)] text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
