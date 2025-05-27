"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TimelineItemProps {
  company: string
  role: string
  period: string
  logo: string
  logoBackground?: string
  url?: string
  delay?: number
  note?: string
  workDetails?: Array<{ color: string; text: string }>
}

function TimelineItem({
  company,
  role,
  period,
  logo,
  logoBackground = "#f3f4f6",
  url,
  delay = 0,
  note,
  workDetails = [],
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="flex flex-col border-b border-gray-200/50 last:border-b-0 hover:bg-white/40 transition-all duration-300 rounded-xl px-2 md:px-4 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-6 md:py-8 relative">
        <div
          className={cn(
            "w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 hover:scale-105 mx-auto md:mx-0",
          )}
          style={{ backgroundColor: logoBackground }}
        >
          <Image
            src={logo || "/placeholder.svg"}
            alt={company}
            width={24}
            height={24}
            className="md:w-9 md:h-9 object-contain"
          />
        </div>

        <div className="flex-grow text-center md:text-left">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-medium hover:text-blue-600 transition-colors group inline-flex items-center justify-center md:justify-start font-serif"
            onClick={(e) => e.stopPropagation()}
          >
            {company}
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
          </a>
          {note && <p className="text-sm text-muted-foreground mt-1 italic">{note}</p>}
          <div className="text-sm text-blue-500 mt-2 flex items-center justify-center md:justify-start">
            <span>Tap for details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="text-center md:text-right order-first md:order-last">
          <div className="text-lg md:text-xl font-medium">{role}</div>
          <div className="text-muted-foreground text-sm bg-gray-100/70 px-3 py-1 rounded-full inline-block mt-1">
            {period}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && workDetails.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-6 md:pb-8 px-2 md:px-4"
          >
            <ul className="list-none space-y-3 text-muted-foreground">
              {workDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`p-1 rounded-full bg-${detail.color}-500 text-white mt-1 flex-shrink-0`}>
                    <div className="w-3 h-3"></div>
                  </div>
                  <span className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: detail.text }}></span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function WorkTimeline() {
  // Work details for each company
  const bajajDetails = [
    {
      color: "green",
      text: "Drove <strong>3X growth</strong> in health claim reimbursements, automating <strong>20K+ cases/month</strong> as the youngest PM owning the end-to-end journey",
    },
    {
      color: "purple",
      text: "Pioneered <strong>AI-first claim journeys</strong> using OCR + smart nudge systems to process doctor handwriting, reducing manual review time by 40%",
    },
    {
      color: "blue",
      text: "Launched WhatsApp Bot + Straight-Through Processing flow, saving <strong>₹1.4 Cr annually</strong> while improving customer satisfaction scores by 22%",
    },
    {
      color: "orange",
      text: "Optimized payment funnels with UPI & Penny Drop integrations, delivering <strong>+15% conversion</strong> and scaling monthly claims from 65K to 95K in 6 months",
    },
    {
      color: "teal",
      text: "Led <strong>0→1 product builds</strong> including claim screens, WhatsApp bots, and live launches with cross-functional teams",
    },
    {
      color: "red",
      text: "Established data-driven decision making using <strong>Power BI, Clarity, GA, AppsFlyer</strong>, and A/B testing frameworks",
    },
    {
      color: "indigo",
      text: "Organized Hack Rx hackathon with <strong>20K+ registrations</strong>, driving innovation and talent acquisition",
    },
  ]

  const viralFissionDetails = [
    {
      color: "indigo",
      text: "Orchestrated community-led growth by managing 12 ambassadors and driving pan-India operations for major brands",
    },
    {
      color: "purple",
      text: "Executed high-impact campus campaigns for <strong>Myntra, Spotify, Vice & Unacademy</strong>, delivering measurable engagement and conversion metrics",
    },
    {
      color: "blue",
      text: "Developed go-to-market strategies for large consumer brands translating user insights into compelling brand narratives and activation plans",
    },
  ]

  const ewarDetails = [
    {
      color: "yellow",
      text: "Spearheaded influencer marketing campaigns reaching <strong>100K+ followers</strong>, driving user acquisition and engagement",
    },
    { color: "pink", text: "Directed a YouTube ad campaign that increased app installs by 22% while optimizing CAC" },
    {
      color: "green",
      text: "Conducted comprehensive competitive analysis of fantasy gaming apps, identifying key feature gaps and conversion opportunities",
    },
    {
      color: "teal",
      text: "Proposed data-backed feature improvements that were incorporated into the product roadmap",
    },
  ]

  return (
    <div className="glass-card p-4 md:p-8 lg:p-12 rounded-3xl shadow-lg backdrop-blur-md border border-white/30 bg-white/80">
      <motion.div
        className="text-center mb-8 md:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif">
          <span>Work </span>
          <span className="gradient-text from-blue-500 to-purple-600">Experience</span>
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-gray-500 font-serif">Timeline</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <TimelineItem
          company="Bajaj Finserv Health"
          role="Associate Product Manager"
          period="Jan 2023 - Now"
          logo="/logos/bfhl.png"
          logoBackground="#ffffff"
          url="https://www.bajajfinservhealth.in/"
          delay={0.1}
          workDetails={bajajDetails}
        />
        <TimelineItem
          company="Viral Fission"
          role="Network Executive Head"
          period="June 2023 - Jan 2024"
          logo="/logos/viral-fission-new.png"
          logoBackground="#ffffff"
          url="https://www.viralfission.com/"
          delay={0.2}
          workDetails={viralFissionDetails}
        />
        <TimelineItem
          company="EWar Games"
          role="Marketing & BD Intern"
          period="July 2021 - Nov 2021"
          logo="/logos/ewar.jpg"
          logoBackground="#1e2130"
          url="https://getstan.app/"
          delay={0.3}
          note="Rebranded as STAN"
          workDetails={ewarDetails}
        />
      </div>
    </div>
  )
}
