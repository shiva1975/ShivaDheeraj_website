import React from 'react';

function Knowme() {
  return (
    <section className="w-full min-h-screen bg-[#111111] text-white flex flex-col items-center pt-24 pb-16 px-6 md:px-12 font-sans selection:bg-white selection:text-black">
      
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-12">
        Know me
      </h1>

      {/* Intro Paragraph */}
      <p className="max-w-3xl text-center text-gray-400 text-sm md:text-base leading-relaxed tracking-wide mb-16">
        I'm Shiva Dheeraj Ciddamshetty, a Full Stack Developer and AI/ML Engineer passionate about building scalable and intelligent applications.
        <br className="hidden md:inline" /> Skilled in React.js, Node.js, Java, Python, and UI/UX design, I create modern and user-friendly digital solutions.
      </p>

      {/* Main Content Layout Container */}
      <div className="w-full max-w-5xl flex flex-col items-start">
        
        {/* About Me Badge */}
        <div className="bg-[#e2e2e2] text-black font-black uppercase text-sm md:text-base px-6 py-3 tracking-wider rounded-sm mb-20 shadow-sm select-none">
          ABOUT ME
        </div>

        {/* Services Layout Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          
          {/* Design Service */}
          <div className="flex flex-col items-start max-w-md">
            <div className="flex items-center gap-3 mb-4 opacity-75">
              {/* Simple inline SVG to match the architectural wireframe look */}
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
              <h2 className="text-lg font-bold tracking-widest uppercase">DESIGN</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* Development Service */}
          <div className="flex flex-col items-start max-w-md">
            <div className="flex items-center gap-3 mb-4 opacity-75">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 1021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766l.002-.001a11.601 11.601 0 015.4-.553M11.42 15.17L4.414 22.177a1.5 1.5 0 11-2.122-2.123L9.28 13.045m1.14 1.085L9.28 13.045m0 0a11.605 11.605 0 01-.553-5.4l-.001-.002a2.305 2.305 0 01-.766-1.208l-3.03-2.496L1.08 7.324a2.652 2.652 0 003.75 3.75l5.877-5.877" />
              </svg>
              <h2 className="text-lg font-bold tracking-widest uppercase">DEVELOPMENT</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* Maintenance Service (Spans center on medium screens to match image layout) */}
          <div className="flex flex-col items-start max-w-md md:col-span-2 md:mx-auto mt-4">
            <div className="flex items-center gap-3 mb-4 opacity-75">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.767a1.123 1.123 0 00-.417 1.03c.004.074.006.148.006.222 0 .074-.002.148-.006.222a1.123 1.123 0 00.417 1.03l1.003.767a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.07.124c-.073.044-.146.087-.22.128-.332.183-.582.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87c-.074-.04-.148-.083-.22-.127a1.124 1.124 0 00-1.074-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.767a1.122 1.122 0 00.416-1.03c-.004-.074-.006-.148-.006-.222 0-.074.002-.148.006-.222a1.122 1.122 0 00-.416-1.03l-1.004-.767a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.041.146-.084.218-.128.333-.183.582-.495.645-.869l.214-1.28z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-lg font-bold tracking-widest uppercase">MAINTENANCE</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Knowme;