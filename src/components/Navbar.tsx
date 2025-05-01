import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

// TODO Add a Download CV button

const navLinks = [
    { name: "Home", section: "hero" }, // Assuming you have a section with id="hero"
    { name: "Work", section: "work" },
    { name: "About", section: "about" },
    { name: "Contact", section: "contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrolled(position > 50);

            // Update active section based on scroll position
            const sections = document.querySelectorAll("section[id]");
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 100;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                if (
                    position >= sectionTop &&
                    position < sectionTop + sectionHeight
                ) {
                    setActiveSection(section.getAttribute("id") || "");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close mobile menu if open
            if (mobileMenuOpen) setMobileMenuOpen(false);

            // Scroll to section
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <a
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("hero");
                    }}
                    className="text-xl font-display font-bold relative overflow-hidden group"
                >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full dark:text-white">
                        Yassine Krichen
                    </span>
                    <span className="block absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-highlight">
                        Yassine Krichen
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.section}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.section);
                            }}
                            className={cn(
                                "text-sm font-medium relative transition-colors dark:text-gray-200",
                                activeSection === link.section
                                    ? "text-highlight"
                                    : "hover:text-highlight"
                            )}
                        >
                            {link.name}
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all duration-300",
                                    activeSection === link.section
                                        ? "w-full"
                                        : "group-hover:w-full"
                                )}
                            />
                        </a>
                    ))}

                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-highlight hover:text-black transition-colors duration-300"
                        >
                            Let's Talk
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Section with Theme Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex items-center"
                        aria-label="Toggle menu"
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
                            className="h-6 w-6 dark:text-white"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-background dark:bg-gray-900 z-40 transition-transform duration-300 md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.section}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.section);
                            }}
                            className="text-2xl font-display font-bold hover:text-highlight transition-colors dark:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                        className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-highlight hover:text-black transition-colors duration-300"
                    >
                        Let's Talk
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-5 right-5 text-2xl dark:text-white"
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
