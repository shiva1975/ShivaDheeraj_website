// src/App.jsx
import React from 'react';
import Navbar from './pages/Navbar';
import AppRoutes from './routers/AppRoutes';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
     
      <AppRoutes />
      
    </>
  );
}

export default App;