import {useState} from "react";
import "./comment.css";

function Comment(){
    const [inputObject, setInputObject] = useState({
        username: "",
        remarks: "",
        rating: 0
    });
    
    let handleEventChange = function(event){
      let name = event.target.name;
      let value = event.target.value;

      setInputObject( (prevInputObject) => {
        return {...prevInputObject, [name]: value}
      } );
    }

    let submitForm = function(event){
      event.preventDefault();
      setInputObject({
        username: "",
        remarks: "",
        rating: 0
      });
    }

    return (
    <div className="form" >
    <h1>Give Comment!</h1>
    <form onSubmit={submitForm} >
      <label htmlFor="username" >Enter Username: </label>
      <input onChange={handleEventChange} id="username" placeholder="Enter username" name="username" type="text" value={inputObject.username}/>
      <br />
      <label htmlFor="remarks" >Add your Remarks: </label>
      <textarea onChange={handleEventChange} name="remarks" value={inputObject.remarks} id="remarks" ></textarea>
      <br />
      <label htmlFor="rating" >Enter Rating: </label>
      <input onChange={handleEventChange} id="rating" placeholder="Enter rating" name="rating" type="number" min={1} max={5} value={inputObject.rating}/>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Comment;