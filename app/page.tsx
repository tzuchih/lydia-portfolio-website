"use client";

// app/page.tsx
import Image from "next/image";
import IntegratedHero from "./components/sections/IntegratedHero";
import Navigation from "./components/layout/Navigation";
import ScrollProgress from "./components/layout/ScrollProgress";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import Typography from "./components/ui/Typography";
import { Linkedin, Mail, Download, ArrowRight } from "lucide-react";

export default function Home() {
  const navigationItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const handleExploreWork = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/lydiatzuchihsu', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:lydia.tzuching@gmail.com', '_blank');
  };

  const handleDownloadResume = () => {
    // Downloads resume from public folder
    window.open('/resume.pdf', '_blank');
  };

  return (
    <main className="bg-white">
      {/* Navigation and Progress Bar */}
      <ScrollProgress />
      <Navigation items={navigationItems} />
      
      {/* Hero Section */}
      <div id="home">
        <IntegratedHero
          layout="combined"
          className="font-sf-pro"
        />
      </div>
      
      {/* About Section */}
      <section id="about" className="bg-gray-50 flex items-center justify-center py-12 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography
            variant="h2"
            as="h2"
            className="text-yellow-500 mb-4"
          >
            About Me 👩🏻‍💻
          </Typography>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Marketing 🆇 Product 🆇 Data </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto mb-12">
          I’ve always believed the most rewarding moments come when customers see how a solution makes their work easier. That belief has guided my career path: 
          <strong className="font-bold"> with over 5 years in B2B product marketing at 3M and a Master’s in Business Analytics from UC Irvine</strong>, I began in analytics, grew into product marketing, and even stepped up to lead new product programs outside my original scope.
          <br /><br />
          What defines me is curiosity, creativity, and high ownership. I thrive on turning complex products into simple, compelling stories, whether that means interviewing customers, building product content, or guiding cross-functional launches.
          <br /><br />
          My background in innovation manufacturing gave me the chance to serve both global key accounts and SMB customers, while my data fluency ensures every decision is backed by evidence. This combination helps me bridge the gap between engineering and marketing in ways that drive measurable growth and customer success.
          <br /><br />
          Now, I’m looking for my next chapter where I can bring together marketing, program leadership, and data-driven storytelling to help businesses thrive and people do their best work.
          <br />
          *See more of my work experience in the{" "}
          <button
            onClick={() => {
              const experienceSection = document.getElementById('experience');
              if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
          >
            Experience section
          </button>.
          </p>
          
          {/* About Me Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/about-me-1.jpg"
                alt="About me - Lydia working"
                width={640}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/about-me-2.jpg"
                alt="About me - Lydia professional"
                width={640}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center py-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-8xl font-bold mb-8 flex items-center justify-center gap-4 whitespace-nowrap">
            <span className="text-gray-900">Take the</span>
            <span className="text-8xl">➡️</span>
            <span className="text-green-600">next step.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            I&apos;d love to share more about my journey and how I can help you. Let&apos;s connect!
          </p>
          
          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* LinkedIn Button */}
            <button
              onClick={handleLinkedIn}
              className="flex items-center gap-4 px-8 py-4 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 rounded-xl transition-all duration-300 ease-out shadow-sm hover:shadow-md transform hover:scale-105 text-lg"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-medium">LinkedIn</span>
            </button>

            {/* Email Button */}
            <button
              onClick={handleEmail}
              className="flex items-center gap-4 px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-800 rounded-xl transition-all duration-300 ease-out shadow-sm hover:shadow-md transform hover:scale-105 text-lg"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">Email</span>
            </button>

            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-4 px-8 py-4 bg-green-50 hover:bg-green-100 text-green-700 hover:text-green-800 rounded-xl transition-all duration-300 ease-out shadow-sm hover:shadow-md transform hover:scale-105 text-lg"
            >
              <Download className="w-6 h-6" />
              <span className="font-medium">Resume</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
