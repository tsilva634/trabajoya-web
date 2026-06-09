import { cn } from "@/lib/utils"

export function LoadingSpinner({
  label = "Cargando...",
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex min-h-[40vh] flex-col items-center justify-center text-center",
        className
      )}
    >
      <div
        className="size-12 animate-spin rounded-full border-2 border-primary/20 border-t-primary"
        aria-hidden="true"
      />
      <p className="mt-4 text-muted-foreground">{label}</p>
    </div>
  )
}
