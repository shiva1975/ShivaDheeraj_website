import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

function Forter() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        width: '100%',
        padding: '40px 20px', // Slightly increased padding for a better visual breathing room
        textAlign: 'center',
        boxSizing: 'border-box'
      }}
    >
      <h1
        style={{
          color: 'white',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '700',
          fontSize: '48px',
          marginBottom: '30px',
          letterSpacing: '1px'
        }}
      >
        CIDDAMSHETTY SHIVA DHEERAJ
      </h1>

      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          listStyle: 'none',
          padding: 0,
          marginBottom: '30px',
        }}
      >
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
              transition: '0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
              transition: '0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
              transition: '0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaGithub />
          </li>
        </a>
      </ul>

      <h3
        style={{
          color: 'white',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '400',
          fontSize: '16px',
          opacity: 0.7 // Softened the copyright color slightly for better typographic contrast
        }}
      >
        Copyright @2026 || All rights reserved
      </h3>
    </div>
  )
}

export default Forter