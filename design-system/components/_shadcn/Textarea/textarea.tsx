import * as React from "react"
import { cn } from "../shared/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base [--ds-ui-fontSize-base:var(--ds-typography-roles-body-steps-md-fontSize)] [--ds-ui-lineHeight-base:var(--ds-typography-roles-body-steps-md-lineHeight)] [--ds-ui-letterSpacing-base:var(--ds-typography-roles-body-steps-md-letterSpacing)] transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:[--ds-ui-focusWidth-3:var(--ds-borderWidth-focus)] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:[--ds-ui-focusWidth-3:var(--ds-borderWidth-focus)] aria-invalid:ring-destructive/20 md:text-sm md:[--ds-ui-fontSize-sm:var(--ds-typography-roles-body-steps-sm-fontSize)] md:[--ds-ui-lineHeight-sm:var(--ds-typography-roles-body-steps-sm-lineHeight)] md:[--ds-ui-letterSpacing-sm:var(--ds-typography-roles-body-steps-sm-letterSpacing)] dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 font-[family-name:var(--ds-typography-roles-body-family)]", "shadow-[shadow:var(--ds-shadow-control)]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
