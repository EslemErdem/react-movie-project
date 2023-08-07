import React from 'react';
import './Categories.css';
import Catcard from './Catcard.js'; 
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


function Categories(){

const responsive={
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const card_1 = {
  img1:{
  
  imgSrc: 'image1.jpg',
    imgAlt: 'Image 1',
    rate: '4.5',
    title: 'Card 1 Title',
    info: 'Card 1 Information',
  },
  img2:{
  
    imgSrc: 'image2.jpg',
    imgAlt: 'Image 2',
    rate: '3.8',
    title: 'Card 2 Title',
    info: 'Card 2 Information',
  },
  img3:{
    
    imgSrc: 'image3.jpg',
    imgAlt: 'Image 3',
    rate: '5.0',
    title: 'Card 3 Title',
    info: 'Card 3 Information',
  },
  img4:{
    
    imgSrc: 'image4.jpg',
    imgAlt: 'Image 4',
    rate: '5.0',
    title: 'Card 4 Title',
    info: 'Card 4 information',
  },
  img5:{
    
    imgSrc: 'image4.jpg',
    imgAlt: 'Image 4',
    rate: '5.0',
    title: 'Card 4 Title',
    info: 'Card 4 information',
  },
  img6:{
    
    imgSrc: 'image4.jpg',
    imgAlt: 'Image 4',
    rate: '5.0',
    title: 'Card 4 Title',
    info: 'Card 4 information',
  },
  img7:{
    
    imgSrc: 'image4.jpg',
    imgAlt: 'Image 4',
    rate: '5.0',
    title: 'Card 4 Title',
    info: 'Card 4 information',
  },
};
const card_2 = [
  {
    imgSrc: 'image1.1.jpg',
    imgAlt: 'Image 1.1',
    rate: '4.5',
    title: 'Card 1.1 Title',
    info: 'Card 1.1 information',
  },
  {
    imgSrc: 'image2.1.jpg',
    imgAlt: 'Image 2.1',
    rate: '3.8',
    title: 'Card 2.1 Title',
    info: 'Card 2.1 information',
  },
  {
    imgSrc: 'image3.1.jpg',
    imgAlt: 'Image 3.1',
    rate: '5.0',
    title: 'Card 3.1 Title',
    info: 'Card 3.1 information',
  },
  {
    imgSrc: 'image4.1.jpg',
    imgAlt: 'Image 4.1',
    rate: '5.0',
    title: 'Card 4.1 Title',
    info: 'Card 4.1 information',
  },
  {
    imgSrc: 'image5.1.jpg',
    imgAlt: 'Image 5.1',
    rate: '5.0',
    title: 'Card 5.1 Title',
    info: 'Card 5.1 Information',
  },
  {
    imgSrc: 'image5.1.jpg',
    imgAlt: 'Image 5.1',
    rate: '5.0',
    title: 'Card 5.1 Title',
    info: 'Card 5.1 Information',
  },
];
const card_cArray = Object.values(card_1);
const card_c2Array = Object.values(card_2);
const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 }
  ];
return (
<>
    

<div className="Categories">
  
        <h2 className="categories-header">Category 1</h2>
        <h1 className="categories-header">Category 1</h1>
        <Carousel responsive={responsive} breakPoints={breakPoints}>
          {card_cArray.map((card_1Data, index) => (
            <Catcard key={index}
            imgSrc={card_1Data.imgSrc}
            imgAlt={card_1Data.imgAlt}
            rate={card_1Data.rate}
            title={card_1Data.title}
            info={card_1Data.info}>

            </Catcard>
          ))}
        </Carousel>

        <h1 className="categories-header">Category 2</h1>
        <Carousel responsive={responsive}>
          {card_c2Array.map((card_c2Data, index) => (
            <Catcard key={index}
            imgSrc={card_c2Data.imgSrc}
            imgAlt={card_c2Data.imgAlt}
            rate={card_c2Data.rate}
            title={card_c2Data.title}
            info={card_c2Data.info}>
              
            </Catcard>
          ))}
        </Carousel>
      </div>
    </>
);
}

export default Categories;