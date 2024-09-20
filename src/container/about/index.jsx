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

const jobSummary ="Innovative Software Engineer with 1 year and 4 months of experience in customising non-open source projects using PML and FFEIN languages. Proven expertise in enhancing Aveva and Bocad systems through tailored feature development and automation. Experienced in personal projects involving Java and React, showcasing a strong foundation in these technologies. Seeking to leverage my technical skills and problem-solving abilities in a dynamic environment that fosters growth and innovation."

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
            duration={1}
            delay={0.2}
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
            duration={1}
            delay={0.2}
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
              duration={1}
              delay={0.2}
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