"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface PortfolioCardProps {
  title: string
  subtitle: string
  description: string
  logo?: React.ReactNode
  logoBackground?: string
  image?: string
  color?: string
  url?: string
  stats?: string
}

export function VerticalPortfolioCarousel({ cards }: { cards: PortfolioCardProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1))
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        goToPrevious()
      } else if (e.key === "ArrowDown") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Navigation button - Above */}
      <div className="flex justify-center mb-4">
        <button
          onClick={goToPrevious}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

      {/* Carousel container */}
      <div className="relative h-[600px] md:h-[500px] w-full">
        <div className="absolute inset-0 flex items-center justify-center" ref={constraintsRef}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <PortfolioCard {...cards[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-500 h-4" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation button - Below */}
      <div className="flex justify-center mt-4">
        <button
          onClick={goToNext}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

function PortfolioCard({
  title,
  subtitle,
  description,
  logo,
  logoBackground = "#f3f4f6",
  image,
  color = "blue",
  url,
  stats,
}: PortfolioCardProps) {
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
  const bgGradient = `bg-gradient-to-r ${gradient}`
  const lightBg = `bg-${color}-50`

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      className={cn(
        "w-full bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer flex flex-col md:flex-row",
        url && "hover:shadow-2xl transition-all duration-300",
      )}
      onClick={handleClick}
      whileHover={{ y: -5 }}
    >
      <div className="p-8 md:p-10 md:w-1/2 flex flex-col bg-gradient-to-br from-white to-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">{title}</h2>
        <div className="text-gray-700 mb-8 leading-relaxed space-y-3">
          {description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < paragraph.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>

        {stats && (
          <div className="mt-auto mb-6">
            <div className="flex items-center gap-3">
              <div className={`px-6 py-3 rounded-full text-white text-sm font-semibold shadow-lg ${bgGradient}`}>
                {title === "YouTube Premium Mini" ? "Top 10 at Producscope 2021" : stats}
              </div>
            </div>
          </div>
        )}

        {url && (
          <div className="mt-auto">
            <motion.div
              className="inline-flex items-center text-base font-semibold group"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <span className={`text-${color}-600 group-hover:text-${color}-700 transition-colors`}>View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-2 text-${color}-600 group-hover:text-${color}-700 transition-all group-hover:translate-x-1`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </div>
        )}
      </div>

      <div className={`md:w-1/2 h-48 md:h-auto relative overflow-hidden ${bgGradient}`}>
        {image && (
          <div className="absolute inset-0 p-6 flex items-center justify-center">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-contain rounded-lg" />
          </div>
        )}
      </div>
    </motion.div>
  )
}
