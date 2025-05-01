import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    fadeInWithDelayVariants,
    staggerContainerVariants,
    scrollAnimationSettings,
} from "@/lib/animation";

interface Skill {
    category: string;
    items: string[];
}

const skills: Skill[] = [
    {
        category: "Design",
        items: [
            "UI/UX Design",
            "Responsivness",
            "Brand Identity",
            "Prototyping",
        ],
    },
    {
        category: "Development",
        items: ["React", "TypeScript", "Node.js", "Python", "MongoDB"],
    },
    {
        category: "Tools",
        items: ["VS Code", "Git", "Figma", "Postman", "Docker"],
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 relative"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollAnimationSettings}
                        variants={staggerContainerVariants}
                    >
                        <motion.div
                            variants={fadeInWithDelayVariants(0)}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="h-px bg-black dark:bg-white flex-grow max-w-[100px]"></div>
                            <span className="text-sm font-mono uppercase tracking-wider dark:text-gray-300">
                                About Me
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeInWithDelayVariants(1)}
                            className="text-4xl md:text-5xl font-display font-bold mb-8 dark:text-white"
                            data-cursor-highlight="true"
                        >
                            Hello! I'm Yasine Krichen
                        </motion.h2>

                        <motion.div
                            variants={fadeInWithDelayVariants(2)}
                            className="space-y-6 text-gray-600 dark:text-gray-300"
                        >
                            <p>
                                I'm a final-year Information Systems Development
                                student who partners with innovative teams to
                                build reliable, user-friendly applications. My
                                passion lies in creating seamless digital
                                experiences while integrating cutting-edge AI
                                solutions and robust security measures.
                            </p>
                            <p>
                                With experience gained through internships and
                                freelance projects, I've helped develop various
                                information management systems and open-source
                                initiatives that combine functionality with
                                intuitive design.
                            </p>
                            <p>
                                My approach merges technical excellence with
                                creative problem-solving, ensuring each project
                                not only meets but exceeds its objectives
                                through clean code and scalable architecture.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInWithDelayVariants(3)}
                            className="mt-10 grid grid-cols-3 gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-black dark:text-white">
                                    3+
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Years of Coding Experience
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-black dark:text-white">
                                    15+
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Projects Completed
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-black dark:text-white">
                                    10+
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Happy Clients
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollAnimationSettings}
                        variants={staggerContainerVariants}
                    >
                        <motion.div
                            variants={fadeInWithDelayVariants(0)}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ rotate: -2, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src="/assets/images/aboutskills.png"
                                    alt="About me illustration"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20, rotate: 0 },
                                    visible: { opacity: 1, y: 0, rotate: 3 },
                                }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-lg transform shadow-lg"
                            >
                                <span className="font-display font-bold">
                                    Let's create something amazing
                                </span>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20, rotate: 0 },
                                    visible: { opacity: 1, x: 0, rotate: -12 },
                                }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="absolute -top-6 -left-6 bg-highlight text-black p-3 rounded-full shadow-lg transform"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <path d="M9 9h.01"></path>
                                    <path d="M15 9h.01"></path>
                                </svg>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeInWithDelayVariants(4)}
                            className="mt-16"
                        >
                            <h3
                                className="text-xl font-display font-bold mb-6 dark:text-white"
                                data-cursor-highlight="true"
                            >
                                Skills & Expertise
                            </h3>

                            <div className="space-y-8">
                                {skills.map((skillGroup, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInWithDelayVariants(
                                            idx + 5
                                        )}
                                    >
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <motion.span
                                                    key={skill}
                                                    className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-highlight/20 dark:hover:bg-highlight/20 transition-colors duration-200"
                                                    whileHover={{
                                                        scale: 1.05,
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                    }}
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
                    {Array(10)
                        .fill(
                            "Critical Thinking • Adaptability • Resilience • Communication • Creativity • Problem Solving • Leadership • Time Management •"
                        )
                        .map((text, i) => (
                            <span
                                key={i}
                                className="text-3xl font-display font-bold text-black dark:text-black"
                            >
                                {text}
                            </span>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default About;
