
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  })
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={fadeInVariants(0)} className="flex items-center gap-4 mb-4">
              <div className="h-px bg-black flex-grow max-w-[100px]"></div>
              <span className="text-sm font-mono uppercase tracking-wider">About Me</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInVariants(1)} 
              className="text-4xl md:text-5xl font-display font-bold mb-8"
              data-cursor-highlight="true"
            >
              Hello! I'm Alex Cooper
            </motion.h2>
            
            <motion.div variants={fadeInVariants(2)} className="space-y-6 text-gray-600">
              <p>
                I partner up with dynamic founders reinventing tomorrow, from YC startups to enterprises and bootstrapped companies. My goal is to craft unique, consistent, and mature identities for SaaS and Web3 products.
              </p>
              <p>
                With over 8 years of experience in digital design and development, I've helped numerous brands establish their online presence with clean, functional, and visually appealing websites.
              </p>
              <p>
                My approach combines strategic thinking with aesthetic excellence, ensuring that each project not only looks stunning but also achieves its business objectives effectively.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInVariants(3)} 
              className="mt-10 grid grid-cols-3 gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-black">8+</div>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-black">50+</div>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-black">30+</div>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
          >
            <motion.div 
              variants={fadeInVariants(0)} 
              className="relative"
            >
              <motion.div
                whileHover={{ rotate: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/lovable-uploads/ae96432a-2a09-4826-af5a-b00dfe71b1b3.png"
                  alt="About me illustration" 
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20, rotate: 0 },
                  visible: { opacity: 1, y: 0, rotate: 3 }
                }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-lg transform shadow-lg"
              >
                <span className="font-display font-bold">Let's create something amazing</span>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20, rotate: 0 },
                  visible: { opacity: 1, x: 0, rotate: -12 }
                }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute -top-6 -left-6 bg-highlight text-black p-3 rounded-full shadow-lg transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <path d="M9 9h.01"></path>
                  <path d="M15 9h.01"></path>
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInVariants(3)} 
              className="mt-16"
            >
              <h3 className="text-xl font-display font-bold mb-6" data-cursor-highlight="true">Skills & Expertise</h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInVariants(idx + 4)}
                  >
                    <h4 className="text-sm font-medium text-gray-900 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.span 
                          key={skill}
                          className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm"
                          whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--highlight) / 0.2)" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Marquee effect */}
      <div className="overflow-hidden py-10 mt-24 bg-highlight">
        <div className="flex space-x-6 animate-marquee whitespace-nowrap">
          {Array(10).fill("Designer • Developer • Strategist • ").map((text, i) => (
            <span key={i} className="text-3xl font-display font-bold text-black">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
