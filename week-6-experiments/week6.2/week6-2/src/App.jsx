
import React, { useMemo, useState } from 'react';


const App = () => {
  const [n,setN]=useState(1);
  const [counter,setCounter]=useState(0);

 let count=useMemo(()=>{
  let finalCount=0;
  for(let i=0;i<=n;i++){
   finalCount=finalCount+i;
  }
  return finalCount;
 },[n]);
 
  return (
    <div>
      
      <input type="number" onChange={(e)=>{
        console.log(e.target.value);
        setN(e.target.value);
      }} />
  <br />
      sum of the digits from 1 to {n} is {count}
  
      <button onClick={()=>{
        setCounter(counter+1)
      }}>counter({counter})</button>
      
    </div>
  )
}

export default App
