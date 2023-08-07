import React from 'react';
import './Comment.css';


const Comment = ({ name, content,image}) => {
  return (
    
    <div className="comment">
        <div>
        <img src="img/user.jpg" alt=" " className="comment-picture"></img>
        </div>
     
      <span className="comment-person">{name}</span>
      <p className="comment-p">{content}</p>
      
      </div>
      
      
  );
};

export default Comment;
