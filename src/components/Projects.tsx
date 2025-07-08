import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    color: string;
    link: string; // Add link property to interface
}

const projects: Project[] = [
    {
        id: "project-1",
        title: "CodeSync",
        description:
            "All-in-one platform for tech professionals combining social networking, knowledge sharing, and development tools in a unified environment.",
        tags: ["React", "Node.js", "MongoDB", "Socket.io", "AI Integration"],
        image: "/assets/images/codesync.png",
        color: "hsl(var(--highlight))",
        link: "https://github.com/Yassinekrn/Iris-Backend", // Example link
    },
    {
        id: "project-2",
        title: "Oasis",
        description:
            "Scholarship discovery platform leveraging advanced scraping and AI to help students find and track quality educational funding opportunities with personalized notifications.",
        tags: ["MERN Stack", "Python", "AI/ML", "Web Scraping"],
        image: "/assets/images/oasis.png",
        color: "hsl(var(--highlight))",
        link: "https://github.com/Yassinekrn/Oasis-User-Backend", // Example link
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
                                    <LazyImage
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
                                                    className="text-xs bg-gray-100 dark:bg-gray-700 dark:text-gray-200 py-1 px-3 rounded-full hover:bg-highlight/20 dark:hover:bg-highlight/20 transition-colors duration-200"
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
                                                    whileHover={{
                                                        scale: 1.05,
                                                    }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
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
