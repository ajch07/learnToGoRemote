
function App() {
 

  return (
    <WrapperComponent >
      <h1>hi there!</h1>
    </WrapperComponent>
   
  )
}

const WrapperComponent=({children})=>{
  return(
    <div style={{border:"2px solid black", padding:"20px"}}>
      {children}

    </div>
  )
}


export default App
