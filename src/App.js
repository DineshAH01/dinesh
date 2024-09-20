import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './componet/navBar/index.jsx';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.scss';
import Home from './container/home';
import About from './container/about';
import Contact from './container/contact';
import Portfolio from './container/portfolio';
import Resume from './container/resume';
import Skills from './container/skills';
import particles from "./util.js/particles.js";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/dinesh" || location.pathname === "/";

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      <NavBar />
      <div className='App_main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/dinesh' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
