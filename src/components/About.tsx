
import React from "react";
import { cn } from "@/lib/utils";

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Design",
    items: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping", "Wireframing"]
  },
  {
    category: "Development",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js"]
  },
  {
    category: "Tools",
    items: ["Figma", "Adobe Creative Suite", "Framer", "VS Code", "Git"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-black flex-grow max-w-[100px]"></div>
              <span className="text-sm font-mono uppercase tracking-wider">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Hello! I'm Alex Cooper
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                I partner up with dynamic founders reinventing tomorrow, from YC startups to enterprises and bootstrapped companies. My goal is to craft unique, consistent, and mature identities for SaaS and Web3 products.
              </p>
              <p>
                With over 8 years of experience in digital design and development, I've helped numerous brands establish their online presence with clean, functional, and visually appealing websites.
              </p>
              <p>
                My approach combines strategic thinking with aesthetic excellence, ensuring that each project not only looks stunning but also achieves its business objectives effectively.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-highlight">8+</div>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-highlight">50+</div>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-highlight">30+</div>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ae96432a-2a09-4826-af5a-b00dfe71b1b3.png"
                alt="About me illustration" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-lg transform rotate-3 shadow-lg">
                <span className="font-display font-bold">Let's create something amazing</span>
              </div>
              <div className="absolute -top-6 -left-6 bg-highlight text-black p-3 rounded-full shadow-lg transform -rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <path d="M9 9h.01"></path>
                  <path d="M15 9h.01"></path>
                </svg>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-xl font-display font-bold mb-6">Skills & Expertise</h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee effect */}
      <div className="overflow-hidden py-10 mt-24 bg-highlight">
        <div className="flex space-x-6 animate-marquee whitespace-nowrap">
          {Array(10).fill("Designer • Developer • Strategist • ").map((text, i) => (
            <span key={i} className="text-3xl font-display font-bold">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
