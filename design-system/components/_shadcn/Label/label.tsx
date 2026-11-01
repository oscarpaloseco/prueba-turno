import * as React from "react"
import { cn } from "../shared/utils"
import * as LabelPrimitive from "@radix-ui/react-label"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm [--ds-ui-fontSize-sm:var(--ds-typography-roles-label-steps-sm-fontSize)] [--ds-ui-lineHeight-sm:var(--ds-typography-roles-label-steps-sm-lineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typography-roles-label-steps-sm-letterSpacing)] leading-none [--ds-ui-lineHeight-none:var(--ds-typography-roles-label-steps-sm-lineHeight)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typography-roles-label-steps-sm-fontWeight)] select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-[family-name:var(--ds-typography-roles-label-family)]",
        className
      )}
      {...props}
    />
  )
}

export { Label }
