
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold mb-4 block">
              Alex Cooper
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating exceptional digital experiences through strategic design and development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-highlight transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 6.5C21.75 6.875 21 7.0625 20.125 7.1875C21 6.625 21.625 5.875 21.9375 4.9375C21.1875 5.4375 20.3125 5.75 19.375 5.9375C18.625 5.125 17.5625 4.625 16.375 4.625C14.125 4.625 12.25 6.5 12.25 8.75C12.25 9.0625 12.25 9.375 12.375 9.625C8.875 9.5 5.75 7.875 3.625 5.375C3.25 5.9375 3.0625 6.625 3.0625 7.375C3.0625 8.75 3.75 10 4.9375 10.75C4.25 10.75 3.625 10.5625 3.0625 10.25V10.3125C3.0625 12.25 4.5 13.875 6.375 14.25C6 14.375 5.625 14.375 5.25 14.375C5 14.375 4.75 14.375 4.5 14.3125C5 15.9375 6.5 17.0625 8.25 17.0625C6.875 18.125 5.125 18.75 3.25 18.75C2.875 18.75 2.5625 18.75 2.25 18.6875C4 19.8125 6.125 20.5 8.375 20.5C16.375 20.5 20.75 14.375 20.75 9.0625C20.75 8.875 20.75 8.6875 20.75 8.5C21.5 7.875 22.1875 7.125 22.5 6.25V6.5Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="hover:text-highlight transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8C2 4.68629 4.68629 2 8 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="hover:text-highlight transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 17V13.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7.01L7.01 6.99889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-highlight transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-highlight transition-colors">About</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-highlight transition-colors">Work</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-highlight transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-highlight transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight transition-colors">SEO</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Alex Cooper. All rights reserved.
          </p>
          
          <a 
            href="#"
            className="mt-4 md:mt-0 group inline-flex items-center text-sm text-gray-400 hover:text-highlight transition-colors"
          >
            <span className="mr-2">Back to Top</span>
            <span className="transform rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
