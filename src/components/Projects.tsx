import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "RUBY",
    description: "Reimagining website for B2B banking solution with a mature look and feel to meet modern e-commerce needs.",
    tags: ["UI/UX Design", "Web Development", "Branding"],
    image: "/lovable-uploads/492c5ac2-2cd4-48c8-b707-a77c89783608.png",
    color: "#FFE234",
  },
  {
    id: "project-2",
    title: "Nebula",
    description: "Creating a revolutionary AI-powered analytics dashboard with intuitive visualizations.",
    tags: ["Interface Design", "Product Strategy", "Frontend"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    color: "#A594F9",
  },
  {
    id: "project-3",
    title: "Evergreen",
    description: "Sustainable e-commerce platform showcasing eco-friendly products with a carbon-neutral approach.",
    tags: ["Branding", "Web Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    color: "#4CAF50",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-black flex-grow max-w-[100px]"></div>
            <span className="text-sm font-mono uppercase tracking-wider">Latest Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                index % 2 === 1 && "lg:grid-flow-dense"
              )}>
                <motion.div 
                  className={cn(
                    "relative overflow-hidden rounded-2xl",
                    index % 2 === 1 && "lg:col-start-1"
                  )}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[350px] md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
                    {project.tags[0]}
                  </div>
                </motion.div>
                
                <motion.div 
                  className={cn(
                    "lg:px-8",
                    index % 2 === 1 && "lg:col-start-2"
                  )}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <div className="inline-block bg-black text-white text-sm font-mono py-1 px-2 rounded mb-4">
                      {`0${index + 1}`}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-gray-100 py-1 px-3 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`#${project.id}`}
                      className="inline-flex items-center group/link"
                    >
                      <span className="text-sm font-medium mr-2">View Project</span>
                      <span className="h-[2px] w-6 bg-black transition-all group-hover/link:w-10"></span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
