// src/pages/Projectspage.jsx
import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Forter';
import Skill from '../components/Skill';

function Projectspage() {
  return (
    <div className="w-full min-h-screen bg-[#111111] text-white flex flex-col font-sans selection:bg-white selection:text-black">

      {/* Hero Header Section */}
      <header className="max-w-5xl w-full mx-auto px-6 md:px-16 lg:px-24 pt-24 pb-8 flex flex-col items-start animate-fade-in">
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
          My Projects
        </h1>

        <p className="text-sm md:text-base text-zinc-400 max-w-3xl leading-relaxed tracking-wide font-medium">
          Explore a collection of my real-world projects focused on Full Stack
          Development, UI/UX Design, Data Visualization, and AI-based solutions.
          These projects showcase my expertise in React.js, Node.js, MongoDB,
          PostgreSQL, Power BI, and modern frontend technologies while solving
          practical problems with scalable and user-friendly applications.
        </p>

      </header>

      {/* Main Projects Section */}
      <main className="flex-1 w-full">
        <Projects />
      </main>
<Skill />
      {/* Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>

    </div>
  );
}

export default Projectspage;