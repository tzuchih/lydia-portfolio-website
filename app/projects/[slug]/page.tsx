"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { getProjectBySlug } from "../../lib/projectsData";
import Typography from "../../components/ui/Typography";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Project Info */}
            <div className="order-2 lg:order-1">
              <Typography
                variant="h1"
                as="h1"
                className="text-gray-900 mb-4"
              >
                {project.title}
              </Typography>
              
              <Typography
                variant="body-large"
                as="p"
                className="text-blue-600 font-medium mb-6"
              >
                {project.tagline}
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-gray-600 leading-relaxed mb-8"
              >
                {project.description}
              </Typography>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Project
                  </Button>
                )}
                {project.github && (
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </Button>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
                {project.heroImage ? (
                  <img 
                    src={project.heroImage} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl text-gray-400">📱</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <Card variant="elevated" padding="lg">
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-gray-900 mb-8"
                >
                  Campaign Overview
                </Typography>

                <div className="space-y-8">
                  <div>
                    <Typography
                      variant="h4"
                      as="h3"
                      className="text-gray-900 mb-3"
                    >
                      Challenge
                    </Typography>
                    <Typography
                      variant="body-medium"
                      as="p"
                      className="text-gray-700"
                    >
                      {project.overview.problem}
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h4"
                      as="h3"
                      className="text-gray-900 mb-3"
                    >
                      Objectives
                    </Typography>
                    <Typography
                      variant="body-medium"
                      as="p"
                      className="text-gray-700"
                    >
                      {project.overview.goal}
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h4"
                      as="h3"
                      className="text-gray-900 mb-3"
                    >
                      Results & Impact
                    </Typography>
                    <Typography
                      variant="body-medium"
                      as="p"
                      className="text-gray-700"
                    >
                      {project.overview.outcome}
                    </Typography>
                  </div>
                </div>
              </Card>

              {/* My Role */}
              <Card variant="elevated" padding="lg">
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-gray-900 mb-6"
                >
                  My Role & Strategy
                </Typography>

                <ul className="space-y-3">
                  {project.myRole.map((role, index) => (
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
                        {role}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Key Achievements */}
              <Card variant="elevated" padding="lg">
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-gray-900 mb-6"
                >
                  Key Metrics & Outcomes
                </Typography>

                <ul className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0" />
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
              </Card>

              {/* Reflection */}
              {project.reflection && (
                <Card variant="elevated" padding="lg">
                  <Typography
                    variant="h2"
                    as="h2"
                    className="text-gray-900 mb-6"
                  >
                    Reflection & Learnings
                  </Typography>
                  
                  <Typography
                    variant="body-medium"
                    as="p"
                    className="text-gray-700 leading-relaxed"
                  >
                    {project.reflection}
                  </Typography>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <Card variant="elevated" padding="lg">
                <Typography
                  variant="h3"
                  as="h3"
                  className="text-gray-900 mb-6"
                >
                  Tools & Methodologies
                </Typography>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Project Links */}
              <Card variant="elevated" padding="lg">
                <Typography
                  variant="h3"
                  as="h3"
                  className="text-gray-900 mb-6"
                >
                  Project Links
                </Typography>

                <div className="space-y-3">
                  {project.link && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => window.open(project.link, '_blank')}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.github, '_blank')}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </Card>

              {/* Back to Projects */}
              <Card variant="elevated" padding="lg">
                <Link href="/#projects">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography
            variant="h2"
            as="h2"
            className="text-gray-900 mb-6"
          >
            Like what you see?
          </Typography>
          <Typography
            variant="body-large"
            as="p"
            className="text-gray-600 mb-8"
          >
            I'd love to discuss how my skills and experience could contribute to your team.
          </Typography>
          <Link href="/#contact">
            <Button
              size="lg"
              variant="primary"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
