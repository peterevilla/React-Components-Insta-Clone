// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {
  const [comm, setComm] = useState(props.comments)
  
  
  return (
    <div>
     

     {comm.map((item, index) => {
        return <Comment comment={item} key={index} />;
      })}

      <CommentInput/>
  
      
      
      
    </div>
  
)}

export default CommentSection;



