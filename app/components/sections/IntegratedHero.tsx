"use client";

import { useState, useEffect } from "react";
import ScrollHighlightHero from "../ScrollHighlightHero";
import HeroSection from "./HeroSection";

interface IntegratedHeroProps {
  // HeroSection props
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaAction?: () => void;
  
  // ScrollHighlightHero customization
  customLines?: Array<{ id: number; text: string }>;
  
  // Layout options
  layout?: "scroll-first" | "hero-first" | "combined";
  className?: string;
}

export default function IntegratedHero({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Explore My Work",
  ctaAction,
  customLines,
  layout = "combined",
  className = ""
}: IntegratedHeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultLines = [
    { id: 0, text: "From 🤝 support" },
    { id: 1, text: "and security 🔒" },
    { id: 2, text: "to devices 💻 and apps," },
    { id: 3, text: "Lydia Hsu has what you need 📊" },
    { id: 4, text: "to run your business." },
    { id: 5, text: "All in 📌 one place." },
    { id: 6, text: "This is simplicity ✅ at work." },
  ];

  const lines = customLines || defaultLines;

  if (layout === "hero-first") {
    return (
      <div className={className}>
        <HeroSection
          title={title}
          subtitle={subtitle}
          backgroundImage={backgroundImage}
          ctaText={ctaText}
          ctaAction={ctaAction}
          showScrollIndicator={true}
        />
        <ScrollHighlightHero />
      </div>
    );
  }

  if (layout === "scroll-first") {
    return (
      <div className={className}>
        <ScrollHighlightHero />
        <HeroSection
          title={title}
          subtitle={subtitle}
          backgroundImage={backgroundImage}
          ctaText={ctaText}
          ctaAction={ctaAction}
          showScrollIndicator={false}
        />
      </div>
    );
  }

  // Combined layout - Show only ScrollHighlightHero immediately
  return (
    <div className={className}>
      {/* ScrollHighlightHero as the immediate content */}
      <ScrollHighlightHero />
    </div>
  );
}
