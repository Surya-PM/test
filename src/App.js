import './App.css';
import {useState} from "react";

function App() {  

  return (
    <div className="App">
     <Counter/>
    </div>
  );
}




function Counter(){
  const[like,setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  return (
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button> 
      <button onClick={()=>setDislike(dislike+1)}>👎 {dislike}</button><br></br>
    </div>
  )
}



export default App;



