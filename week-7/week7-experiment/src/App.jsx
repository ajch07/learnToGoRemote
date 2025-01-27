import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// Correctly using React.lazy with dynamic import
const Dashboard = React.lazy(() => import("./components/Dashboard")); // Assuming you meant Dashboard here
const Landing = React.lazy(() => import("./components/Landing"));

function App() {



  return (<>
    
    <BrowserRouter>
    <Appbar/>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="Dashboard" element={<Dashboard/>}></Route>
      <Route path="/" element={<Landing/>}></Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

const Appbar=()=>{
  const navigate=useNavigate();
  return(
    <>
    <div >
      <button onClick={()=>{
        navigate("/Dashboard")
      }}>Dashboard</button>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
    </div></>
  )
}

export default App
