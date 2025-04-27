
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  image: string;
  color: string;
}

const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2022 - Present",
    description: "Led the development of enterprise-level web applications using React and TypeScript. Mentored junior developers and implemented best practices for scalable architectures.",
    skills: ["React", "TypeScript", "Team Leadership", "System Architecture"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    color: "#8B0000"
  },
  {
    id: "exp-2",
    role: "UI/UX Developer",
    company: "Design Studio X",
    duration: "2020 - 2022",
    description: "Collaborated with designers to create pixel-perfect interfaces. Improved user engagement by 40% through optimized UI implementations and modern design systems.",
    skills: ["UI/UX Design", "Frontend Development", "Design Systems"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    color: "#A52A2A"
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern",
    company: "StartupLab",
    duration: "2019",
    description: "Developed and maintained features for a SaaS platform. Reduced loading times by 60% through code optimization and modern web technologies.",
    skills: ["JavaScript", "React", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    color: "#800000"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-black flex-grow max-w-[100px]"></div>
            <span className="text-sm font-mono uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:px-8">
                  <div className="mb-4">
                    <div className="inline-block bg-black text-white text-sm font-mono py-1 px-2 rounded mb-4">
                      {`0${index + 1}`}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{exp.role}</h3>
                    <p className="text-gray-600 mb-6">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs bg-gray-100 py-1 px-3 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`#${exp.id}`}
                      className="inline-flex items-center group/link"
                    >
                      <span className="text-sm font-medium mr-2">View Details</span>
                      <span className="h-[2px] w-6 bg-black transition-all group-hover/link:w-10"></span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl">
                  <div 
                    className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: exp.color }}
                  ></div>
                  <img 
                    src={exp.image} 
                    alt={`${exp.role} at ${exp.company}`}
                    className="w-full h-[350px] md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
                    {exp.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
