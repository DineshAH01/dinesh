import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../componet/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './style.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
import profilePic from '../../assets/Dinesh.jpg';

const personalDetails =[
  {
    label: "Name",
    value: "Dinesh A",
  },
  {
    label: "Age",
    value: "26",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "ahdinesh01@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 6381861691",
  },
];

const jobSummary ="A dedicated software developer with over 1 year and 3 months of hands-on experience in Java and React. Proficient in building and optimizing web applications using Spring Boot for backend services and React for dynamic, responsive front-end interfaces. Adept at working in agile environments, collaborating with cross-functional teams, and delivering high-quality code within deadlines. Strong problem-solving skills with a focus on creating efficient, scalable solutions."

const About = () => {
  return (
    <section id='about' className='about'>

        <PageHeaderContent
          headerText="About Me"
          icon = {<BsInfoCircleFill size={40}/>}
        />
        <div className='about_content'>
          <div className='about_content_personalwrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform : "translateX(-2000px)"
            }}
            end={{
              transform : "translateX(0px)"
            }}
          >
              <h3>Software Engineer</h3>
              <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform : "translateX(2000px)"
            }}
            end={{
              transform : "translateX(0px)"
            }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <div className="personalInformationWrapper">
                <div className="profilePictureWrapper">
                  <img src={profilePic} alt="Profile Picture" className="profilePicture" />
                </div>
              <ul>
                {
                  personalDetails.map((item, index)=>(
                    <li key={index}>
                        <span className='title'>{item.label}</span>
                        <span className='value'>{item.value}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            </Animate>
          </div>
          <div className='about_content_serviceswrapper'>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform : "translateX(2000px)"
              }}
              end={{
                transform : "translateX(0px)"
              }}
            >
              <div className='about_content_serviceswrapper_innerContent'>
                <div>
                  <FaDev size={60} color='var(--yellow-theme-main-color)' />
                </div>
                <div>
                <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
                </div>
                <div>
                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
                </div>
                <div>
                <DiApple size={60} color='var(--yellow-theme-main-color)' />
                </div>
              </div>
            </Animate>
          </div>
          
        </div>
    </section>
  )
}
export default About;