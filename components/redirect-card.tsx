import Link from "next/link"
import { type LucideIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type RedirectCardProps = {
  icon: LucideIcon
  iconClassName?: string
  iconBgClassName?: string
  title: string
  description: string
  countdown?: number
  deepLink: string
  deepLinkLabel: string
  homeLinkLabel?: string
}

export function RedirectCard({
  icon: Icon,
  iconClassName = "text-primary",
  iconBgClassName = "bg-primary/12",
  title,
  description,
  countdown,
  deepLink,
  deepLinkLabel,
  homeLinkLabel = "Volver al inicio",
}: RedirectCardProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="absolute inset-x-0 top-0 flex h-1.5 w-full">
        <div className="h-full flex-1 bg-primary" />
        <div className="h-full flex-1 bg-background" />
        <div className="h-full flex-1 bg-primary" />
      </div>

      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
        <div className="mb-6">
          <div
            className={cn(
              "mx-auto flex size-16 items-center justify-center rounded-full",
              iconBgClassName
            )}
          >
            <Icon className={cn("size-8", iconClassName)} />
          </div>
        </div>

        <h1 className="mb-2 text-2xl font-bold text-foreground">{title}</h1>
        <p className="mb-6 text-muted-foreground">{description}</p>

        {countdown !== undefined && countdown > 0 && (
          <p className="mb-4 text-sm text-muted-foreground">
            Redirigiendo en {countdown} segundo{countdown !== 1 ? "s" : ""}...
          </p>
        )}

        <div className="space-y-3">
          <a
            href={deepLink}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {deepLinkLabel}
          </a>
          <p className="text-xs text-muted-foreground">
            Si no se abre automáticamente, hacé clic en el botón de arriba
          </p>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "link", size: "lg" }), "mt-2")}
          >
            {homeLinkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
