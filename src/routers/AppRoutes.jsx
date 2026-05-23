// src/routers/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed Router from here
import Home from '../components/Home'; 
import Aboutpage from '../pages/Aboutpage'; 
import Projectspage from '../pages/Projectspage'; 

function AppRoutes() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/projects" element={<Projectspage />} />
    </Routes>
  );
}
export default AppRoutes;