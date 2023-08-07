import React from "react";
import "./Modal.css";
import CloseIcon from '@mui/icons-material/Close';

export default function Modal(props) {
  if (props.showModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  
    

  return (
    <>
      <div className="modal">
  
        <div onClick={props.closeModal} className="overlay"></div>
        <div className="modal-content">
          <img className="modal-picture" src={`img/${props.imgSrc}`} alt={props.imgAlt}></img>
          <h2 className="modal-title">{props.title}</h2>
          <p className="modal-info">{props.info}</p>
          <button className="close-modal" onClick={props.closeModal}>
            <CloseIcon/>
          </button>
        </div>
      </div>
    </>
  );
}
