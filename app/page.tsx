"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Github, FileText, ArrowUpRight, Menu, X } from "lucide-react"
import { WorkTimeline } from "@/components/work-timeline"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const ventures = [
    {
      name: "Specxy",
      description: "Affordable prescription eyewear for India's underserved 500M+ market",
      status: "Primary Focus",
    },
    {
      name: "Athlos",
      description: "AI-powered fitness coaching that adapts to your body and schedule",
      status: "Building",
    },
  ]

  const outsideWorkInterests = [
    { emoji: "🏸", label: "Zonal Badminton Champion" },
    { emoji: "🏍️", label: "Roadtrip Enthusiast" },
    { emoji: "🌌", label: "Space & Cosmos Geek" },
    { emoji: "📈", label: "Markets & Stats Analyst" },
    { emoji: "⚽", label: "Barca Fanatic" },
    { emoji: "📚", label: "Mystery Novel Buff" },
    { emoji: "🥾", label: "Mountain Trekker" },
    { emoji: "🎯", label: "Strategic Thinker" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                O
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#ventures" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Ventures
              </Link>
              <Link href="/portfolio" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Portfolio
              </Link>
              <Link href="#experience" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="#outside-work" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Beyond Work
              </Link>
              <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/omkar-patil-757ab3194/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:omkarpatilswork@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/omkarpatilswork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100"
            >
              <div className="px-4 py-4 space-y-3">
                <Link href="#about" onClick={handleNavClick} className="block py-2 text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="#ventures" onClick={handleNavClick} className="block py-2 text-gray-600 hover:text-gray-900">
                  Ventures
                </Link>
                <Link href="/portfolio" onClick={handleNavClick} className="block py-2 text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
                <Link href="#experience" onClick={handleNavClick} className="block py-2 text-gray-600 hover:text-gray-900">
                  Experience
                </Link>
                <Link href="#outside-work" onClick={handleNavClick} className="block py-2 text-gray-600 hover:text-gray-900">
                  Beyond Work
                </Link>
                <Link href="#contact" onClick={handleNavClick} className="block py-2 text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                  <a href="https://www.linkedin.com/in/omkar-patil-757ab3194/" target="_blank" rel="noopener noreferrer" className="text-gray-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:omkarpatilswork@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/omkarpatilswork" target="_blank" rel="noopener noreferrer" className="text-gray-600">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Ghibli Image */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
                <Image
                  src="/omkar-ghibli.jpeg"
                  alt="Omkar Patil"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.a
                href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open for Collab
              </motion.a>
            </div>

            {/* Intro Text */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                I am Omkar
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-2">
                Welcome to my digital space
              </p>
              <p className="text-gray-500 max-w-lg">
                Product Manager turned founder. I build products, communities, and distribution from 0 to 1.
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#ventures">
              <p className="text-xl md:text-2xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                I build things users love. And sometimes, I sell them too.
              </p>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">3X</div>
              <div className="text-sm text-gray-500">Growth Delivered</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">2L+</div>
              <div className="text-sm text-gray-500">Users Impacted</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">Ventures Built</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-500">Product Concepts</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Startups Built</h2>
            <p className="text-gray-600">Current ventures and side projects I am actively building.</p>
          </motion.div>

          <div className="space-y-4">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{venture.name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        venture.status === "Primary Focus" 
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {venture.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{venture.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Link */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              View Product Portfolio
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <WorkTimeline />
        </div>
      </section>

      {/* Outside Work Section */}
      <section id="outside-work" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outside Work</h2>
            <p className="text-gray-600">There is more to life than just shipping features.</p>
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/omkar-hiking.jpeg"
                alt="Adventure and hiking"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/omkar-casual.jpeg"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/omkar-biking.jpeg" 
                alt="Biking" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/omkar-speaking.jpeg"
                alt="Speaking"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Interest Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {outsideWorkInterests.map((interest) => (
              <motion.span
                key={interest.label}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{interest.emoji}</span>
                {interest.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900 mb-1">Manipal Institute of Technology</h3>
              <p className="text-gray-600 text-sm mb-2">Bachelor of Technology</p>
              <p className="text-gray-500 text-sm">Information Technology (Minor in Digital Marketing)</p>
              <p className="text-gray-400 text-sm mt-2">2019 - 2023</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900 mb-1">Indian School of Business</h3>
              <p className="text-gray-600 text-sm mb-2">Executive Program Certification</p>
              <p className="text-gray-500 text-sm">Product Management</p>
              <p className="text-gray-400 text-sm mt-2">Feb 2024 - May 2024</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/omkar-speaking.jpeg"
              alt="Omkar Patil"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            You made it this far
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            If you are building something interesting, I would love to connect.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Let us Connect
            </a>
            <a
              href="https://drive.google.com/file/d/1rRZLZeJ3l7qUKH6T6siuFch4RnqObo-q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:omkarpatilswork@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-patil-757ab3194/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/omkarpatilswork"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>2025 Omkar Patil. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/portfolio" className="hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
            <Link href="#experience" className="hover:text-gray-300 transition-colors">
              Experience
            </Link>
            <a
              href="https://drive.google.com/file/d/1rRZLZeJ3l7qUKH6T6siuFch4RnqObo-q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
