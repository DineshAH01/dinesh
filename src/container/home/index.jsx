import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import resume from '../../assets/resume.pdf';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  }

  const handleDownloadResume = () => {
    fetch(resume)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob();
      })
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => console.error("Error downloading resume:", err));
  }

  return (
    <div id="home" className="home">
      <div className='home_text-wrapper'>
        <h1>
          Hello, I'm Dinesh 
          <br/>
          Software Engineer
        </h1>
      </div>
      <br/>
      <div className='home_contact-me'>
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        <a href={resume} download="resume">
          <button className="download_resume_button">Download Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Home;
