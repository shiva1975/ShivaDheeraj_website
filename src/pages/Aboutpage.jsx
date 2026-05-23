// src/pages/Aboutpage.jsx
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import Forter from '../components/Forter'
import Knowme from '../components/Knowme'
import Contact from '../components/Contact'

function Aboutpage() {
  const iconCardStyle = {
    backgroundColor: '#D9D9D9',
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    color: 'black',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.25s ease, background-color 0.25s ease',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Main Bio Container */}
      <div
        style={{
          padding: '80px 40px 40px 40px', // Adjusted padding for better vertical breathing room
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'sans-serif',
            fontSize: '36px',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          HI<br />I am Shiva Dheeraj Ciddamshetty
        </h1>

        <p
          style={{
            color: '#A0A0A0',
            fontSize: '18px',
            marginTop: '30px',
            lineHeight: '32px',
            maxWidth: '800px', // Slightly narrower for perfect reading line-lengths
            fontFamily: 'sans-serif',
          }}
        >
          Hi, I’m Shiva Dheeraj Ciddamshetty, a passionate Full Stack Developer
          and UI/UX Designer with strong expertise in building scalable and
          modern web applications. I recently completed my B.Tech in Computer
          Science and Engineering and enjoy creating clean, responsive, and
          user-friendly digital experiences.
          <br />
          <br />
          I specialize in technologies like React.js, JavaScript, Node.js,
          MongoDB, MySQL, and PostgreSQL. Along with development, I also have
          experience in Power BI, Figma, and frontend design. I continuously
          improve my problem-solving skills through platforms like LeetCode and
          CodeChef while exploring new technologies and frameworks.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '18px',
            marginTop: '30px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shivadheeraj90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            title="Email Shiva"
          >
            <div
              style={iconCardStyle}
            >
              <BiLogoGmail />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/shivadheeraj/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            title="LinkedIn"
          >
            <div
              style={iconCardStyle}
            >
              <FaLinkedin />
            </div>
          </a>

          <a
            href="https://github.com/shiva1975"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            title="GitHub"
          >
            <div
              style={iconCardStyle}
            >
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
      <Contact />
      {/* Knowme Section - Sitting comfortably between bio content and footer */}
      <div style={{ width: '100%', paddingBottom: '60px' }}>
        <Knowme />
      </div>

      {/* Sticky Bottom Footer */}
      <div style={{ marginTop: 'auto' }}>
        <Forter />
      </div>
    </div>
  )
}

export default Aboutpage