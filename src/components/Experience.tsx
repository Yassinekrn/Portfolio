import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
        description:
            "Led the development of enterprise-level web applications using React and TypeScript. Mentored junior developers and implemented best practices for scalable architectures.",
        skills: [
            "React",
            "TypeScript",
            "Team Leadership",
            "System Architecture",
        ],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
        color: "hsl(var(--highlight))",
    },
    {
        id: "exp-2",
        role: "UI/UX Developer",
        company: "Design Studio X",
        duration: "2020 - 2022",
        description:
            "Collaborated with designers to create pixel-perfect interfaces. Improved user engagement by 40% through optimized UI implementations and modern design systems.",
        skills: ["UI/UX Design", "Frontend Development", "Design Systems"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
        color: "hsl(var(--highlight))",
    },
    {
        id: "exp-3",
        role: "Software Engineering Intern",
        company: "StartupLab",
        duration: "2019",
        description:
            "Developed and maintained features for a SaaS platform. Reduced loading times by 60% through code optimization and modern web technologies.",
        skills: ["JavaScript", "React", "Performance Optimization"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        color: "hsl(var(--highlight))",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-20 md:py-32 dark:bg-gray-900 transition-colors duration-300"
        >
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
                            Career Journey
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold dark:text-white"
                        data-cursor-highlight="true"
                    >
                        Professional Experience
                    </h2>
                </motion.div>

                <div className="space-y-32">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <motion.div
                                    className="lg:px-8"
                                    initial={{ opacity: 0, x: -50 }}
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
                                            {exp.role}
                                        </motion.h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="font-medium text-highlight">
                                                {exp.company}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                                            <span className="text-gray-600 dark:text-gray-400">
                                                {exp.duration}
                                            </span>
                                        </div>
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
                                            {exp.description}
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
                                            {exp.skills.map((skill) => (
                                                <motion.span
                                                    key={skill}
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
                                                    whileHover={{
                                                        scale: 1.05,
                                                        backgroundColor:
                                                            "hsl(var(--highlight) / 0.2)",
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        <motion.a
                                            href={`#${exp.id}`}
                                            className="inline-flex items-center group/link"
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10,
                                            }}
                                        >
                                            <span className="text-sm font-medium mr-2 dark:text-white">
                                                View Details
                                            </span>
                                            <span className="h-[2px] w-6 bg-black dark:bg-white transition-all group-hover/link:w-10"></span>
                                            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1 dark:text-white" />
                                        </motion.a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="relative overflow-hidden rounded-2xl shadow-lg dark:shadow-highlight/10"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                                        style={{ backgroundColor: exp.color }}
                                    ></div>
                                    <img
                                        src={exp.image}
                                        alt={`${exp.role} at ${exp.company}`}
                                        className="w-full h-[350px] md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium dark:text-white">
                                        {exp.company}
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

export default Experience;
