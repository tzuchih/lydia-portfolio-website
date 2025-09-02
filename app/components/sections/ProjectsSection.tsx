"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Card from "../ui/Card";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "../../lib/projectsData";

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize scroll button states
    checkScrollButtons();
    
    // Add resize listener to recalculate on window resize
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            as="h2"
            className="text-purple-600 mb-4"
          >
            Featured Projects 💼
          </Typography>
          <Typography
            variant="body"
            as="p"
            className="text-gray-600 max-w-3xl mx-auto mb-16"
          >
            Showcase of my best work and project portfolio
          </Typography>
        </div>

        {/* Horizontal Scrolling Projects */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Left Navigation Arrow */}
          <button
            onClick={scrollLeft}
            className={`absolute left-2 top-1/2 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
              canScrollLeft 
                ? 'opacity-100 hover:shadow-xl hover:scale-105' 
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={scrollRight}
            className={`absolute right-2 top-1/2 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
              canScrollRight 
                ? 'opacity-100 hover:shadow-xl hover:scale-105' 
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8"
            onScroll={checkScrollButtons}
          >
            <div className="flex gap-6 pb-6" style={{ width: 'max-content', scrollSnapType: 'x mandatory' }}>
              {projectsData.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <Card
                variant="elevated"
                padding="lg"
                className="w-80 sm:w-80 lg:w-96 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 flex-shrink-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  {project.heroImage ? (
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-4xl text-gray-400">📱</div>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <Typography
                    variant="h3"
                    as="h3"
                    className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    as="p"
                    className="text-blue-600 font-medium"
                  >
                    {project.tagline}
                  </Typography>
                  
                  <Typography
                    variant="body"
                    as="p"
                    className="text-gray-600 leading-relaxed line-clamp-3"
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="pt-4">
                    <Button
                      size="sm"
                      variant="primary"
                      className="w-full group-hover:bg-blue-700 transition-colors duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
