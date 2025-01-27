import { useState } from "react";



function App() {
 

  const [tasks,setTask]=useState([{
    id:1,
    title:"Anubhav",
    description:"choudhary",


  },
  {
    id:2,
    title:"Garima",
    description:"choudhary",


  }]);

  

  const addRandomTask=()=>{
    setTask([...tasks,{
      id:2+1,
      title:"ginang",
      description:"choudhary"

    }])
   
}
 

  return (
    <>
    {/* <h1>{tasks[0].title}</h1>
    <h2>{tasks[0].description}</h2>
    <h1>{tasks[1].title}</h1>
    <h2>{tasks[1].description}</h2> */}
    <button onClick={addRandomTask}>add random task</button>
    {tasks.map((currElem)=>{
      return(<li  key={currElem.id}>
        <Todo currElem={currElem}></Todo>
      </li>)
    })}
    </>
  )
}

const Todo=(props)=>{
  return(<>
  <h1>{props.currElem.title}</h1>
  <h1>{props.currElem.description}</h1>
  </>)
}

export default App
