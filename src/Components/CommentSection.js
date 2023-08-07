import React, { useState} from 'react';
import Comment from './Comment';
import './Comment.css';
import SendIcon from '@mui/icons-material/Send';


const CommentSection = () => {
  const [comments, setComments] = useState([
    { name: 'user1', content: 'comment',image:"img/user.jpg" },
    { name: 'user2', content: 'comment',image:"img/user.jpg" },
    { name: 'user3',  content: 'comment',image:"img/user.jpg" },
    
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    content: '',
    image: 'img/user.jpg'
  });


  const handleInputChange = (event) => {
    
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment({ name: '', content: '' ,image:'img/user.jpg'  });
  };

  return (
    <div> 
      <div>
      
      <h2 className="comment-header">Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} content={comment.content} image={comment.image}/>
      
      ))}
      </div>
      <div className="comment-form">
     
      <form className="comment-form-input" onSubmit={handleSubmit}>
        <input className="comment-form--input"
          type="text"
          name="name"
          value={newComment.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        
        <textarea className="comment-form--textarea"
          name="content"
          value={newComment.content}
          onChange={handleInputChange}
          placeholder="Your Comment"
        />
        <button className="comment-form button" type="submit" >
          <SendIcon/>
          </button>
      </form>
      
    </div>


    </div>
    
    
    
  );
};

export default CommentSection;

