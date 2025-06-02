import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDo(){
  const [toDolist, setToDolist] = useState([]); // Now converting array of toDo list tasks into array of each toDo task in object with id and task key
  const [newValue, setNewValue] = useState("");
  
  // function callback when we want to add new task --> That needs to be done using ...spread operator or concat in Arrays
  let addNewTask = function(){
    setToDolist( function(list){
      return [...list, { task: newValue, id: uuidv4() }]
    } )
    setNewValue("")
  }

  let updateValue = function(event){
    setNewValue(event.target.value)
  }
  
  // function callback when we want to delete task --> That needs to be done using filter on arrays
  let deleteTask = function(id){
    let filterList = toDolist.filter( function(itemObject){
      return itemObject.id != id
    } )

    setToDolist(filterList)
  }

  // function callback when we want to update every to-do's task --> That needs to be done using .map function on Arrays
  let upperCaseAll = function(){
    setToDolist( function(prevToDolist){
      return prevToDolist.map( (toDo) => {
        return {...toDo, task: toDo.task.toUpperCase()}
      } )
    } )
  }

  // function callback when we want to update one task into upperCase
  let upperCase = function(id){
    setToDolist( function(prevToDolist){
      return prevToDolist.map( function(toDo){
        if(toDo.id == id){
          return {...toDo, task: toDo.task.toUpperCase()};
        }
        else{
          return {...toDo};
        }
      } )
    } )
  }

  return(
    <>
      <center>
      <h1>Welcome! to TO-DO App</h1>
      <br/>
      <input type="text" placeholder="Add Today's task" value={newValue} onChange={updateValue} />&nbsp;&nbsp;<button onClick={addNewTask}>Add Task</button>
      <ul>
        {toDolist.map( (taskObject) => (
            <li key= {taskObject.id} >
              {taskObject.task} 
              {/* Each list child must have unique key property and we can that using npm package called uuid  */}
              &nbsp;&nbsp;  {/* Each top-level item inside a .map() should return a single element with a key prop. Right now, you’re returning a <> fragment with key on li, which won’t work as expected.  */}
              <button onClick={() => (deleteTask(taskObject.id))} > Delete Task</button>
              <button onClick={() => (upperCase(taskObject.id))}>UpperCase It</button>
            </li>
        ) )}
      </ul>
      <button onClick={upperCaseAll} >UpperCase All tasks</button>
      </center>
    </>
  );
}

export default ToDo;