
import React from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
