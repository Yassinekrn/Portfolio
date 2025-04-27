import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
            } mode`}
            data-cursor-highlight="true"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
            >
                {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-highlight" />
                ) : (
                    <Sun className="h-5 w-5 text-highlight" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
