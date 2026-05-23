import React from 'react'
import Forter from './Forter'
import myimage from '../assets/myimage.png'
import background from '../assets/background.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import Knowme from './Knowme'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'


function Home() {
  return (
    <div style={{ 
      background: 'black', 
      minHeight: '100vh', 
      display: 'flex',      
      flexDirection: 'column',
      position: 'relative', // Context for absolute positioning the background watermark
      overflowX: 'hidden'   // Explicitly prevents watermark from creating unexpected horizontal scrolling
    }}>
        
        {/* --- Background Watermark Logo Arrangement --- */}
   <img 
  src={background} 
  alt="Background Watermark" 
  style={{
    position: 'absolute',
    top: '50%',                        // Placed right in the vertical center
    right: '5%',                       // Brought in closer from the right edge
    transform: 'translate(0, -50%)',   // Perfectly centers it vertically without pushing it off-screen
    width: 'auto',
    height: '75vh',                    // Large and impactful
    opacity: 0.05,                     // Subtle 5% visibility 
    pointerEvents: 'none',             // Safe from blocking user clicks
    zIndex: 0                          // Kept strictly behind the text and profile photo layers
  }} 
/>
        
        {/* Main Content Layout */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flex: 1, 
          padding: '0 130px',
          color: 'white',
          marginTop: '20px',
          position: 'relative',
          zIndex: 1 // Layers your text, icons, and picture cleanly above the watermark
        }}>
          
          {/* Text & Socials Container */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 10px 0', fontFamily: 'sans-serif' }}>
              HI , I am
            </h2>
            <h1 style={{ 
              fontSize: '46px', 
              fontWeight: 'bold', 
              margin: '0 0 8px 0', 
              fontFamily: 'sans-serif',
              letterSpacing: '-0.5px'
            }}>
              Ciddamshetty Shiva Dheeraj
            </h1>
            <p style={{ 
              fontSize: '18px', 
              color: '#A0A0A0', 
              margin: '0 0 40px 0', 
              fontFamily: 'sans-serif',
              fontWeight: '500'
            }}>
              Full Stack Developer and AIML Engineer
            </p>

            {/* Social Icons Container */}
            <ul
              style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                gap: '20px',
                listStyle: 'none',
                padding: 0,
                marginBottom: '30px',
              }}
            >
              {/* Gmail Link */}
              {/* Gmail Link - Opens Web Gmail directly in a new browser tab */}
<a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shivadheeraj90@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  title="shivadheeraj90@gmail.com"
  style={{ textDecoration: 'none' }}
>
  <li
    style={{
      backgroundColor: '#D9D9D9',
      width: '45px',
      height: '45px',
      borderRadius: '8px',
      color: 'black',
      fontSize: '30px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <BiLogoGmail />
  </li>
</a>

      
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/shivadheeraj/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <li
                  style={{
                    backgroundColor: '#D9D9D9',
                    width: '45px',
                    height: '45px',
                    borderRadius: '8px',
                    color: 'black',
                    fontSize: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FaLinkedin />
                </li>
              </a>
      
              {/* GitHub Link */}
              <a 
                href="https://github.com/shiva1975" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <li
                  style={{
                    backgroundColor: '#D9D9D9',
                    width: '45px',
                    height: '45px',
                    borderRadius: '8px',
                    color: 'black',
                    fontSize: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FaGithub />
                </li>
              </a>
            </ul>
          </div>

          {/* Image Circular Wrapper */}
          <div style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            overflow: 'hidden', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 0px 20px rgba(0,0,0,0.5)'
          }}>
            <img 
              src={myimage} 
              alt="Shiva Dheeraj" 
              style={{ 
                width: '100%',      
                height: '100%',     
                objectFit: 'cover', 
                objectPosition: 'center top'
              }} 
            />
          </div>

        </div>
        <Knowme />
        <Skill />
        <Projects />
        <Contact />
        <Forter />
    </div>
  )
}

export default Home