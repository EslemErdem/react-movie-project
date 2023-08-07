import React from 'react';
import './Card.css';
import Rate from './Rate.js';
import InfoIcon from '@mui/icons-material/Info';
import { red } from '@mui/material/colors';

export const Card=({imgSrc,imgAlt,rate,title,info,handleModalOpen})=>{
    
    
    const openModal = () => {
      
        handleModalOpen({
          title,
          info,
        });
      };



    return(
        <div className="article">
        <div className="article__box">
        <p className="article__rate"><Rate/></p>
        <img 
        src={`img/${imgSrc}`} alt={imgAlt}
        className="article__picture"></img>
        <h1 className="article__title">{title}</h1>
        <p className="article__title--text">{info}</p>
        </div>
        
        <button className="article_modal_button" onClick={openModal}><InfoIcon style={{ color: red[50] }}/></button>
    
        </div>

        
    );
}

export default Card;