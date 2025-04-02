"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Download, Github, Linkedin, Mail, Phone, ExternalLink, Globe, Plane, Camera, Leaf, Code, Zap, TrendingUp, Shield, Clock, Users, Database, Server, Cloud, Terminal, Palette, Globe2, MapPin, Cpu, Network, Boxes, GitBranch, Layout, Code2, Cog, Rocket, Menu } from "lucide-react"
import ImageCarousel from "@/components/ImageCarousel"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1E1E] via-[#252526] to-[#2D2D2D] text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm border-b border-[#3E3E3E]">
        <div className="max-w-5xl mx-auto px-4 py-3">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end mb-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#9CDCFE] hover:text-white transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center md:justify-center gap-4 md:gap-6`}>
            <a href="#skills" className="text-[#9CDCFE] hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Cpu className="h-4 w-4" />
              Technical Skills
            </a>
            <a href="#achievements" className="text-[#9CDCFE] hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4" />
              Achievements
            </a>
            <a href="#projects" className="text-[#9CDCFE] hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Terminal className="h-4 w-4" />
              Projects
            </a>
            <a href="#travel" className="text-[#9CDCFE] hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Globe2 className="h-4 w-4" />
              Travel
            </a>
            <a href="#contact" className="text-[#9CDCFE] hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden pt-16 md:pt-20">
        <ImageCarousel />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-4 md:gap-8 relative z-10 mt-8 md:mt-8 px-6 md:px-8">
          <div className="text-center w-full">
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4 text-white [text-shadow:_0_2px_10px_rgba(255,255,255,0.2),_0_2px_4px_rgba(0,0,0,0.5)]">
              Karan Hudia
            </h1>
            <h2 className="text-base md:text-3xl text-white/90 mb-3 md:mb-6 [text-shadow:_0_2px_10px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.5)]">
              Staff Software Engineer | Technical Lead
            </h2>
            <p className="text-sm md:text-xl text-white/80 mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Transforming complex challenges into elegant, high-performance solutions. 
              Specializing in frontend architecture and team leadership across global tech companies.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-3 md:mb-6">
              <span className="flex items-center text-xs md:text-base bg-[#2D2D2D]/50 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full text-white/90 border border-[#569CD6]/20 hover:border-[#569CD6]/50 transition-all group">
                <MapPin className="h-3 w-3 md:h-5 md:w-5 mr-1 md:mr-2 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                New Delhi, India
              </span>
              <span className="flex items-center text-xs md:text-base bg-[#2D2D2D]/50 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full text-white/90 border border-[#569CD6]/20 hover:border-[#569CD6]/50 transition-all group">
                <Mail className="h-3 w-3 md:h-5 md:w-5 mr-1 md:mr-2 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                karanhudia@gmail.com
              </span>
              <span className="flex items-center text-xs md:text-base bg-[#2D2D2D]/50 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full text-white/90 border border-[#569CD6]/20 hover:border-[#569CD6]/50 transition-all group">
                <Phone className="h-3 w-3 md:h-5 md:w-5 mr-1 md:mr-2 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                +91 8868888444
              </span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              <a
                href="/assets/karan-hudia-cv.pdf"
                className="bg-[#2D2D2D]/50 backdrop-blur-sm text-white px-3 py-1.5 md:px-6 md:py-3 rounded-lg hover:bg-[#2D2D2D]/70 transition-all transform hover:scale-105 inline-flex items-center border border-[#569CD6]/20 hover:border-[#569CD6]/50 text-xs md:text-lg group"
                download
              >
                <Download className="mr-1 md:mr-2 h-3 w-3 md:h-6 md:w-6 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                Download CV
              </a>
              <div className="flex gap-1.5 md:gap-3">
                <a
                  href="https://linkedin.com/in/karanhudia"
                  target="_blank"
                  className="p-1.5 md:p-3 rounded-full bg-[#2D2D2D]/50 backdrop-blur-sm border border-[#569CD6]/20 hover:border-[#569CD6]/50 hover:bg-[#2D2D2D]/70 transition-all flex items-center justify-center group"
                >
                  <Linkedin className="h-3 w-3 md:h-6 md:w-6 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                </a>
                <a
                  href="https://github.com/karanhudia"
                  target="_blank"
                  className="p-1.5 md:p-3 rounded-full bg-[#2D2D2D]/50 backdrop-blur-sm border border-[#569CD6]/20 hover:border-[#569CD6]/50 hover:bg-[#2D2D2D]/70 transition-all flex items-center justify-center group"
                >
                  <Github className="h-3 w-3 md:h-6 md:w-6 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                </a>
                <a
                  href="https://leetcode.com/u/karanhudia/"
                  target="_blank"
                  className="p-1.5 md:p-3 rounded-full bg-[#2D2D2D]/50 backdrop-blur-sm border border-[#569CD6]/20 hover:border-[#569CD6]/50 hover:bg-[#2D2D2D]/70 transition-all flex items-center justify-center group"
                >
                  <Code2 className="h-3 w-3 md:h-6 md:w-6 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                </a>
                <a
                  href="mailto:karanhudia@gmail.com"
                  className="p-1.5 md:p-3 rounded-full bg-[#2D2D2D]/50 backdrop-blur-sm border border-[#569CD6]/20 hover:border-[#569CD6]/50 hover:bg-[#2D2D2D]/70 transition-all flex items-center justify-center group"
                >
                  <Mail className="h-3 w-3 md:h-6 md:w-6 text-[#569CD6] group-hover:text-[#569CD6] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-6" id="skills">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-white flex items-center justify-center">
            <Cpu className="h-6 w-6 mr-2 text-[#569CD6]" />
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <SkillCategory 
              title="Frontend Development"
              skills={[
                { name: "React.js & Next.js", icon: <Layout className="h-5 w-5 text-[#569CD6]" /> },
                { name: "TypeScript & JavaScript", icon: <Code2 className="h-5 w-5 text-[#569CD6]" /> },
                { name: "React Native", icon: <Boxes className="h-5 w-5 text-[#569CD6]" /> },
                { name: "Redux & State Management", icon: <GitBranch className="h-5 w-5 text-[#569CD6]" /> },
                { name: "Performance Optimization", icon: <Rocket className="h-5 w-5 text-[#569CD6]" /> },
                { name: "Responsive Design", icon: <Layout className="h-5 w-5 text-[#569CD6]" /> },
                { name: "TailwindCSS & CSS-in-JS", icon: <Palette className="h-5 w-5 text-[#569CD6]" /> },
                { name: "Testing (Jest, RTL)", icon: <Shield className="h-5 w-5 text-[#569CD6]" /> }
              ]}
              icon={<Layout className="h-6 w-6 text-[#569CD6]" />}
            />
            <SkillCategory 
              title="Backend & Architecture"
              skills={[
                { name: "NestJS & Node.js", icon: <Server className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "GraphQL & REST APIs", icon: <Network className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "Microservices Architecture", icon: <Boxes className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "PostgreSQL & MongoDB", icon: <Database className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "System Design", icon: <Cog className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "CI/CD & DevOps", icon: <GitBranch className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "AWS & Cloud Services", icon: <Cloud className="h-5 w-5 text-[#4EC9B0]" /> },
                { name: "Docker & Kubernetes", icon: <Boxes className="h-5 w-5 text-[#4EC9B0]" /> }
              ]}
              icon={<Server className="h-6 w-6 text-[#4EC9B0]" />}
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-6" id="achievements">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-white flex items-center justify-center">
            <Zap className="h-6 w-6 mr-2 text-[#DCDCAA]" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <ImpactCard
              title="10x Performance Boost"
              description="Optimized GraphQL gateway to a supergraph, revolutionizing the performance of 34+ microservices."
              icon={<Server className="h-6 w-6 text-[#569CD6]" />}
            />
            <ImpactCard
              title="€600K Revenue Increase"
              description="Architected a search indexing system that reduced latency by 90%, directly impacting business growth."
              icon={<TrendingUp className="h-6 w-6 text-[#4EC9B0]" />}
            />
            <ImpactCard
              title="50% Test Coverage Boost"
              description="Led implementation of comprehensive testing strategy, adding 1000+ tests and ensuring product reliability."
              icon={<Shield className="h-6 w-6 text-[#CE9178]" />}
            />
            <ImpactCard
              title="30% Faster Load Times"
              description="Redesigned core pages with performance optimization, significantly improving user experience."
              icon={<Clock className="h-6 w-6 text-[#DCDCAA]" />}
            />
            <ImpactCard
              title="Team Leadership"
              description="Led a team of 4 developers, mentored juniors, and established best practices for code quality and documentation."
              icon={<Users className="h-6 w-6 text-[#C586C0]" />}
            />
            <ImpactCard
              title="TypeScript Migration"
              description="Reduced TypeScript errors from 900+ to fewer than 50, improving code maintainability and reliability."
              icon={<Code className="h-6 w-6 text-[#9CDCFE]" />}
            />
            <ImpactCard
              title="Design System Creation"
              description="Built a comprehensive component library reducing development time by 40% and ensuring UI consistency across products."
              icon={<Palette className="h-6 w-6 text-[#DCDCAA]" />}
            />
            <ImpactCard
              title="CI/CD Pipeline Optimization"
              description="Reduced build times by 65% through parallel execution and caching strategies in GitHub Actions workflows."
              icon={<GitBranch className="h-6 w-6 text-[#4EC9B0]" />}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-6" id="projects">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-white flex items-center justify-center">
            <Terminal className="h-6 w-6 mr-2 text-[#4EC9B0]" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <ProjectCard
              title="GitHub Actions Builder"
              description="Visualize, build, and debug GitHub Actions workflows before execution. Features caching and artifact management."
              tags={["Next.js", "TypeScript", "D3.js"]}
              status="In Progress"
              githubUrl="https://github.com/karanhudia/github-actions-creator"
              liveUrl="https://karanhudia.github.io/github-actions-creator/"
              icon={<Cloud className="h-6 w-6 text-[#569CD6]" />}
            />
            <ProjectCard
              title="Peerfolio"
              description="A Glassdoor-like platform for rating mentors and interviewers, with LinkedIn integration and review aggregation."
              tags={["Next.js", "TypeScript", "PostgreSQL"]}
              githubUrl="https://github.com/karanhudia/peerfolio"
              liveUrl="https://peerfolio.vercel.app/"
              icon={<Database className="h-6 w-6 text-[#C586C0]" />}
            />
            <ProjectCard
              title="OTP Trust"
              description="Secure OTP sharing app with AI-based categorization and end-to-end encryption."
              tags={["React Native", "AI", "Security"]}
              liveUrl="https://play.google.com/store/apps/details?id=com.otptrust&hl=en_IN"
              icon={<Shield className="h-6 w-6 text-[#4EC9B0]" />}
            />
            <ProjectCard
              title="Lottie Animation Editor"
              description="Real-time collaborative animation editor with multi-user support."
              tags={["React", "Node.js", "Socket.io"]}
              githubUrl="https://github.com/karanhudia/lottie-editor"
              liveUrl="https://lottie-editor.vercel.app"
              icon={<Palette className="h-6 w-6 text-[#CE9178]" />}
            />
          </div>
        </div>
      </section>

      {/* Travel & Hobbies Section */}
      <section className="py-6" id="travel">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-white flex items-center justify-center">
            <Globe2 className="h-6 w-6 mr-2 text-[#DCDCAA]" />
            Travel & Hobbies
          </h2>
          <div className="bg-[#2D2D2D] p-4 rounded-lg border border-[#3E3E3E]">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="flex items-center text-sm bg-[#3E3E3E] px-3 py-1.5 rounded-full">
                <Code className="h-4 w-4 mr-1.5 text-[#569CD6]" />
                Tech Enthusiast
              </span>
              <span className="flex items-center text-sm bg-[#3E3E3E] px-3 py-1.5 rounded-full">
                <Plane className="h-4 w-4 mr-1.5 text-[#569CD6]" />
                Travel Enthusiast
              </span>
              <span className="flex items-center text-sm bg-[#3E3E3E] px-3 py-1.5 rounded-full">
                <Camera className="h-4 w-4 mr-1.5 text-[#569CD6]" />
                Photography
              </span>
              <span className="flex items-center text-sm bg-[#3E3E3E] px-3 py-1.5 rounded-full">
                <Leaf className="h-4 w-4 mr-1.5 text-[#569CD6]" />
                Plant Enthusiast
              </span>
            </div>
            <p className="text-base text-[#D4D4D4] mb-3">
              Passionate about exploring new technologies, traveling the world, capturing moments through photography, and growing plants. 
              Currently nurturing a cherry tomato plant. Have traveled to 18+ countries across Europe, Americas, and Asia.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: "Iceland", flag: "🇮🇸" },
                { name: "Antarctica", flag: "🇦🇶" },
                { name: "Portugal", flag: "🇵🇹" },
                { name: "Spain", flag: "🇪🇸" },
                { name: "Hungary", flag: "🇭🇺" },
                { name: "Netherlands", flag: "🇳🇱" },
                { name: "Italy", flag: "🇮🇹" },
                { name: "Argentina", flag: "🇦🇷" },
                { name: "Uruguay", flag: "🇺🇾" },
                { name: "Denmark", flag: "🇩🇰" },
                { name: "Czech Republic", flag: "🇨🇿" },
                { name: "Poland", flag: "🇵🇱" },
                { name: "Croatia", flag: "🇭🇷" },
                { name: "Switzerland", flag: "🇨🇭" },
                { name: "USA", flag: "🇺🇸" },
                { name: "Austria", flag: "🇦🇹" },
                { name: "Vietnam", flag: "🇻🇳" }
              ].map((country) => (
                <span
                  key={country.name}
                  className="px-2.5 py-1 text-sm bg-[#3E3E3E] text-[#D4D4D4] rounded-full flex items-center gap-1.5"
                >
                  <span className="text-base">{country.flag}</span>
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6" id="contact">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3 text-white flex items-center justify-center">
            <Mail className="h-6 w-6 mr-2 text-[#569CD6]" />
            Let's Connect
          </h2>
          <p className="text-base text-[#D4D4D4] mb-4">
            Currently based in New Delhi, India. Open to discussing new opportunities, collaborations, and contractual work.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/karanhudia"
              target="_blank"
              className="text-[#9CDCFE] hover:text-white flex items-center text-base"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/karanhudia"
              target="_blank"
              className="text-[#9CDCFE] hover:text-white flex items-center text-base"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/karanhudia/"
              target="_blank"
              className="text-[#9CDCFE] hover:text-white flex items-center text-base"
            >
              <Code2 className="mr-2 h-5 w-5" />
              LeetCode
            </a>
            <a
              href="mailto:karanhudia@gmail.com"
              className="text-[#9CDCFE] hover:text-white flex items-center text-base"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ImpactCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#2D2D2D] p-4 rounded-lg border border-[#3E3E3E] hover:bg-[#3E3E3E] transition-all">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <h3 className="text-lg font-bold mb-1.5 text-[#9CDCFE]">{title}</h3>
          <p className="text-sm text-[#D4D4D4]">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tags, status, githubUrl, liveUrl, icon }: { 
  title: string;
  description: string;
  tags: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#2D2D2D] p-4 rounded-lg border border-[#3E3E3E] hover:bg-[#3E3E3E] transition-all">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        {status && (
          <span className="px-2 py-1 text-sm bg-[#3E3E3E] text-[#D4D4D4] rounded-full">
            {status}
          </span>
        )}
      </div>
      <p className="text-sm text-[#D4D4D4] mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm bg-[#3E3E3E] text-[#D4D4D4] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-2">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CDCFE] hover:text-white flex items-center text-sm"
          >
            <Github className="h-4 w-4 mr-1.5" />
            <span>GitHub</span>
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CDCFE] hover:text-white flex items-center text-sm"
          >
            <ExternalLink className="h-4 w-4 mr-1.5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}

function SkillCategory({ title, skills, icon }: { title: string; skills: { name: string; icon: React.ReactNode }[]; icon: React.ReactNode }) {
  return (
    <div className="bg-[#2D2D2D] p-4 rounded-lg border border-[#3E3E3E]">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {skills.map((skill) => (
          <li key={skill.name} className="text-sm text-[#D4D4D4] flex items-center gap-2">
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}