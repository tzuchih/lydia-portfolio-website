"use client";

import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  isScrolled?: boolean;
  className?: string;
}

export default function Navigation({
  items,
  isScrolled: externalIsScrolled,
  className = ""
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShowScrolledStyle = externalIsScrolled !== undefined ? externalIsScrolled : isScrolled;

  const handleNavClick = (href: string) => {
    // Check if it's an anchor link (starts with #) or a page link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For page navigation, use window.location or Next.js router
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Lydia Hsu</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        shouldShowScrolledStyle
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200/50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a
              href="#home"
              className={cn(
                "text-xl font-bold transition-colors duration-300",
                shouldShowScrolledStyle ? "text-gray-900" : "text-gray-900"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              Lydia Hsu
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:scale-105",
                  shouldShowScrolledStyle
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={cn(
                "p-2 rounded-md transition-colors duration-300",
                shouldShowScrolledStyle
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
