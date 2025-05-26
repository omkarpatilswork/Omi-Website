"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  url?: string
  icon?: ReactNode
  color?: string
}

export function ProjectCard({ title, description, url, icon, color = "blue" }: ProjectCardProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const gradientMap: Record<string, string> = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    orange: "from-orange-400 to-orange-600",
    teal: "from-teal-400 to-teal-600",
    pink: "from-pink-400 to-pink-600",
    indigo: "from-indigo-400 to-indigo-600",
  }

  const gradient = gradientMap[color] || gradientMap.blue

  return (
    <motion.div
      className={`project-card glass-card relative overflow-hidden transition-all duration-300 ${
        url ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>

      <div className="flex items-start gap-3">
        {icon && (
          <motion.div
            className={`flex-shrink-0 p-2 rounded-md bg-gradient-to-br ${gradient} text-white`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>

          {url && (
            <motion.div
              className="mt-4 text-sm flex items-center"
              initial={{ opacity: 0.8, x: 0 }}
              whileHover={{ opacity: 1, x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <span className={`text-${color}-500`}>Visit project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 text-${color}-500`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
