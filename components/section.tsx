import type React from "react"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  title: string
  icon: React.ReactNode
}

export function Section({ id, title, icon, className, children, ...props }: SectionProps) {
  return (
    <div id={id} data-section={id} className={cn("mb-10 section-container", className)} {...props}>
      <div className="section-header">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  )
}
