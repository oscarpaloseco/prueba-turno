import * as React from "react"
import { cn } from "../shared/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base [--ds-ui-fontSize-base:var(--ds-typography-roles-label-steps-md-fontSize)] [--ds-ui-lineHeight-base:var(--ds-typography-roles-label-steps-md-lineHeight)] [--ds-ui-letterSpacing-base:var(--ds-typography-roles-label-steps-md-letterSpacing)] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:[--ds-ui-borderWidth-0:var(--ds-borderWidth-none)] file:bg-transparent file:text-sm file:[--ds-ui-fontSize-sm:var(--ds-typography-roles-label-steps-sm-fontSize)] file:[--ds-ui-lineHeight-sm:var(--ds-typography-roles-label-steps-sm-lineHeight)] file:[--ds-ui-letterSpacing-sm:var(--ds-typography-roles-label-steps-sm-letterSpacing)] file:font-medium file:[--ds-ui-fontWeight-medium:var(--ds-typography-roles-label-steps-sm-fontWeight)] file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:[--ds-ui-focusWidth-3:var(--ds-borderWidth-focus)] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:[--ds-ui-focusWidth-3:var(--ds-borderWidth-focus)] aria-invalid:ring-destructive/20 md:text-sm md:[--ds-ui-fontSize-sm:var(--ds-typography-roles-label-steps-sm-fontSize)] md:[--ds-ui-lineHeight-sm:var(--ds-typography-roles-label-steps-sm-lineHeight)] md:[--ds-ui-letterSpacing-sm:var(--ds-typography-roles-label-steps-sm-letterSpacing)] dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 font-[family-name:var(--ds-typography-roles-label-family)]", "shadow-[shadow:var(--ds-shadow-control)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
