
import React from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <Projects />
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
