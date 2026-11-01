import { cn } from "../shared/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-[var(--ds-typography-roles-label-family)] text-xs [--ds-ui-fontSize-xs:var(--ds-typography-roles-label-steps-sm-fontSize)] [--ds-ui-lineHeight-xs:var(--ds-typography-roles-label-steps-sm-lineHeight)] [--ds-ui-letterSpacing-xs:var(--ds-typography-roles-label-steps-sm-letterSpacing)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typography-roles-label-steps-sm-fontWeight)] text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3 font-[family-name:var(--ds-typography-roles-label-family)]",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
