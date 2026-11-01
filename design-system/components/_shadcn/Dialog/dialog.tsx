import * as React from "react"
import { cn } from "../shared/utils"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { Button } from "../Button/button"
import { XIcon } from "lucide-react"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-[color:var(--ds-componentTokens-dialog-overlay-bg)] duration-100 [--ds-ui-duration-100:var(--ds-motion-duration-fast)] supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm [--ds-ui-fontSize-sm:var(--ds-typography-roles-body-steps-sm-fontSize)] [--ds-ui-lineHeight-sm:var(--ds-typography-roles-body-steps-sm-lineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typography-roles-body-steps-sm-letterSpacing)] text-popover-foreground ring-1 [--ds-ui-focusWidth-1:var(--ds-borderWidth-md)] ring-foreground/10 duration-100 [--ds-ui-duration-100:var(--ds-motion-duration-fast)] outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 font-[family-name:var(--ds-typography-roles-body-family)]",
          "shadow-[shadow:var(--ds-shadow-overlay)]", className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "font-[var(--ds-typography-roles-heading-family)] text-base [--ds-ui-fontSize-base:var(--ds-typography-roles-heading-steps-h4-fontSize)] [--ds-ui-lineHeight-base:var(--ds-typography-roles-heading-steps-h4-lineHeight)] [--ds-ui-letterSpacing-base:var(--ds-typography-roles-heading-steps-h4-letterSpacing)] leading-none [--ds-ui-lineHeight-none:var(--ds-typography-roles-heading-steps-h4-lineHeight)] font-medium [--ds-ui-fontWeight-medium:var(--ds-typography-roles-heading-steps-h4-fontWeight)] font-[family-name:var(--ds-typography-roles-heading-family)]",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm [--ds-ui-fontSize-sm:var(--ds-typography-roles-body-steps-sm-fontSize)] [--ds-ui-lineHeight-sm:var(--ds-typography-roles-body-steps-sm-lineHeight)] [--ds-ui-letterSpacing-sm:var(--ds-typography-roles-body-steps-sm-letterSpacing)] text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
