
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [value,setValue]=useState("");
  const [todo,setTodo]=useState([]);

  function addTodo(){
    setTodo([...todo,value])
    setValue("");
  }
  function deleteTodo(index){
const newTodo=[...todo];
newTodo.splice(index,1);
setTodo(newTodo);

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To-Do List</h3>
        <input value={value} onChange={(e)=>(setValue(e.target.value))} type="text"/>
        <button onClick={addTodo}>Add Todo</button>
        {
          todo[0]!="undefind" &&
          <ul>
            {
              todo.map((value,index)=>{
                return(
                  <li>{value}<button onClick={()=>deleteTodo(index)}>Delete</button></li>
                )
              })
            }
          </ul>
        }
    </div>
  )
}

export default App
