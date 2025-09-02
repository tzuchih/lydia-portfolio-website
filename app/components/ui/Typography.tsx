"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "body-large" | "body-medium" | "caption" | "hero";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  children: React.ReactNode;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const Component = as || (variant.startsWith("h") ? variant : "p");
    
    const variants = {
      hero: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-center",
      h1: "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight",
      h2: "text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight",
      h3: "text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight",
      h4: "text-xl sm:text-2xl md:text-3xl font-medium leading-tight",
      body: "text-base sm:text-lg leading-relaxed font-normal",
      "body-large": "text-lg sm:text-xl leading-relaxed font-normal tracking-wide",
      "body-medium": "text-base leading-[1.6] font-normal tracking-wide text-gray-700",
      caption: "text-sm leading-relaxed font-normal tracking-wide"
    };

    return (
      <Component
        className={cn(variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
