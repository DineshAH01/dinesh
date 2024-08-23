import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../componet/pageHeaderContent';
import DigitalClockImg from "../../images/DigitalClock.jpg"
import WeatherImg from "../../images/Weather.png"
import BmiImg from "../../images/BMIImage.jpeg"
import FoodCartImg from "../../images/FoodCart.png"
import QuizImg from "../../images/QuizImg.jpg"
import CurrencyConverterImg from "../../images/CurrencyConverterImg.png"
import PasswordGenerator from "../../images/PasswordGenerator.jpeg"
import CalendarImg from "../../images/CalendarImg.jpeg"
import AdviceImg from "../../images/AdviceImg.png"
import './style.scss';

const portfolioData = [
  {
    id : 2,
    name : "Digital Clock App",
    image : DigitalClockImg,

    link : 'https://dineshah01.github.io/Digital-Clock-App/'
  },
  {
    id : 2,
    name : "Weather App",
    image : WeatherImg,

    link : 'https://dineshah01.github.io/Weather-App/'
  },
  {
    id : 2,
    name : "BMI Calculator App",
    image : BmiImg,

    link : 'https://dineshah01.github.io/BMI-Calculator/'
  },
  {
    id : 2,
    name : "Food Cart",
    image : FoodCartImg,

    link : 'https://dineshah01.github.io/Food-Cart/'
  },
  {
    id : 2,
    name : "Quiz App",
    image : QuizImg,

    link : 'https://dineshah01.github.io/Quiz-App/'
  },
  {
    id : 2,
    name : "Currency Converter App",
    image : CurrencyConverterImg,

    link : 'https://dineshah01.github.io/Currency-Converter-App/'
  },
  {
    id : 2,
    name : "Password Generator App",
    image : PasswordGenerator,

    link : 'https://dineshah01.github.io/Password-Generator-App/'
  },
  {
    id : 2,
    name : "Calendar App",
    image : CalendarImg,

    link : 'https://dineshah01.github.io/Calendar-App/'
  },
  {
    id : 2,
    name : "Advice App",
    image : AdviceImg,

    link : 'https://dineshah01.github.io/Advice-App/'
  },
]


const filterData = [
  {
    filterId : 1,
    label : 'All'
  },
  {
    filterId : 2,
    label : 'Development'
  },
  {
    filterId : 3,
    label : 'Design'
  }
]

const Portfolio = () => {

  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId){
    setFilteredValue(currentId);
  }

  const filteredItems = filteredvalue ===1 ? portfolioData :
  portfolioData.filter(item => item.id === filteredvalue);

  function handleHover(index){
    setHoveredValue(index);
  }

  // console.log(hoveredValue);
  return (
    <section id='portfolio' className='portfolio'>

        <PageHeaderContent
          headerText="My Portfolio"
          icon = {<BsInfoCircleFill size={40}/>}
        />

        <div className='portfolio_content'>
          <ul className='portfolio_content_filter'>
              {
                filterData.map((item)=>(
                  <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                      {
                        item.label
                      }
                  </li>
                ))
              }
          </ul>
          <div className='portfolio_content_cards'>
            {
              filteredItems.map((item, index)=>(
                <div 
                className='portfolio_content_cards_item' 
                key={`cardItems${item.name.trim()}`}
                onMouseEnter={()=>handleHover(index)}
                onMouseLeave={()=>handleHover(null)}
                >
                  <div className='portfolio_content_cards_item_img-wrapper'>
                    <a>
                      <img alt='dummy data' src={item.image} />
                    </a>
                  </div>
                  <div className='overlay'>
                    {
                      index === hoveredValue && (
                        <div>
                          <p>{item.name}</p>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button>Visit</button>
                          </a>
                        </div>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}
export default Portfolio;