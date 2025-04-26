
import React, { useRef, useEffect } from "react";
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-none');
            entry.target.classList.remove('opacity-0', 'translate-y-20', 'blur-sm');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-20', 'blur-sm');
            entry.target.classList.remove('opacity-100', 'translate-y-0', 'blur-none');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/50">
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

        <div className="space-y-4 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg 
                       transition-all duration-700 transform opacity-0 translate-y-20 blur-sm
                       hover:shadow-xl hover:scale-[1.02]"
              style={{
                zIndex: experiences.length - index,
                marginTop: index === 0 ? '0' : '-4rem'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-highlight text-white p-3 rounded-xl shadow-lg">
                  <BriefcaseBusiness className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
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
