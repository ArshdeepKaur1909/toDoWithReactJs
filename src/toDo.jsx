import {useState} from "react";

function ToDo(){
  const [toDolist, setToDolist] = useState({}); // Now converting array of toDo list tasks into array of each toDo task in object with id and task key
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
            <>
            {/ * Each list child must have unique key property and we can that using npm package called uuid*/}
            <li key={taskObject.id}>{taskObject.task}</li>&nbsp;&nbsp;<button onClick={deleteTask} >Delete Task</button>
            </>
        ) )}
      </ul>
    </>
  );
}

export default ToDo;