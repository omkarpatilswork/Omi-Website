"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface MotionSectionProps {
  children: ReactNode
  className?: string
  id?: string
  dataSection?: string
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
}

export function MotionSection({
  children,
  className,
  id,
  dataSection,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  once = true,
}: MotionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      data-section={dataSection}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  )
}
