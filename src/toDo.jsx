import {useState} from "react";
import {v4 as uuidv4} from "uuid";

function ToDo(){
  const [toDolist, setToDolist] = useState([]); // Now converting array of toDo list tasks into array of each toDo task in object with id and task key
  const [newValue, setNewValue] = useState("");
  
  let addNewTask = function(){
    setToDolist( function(list){
      return [...list, {task: newValue, id: uuidv4()}]
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
        {toDolist.map( (taskObject) => (
            <li key={taskObject.id}>{taskObject.task} {/ * Each list child must have unique key property and we can that using npm package called uuid */}
            &nbsp;&nbsp;  {/* Each top-level item inside a .map() should return a single element with a key prop. Right now, you’re returning a <> fragment with key on li, which won’t work as expected. */}
            <button onClick={deleteTask} >Delete Task</button>
            </li>
        ) )}
      </ul>
    </>
  );
}

export default ToDo;