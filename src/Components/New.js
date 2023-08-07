import React from 'react';
import Card from './Card';
import Comment from './Comment';
import CommentSection from './CommentSection';

function New(){
  const cardsData = [
    {
      imgSrc: 'image1.jpg',
      imgAlt: 'Image 1',
      rate: '4.5',
      title: 'Card 1 Title',
      info: 'Card 1 Information',
    },
    {
      imgSrc: 'image2.jpg',
      imgAlt: 'Image 2',
      rate: '3.8',
      title: 'Card 2 Title',
      info: 'Card 2 Information',
    },
    {
      imgSrc: 'image3.jpg',
      imgAlt: 'Image 3',
      rate: '5.0',
      title: 'Card 3 Title',
      info: 'Card 3 Information',
    },
    {
      imgSrc: 'image4.jpg',
      imgAlt: 'Image 4',
      rate: '5.0',
      title: 'Card 4 Title',
      info: 'Card 4 Information',
    },
  ];
  
  const cards2Data = [
    {
      imgSrc: 'image1.1.jpg',
      imgAlt: 'Image 1.1',
      rate: '4.5',
      title: 'Card 1.1 Title',
      info: 'Card 1.1 Information',
    },
    {
      imgSrc: 'image2.1.jpg',
      imgAlt: 'Image 2.1',
      rate: '3.8',
      title: 'Card 2.1 Title',
      info: 'Card 2.1 Information',
    },
    {
      imgSrc: 'image3.1.jpg',
      imgAlt: 'Image 3.1',
      rate: '5.0',
      title: 'Card 3.1 Title',
      info: 'Card 3.1 Information',
    },
    {
      imgSrc: 'image4.1.jpg',
      imgAlt: 'Image 4.1',
      rate: '5.0',
      title: 'Card 4.1 Title',
      info: 'Card 4.1 Information',
    },
   
  ];
  return (
<>
  <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          rate={card.rate}
          title={card.title}
          info={card.info}
        />
      ))}
      </div>
      <div className="card-container">
      {cards2Data.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          rate={card.rate}
          title={card.title}
          info={card.info}
        />
      ))}
      
     </div>;
     {/* <CommentSection/> */}
     </>
  );
};

export default New;
