import React from "react";
import "./Modal1.css";
import CloseIcon from '@mui/icons-material/Close';

export default function Modal1(props) {
  if (props.showModal1) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }

  
    

  return (
    <>
      <div className="modal1">
  
        <div onClick={props.closeModal1} className="overlay"></div>
        <div className="modal1-content">
        <img className="modal1-picture" src={`img/${props.imgSrc}`} alt={props.imgAlt}></img>
          <h2 className="modal1-title">{props.title}</h2>
          <p className="modal1-info">{props.info}</p>
         
          <button className="close-modal1" onClick={props.closeModal1}>
          <CloseIcon/>
          </button>
        </div>
      </div>
    </>
  );
}
