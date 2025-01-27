import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom, evenSelector } from './store/atom/count'

function App() {
  

  return (
    <div>
    <RecoilRoot>

    <Count />
   </RecoilRoot>
      
    
      
      
    </div>
  )
 
}


function Count(){
  console.log("re-rendered")
  return <div>
 
    <CountRenderer />
    <Buttons  />
    <Even/>
  </div>

}
function CountRenderer(){
  const count=useRecoilValue(countAtom)
  return(
    <div>
      {count}
      
    </div>
    
  )
}
function Buttons(){
  console.log("re-render")
const setCount=useSetRecoilState(countAtom)
 return(
  <>
  <button onClick={()=>{
    setCount(c=>c-1)
  }}>Decrease</button>
  <button onClick={()=>{
    setCount(c=>c+1)
  }}>Increase</button>
  </>
 )
}
function Even(){
  const isEven=useRecoilValue(evenSelector)
  console.log(isEven)
  return(
 <div>
  {isEven ? "It is even" : null}
 </div>)
 
}

export default App
