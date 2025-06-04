import {useState} from "react";
import Comment from "./comment.jsx";

function CommentSection(){
  const [commentSection, setCommentSection] = useState([]);
  
// creating a function which will passing as attribute's value in comment.jsx's comment component
let addComment = function(comment){
  setCommentSection( (prevSection) => {
    return [...prevSection, comment]
  } )
}

  return (
    <>
    <div className="commentSection">
        <h1>Comment Section</h1>
        {commentSection.map( (comment) => (
          <div>{comment.remarks}  &nbsp;&nbsp;&nbsp;  &#11088;{comment.rating} &nbsp;&nbsp;&nbsp; -@{comment.username}</div>
        ) )}
    </div>
    <Comment addComment={addComment} ></Comment>
    </>
  );
}

export default CommentSection;