import React from 'react';

function Contact() {
  // Your WhatsApp details configuration
  const phoneNumber = "919390250916"; 
  const defaultMessage = "Hi Shiva, I saw your portfolio and would love to connect!";
  
  // URL encoded string to pass data safely over the browser link layout
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="w-full min-h-[80vh] bg-[#111111] text-white py-16 px-6 md:px-16 lg:px-24 font-sans flex flex-col justify-between relative selection:bg-white selection:text-black">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-start h-full flex-grow justify-center">
        
        {/* Top Header Section Badge */}
        <div className="bg-[#e2e2e2] text-black font-black uppercase text-sm md:text-base px-6 py-2.5 tracking-wider rounded-sm mb-24 shadow-sm select-none">
          CONTACT
        </div>

        {/* Main Content Call to Action Banner */}
        <div className="w-full flex flex-col items-center text-center my-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight max-w-3xl mb-12 text-gray-100">
            Take the Next Step.<br />
            Let's give your project a go!
          </h2>

          {/* Interactive Unique Pill Connect Button Container */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-[#e2e2e2] text-black rounded-full p-1 pr-6 pl-1 h-14 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg select-none"
          >
            {/* Dark inner circle for the vector arrow accent */}
            <div className="w-12 h-12 bg-[#111111] text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
            {/* Text markup layer */}
            <span className="font-extrabold text-sm md:text-base tracking-wider uppercase ml-3">
              connect
            </span>
          </a>
        </div>
      </div>

      {/* Signature thin bottom accent line visible across the base perimeter */}
      <div className="w-full border-t border-zinc-700/50 absolute bottom-0 left-0"></div>
    </section>
  );
}

export default Contact;