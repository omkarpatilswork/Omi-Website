"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
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

export function HorizontalPortfolioCarousel({ cards }: { cards: PortfolioCardProps[] }) {
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
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0">
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-500 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons - Outside the card */}
      <div className="absolute top-1/2 -left-6 md:-left-16 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-md hover:bg-white transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-6 md:-right-16 transform -translate-y-1/2">
        <button
          onClick={goToNext}
          className="bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-md hover:bg-white transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
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
    yellow: "from-yellow-400 to-yellow-600",
  }

  const gradient = gradientMap[color] || gradientMap.blue
  const bgGradient = `bg-gradient-to-r ${gradient}`
  const lightBg = `bg-${color}-50`

  return (
    <motion.div
      className={cn("w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row")}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 md:p-8 lg:p-10 flex flex-col md:w-1/2 bg-gradient-to-br from-white to-gray-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">{title}</h2>
        <div className="text-gray-700 mb-6 md:mb-8 leading-relaxed space-y-3">
          {description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base">
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
          <div className="mt-auto mb-4 md:mb-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-xs md:text-sm font-semibold shadow-lg ${bgGradient}`}
              >
                {title === "YouTube Premium Mini" ? "Top 10 at Producscope 2021" : stats}
              </div>
            </div>
          </div>
        )}

        {url && (
          <div className="mt-auto text-center md:text-left">
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm md:text-base font-semibold group cursor-pointer"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <span className={`text-${color}-600 group-hover:text-${color}-700 transition-colors`}>View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 md:h-5 md:w-5 ml-2 text-${color}-600 group-hover:text-${color}-700 transition-all group-hover:translate-x-1`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        )}
      </div>

      <div className={`h-48 md:h-auto md:w-1/2 relative overflow-hidden ${bgGradient}`}>
        {image && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 p-4 md:p-6 flex items-center justify-center cursor-pointer"
          >
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-contain rounded-lg" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
