"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { HorizontalPortfolioCarousel } from "@/components/horizontal-portfolio-carousel"

export default function PortfolioPage() {
  const portfolioCards = [
    {
      title: "Rapido Metro Integration",
      subtitle: "STRATEGY",
      description:
        "One-Tap Commute, End-to-End\nMetro users already depend on autos/bikes for first & last-mile. Why not bundle it all?\n\nMy Solution:\nSuggests a complete trip—Home to Metro A to Metro B to Office—with real-time driver allocation & one upfront fare.\n\nWins:\n- 3x more rides/user\n- No discounts needed\n- Faster matching for bundled trips",
      logoIcon: "trending",
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
        "Ad-Free Experience, One Day at a Time. Ideal for binge days, travel, or special occasions.\n\nFrustrated by ads but don't want to pay monthly? YouTube Mini offers 1-day/week ad-free access with offline playback, background play & downloads—no subscription required.\n\nKey Wins:\n- +Watch Time\n- Easy Premium Trial\n- Rs 7/day, Rs 35/week plans",
      logoIcon: "activity",
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
        "The Problem: India throws away 6+ billion shampoo bottles annually. Most end up in landfills—especially from bathrooms where hygiene restricts reuse.\n\nThe Solution: Water-soluble foam balls stored in a sleek, stainless steel, wall-mounted dispenser. No bottles. No waste. No compromise.\n\nWhy It Works:\n- Zero plastic waste | 100% biodegradable\n- No spillage or clutter\n- Affordable, refillable, and hygienic",
      logoIcon: "activity",
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
        "Can we create a livable, self-sustaining ecosystem in space? Acropolis explored what it takes to thrive off-planet.\n\nThe Vision:\nA modular space habitat designed to tackle meteorites, generate energy, synthesize water, & simulate gravity—supporting long-term human survival.\n\nWins:\n- Engineered debris shielding\n- Closed-loop systems for food, water & air\n- Scalable zero-G living with modular design",
      logoIcon: "activity",
      logoBackground: "#06b6d4",
      image: "/acropolis-space-settlement.png",
      color: "cyan",
      url: "https://drive.google.com/file/d/1ublI5u1xQ8rupHWlxKZ45Sd0Kxs-IUra/view?usp=sharing",
      stats: "Finalist - NASA Ames Space Settlement Contest",
    },
    {
      title: "CARS24 Partners",
      subtitle: "STRATEGY",
      description:
        "Fixing the Dealer Experience\nDealers face frequent crashes, bidding issues, and upload failures—hurting trust and business on the platform.\n\nProposed Solutions:\nRevamp with real-time architecture, cleaner UI, AI-driven car verification, and transparent bidding via live dashboards.\n\nWins:\n- Smoother, crash-free workflows\n- Faster, more trusted bidding\n- Better onboarding & dealer retention",
      logoIcon: "activity",
      logoBackground: "#3b82f6",
      image: "/cars24-partners-logo.png",
      color: "blue",
      url: "https://drive.google.com/file/d/1mvGI18qmTnpLtFz6F28QLv7BVXaKMz98/view?usp=sharing",
      stats: "Business Review Document",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Product Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A collection of products, strategies, and ideas I have built or proposed. 
            Each project represents a unique problem I found worth solving.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HorizontalPortfolioCarousel cards={portfolioCards} />
        </motion.div>
      </section>

      {/* Portfolio Grid - Alternative View */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            All Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {card.description.split('\n')[0]}
                </p>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {card.stats}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Interested in collaborating on a product idea?
          </motion.p>
          <motion.a
            href="https://forms.gle/SzkhhaHb9ZA3ynGg7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </section>
    </main>
  )
}
