"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Function to wrap emojis in spans with animation classes
function wrapEmojisWithAnimation(text: string, isActive: boolean) {
  // Regex to match emoji characters including skin tone modifiers
  const emojiRegex = /([\u{1F600}-\u{1F64F}][\u{1F3FB}-\u{1F3FF}]?|[\u{1F300}-\u{1F5FF}][\u{1F3FB}-\u{1F3FF}]?|[\u{1F680}-\u{1F6FF}][\u{1F3FB}-\u{1F3FF}]?|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}][\u{1F3FB}-\u{1F3FF}]?|[\u{1F018}-\u{1F270}]|🔢|📈|📝|🤝🏼|🍎|📌|✅)/gu;
  
  let animationKey = 0;
  return text.split(emojiRegex).map((part, index) => {
    if (emojiRegex.test(part)) {
      animationKey++;
      return (
        <span
          key={`${index}-${animationKey}`}
          className={`emoji-container ${isActive ? 'emoji-tilt' : ''}`}
          style={{
            animationDelay: `${animationKey * 0.1}s`
          }}
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

/**
 * Working baseline:
 * - Vertical column (no overlap)
 * - Smooth handoff between lines
 * - List markers hidden
 * - No custom Tailwind config required
 */
export default function ScrollHighlightHero() {
  const lines = useMemo(
    () => [
      { id: 0, text: "From 🔢 data insights 📈 to positioning 📝 and product sense," },
      { id: 1, text: "Lydia has what you need 🤝🏼 to help 🍎 Apple's small business customers thrive." },
      { id: 2, text: "All in 📌 one marketer." },
      { id: 3, text: "This is strategic PMM ✅ at work." },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const stepsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = stepsRef.current;
    if (!root) return;

    const sentinels = Array.from(
      root.querySelectorAll<HTMLDivElement>("[data-line]")
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setActiveIdx(lines.length - 1);
      return;
    }

    // Add scroll event listener as fallback for edge cases
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroSectionTop = root.offsetTop;
      
      // Calculate which line should be active based on scroll position
      const relativeScroll = scrollY - heroSectionTop;
      const sectionHeight = root.offsetHeight;
      const lineIndex = Math.max(0, Math.min(
        Math.floor((relativeScroll / sectionHeight) * lines.length),
        lines.length - 1
      ));
      
      // Special case: if we're at the very top, always show first line
      if (scrollY < heroSectionTop + windowHeight * 0.1) {
        setActiveIdx(0);
        return;
      }
      
      setActiveIdx(lineIndex);
    };

    const io = new IntersectionObserver(
      (entries) => {
        // Get all intersecting entries with their positions
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            element: e.target,
            index: Number(e.target.getAttribute("data-line")),
            ratio: e.intersectionRatio,
            rect: e.boundingClientRect
          }))
          .sort((a, b) => a.rect.top - b.rect.top);

        if (intersecting.length === 0) {
          // Fallback to scroll-based calculation
          handleScroll();
          return;
        }

        // Find the element closest to the center of the viewport
        const viewportCenter = window.innerHeight / 2;
        const closest = intersecting.reduce((prev, curr) => {
          const prevDistance = Math.abs(prev.rect.top + prev.rect.height / 2 - viewportCenter);
          const currDistance = Math.abs(curr.rect.top + curr.rect.height / 2 - viewportCenter);
          return currDistance < prevDistance ? curr : prev;
        });

        setActiveIdx(closest.index);
      },
      {
        root: null,
        // More generous detection zone to catch edge cases
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    sentinels.forEach((el) => io.observe(el));
    
    // Add scroll listener as backup
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lines.length]);

  return (
    <section className="relative bg-white text-neutral-900 pt-24 lg:pt-28 pb-20 lg:pb-32 overflow-visible">
      {/* Calculate dynamic height based on content */}
      <div style={{ minHeight: `${Math.max(lines.length * 60, 200)}vh` }}>
        {/* Sticky viewport */}
        <div className="sticky top-24 lg:top-28 z-10 flex min-h-[80vh] items-center py-8">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <h1 className="leading-tight tracking-tight">
                              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                {lines.map((line, i) => (
                  <div
                    key={line.id}
                    className={[
                      // typography (responsive but simple)
                      "font-semibold text-center",
                      "text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.06]",
                      // smooth transitions
                      "transition-[opacity,transform] duration-700 ease-out will-change-transform",
                      // active vs inactive
                      i === activeIdx ? "opacity-100 scale-100" : "opacity-25 scale-[0.995]",
                    ].join(" ")}
                  >
                    {wrapEmojisWithAnimation(line.text, i === activeIdx)}
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>

        {/* Scroll drivers (hidden list markers) */}
        <div ref={stepsRef} className="absolute inset-0 pointer-events-none">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 h-full">
            <ol className="list-none m-0 p-0 py-[10vh] h-full">
              {lines.map((_, i) => (
                <li key={i} className="h-[50vh] flex items-center justify-center">
                  <div data-line={i} className="h-[20vh] w-full" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      {/* Bottom spacing to ensure clear separation from next section */}
      <div className="h-20 lg:h-32" />
    </section>
  );
}
