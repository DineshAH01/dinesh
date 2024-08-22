import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () =>{
    navigate("/contact");
  }
  return (
    <selection id="home" className="home">
      <div className='home_text-wrapper'>
        <h1>
          Hello, I'm Dinesh 
          <br/>
          Software Engineer
        </h1>
      </div>
      <br/>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : "translateY(550px)"
        }}
        end={{
          transform : "translateX(0px)"
        }}
      >
        

        <div className='home_contact-me'>
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </selection>
  )
}
export default Home;