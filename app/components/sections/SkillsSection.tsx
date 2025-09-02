"use client";

import { useState } from "react";
import Typography from "../ui/Typography";

interface SkillFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  differentiator: string;
}

const skillsData: SkillFeature[] = [
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: "Customer-Centric Positioning",
    description: "Craft clear, compelling product value stories that resonate with diverse audiences.",
    differentiator: "I have worked with both key accounts and SMBs, navigating very different application needs, budgets, and priorities while ensuring each saw value."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Insight-Led Strategy",
    description: "Gather customer and market insights to shape messaging, campaigns, and product direction.",
    differentiator: "I influenced global product roadmaps and investment decisions by communicating local market insights from the field."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Cross-Functional Leadership",
    description: "Lead end-to-end product development and launch by aligning teams around customer needs.",
    differentiator: "I stepped outside PMM scope to collect VOC, build business cases, and guide cross-functional NPI programs from idea to launch readiness."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: "Channel Enablement & Field Marketing",
    description: "Build content, toolkits, and events that empower partners and engage customers.",
    differentiator: "I hosted the 3M semiconductor solutions booth at Taiwan's largest industry show, increasing qualified leads by 30 percent and strengthening distributor engagement."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.5M7 13h11M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
      </svg>
    ),
    title: "Data-Driven Storytelling",
    description: "Use data and analytics to inform decisions and measure marketing impact.",
    differentiator: "With a Master's in Business Analytics, I connect numbers to narratives and turn data into stories that inspire action across teams."
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    title: "Executive Influence & Storytelling",
    description: "Communicate performance and strategy to leadership with clarity and impact.",
    differentiator: "I created executive-level presentations for years, reporting portfolio performance and convincing leadership to invest, including a $5M capacity expansion."
  }
];

function SkillCard({ skill, index }: { skill: SkillFeature; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 ${
        isExpanded ? 'ring-2 ring-red-200 shadow-2xl p-6 pb-8' : 'p-6'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
        isExpanded ? 'bg-red-500 text-white scale-110' : 'bg-red-50 text-red-500'
      }`}>
        {skill.icon}
      </div>

      {/* Title */}
      <Typography
        variant="h4"
        as="h3"
        className={`mb-3 transition-colors duration-300 ${
          isExpanded ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        {skill.title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body"
        as="p"
        className="text-gray-600 mb-4 leading-relaxed"
      >
        {skill.description}
      </Typography>

      {/* Differentiator - Expandable */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-gray-200 pt-4">
          <Typography
            variant="caption"
            as="p"
            className="text-red-600 font-semibold mb-2 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            What makes me different
          </Typography>
          <Typography
            variant="body-medium"
            as="p"
            className="text-gray-700 italic leading-relaxed"
          >
            {skill.differentiator}
          </Typography>
        </div>
      </div>

      {/* Expand Indicator */}
      <div className={`absolute top-4 right-4 transition-all duration-300 ${
        isExpanded ? 'rotate-180 text-red-500' : 'text-gray-400'
      }`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            as="h2"
            className="text-red-500 mb-4"
          >
            Skills & Expertise 🦾
          </Typography>
          <Typography
            variant="body"
            as="p"
            className="text-gray-600 max-w-3xl mx-auto mb-4"
          >
            Deep expertise in product marketing, from customer insights to go-to-market execution.
          </Typography>
          <Typography
            variant="body-medium"
            as="p"
            className="text-red-600 font-medium"
          >
            Hover over each card to discover what makes me different 👆
          </Typography>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
