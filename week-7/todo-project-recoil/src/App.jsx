import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todoAtom } from "./store/atom/todoatom";


function App() {
  

  return (
    <RecoilRoot>
    <CreateTodos/>
    <ShowTodo/>
    </RecoilRoot>
  )
}

function CreateTodos(){
  const [todo,setTodo]=useRecoilState(todoAtom)
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("");
  function addtodo(){
    
    const newtodo={id:Date.now(),title,description}
    setTodo((oldtodo)=>[...oldtodo,newtodo])
    console.log(todo);
    
    // setTitle("")
    // setDescription("")
   
    
    
  }
return(<>
 <input type="text" placeholder="Title" onChange={(e)=>{
    const value =e.target.value
    setTitle(value);
  }} />
  <input type="text" placeholder="description" onChange={(e)=>{
    const value=e.target.value
    setDescription(value)
  }} />
  
  <button onClick={addtodo}>addtodo</button>
  
  

</>
 
)
  
}

function ShowTodo(){
  const todo=useRecoilValue(todoAtom)
  return(<>
  {todo.map((curElem)=><div key={curElem.id}>
      <h1>{curElem.title}</h1>
      <p>{curElem.description}</p>
    </div>)}
  </>
    
  )
  
}
export default App
