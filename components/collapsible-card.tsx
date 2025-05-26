"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface CollapsibleCardProps {
  title: string
  subtitle: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export function CollapsibleCard({ title, subtitle, children, defaultOpen = false, className }: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div
      className={cn("collapsible-card mb-6", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
    >
      <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <motion.h3
            className="text-lg font-medium relative inline-flex items-center group cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              if (title === "Viral Fission") {
                window.open("https://www.viralfission.com/", "_blank", "noopener,noreferrer")
              } else if (title === "Bajaj Finserv Health") {
                window.open("https://www.bajajfinservhealth.in/", "_blank", "noopener,noreferrer")
              }
            }}
            whileHover={{ scale: title === "Viral Fission" || title === "Bajaj Finserv Health" ? 1.02 : 1 }}
          >
            {title}
            {(title === "Viral Fission" || title === "Bajaj Finserv Health") && (
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline text-blue-500"
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
              </span>
            )}
            {(title === "Viral Fission" || title === "Bajaj Finserv Health") && (
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            )}
          </motion.h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.1 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
