"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar background after scrolling
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("[data-section]")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("data-section") || ""
        }
      })

      if (current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`)
    if (section) {
      window.scrollTo({
        top: (section as HTMLElement).offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-5 md:px-8",
        isScrolled && "bg-white/80 backdrop-blur-md shadow-sm",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-5xl mx-auto">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 md:space-x-6 min-w-max justify-center">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "nav-link rounded-full px-4 py-2 transition-all",
                  activeSection === item.id
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.div>
  )
}
