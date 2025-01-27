import { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
// import { Todos } from './components/Todos';
import Todos from './components/Todos';

function App() {
  const [ todos , setTodos ]=useState([]);
useEffect(()=>{
  fetch("http://localhost:3003/todos").then(
    async function(res){
      const response=await res.json()
      console.log(response.todos)
      setTodos(response.todos)
    }
  )
},[todos])
 

  return (
    <div>
     <CreateTodo/><br />
     <Todos todos={todos}/>
    </div>
  )
}


export default App
