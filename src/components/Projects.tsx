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
        description:
            "Reimagining website for B2B banking solution with a mature look and feel to meet modern e-commerce needs.",
        tags: ["UI/UX Design", "Web Development", "Branding"],
        image: "/lovable-uploads/492c5ac2-2cd4-48c8-b707-a77c89783608.png",
        color: "hsl(var(--highlight))",
    },
    {
        id: "project-2",
        title: "Nebula",
        description:
            "Creating a revolutionary AI-powered analytics dashboard with intuitive visualizations.",
        tags: ["Interface Design", "Product Strategy", "Frontend"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        color: "hsl(var(--highlight))",
    },
    {
        id: "project-3",
        title: "Evergreen",
        description:
            "Sustainable e-commerce platform showcasing eco-friendly products with a carbon-neutral approach.",
        tags: ["Branding", "Web Design", "UI/UX"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
        color: "hsl(var(--highlight))",
    },
];

const Projects = () => {
    return (
        <section id="work" className="py-20 md:py-32 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px bg-black dark:bg-white flex-grow max-w-[100px]"></div>
                        <span className="text-sm font-mono uppercase tracking-wider dark:text-gray-300">
                            Latest Work
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold dark:text-white"
                        data-cursor-highlight="true"
                    >
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
                                stiffness: 50,
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div
                                className={cn(
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                                    index % 2 === 1 && "lg:grid-flow-dense"
                                )}
                            >
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
                                        style={{
                                            backgroundColor: project.color,
                                        }}
                                    ></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[350px] md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium dark:bg-gray-500">
                                        {project.tags[0]}
                                    </div>

                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                                </motion.div>

                                <motion.div
                                    className={cn(
                                        "lg:px-8",
                                        index % 2 === 0 && "lg:col-start-2"
                                    )}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? 50 : -50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="mb-4">
                                        <div className="inline-block bg-black dark:bg-gray-700 text-white text-sm font-mono py-1 px-2 rounded mb-4">
                                            {`0${index + 1}`}
                                        </div>
                                        <motion.h3
                                            className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white"
                                            data-cursor-highlight="true"
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-600 dark:text-gray-300 mb-6"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.4,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            {project.description}
                                        </motion.p>
                                        <motion.div
                                            className="flex flex-wrap gap-2 mb-8"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{
                                                staggerChildren: 0.1,
                                                delayChildren: 0.5,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            {project.tags.map((tag) => (
                                                <motion.span
                                                    key={tag}
                                                    className="text-xs bg-gray-100 dark:bg-gray-700 dark:text-gray-200 py-1 px-3 rounded-full"
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        <motion.a
                                            href={`#${project.id}`}
                                            className="inline-flex items-center group/link"
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10,
                                            }}
                                        >
                                            <span className="text-sm font-medium mr-2 dark:text-white">
                                                View Project
                                            </span>
                                            <span className="h-[2px] w-6 bg-black dark:bg-white transition-all group-hover/link:w-10"></span>
                                            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1 dark:text-white" />
                                        </motion.a>
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
