// ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { deepPurple } from '@mui/material/colors';

import  './ImageSlider'; // Assuming you have the Slider component in the same file


export const Slider = ({ children, width, height,img }) => {
  return (
    <div className='image-card-item' style={{ width: width  ,height:height,img:img}}>
      {children}
    </div>
  );
};
// ImageSlider.js

const ImageSlider = ({ cardsData, cardsData2 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = cardsData.length + cardsData2.length - 1;
    } else if (newIndex >= cardsData.length + cardsData2.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const allCardsData = [...cardsData, ...cardsData2];

  return (
    <div className="imageslider">
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {allCardsData.map((card, index) => (
          <Slider key={index} width="1459.5px " height="320px">
            <div className="image-card-item">
              <img className="image-photo" src={`img/${card.imgSrc}`}  alt={card.imgAlt} />
              <h3 className="image-title" >{card.title}</h3>
              <p className="image-info" >{card.info}</p>
            </div>
          </Slider>
        ))}
      </div>
      <div className="indicators">
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <ArrowBackIosIcon style={{color:deepPurple[800]} } />
        </button>
        
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <ArrowForwardIosIcon style={{color:deepPurple[800]} } />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
