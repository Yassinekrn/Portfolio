import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: delay * 0.1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0],
        },
    }),
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally handle the form submission
        console.log("Form submitted:", formData);
        toast.success("Message sent successfully! I'll get back to you soon.", {
            position: "bottom-right",
        });
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section
            id="contact"
            className="py-20 md:py-32 bg-white dark:bg-gray-800 transition-colors duration-300"
        >
            <motion.div
                className="container mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="flex items-center gap-4 mb-4"
                        variants={fadeInVariants}
                    >
                        <div className="h-px bg-black dark:bg-white flex-grow max-w-[100px]"></div>
                        <span className="text-sm font-mono uppercase tracking-wider dark:text-gray-300">
                            Get in touch
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 dark:text-white"
                        variants={fadeInVariants}
                        data-cursor-highlight="true"
                    >
                        Let's Work Together
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            <motion.p
                                variants={fadeInVariants}
                                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                            >
                                Have a project in mind or just want to say
                                hello? Fill out the form and I'll get back to
                                you as soon as possible.
                            </motion.p>

                            <div className="space-y-6">
                                <motion.div
                                    variants={fadeInVariants}
                                    className="flex items-start gap-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="dark:text-gray-300"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium dark:text-white">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeInVariants}
                                    className="flex items-start gap-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="dark:text-gray-300"
                                        >
                                            <rect
                                                width="20"
                                                height="16"
                                                x="2"
                                                y="4"
                                                rx="2"
                                            ></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium dark:text-white">
                                            Email
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            hello@alexcooper.design
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeInVariants}
                                    className="flex items-start gap-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="dark:text-gray-300"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle
                                                cx="12"
                                                cy="10"
                                                r="3"
                                            ></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium dark:text-white">
                                            Location
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            San Francisco, CA
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                variants={fadeInVariants}
                                className="mt-10"
                            >
                                <h3 className="text-base font-medium mb-4 dark:text-white">
                                    Connect with me
                                </h3>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href="#"
                                        className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 p-3 rounded-full transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="dark:text-gray-300"
                                        >
                                            <path
                                                d="M22.5 6.5C21.75 6.875 21 7.0625 20.125 7.1875C21 6.625 21.625 5.875 21.9375 4.9375C21.1875 5.4375 20.3125 5.75 19.375 5.9375C18.625 5.125 17.5625 4.625 16.375 4.625C14.125 4.625 12.25 6.5 12.25 8.75C12.25 9.0625 12.25 9.375 12.375 9.625C8.875 9.5 5.75 7.875 3.625 5.375C3.25 5.9375 3.0625 6.625 3.0625 7.375C3.0625 8.75 3.75 10 4.9375 10.75C4.25 10.75 3.625 10.5625 3.0625 10.25V10.3125C3.0625 12.25 4.5 13.875 6.375 14.25C6 14.375 5.625 14.375 5.25 14.375C5 14.375 4.75 14.375 4.5 14.3125C5 15.9375 6.5 17.0625 8.25 17.0625C6.875 18.125 5.125 18.75 3.25 18.75C2.875 18.75 2.5625 18.75 2.25 18.6875C4 19.8125 6.125 20.5 8.375 20.5C16.375 20.5 20.75 14.375 20.75 9.0625C20.75 8.875 20.75 8.6875 20.75 8.5C21.5 7.875 22.1875 7.125 22.5 6.25V6.5Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 p-3 rounded-full transition-colors"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="dark:text-gray-300"
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
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 p-3 rounded-full transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="dark:text-gray-300"
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
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-highlight focus:border-highlight dark:bg-gray-700 dark:text-white transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-highlight focus:border-highlight dark:bg-gray-700 dark:text-white transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-highlight focus:border-highlight dark:bg-gray-700 dark:text-white transition-colors"
                                        placeholder="Project Inquiry"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-highlight focus:border-highlight dark:bg-gray-700 dark:text-white transition-colors"
                                        placeholder="Tell me about your project..."
                                        required
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:bg-highlight hover:text-black transition-colors duration-300 relative overflow-hidden group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">
                                        Send Message
                                    </span>
                                    <span className="absolute top-0 right-full w-full h-full bg-highlight transform group-hover:translate-x-full transition-transform duration-300"></span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
