import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { cn } from "@/lib/utils"

type BreadcrumbItem = {
  label: string
  href?: string
}

type PageShellProps = {
  children: React.ReactNode
  className?: string
  breadcrumbs?: BreadcrumbItem[]
  maxWidth?: "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl"
}

const maxWidthClasses = {
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  "2xl": "max-w-6xl",
  "4xl": "max-w-4xl",
  "7xl": "max-w-7xl",
}

export function PageShell({
  children,
  className,
  breadcrumbs,
  maxWidth = "4xl",
}: PageShellProps) {
  return (
    <div className={cn("bg-white py-12 px-4 sm:px-6 lg:px-8", className)}>
      <div className={cn("mx-auto", maxWidthClasses[maxWidth])}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <PageBreadcrumb items={breadcrumbs} />
        )}
        {children}
      </div>
    </div>
  )
}
