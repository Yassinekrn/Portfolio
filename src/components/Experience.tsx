import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
        role: "Frontend Developer",
        company: "Touchdown Apps",
        duration: "2023",
        description:
            "Led development of a comprehensive CRM solution using Next.js and React, focusing on creating intuitive user interfaces and implementing complex frontend features within a large-scale team environment.",
        skills: ["Next.js", "React", "Team Collaboration", "UI/UX"],
        image: "/public/assets/images/nuxapp.png",
        color: "hsl(var(--highlight))",
    },
    {
        id: "exp-2",
        role: "Full Stack Developer",
        company: "AheadIT",
        duration: "2022",
        description:
            "Designed and implemented an Enterprise Resource Management system using .NET and Angular, allowing employees to efficiently request, track, and manage company resources through an automated workflow.",
        skills: [".NET", "C#", "Angular", "MySQL", "System Architecture"],
        image: "/public/assets/images/synergetic.png",
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
