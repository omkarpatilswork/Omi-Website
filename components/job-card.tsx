import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface JobCardProps extends HTMLAttributes<HTMLDivElement> {
  company: string
  title: string
  period: string
  highlights?: string[]
}

export function JobCard({ company, title, period, highlights = [], className, ...props }: JobCardProps) {
  return (
    <div className={cn("notion-card mb-4", className)} {...props}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-muted-foreground">{title}</p>
        </div>
        <p className="job-period whitespace-nowrap">{period}</p>
      </div>
      {highlights.length > 0 && (
        <ul className="list-disc list-inside text-sm mt-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-muted-foreground">
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
