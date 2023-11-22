// import { useState ,useRef} from "react";


// function App() {
//   //created a state variable inside a component
//   const [count, setCount] = useState(0);
//   const timerIdRef = useRef(null);


//   //onStart function
//   //setInterval fun is repeatedly calls code snippet at specified time interval
//   const OnStart =()=>{
//     timerIdRef.current = setInterval(()=>{
//       setCount((prevCount)=>prevCount+1);
//     }, 1000);
//   };
  

//   const onStop = () => {
//     clearInterval(timerIdRef.current);
//   };


//   return (
//     <div className="box">
//         <h1>Count: {count}</h1>
//         <button  onClick={OnStart}>Start</button>
//         <button  onClick={onStop}>Stop</button>
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react'

function LocalStorage() {
    //Im going to get the value from the input by using Ref
    const data = useRef();
    const handleClick=()=>{
        console.log(data.current.value,"initial value")
        // for storing value in localstorage we have to create localstorage
        localStorage.setItem("inputValue",data.current.value)
    }
    //im going to get the value from loaclStorage 
    console.log(localStorage.getItem("inputValue"),'**')
  return (
    //created a input feild and button
    <>
        <input ref={data}/>
        <button onClick={handleClick}>Add</button>
    </>
  )
}

export default LocalStorage;