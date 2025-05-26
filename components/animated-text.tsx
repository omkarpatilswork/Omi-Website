"use client"

import { motion } from "framer-motion"
import { letterAnimation, wordAnimation } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  type?: "word" | "letter"
  delay?: number
}

export function AnimatedText({ text, className, type = "word", delay = 0 }: AnimatedTextProps) {
  if (type === "letter") {
    return (
      <motion.span className={cn("inline-block", className)} initial="initial" animate="animate">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterAnimation}
            transition={{ delay: index * 0.04 + delay }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  // Word animation
  return (
    <motion.div className={cn("inline", className)} initial="initial" animate="animate">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={wordAnimation}
          transition={{ delay: index * 0.1 + delay }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
