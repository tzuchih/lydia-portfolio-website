export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: {
    problem: string;
    goal: string;
    outcome: string;
  };
  myRole: string[];
  achievements: string[];
  technologies: string[];
  reflection?: string;
  image?: string;
  heroImage?: string;
  category: string;
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    slug: "advanced-materials-portfolio",
    title: "Product Positioning at 3M",
    tagline: "Created 'Semiconductor Total Solutions' positioning that drove double-digit growth across Taiwan's largest tech show",
    description: "Led cross-functional team to launch '3M Semiconductor Total Solutions' positioning. Created integrated campaign including website, show booth, and materials for Taiwan's biggest semiconductor exhibition.",
    overview: {
      problem: "3M's semiconductor materials were scattered across product lines with no unified story. Taiwan's tech industry needed a clear value proposition for total solutions, not individual products.",
      goal: "Create '3M Semiconductor Total Solutions' positioning that showcases our complete portfolio. Launch integrated campaign for Taiwan's largest semiconductor exhibition.",
      outcome: "Double-digit revenue growth across semiconductor portfolio. Successfully launched unified positioning at SEMICON Taiwan, the region's premier industry event."
    },
    myRole: [
      "Proposed and championed the '3M Semiconductor Total Solutions' positioning strategy",
      "Led cross-functional marketing team to develop integrated campaign messaging",
      "Created comprehensive content suite: website copy, booth materials, product guides",
      "Designed show booth experience and materials for SEMICON Taiwan exhibition",
      "Coordinated with engineering and sales teams to ensure technical accuracy and market fit"
    ],
    achievements: [
      "Launched '3M Semiconductor Total Solutions' positioning at SEMICON Taiwan, the region's largest tech exhibition",
      "Drove double-digit revenue growth across semiconductor materials portfolio",
      "Created integrated campaign including website, booth design, and marketing materials",
      "Unified scattered product lines under cohesive total solutions messaging",
      "Led cross-functional team to successful exhibition debut and market positioning"
    ],
    technologies: ["Strategic Positioning", "Campaign Development", "Content Creation", "Exhibition Marketing", "Cross-functional Leadership", "Website Development", "Booth Design"],
    heroImage: "/projects/Advanced Material Positioning.jpeg",
    category: "marketing",
    link: "https://www.3m.com.tw/3M/zh_TW/semiconductor-tw/solutions/tape-and-reel/"
  },
  {
    id: "project-2",
    slug: "forecasting-performance-dashboard",
    title: "Forecasting & Performance Dashboard",
    tagline: "Turned 50K+ customer calls into insights that cut response times from 1 week to 24 hours",
    description: "Built an analytics dashboard that transformed Kaiser's call center operations. Created forecasting models and real-time alerts that improved customer satisfaction by 3% and gave leadership the visibility they needed.",
    overview: {
      problem: "Kaiser's call centers were flying blind. Leadership couldn't see performance issues until customers were already frustrated.",
      goal: "Give managers real-time visibility into what's working and what's not. Build forecasting that helps with staffing decisions.",
      outcome: "Response times dropped from 1 week to 24 hours. Customer satisfaction improved by 3%. Leadership finally had the data they needed to act fast."
    },
    myRole: [
      "Analyzed 50K+ customer interactions to find the real performance patterns",
      "Designed a star-rating SLA system that made complex metrics simple",
      "Built automated alerts that flagged problems before customers felt them",
      "Worked with managers to make sure the dashboard actually got used",
      "Turned data insights into a compelling story that got regional teams on board"
    ],
    achievements: [
      "Cut stakeholder response times from 1 week to 24 hours",
      "Improved customer satisfaction by 3 percent",
      "SLA framework adopted by 80% of regional teams",
      "Gave leadership real-time visibility into call center performance"
    ],
    technologies: ["SQL", "Python", "Power BI", "Forecasting Models", "SLA Design", "Automated Alerts"],
    reflection: "This project taught me that great analytics isn't about perfect models — it's about making data actionable. The star-rating SLA system worked because it turned complex metrics into something managers could actually use. The real breakthrough was the low-star alert system. Turns out a fast signal beats a perfect report every time. Working with my teammate showed me how collaboration creates better solutions than working alone. The biggest insight? Data storytelling is about creating clarity that drives action, not just pretty charts.",
    heroImage: "/projects/Forecasting & Performance Dashboard.jpg",
    category: "analytics",
    link: "https://kaiser25.netlify.app/",
  },
  {
    id: "project-3",
    slug: "portfolio-website",
    title: "Personal Marketing Portfolio in 48 Hours",
    tagline: "Built this website in 48 hours with AI collaboration to show I'm a different kind of PMM",
    description: "This very website you're looking at! Used Cursor and AI to rapidly build a portfolio that positions me as a technical PMM. Refined 30+ micro-interactions because every detail matters in marketing.",
    overview: {
      problem: "Generic portfolio templates wouldn't show that I'm a PMM who actually understands tech. I needed something that proved technical fluency, not just talked about it.",
      goal: "Build a marketing asset that demonstrates both technical execution and strategic thinking. Show I can learn, build, and ship professional-quality work.",
      outcome: "Created a portfolio that works as both a technical proof-point and a strategic marketing piece. Got conversations with hiring managers who specifically mentioned the site."
    },
    myRole: [
      "Treated myself as the 'product' and applied PMM principles to my own positioning",
      "Studied top-tier website designs to understand what makes sites feel premium",
      "Used Cursor and AI collaboration to rapidly learn React and ship features",
      "Obsessed over 30+ micro-interactions, asking 'does this reinforce my brand?'",
      "Crafted messaging that shows technical capability without losing marketing focus"
    ],
    achievements: [
      "Built and shipped a professional portfolio in just 48 hours",
      "Mastered AI-assisted development workflow with Cursor",
      "Created smooth animations and polished interactions that feel premium",
      "Proved I can learn new tech stacks and deliver production-ready code",
      "Got hiring manager conversations specifically because of the technical execution"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cursor IDE", "AI Development", "Prompt Engineering", "React Hooks", "CSS Animations"],
    reflection: "Building this taught me that PMM skills translate perfectly to product development. Both are about understanding users, iterating based on feedback, and shipping something valuable. Cursor changed everything, having AI as a development partner felt like having a senior developer available 24/7. The surprising part? My marketing instincts actually made the code better. I found myself obsessing over micro-interactions and asking 'does this enhance the user experience?' Every detail became a branding decision. The biggest lesson: when you approach coding like PMM strategy, with clear goals, user empathy, and attention to detail, you create something that actually serves its purpose.",
          heroImage: "/projects/Personal Marketing Portfolio in 48 Hours.png",
    category: "web",
  },
 
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projectsData;
  return projectsData.filter(project => project.category === category);
}
