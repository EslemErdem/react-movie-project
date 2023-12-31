import React, {useState} from 'react';
import Header from './ResponsiveAppBar.js';
import 'react-router-dom';
import CommentSection from './CommentSection.js';
import Card from './Card.js';
import ImageSlider,{Slider} from'./ImageSlider.js';
import Modal from './Modal.js';
import Modal1 from './Modal1.js';
import styles from './Home.css';

const Home=()=>{
const cardsData= [
  {
    id:'foto1',
    imgSrc: 'image1.jpg',
    imgAlt: 'Image 1',
    rate: '4.5',
    title: 'Card 1 Title ',
    info: 'Card 1 Information',
  },
  {
    id:'foto2',
    imgSrc: 'image2.jpg',
    imgAlt: 'Image 2',
    rate: '3.8',
    title: 'Card 2 Title ',
    info: 'Card 2 Information',
  },
  {
    id:'foto3',
    imgSrc: 'image3.jpg',
    imgAlt: 'Image 3',
    rate: '5.0',
    title: 'Card 3 Title ',
    info: 'Card 3 Information',
  },
  {
    id:'foto4',
    imgSrc: 'image4.jpg',
    imgAlt: 'Image 4',
    rate: '5.0',
    title: 'Card 4 Title ',
    info: 'Card 4 Information',
  },
  
];
const cardsData2 = [
  {
    imgSrc: 'image1.jpg',
    imgAlt: 'Image 1',
    rate: '4.5',
    title: 'Card 1 Title',
    info: 'Card information',
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
const [searchQuery, setSearchQuery] = useState(''); // arama sorgusu için 
  const [filteredCards, setFilteredCards] = useState([]); // filtrelenmiş card datasını tutması için 
  const handleSearch = (query) => { //aramaya göre card datalarını filtrele
    const filteredData = cardsData.concat(cardsData2).filter((card) => {
      return (
        card.title.toLowerCase().includes(query.toLowerCase()) ||
        card.info.toLowerCase().includes(query.toLowerCase())
      );
    });
  
    setFilteredCards(filteredData);
    setIsSearchActive(query !== ''); // Arama sorgusu girildiyse true olarak ayarla
    setShowFilteredData(query !== '' && filteredData.length > 0);
  };

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [showFilteredData, setShowFilteredData] = useState(false);

const [showModal, setShowModal] = useState(false);
const [selectedCard, setSelectedCard] = useState(cardsData[0]);

const [showModal1, setShowModal1] = useState(false);
const [selectedCard1, setSelectedCard1] = useState(cardsData2[0]);

const handleModalOpen = (card) => {
  setSelectedCard(card);
  setShowModal(true);
};

const handleModalClose = () => {
  setShowModal(false);
};
const handleModalOpen1 = (card) => {
  setSelectedCard1(card);
  setShowModal1(true);
};

const handleModalClose1 = () => {
  setShowModal1(false);
};



return (
<>
<div class="full-page"></div>
<input className="search-bar"
  type="text"
  placeholder="Search..."
  value={searchQuery}
  onChange={(e) => { //arama için bir şey yazdığımızda searchQuery i günceller ve handleSearchi çağırıp yazılana göre card datayı filtreler
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
   
  }}
/>


  
{showFilteredData && (
  <div className="filtered-card">
      
{filteredCards.map((card, index)  => ( // cardlar üzerinden arama yapmak yerine filtrelenmiş değerler arasında arama yapar  
      
  <Card
          
          key={index}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          rate={card.rate}
          title={card.title}
          info={card.info}
          
        />
      
      ))}
      </div>)}
     
    
          <div >
     {isSearchActive && (
      <button className='search-button'
        onClick={() => {
          setSearchQuery('');
          setFilteredCards([]);
          setIsSearchActive(false); // Arama temizlendiğinde false olarak ayarla
        }}
      >
        Clear Search
      </button>
    )}
     </div>
<div className="card-container">
      
      {cardsData.map((card, index) => (
        <Card
          
          key={index}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          rate={card.rate}
          title={card.title}
          info={card.info}
          handleModalOpen={() => handleModalOpen(card)}
        />

      ))}
       {showModal && (
        <Modal
          imgSrc={selectedCard.imgSrc}
          imgAlt={selectedCard.imgAlt}
          title={selectedCard.title}
          info={selectedCard.info}
          closeModal={handleModalClose}
        />
      )}
     </div>
   
     
     <div className="card-container">
      
      {cardsData2.map((card1, index) => (
        <Card
          
          key={index}
          imgSrc={card1.imgSrc}
          imgAlt={card1.imgAlt}
          rate={card1.rate}
          title={card1.title}
          info={card1.info}
          handleModalOpen={() => handleModalOpen1(card1)}
        />

      ))}
       {showModal1 && (
        <Modal1
          imgSrc={selectedCard1.imgSrc}
          imgAlt={selectedCard1.imgAlt}
          title={selectedCard1.title}
          info={selectedCard1.info}
          closeModal1={handleModalClose1}
        />
      )}
     </div>
   
      <ImageSlider cardsData={cardsData} cardsData2={cardsData2} />
    <div>
      <CommentSection/>
    
    </div> 
    

      </>
  
);
}
export default Home;
