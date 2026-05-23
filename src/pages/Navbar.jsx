import React from 'react';
import { NavLink } from 'react-router-dom'; // Connects seamlessly with your router folder configurations

function Navbar() {
  const navItemStyle = {
    cursor: 'pointer',
    transition: '0.3s',
    textDecoration: 'none',
    color: 'white',
  };

  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#D9D9D9',
  };

  return (
    <div
      style={{
        width: '100%',
        height: '150px',
        padding: '20px 80px', 
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'flex-end', 
        boxSizing: 'border-box',
      }}
    >
      <ul
        style={{
          display: 'flex',
          gap: '160px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '18px',
          fontFamily: 'Raleway, sans-serif',
          width: '50%', 
          justifyContent: 'flex-end', 
          alignItems: 'center', // Aligns your links perfectly in the vertical center of the 150px height
        }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { ...navItemStyle, ...activeLinkStyle } : navItemStyle
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { ...navItemStyle, ...activeLinkStyle } : navItemStyle
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) =>
              isActive ? { ...navItemStyle, ...activeLinkStyle } : navItemStyle
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;