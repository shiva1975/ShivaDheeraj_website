import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Vehicles Rent app Design',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=80',
      link: 'https://www.figma.com/design/zRP050arLUM1V09IsraL1M/Rental-app-for-mobile--with-bike---cars--by-shiva-Dheeraj--Community-?node-id=0-1&p=f&t=JLZxk26zVwKCJF5q-0'
    },
    {
      title: 'Hostipal website', 
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80', 
      // Added your Vercel link here
      link: 'https://vasavihospitals.vercel.app/'
    },
    {
      title: 'Website for food Reels and order them',
      image: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=80', 
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#111111] text-white py-16 px-6 md:px-16 lg:px-24 font-sans selection:bg-white selection:text-black">
      <div className="max-w-5xl mx-auto flex flex-col items-start">
        
        {/* Section Header Badge */}
        <div className="bg-[#e2e2e2] text-black font-black uppercase text-sm md:text-base px-6 py-2.5 tracking-wider rounded-sm mb-20 shadow-sm select-none">
          PROJECTS
        </div>

        {/* Projects Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-24 justify-center">
          
          {/* Project 1 & 2 */}
          {projectList.slice(0, 2).map((project, index) => {
            const projectCard = (
              <div className="flex flex-col w-full group cursor-pointer">
                <div className="w-full aspect-16/10 overflow-hidden rounded-sm bg-[#1a1a1a] mb-4 border border-zinc-800/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium tracking-wide text-gray-400 pl-1 transition-colors group-hover:text-white">
                  {project.title}
                </span>
              </div>
            );

            return project.link ? (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full block"
              >
                {projectCard}
              </a>
            ) : (
              <div key={index} className="w-full">
                {projectCard}
              </div>
            );
          })}

          {/* Project 3 (Centered below the first two on desktop) */}
          <div className="flex flex-col w-full md:col-span-2 md:max-w-[50%] md:mx-auto group cursor-pointer">
            <div className="w-full aspect-16/10 overflow-hidden rounded-sm bg-[#1a1a1a] mb-4 border border-zinc-800/40">
              <img 
                src={projectList[2].image} 
                alt={projectList[2].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>
            <span className="text-xs md:text-sm font-medium tracking-wide text-gray-400 pl-1">
              {projectList[2].title}
            </span>
          </div>

        </div>

        {/* Footer Text Section */}
        <div className="w-full text-center mt-4">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-[0.25em] uppercase text-white select-none">
            AND MANY MORE TO COME
          </h3>
        </div>

      </div>
    </section>
  );
}

export default Projects;