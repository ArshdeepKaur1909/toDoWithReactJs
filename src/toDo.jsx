import {useState} from "react";

function ToDo(){
  const [toDolist, setToDolist] = useState([]);
  const [newValue, setNewValue] = useState("");
  
  let addNewTask = function(){
    setToDolist( function(list){
      return [...list, newValue]
    } )
    setNewValue("")
  }

  let updateValue = function(event){
    setNewValue(event.target.value)
  }

  let deleteTask = function(){
    
  }
  
  return(
    <>
      <h1>Welcome! to TO-DO App</h1>
      <br/>
      <input type="text" placeholder="Add Today's task" value={newValue} onChange={updateValue} />&nbsp;&nbsp;<button onClick={addNewTask}>Add Task</button>
      <ul>
        {toDolist.map( (task) => (
            <>
            <li>{task}</li>&nbsp;&nbsp;<button onClick={deleteTask} >Delete Task</button>
            </>
        ) )}
      </ul>
    </>
  );
}

export default ToDo;