"use client";

import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import Typography from "../ui/Typography";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

interface FeatureGridProps {
  features: FeatureCardProps[];
  title?: string;
  subtitle?: string;
  className?: string;
}

function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100",
      className
    )}>
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
          <div className="w-8 h-8">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <Typography
          variant="h4"
          as="h3"
          className="text-gray-900 mb-3"
        >
          {title}
        </Typography>
        <Typography
          variant="body"
          as="p"
          className="text-gray-600 leading-relaxed text-sm"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function FeatureGrid({ features, title, subtitle, className = "" }: FeatureGridProps) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <Typography
                variant="h2"
                as="h2"
                className="text-red-500 mb-4"
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                variant="body"
                as="p"
                className="text-gray-600 max-w-3xl mx-auto"
              >
                {subtitle}
              </Typography>
            )}
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
