import React from 'react';
import './Card.css';
import Rate from './Rate.js';

export const Catcard=({imgSrc,imgAlt,rate,title,info})=>{
    return(
        <div className="categories">
        <div className="categories__box">
        <p className="categories__rate"><Rate/></p>
        <img 
        src={`img/${imgSrc}`} alt={imgAlt}
        className="categories__picture"></img>
        <h3 className="categories__title">{title}</h3>
        <p className="categories__title--text">{info}</p>
        </div>
        </div>
        
        
    );
}

export default Catcard;