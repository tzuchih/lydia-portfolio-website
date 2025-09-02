"use client";

import { useEffect, useRef } from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaAction?: () => void;
  showScrollIndicator?: boolean;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Get Started",
  ctaAction,
  showScrollIndicator = true,
  className = ""
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Add fade-in animation on mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center justify-center overflow-hidden bg-white ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "calc(100vh - 4rem)",
        paddingTop: "4rem"
      }}
    >
      {/* Background overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20" />
      )}

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
          {/* Main headline */}
          <Typography
            variant="hero"
            as="h1"
            className="text-gray-900 mb-6"
          >
            {title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h2"
            as="h2"
            className="text-gray-600 max-w-3xl mx-auto font-normal"
          >
            {subtitle}
          </Typography>

          {/* Call to action */}
          {ctaText && (
            <div className="pt-8">
              <Button
                size="lg"
                onClick={ctaAction}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">{ctaText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
}
