"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MotionSection } from "@/components/motion-section"
import {
  Linkedin,
  Mail,
  Github,
  GraduationCap,
  Award,
  TrendingUp,
  Shirt,
  Activity,
  Trophy,
  Glasses,
  FileText,
} from "lucide-react"
import { WorkTimeline } from "@/components/work-timeline"
import Link from "next/link"
import Image from "next/image"
import { HorizontalPortfolioCarousel } from "@/components/horizontal-portfolio-carousel"

export default function HomePage() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Portfolio cards data
  const portfolioCards = [
    {
      title: "Rapido Metro Integration",
      subtitle: "STRATEGY",
      description:
        "🚇 One-Tap Commute, End-to-End\nMetro users already depend on autos/bikes for first & last-mile. Why not bundle it all?\n\n💡My Solution:\nSuggests a complete trip—Home → Metro A → Metro B → Office—with real-time driver allocation & one upfront fare.\n\n📈 Wins:\n• 3× more rides/user\n• No discounts needed\n• Faster matching for bundled trips",
      logo: <TrendingUp className="h-5 w-5 text-white" />,
      logoBackground: "#fbbf24",
      image: "/rapido-logo-yellow.png",
      color: "yellow",
      url: "https://drive.google.com/file/d/1en9oXpYz8kYTkZEE5Dg5E7n5DikGBHkZ/view?usp=sharing",
      stats: "3X Rides Increase",
    },
    {
      title: "YouTube Premium Mini",
      subtitle: "STRATEGY",
      description:
        "🎯 Ad-Free Experience, One Day at a Time. Ideal for binge days, travel, or special occasions.\n\n🧠 Frustrated by ads but don't want to pay monthly? YouTube Mini offers 1-day/week ad-free access with offline playback, background play & downloads—no subscription required.\n\n📊 Key Wins:\n• +Watch Time\n• Easy Premium Trial\n• ₹7/day, ₹35/week plans",
      logo: <Activity className="h-5 w-5 text-white" />,
      logoBackground: "#ff0000",
      image: "/youtube-premium-mini-new.png",
      color: "red",
      url: "https://drive.google.com/file/d/1iN-Jf1gIHZ3DE9ISFUb4SUG5xlPHTjIn/view?usp=sharing",
      stats: "Flexible Pricing",
    },
    {
      title: "Foam Balls Dispenser",
      subtitle: "STRATEGY",
      description:
        "🧠 The Problem: India throws away 6+ billion shampoo bottles annually. Most end up in landfills—especially from bathrooms where hygiene restricts reuse.\n\n💡 The Solution: Water-soluble foam balls stored in a sleek, stainless steel, wall-mounted dispenser. No bottles. No waste. No compromise.\n\n📊 Why It Works:\n• Zero plastic waste | 100% biodegradable\n• No spillage or clutter\n• Affordable, refillable, and hygienic",
      logo: <Activity className="h-5 w-5 text-white" />,
      logoBackground: "#10b981",
      image: "/foam-balls-dispenser.png",
      color: "green",
      url: "https://drive.google.com/file/d/1WrPXRc9g1EcgKhtN3nKP6VQXGZSPUHPG/view?usp=sharing",
      stats: "Winner – Ideathon @ E-Cell, MIT Manipal",
    },
    {
      title: "Acropolis – Life Beyond Earth",
      subtitle: "STRATEGY",
      description:
        "🌌 Can we create a livable, self-sustaining ecosystem in space? Acropolis explored what it takes to thrive off-planet.\n\n💡 The Vision:\nA modular space habitat designed to tackle meteorites, generate energy, synthesize water, & simulate gravity—supporting long-term human survival.\n\n📈 Wins:\n• Engineered debris shielding\n• Closed-loop systems for food, water & air\n• Scalable zero-G living with modular design",
      logo: <Activity className="h-5 w-5 text-white" />,
      logoBackground: "#6366f1",
      image: "/acropolis-space-settlement.png",
      color: "indigo",
      url: "https://drive.google.com/file/d/1ublI5u1xQ8rupHWlxKZ45Sd0Kxs-IUra/view?usp=sharing",
      stats: "Finalist – NASA Ames Space Settlement Contest",
    },
    {
      title: "CARS24 Partners – Fixing Dealer Exp",
      subtitle: "STRATEGY",
      description:
        "🚗 Dealers face frequent crashes, bidding issues, and upload failures—hurting trust and business on the platform.\n\n💡 Proposed Solutions:\nRevamp with real-time architecture, AI-driven car verification, and transparent bidding via live dashboards.\n\n📈 Wins:\n• Smoother, crash-free workflows\n• Faster, more trusted bidding\n• Better onboarding & dealer retention",
      logo: <Activity className="h-5 w-5 text-white" />,
      logoBackground: "#f97316",
      image: "/cars24-partners-logo.png",
      color: "orange",
      url: "https://drive.google.com/file/d/1mvGI18qmTnpLtFz6F28QLv7BVXaKMz98/view?usp=sharing",
      stats: "Business Review Document",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-4 md:py-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-4 md:px-6 py-3 md:py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl md:text-2xl font-bold">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm md:text-base">
                O
              </div>
            </Link>
            <div className="flex items-center space-x-2 md:space-x-6 overflow-x-auto no-scrollbar">
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 text-xs md:text-sm whitespace-nowrap hidden md:block"
              >
                about me
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-700 hover:text-gray-900 text-xs md:text-sm whitespace-nowrap"
              >
                product portfolio
              </Link>
              <Link
                href="#experience"
                className="text-gray-700 hover:text-gray-900 text-xs md:text-sm whitespace-nowrap"
              >
                my work
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900 text-xs md:text-sm whitespace-nowrap">
                reach out
              </Link>
              <a
                href="https://drive.google.com/file/d/1rRZLZeJ3l7qUKH6T6siuFch4RnqObo-q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 text-xs md:text-sm whitespace-nowrap hidden md:block"
              >
                resume
              </a>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a
                href="mailto:omkarpatilswork@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-patil-757ab3194/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://github.com/omkarpatilswork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 px-4">
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/omkar-ghibli.jpeg"
              alt="Omkar Patil"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="inline-block mb-6 md:mb-8">
            <a
              href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full px-3 md:px-4 py-1 md:py-2 flex items-center space-x-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full"></div>
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-purple-700">
                OPEN FOR COLLABORATION
              </span>
            </a>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Hey! I'm Omkar.
            <br />
            Welcome to my Digital Space
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed"
          >
            AI Product Manager based in Pune, India, with 3 years experience building impactful consumer tech products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4 px-4 leading-relaxed"
          >
            From launching AI-powered health claim journeys at{" "}
            <a href="https://www.bajajfinservhealth.in/" className="text-blue-600 hover:underline">
              Bajaj Finserv Health
            </a>{" "}
            to building profitable student-run ventures, I blend data-driven product thinking with a bias for action.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl font-medium text-blue-600 max-w-2xl mx-auto px-4 cursor-pointer hover:underline"
            onClick={() => {
              const section = document.querySelector('[data-section="portfolio"]')
              if (section) {
                window.scrollTo({
                  top: (section as HTMLElement).offsetTop - 100,
                  behavior: "smooth",
                })
              }
            }}
          >
            🚀 I build things users love. And sometimes, I sell them too.
          </motion.p>

          <div className="mt-16 mb-16 flex items-center justify-center">
            <div className="w-1/3 h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>

          <h2
            className="text-xl text-gray-500 uppercase tracking-wider mb-10 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => {
              const section = document.querySelector('[data-section="experience"]')
              if (section) {
                window.scrollTo({
                  top: (section as HTMLElement).offsetTop - 100,
                  behavior: "smooth",
                })
              }
            }}
          >
            Companies I have worked or collaborated with
          </h2>

          <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-3xl mx-auto px-4">
            <div
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer p-3 md:p-2"
              onClick={() => {
                const section = document.querySelector('[data-section="experience"]')
                if (section) {
                  window.scrollTo({
                    top: (section as HTMLElement).offsetTop - 100,
                    behavior: "smooth",
                  })
                  setTimeout(() => {
                    const timelineItems = document.querySelectorAll(".collapsible-header")
                    timelineItems.forEach((item) => {
                      if (item.textContent?.includes("Bajaj Finserv Health")) {
                        ;(item as HTMLElement).click()
                      }
                    })
                  }, 500)
                }
              }}
            >
              <img src="/logos/bfhl.png" alt="Bajaj Finserv Health" className="h-10 md:h-12 object-contain" />
            </div>
            <div
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer p-3 md:p-2"
              onClick={() => {
                const section = document.querySelector('[data-section="experience"]')
                if (section) {
                  window.scrollTo({
                    top: (section as HTMLElement).offsetTop - 100,
                    behavior: "smooth",
                  })
                  setTimeout(() => {
                    const timelineItems = document.querySelectorAll(".collapsible-header")
                    timelineItems.forEach((item) => {
                      if (item.textContent?.includes("Viral Fission")) {
                        ;(item as HTMLElement).click()
                      }
                    })
                  }, 500)
                }
              }}
            >
              <img src="/logos/viral-fission-new.png" alt="Viral Fission" className="h-10 md:h-12 object-contain" />
            </div>
            <div
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer p-3 md:p-2"
              onClick={() => {
                const section = document.querySelector('[data-section="experience"]')
                if (section) {
                  window.scrollTo({
                    top: (section as HTMLElement).offsetTop - 100,
                    behavior: "smooth",
                  })
                  setTimeout(() => {
                    const timelineItems = document.querySelectorAll(".collapsible-header")
                    timelineItems.forEach((item) => {
                      if (item.textContent?.includes("EWar Games")) {
                        ;(item as HTMLElement).click()
                      }
                    })
                  }, 500)
                }
              }}
            >
              <img src="/logos/ewar.jpg" alt="EWar Games" className="h-10 md:h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <MotionSection id="portfolio" dataSection="portfolio" className="section container-custom">
        {/* Startups I've Built */}
        <motion.h3
          className="text-4xl md:text-5xl font-serif font-medium mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block">Startups </span>
          <span className="inline-block gradient-text from-blue-500 to-purple-600">Built</span>
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <motion.div
            className="glass-card overflow-hidden relative hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-red-600"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-3 rounded-md bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shirt className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-medium">Jersey Drip</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Student-led sportswear brand with ₹7L+ Revenue, live on Swiggy Minis with 250+ customers and 400+
                orders.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">2020–Present</span>
                <a
                  href="https://jersey-drip.mini.site/?path=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-red-500 hover:text-red-600 transition-colors"
                >
                  Visit site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 00-2 2v10a2 2 002 2h10a2 2 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden relative hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-teal-600"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-3 rounded-md bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Glasses className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-medium">Specxy</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Refurbished eyewear startup that was Runners-up at Hult Prize India and Finalists at Dhaka Summit.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">2022–2023</span>
                <span className="text-teal-500 font-medium">Hult Prize Finalist</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card overflow-hidden relative hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-3 rounded-md bg-gradient-to-r from-indigo-400 to-indigo-600 text-white shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Trophy className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-medium">Virtual Cricket Auctions</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Built an IPL auction game for college fans with 1K+ followers and 50+ online events.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">2021–2022</span>
                <a
                  href="https://www.instagram.com/virtual.ipl.auction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-500 hover:text-indigo-600 transition-colors"
                >
                  Instagram
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 00-2 2v10a2 2 002 2h10a2 2 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Case Studies */}
        <motion.h3
          className="text-4xl md:text-5xl font-serif font-medium mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block">Product </span>
          <span className="inline-block gradient-text from-blue-500 to-purple-600">Portfolio</span>
        </motion.h3>

        {/* Vertical Portfolio Carousel */}
        <HorizontalPortfolioCarousel cards={portfolioCards} />

        {/* Technical Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 mt-8">
          {/* This section is now empty as the projects have been moved to the carousel */}
        </div>
      </MotionSection>

      {/* Experience Section */}
      <MotionSection id="experience" dataSection="experience" className="section container-custom">
        <WorkTimeline />
      </MotionSection>

      {/* Education Section */}
      <MotionSection id="education" dataSection="education" className="section container-custom">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-medium mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block">My </span>
          <span className="inline-block gradient-text from-blue-500 to-purple-600">Education</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="glass-card hover-lift p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="p-2 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <GraduationCap className="h-5 w-5" />
              </motion.div>
              <h3 className="text-lg font-medium">Manipal Institute of Technology</h3>
            </div>
            <p className="text-muted-foreground">
              Bachelor of Technology | Information Technology (minor in Digital Marketing) | 2019 - 2023
            </p>
          </motion.div>
          <motion.div
            className="glass-card hover-lift p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="p-2 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-5 w-5" />
              </motion.div>
              <h3 className="text-lg font-medium">Indian School of Business</h3>
            </div>
            <p className="text-muted-foreground">
              Executive Program Certification | Product Management | Feb 2024 - May 2024
            </p>
          </motion.div>
        </div>
      </MotionSection>

      {/* Skills Section */}
      <MotionSection id="skills" dataSection="skills" className="section container-custom">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-medium mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block">Outside </span>
          <span className="inline-block gradient-text from-blue-500 to-purple-600">Work</span>
        </motion.h2>

        {/* Image Collage Grid */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
            {/* Hiking image - Portrait */}
            <div className="rounded-3xl overflow-hidden relative bg-gray-200 aspect-[3/4]">
              <img
                src="/images/omkar-hiking.jpeg"
                alt="Adventure and hiking"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Casual image - Portrait */}
            <div className="rounded-3xl overflow-hidden relative bg-gray-200 aspect-[3/4]">
              <img
                src="/images/omkar-casual.jpeg"
                alt="Lifestyle and casual moments"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Biking image - Portrait */}
            <div className="rounded-3xl overflow-hidden relative bg-gray-200 aspect-[3/4]">
              <img src="/images/omkar-biking.jpeg" alt="Biking passion" className="w-full h-full object-contain" />
            </div>

            {/* Speaking image - Landscape (spans full width on mobile, single column on desktop) */}
            <div className="md:col-span-1 rounded-3xl overflow-hidden relative bg-gray-200 aspect-[4/3]">
              <img
                src="/images/omkar-speaking.jpeg"
                alt="Speaking and leadership"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.div
              className="skill-badge bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🏸</span>
              <span className="font-semibold">Zonal Badminton Champion</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-red-400 to-orange-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: -2, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🏍️</span>
              <span className="font-semibold">Roadtrip Enthusiast</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🌌</span>
              <span className="font-semibold">Space & Cosmos Geek</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: -2, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📈</span>
              <span className="font-semibold">Markets & Stats Analyst</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-blue-600 to-red-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">⚽</span>
              <span className="font-semibold">Barça Fanatic</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-amber-400 to-yellow-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: -2, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold">Mystery Novel Buff</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-teal-400 to-cyan-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🥾</span>
              <span className="font-semibold">Mountain Trekker</span>
            </motion.div>
            <motion.div
              className="skill-badge bg-gradient-to-br from-pink-400 to-rose-600 text-white shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.08, rotate: -2, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">Strategic Thinker</span>
            </motion.div>
          </div>
        </motion.div>
      </MotionSection>

      {/* Contact Section */}
      <section id="contact" data-section="contact" className="py-20 px-4 bg-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/omkar-speaking.jpeg"
              alt="Omkar Patil Speaking"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-4xl font-bold mb-2">
            Yay! <span className="text-blue-600">You made it</span> this far
          </h2>

          <p className="text-xl mb-12">Clearly, we vibe. Let's make cool stuff together.</p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <motion.a
              href="https://drive.google.com/file/d/1rRZLZeJ3l7qUKH6T6siuFch4RnqObo-q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <FileText className="h-5 w-5" />
              <span className="font-medium">View Resume</span>
            </motion.a>

            <motion.a
              href="mailto:omkarpatilswork@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/omkar-patil-757ab3194/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/omkarpatilswork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </motion.a>
          </div>

          <motion.a
            href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white rounded-full text-gray-800 font-medium shadow-md hover:shadow-lg transition-all"
            whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            Let's Connect!
          </motion.a>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100 border-t border-gray-200">
        <p>© Omkar Patil 2025</p>
      </footer>
    </main>
  )
}
