import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("translate-y-0", "opacity-100");
                    entry.target.classList.remove(
                        "translate-y-20",
                        "opacity-0"
                    );
                    // Once the animation is complete, we can stop observing
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: "-50px",
                threshold: 0.1,
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: "smooth",
            });
        }
    };

    return (
        <footer
            ref={footerRef}
            className="py-16 bg-black text-white dark:bg-gray-900 rounded-t-3xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]
                 transform transition-all duration-1000 ease-out translate-y-20 opacity-0"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="col-span-1 md:col-span-2">
                        <a
                            href="#hero"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("hero");
                            }}
                            className="text-2xl font-display font-bold mb-4 block"
                        >
                            Yassine Krichen
                        </a>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Creating exceptional digital experiences through
                            strategic design and development.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Yassinekrn"
                                target="_blank"
                                className="hover:text-highlight transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-github-icon lucide-github"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/the.yassine_krichen/"
                                target="_blank"
                                className="hover:text-highlight transition-colors"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8C2 4.68629 4.68629 2 8 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.5 6.5H17.51"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/krichenyassine/"
                                target="_blank"
                                className="hover:text-highlight transition-colors"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7 17V13.5V10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7 7.01L7.01 6.99889"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#hero"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("hero");
                                    }}
                                    className="text-gray-400 hover:text-highlight transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("about");
                                    }}
                                    className="text-gray-400 hover:text-highlight transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("work");
                                    }}
                                    className="text-gray-400 hover:text-highlight transition-colors"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("contact");
                                    }}
                                    className="text-gray-400 hover:text-highlight transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a className="text-gray-400 hover:text-highlight transition-colors">
                                    UI/UX Design
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-highlight transition-colors">
                                    Full Stack Development
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-highlight transition-colors">
                                    Branding & SEO
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-highlight transition-colors">
                                    Software Solutions with Innovative Tech
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-500 text-sm mb-1 md:mb-0">
                            &copy; {currentYear} Yassine Krichen. All rights
                            reserved.
                        </p>
                        <p className="text-gray-500 text-xs opacity-60 max-w-md text-left">
                            Note: Project mockups have been redesigned to
                            showcase UI/UX skills. Actual contributions focused
                            on backend development within collaborative team
                            environments.
                        </p>
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a className="text-gray-500 text-sm hover:text-highlight">
                            Made with 💓 by Yassine Krichen
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
