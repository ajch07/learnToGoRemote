import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () => {  
  const [id,setId]=useState(1)
  
      return (
        <div >
          <button onClick={()=>{setId(1)}}>1</button>
          <button onClick={()=>{setId(2)}}>2</button>
          <button onClick={()=>{setId(3)}}>3</button>
          <button onClick={()=>{setId(4)}}>4</button>
          <button onClick={()=>{setId(5)}}>5</button>
         <Todo id={id} />
        </div>
      )}
const Todo=({id})=>{

  const [todos,setTodos]=useState([])
    const addTodos= async ()=>{
      axios.get(`https://dummyjson.com/todos/${id}`).then(async (res)=>{
        console.log(res.data)
        setTodos(res.data)
      })
    }
      useEffect(()=>{
        addTodos();
      },[id]);
      
return(
  <>
  ID:{id}
  {/* {todos.map((currElem)=><div key={currElem.id}><h1>{currElem.todo}</h1></div>)} */}
  <h1>{todos.todo}</h1>
  <h4>{todos.completed}</h4>
  
  </>
)
}
export default App
