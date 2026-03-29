"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  // What I'm Building data
  const ventures = [
    {
      name: "EZBill",
      tagline: "All your bills in one place. Track, split, reimburse, and never lose a receipt.",
      details: [
        "Aggregates bills from SMS, email, WhatsApp",
        "OCR for physical receipts",
        "Focus: solving real-world financial friction",
      ],
      status: "Primary Focus",
      accent: "bg-emerald-500",
    },
    {
      name: "Bijlee",
      tagline: "Gamifying fitness through community and competition.",
      details: [
        "Started as a run club in Pune",
        "Building a platform to track runs, compete, and earn rewards",
        "Expanding into sports, trekking, and corporate wellness",
        "Partnering with brands for distribution",
      ],
      status: "Building",
      accent: "bg-amber-500",
    },
    {
      name: "Jersey Drip",
      tagline: "Building a hybrid commerce distribution system.",
      details: [
        "D2C + offline vending-style kiosks in gyms/sports centers",
        "Dropshipping via jerseydrip.shop",
        "2L+ revenue through lean execution",
      ],
      status: "Revenue",
      accent: "bg-blue-500",
    },
  ]

  // How I Think principles
  const principles = [
    { icon: TrendingUp, text: "Distribution > Product" },
    { icon: Target, text: "Start offline, scale digitally" },
    { icon: Zap, text: "Build for real behavior, not ideal users" },
    { icon: Rocket, text: "Speed > Perfection" },
    { icon: AlertCircle, text: "If it doesn't grow, it's wrong" },
  ]

  // Proof points
  const proofPoints = [
    { metric: "3X", label: "Growth in production system" },
    { metric: "2L+", label: "Revenue from side venture" },
    { metric: "Multiple", label: "0 to 1 product builds" },
    { metric: "3", label: "Domains: fintech, commerce, community" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl tracking-tight">
              Omkar<span className="text-gray-400">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#building" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Building
              </Link>
              <Link href="#experience" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="#thinking" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How I Think
              </Link>
              <a
                href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact
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
                <Link
                  href="#building"
                  onClick={handleNavClick}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                >
                  Building
                </Link>
                <Link
                  href="#experience"
                  onClick={handleNavClick}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                >
                  Experience
                </Link>
                <Link
                  href="#thinking"
                  onClick={handleNavClick}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                >
                  How I Think
                </Link>
                <a
                  href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 font-medium text-gray-900"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Small proof line */}
            <p className="text-sm text-gray-500 mb-6 tracking-wide">
              3X product growth &bull; Multiple 0 to 1 builds &bull; Offline + digital distribution
            </p>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              I build products, communities,
              <br />
              and distribution from 0 to 1.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
              Product Manager turned founder. Built and scaled products at Bajaj Finserv Health (3X growth), 
              now building ventures across fintech, commerce, and fitness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#building"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View What I&apos;m Building
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Work With Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Building Section */}
      <section id="building" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I&apos;m Building</h2>
            <p className="text-gray-600 mb-12 max-w-xl">
              Currently exploring multiple bets across fintech, fitness, and commerce.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold">{venture.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${venture.accent}`}>
                        {venture.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg">{venture.tagline}</p>
                    <ul className="space-y-2">
                      {venture.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                          <span className="text-gray-400 mt-1">-</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
          </motion.div>

          <div className="space-y-12">
            {/* Bajaj Finserv Health */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-gray-900 pl-6 md:pl-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Bajaj Finserv Health</h3>
                  <p className="text-gray-600">Product Manager (Promoted from APM)</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  Owned multiple products across patients, doctors, support teams, and chatbot systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Scaled claims 3X</strong> (2.4L to 7L+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  Improved First Time Right: 65% to 80%
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  Reduced drop-offs 15%
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  Built AI/OCR-based validation system
                </li>
              </ul>
            </motion.div>

            {/* Specxy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-2 border-gray-300 pl-6 md:pl-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Specxy</h3>
                  <p className="text-gray-600">Founder</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  Refurbished eyewear startup
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  Built supply-demand matching model
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <strong>Hult Prize finalist</strong>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How I Think Section */}
      <section id="thinking" className="py-20 md:py-28 px-4 md:px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Think</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <principle.icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="font-medium">{principle.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Highlights Section */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Proof Points</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {proofPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{point.metric}</div>
                <div className="text-sm text-gray-500">{point.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Currently Exploring</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200">
                Gamified fitness (Bijlee)
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200">
                Personal finance infra (EZBill)
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200">
                Offline distribution systems
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Talk</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              If you&apos;re building something interesting, I&apos;d love to connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.a
                href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="mailto:omkarpatilswork@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-patil-757ab3194/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            2025 Omkar Patil. Building in public.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:omkarpatilswork@gmail.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-patil-757ab3194/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
