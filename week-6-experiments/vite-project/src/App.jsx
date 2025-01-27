
import { useState } from 'react';
import './App.css';
let counter=4;
function App() {
  const [todo, setTodo]=useState([{id:1,title:`go to gym`,description:'at 7am'},{id:2,title:"go to market",description:"buy some fruits"},{id:3,title:"go to office",description:"at 9am"}]);
  const addTodo=()=>{
    setTodo([...todo,{id:counter++,title:"go to school",description:"at 8am"}]);
  }

  return (
    <div >
      <button onClick={addTodo}>Add Todo</button>
    {todo.map((currElem)=><Todo key={currElem.id} title={currElem.title} description={currElem.description} />
    )}
    
     
    </div>
  )
}

const Todo=({title,description})=>{
  
  return(
    <>
    <h3>{title}</h3>
    <h4>{description}</h4>
    </>
  )

}


export default App
