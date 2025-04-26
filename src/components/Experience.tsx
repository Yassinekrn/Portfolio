
import React from "react";
import { BriefcaseBusiness } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2022 - Present",
    description: "Led the development of enterprise-level web applications using React and TypeScript. Mentored junior developers and implemented best practices.",
    skills: ["React", "TypeScript", "Team Leadership", "System Architecture"]
  },
  {
    id: "exp-2",
    role: "UI/UX Developer",
    company: "Design Studio X",
    duration: "2020 - 2022",
    description: "Collaborated with designers to create pixel-perfect interfaces. Improved user engagement by 40% through optimized UI implementations.",
    skills: ["UI/UX Design", "Frontend Development", "Design Systems"]
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern",
    company: "StartupLab",
    duration: "2019",
    description: "Developed and maintained features for a SaaS platform. Reduced loading times by 60% through code optimization.",
    skills: ["JavaScript", "React", "Performance Optimization"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-black flex-grow max-w-[100px]"></div>
            <span className="text-sm font-mono uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold animate-blur-in opacity-0">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative p-6 md:p-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 left-6 bg-highlight text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BriefcaseBusiness className="w-6 h-6" />
                </div>

                <div className="ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">{exp.role}</h3>
                      <p className="text-gray-600 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 animate-blur-in opacity-0 [animation-delay:0.3s]">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-gray-100 text-gray-800 py-1 px-3 rounded-full animate-blur-in opacity-0 [animation-delay:0.5s]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
