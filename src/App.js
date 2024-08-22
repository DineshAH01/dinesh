
import { Route, Routes, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.scss';
import Home from './container/home';
import About from './container/about';
import Contact from './container/contact';
import Portfolio from './container/portfolio';
import Resume from './container/resume';
import Skills from './container/skills';
import NavBar from './componet/navBar/index.jsx';
import particles from "./util.js/particles.js";

function App() {

  const location = useLocation();
  // console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/dinesh"
  return (
    <div className="App">
      {/* particles js */}

      {
        renderParticleJsInHomePage && (
          <Particles id="particles" options={particles} init={handleInit} />
        )
      }

      {/* Navbar */}
      <NavBar/>

      {/* main page content */}
      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/dinesh' element={<Home/>} />
        <Route index path='/about' element={<About/>} />
        <Route index path='/contact' element={<Contact/>} />
        <Route index path='/portfolio' element={<Portfolio/>} />
        <Route index path='/resume' element={<Resume/>} />
        <Route index path='/skills' element={<Skills/>} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
