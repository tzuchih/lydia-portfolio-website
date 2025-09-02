"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const baseStyles = "rounded-2xl transition-all duration-300 ease-out";
    
    const variants = {
      default: "bg-white shadow-sm hover:shadow-md",
      elevated: "bg-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]",
      outlined: "bg-white border border-gray-200 hover:border-gray-300"
    };
    
    const paddings = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };

    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
