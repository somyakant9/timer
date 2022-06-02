import Stopwatch from './components/Stopwatch';
import React from 'react';
import './App.css';
import Timer from './components/Timer'

function App() {

  const [toggle , setToggle] = React.useState(true);
 
  const set = ()=>{

    setToggle(!toggle);

  }
  return (
    <div  className="App">
   <button onClick={set}>Click here</button>
   <div>{toggle?<Stopwatch/>:<Timer/>}</div>
    </div>
    
  );
}

export default App;
