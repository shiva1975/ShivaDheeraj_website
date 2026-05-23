import React from 'react';

function Skills() {
  const webSkills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JAVASCRIPT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'NODEJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'REACT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'BOOTSTRAP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'GIT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'FIGMA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const databaseSkills = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MONGODB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  const businessSkills = [
    // Using simple high-quality remote logo marks for Power BI and Excel
   { 
    name: 'POWER BI', 
    logo: 'https://img.icons8.com/color/512/power-bi.png' 
  },
     {
    name: 'EXCEL', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg' 
  },
  ];

  return (
    <section className="w-full min-h-screen bg-[#111111] text-white py-16 px-6 md:px-16 lg:px-24 font-sans selection:bg-white selection:text-black">
      <div className="max-w-5xl mx-auto flex flex-col items-start">
        
        {/* Top Header Badge */}
        <div className="bg-[#e2e2e2] text-black font-black uppercase text-sm md:text-base px-6 py-2.5 tracking-wider rounded-sm mb-16 shadow-sm select-none">
          SKILLS
        </div>

        {/* --- WEB DEVELOPMENT SECTION --- */}
        <div className="w-full mb-16">
          <h2 className="text-md font-bold tracking-[0.2em] uppercase text-gray-200 mb-10">
            WEB DEVELOPMENT:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 max-w-3xl">
            {webSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img src={skill.logo} alt={skill.name} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- DATABASE SECTION --- */}
        <div className="w-full mb-16">
          <h2 className="text-md font-bold tracking-[0.2em] uppercase text-gray-200 mb-10">
            DATABASE:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 max-w-3xl justify-items-center">
            {databaseSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img src={skill.logo} alt={skill.name} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- BUSINESS SECTION --- */}
        <div className="w-full">
          <h2 className="text-md font-bold tracking-[0.2em] uppercase text-gray-200 mb-10">
            BUSINESS:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 max-w-3xl">
            {businessSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img src={skill.logo} alt={skill.name} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;