import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../componet/pageHeaderContent';
import BmiImage from "../../images/BMIImage.jpeg"
import BmiImage2 from "../../images/BMIImage2.jpeg"
import BmiImage3 from "../../images/BMIImage3.jpeg"
import BmiImage4 from "../../images/BMIImage4.jpeg"
import BmiImage5 from "../../images/BMIImage5.jpeg"
import './style.scss';

const portfolioData = [
  {
    id : 2,
    name : "BMICalculator",
    image : BmiImage,

    link : ''
  },
  {
    id : 3,
    name : "Notes APP",
    image : BmiImage2,

    link : ''
  },
  {
    id : 2,
    name : "Supplier Design",
    image : BmiImage3,

    link : ''
  },
  {
    id : 2,
    name : "Todo App",
    image : BmiImage4,

    link : ''
  },
  {
    id : 2,
    name : "Shopping card design",
    image : BmiImage5,

    link : ''
  },
]


const filterData = [
  {
    filterId : 1,
    label : 'All'
  },
  {
    filterId : 2,
    label : 'ReactJs'
  },
  {
    filterId : 3,
    label : 'Fullstack'
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
                          <button>Visit</button>
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