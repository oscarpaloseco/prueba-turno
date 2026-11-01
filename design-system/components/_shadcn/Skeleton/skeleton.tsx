import { cn } from "../shared/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted font-[family-name:var(--ds-typography-roles-body-family)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
