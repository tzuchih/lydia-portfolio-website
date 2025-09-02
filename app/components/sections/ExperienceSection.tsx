"use client";

import { useState } from "react";
import Card from "../ui/Card";
import Typography from "../ui/Typography";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Product Marketing Manager",
    company: "3M, Fortune 500",
    period: "2020 - 2024",
    description: "Owned a $30M product portfolio. Shaped positioning, messaging, and go-to-market strategies for Semiconductor and Electronics markets, driving measurable adoption.",
    technologies: ["Marketing Strategy", "Launch Playbooks", "Channel Enablement", "Executive Storytelling"],
    achievements: [
      "Defined positioning & messaging for 10+ products for 4 market segments, driving 12% YoY growth on a $30M advanced materials portfolio",
      "Launched customizable bundled solutions that avoided market share loss from competitors, delivering $3.2M incremental revenue and stronger partner adoption",
      "Designed and scaled internal tools to track and optimize distributor partner performance across APAC, driving a 20% increase in spec-wins within 6 months.",
      "Equipped channel and field teams with customer success stories, training decks, and sales assets used in 20+ field events."
    ]
  },
  {
    id: "exp-2",
    title: "New Product Development Program Manager",
    company: "3M, Fortune 500",
    period: "2023 - 2024",
    description: "Took on responsibilities outside of scope to drive end-to-end new product development for advanced material solutions, from early concept validation to global launch execution.",
    technologies: ["Customer & Market Insights","New Product Development (NPD/NPI)", "Project Management", "Go-to-Market Strategy","Cross-Functional Leadership"],
    achievements: [
      "Accelerated NPI launch velocity by 40% using Lean-Agile, coordinating testing, customer validation, and cross-functional readiness from concept to handoff.",
      "Directed an urgent production ramp-up for a consumer electronics client, safeguarding $1.2M in revenue within 3 months by aligning supply chain, procurement, and NPI teams.",
      "Shaped messaging for advanced applications and delivered sales enablement kits and launch frameworks that accelerated adoption among both SMB and key accounts.",
      "Secured $5M investment for a new production line by building clear executive narratives."
    ]
  },
  {
    id: "exp-3",
    title: "Marketing Analyst",
    company: "3M, Fortune 500",
    period: "2017 - 2019",
    description: "Delivered insights, pricing strategies, and segmentation frameworks that informed product positioning and portfolio growth.",
    technologies: ["Market Research", "Pricing Analysis", "Customer Segmentation"],
    achievements: [
      "Conducted pricing regression analysis across 8 product lines, suggesting price adjustments and incentives that lifted margins by 4%",
      "Built customer segmentation models that identified high-value SMB clusters",
      "Designed dashboards to track adoption and competitor movements, improving GTM targeting",
      "Partnered with sales & product to refine offers tailored to small business users"
    ]
  },
  {
    id: "exp-4",
    title: "Data Analyst Apprentice",
    company: "Kaiser Permanente",
    period: "2025",
    description: "Transformed 50K+ call center customer interactions into insights that improved experience, adoption, and responsiveness.",
    technologies: ["Customer Insight", "Operational Analytics","CX Measurement"],
    achievements: [
      "Analyzed 50K+ service interactions with SQL & Python, lifting satisfaction by 3%", 
      "Built a star-rating framework adopted by 80% of regional teams to inform service level management levels.",
      "Implemented automated alerts feature on the dashboard that reduced stakeholder response time from 1 week to 24 hours"
    ]
  }
];

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<string>("exp-1");

  return (
    <section id="experience" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            as="h2"
            className="text-blue-600 mb-8"
          >
            Professional Experience 👩🏻‍💼
          </Typography>
          <Typography
            variant="body"
            as="p"
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Driving growth through positioning, insights, and cross-functional leadership
          </Typography>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeExperience === exp.id
                      ? "bg-blue-50 border-2 border-blue-200 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <Typography
                    variant="body-large"
                    as="h3"
                    className={`mb-2 line-clamp-2 font-semibold leading-tight ${
                      activeExperience === exp.id ? "text-blue-900" : "text-gray-900"
                    }`}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    as="p"
                    className={`mb-1 ${
                      activeExperience === exp.id ? "text-blue-700" : "text-gray-600"
                    }`}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="caption"
                    as="p"
                    className={`${
                      activeExperience === exp.id ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {exp.period}
                  </Typography>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className={`transition-all duration-500 ${
                  activeExperience === exp.id ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <Card variant="elevated" padding="lg">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <Typography
                        variant="h3"
                        as="h3"
                        className="text-gray-900 mb-2"
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        as="h4"
                        className="text-blue-600 mb-1"
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        variant="caption"
                        as="p"
                        className="text-gray-500"
                      >
                        {exp.period}
                      </Typography>
                    </div>

                    {/* Description */}
                    <Typography
                      variant="body"
                      as="p"
                      className="text-gray-600 leading-relaxed"
                    >
                      {exp.description}
                    </Typography>

                    {/* Technologies */}
                    <div>
                      <Typography
                        variant="h4"
                        as="h4"
                        className="text-gray-900 mb-3"
                      >
                        Core Focus Areas
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <Typography
                        variant="h4"
                        as="h4"
                        className="text-gray-900 mb-3"
                      >
                        Key Achievements
                      </Typography>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                            <Typography
                              variant="body-medium"
                              as="span"
                              className="text-gray-700"
                            >
                              {achievement}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
