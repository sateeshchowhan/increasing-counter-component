import React, { useRef } from 'react'

function LocalStorage() {
    //Im going to get the value from the input by using Ref
    const data = useRef();
    const handleClick=()=>{
        console.log(data,"initial value")
    }
  return (
    //created a input feild and button
    <>
        <input ref={data}/>
        <button onClick={handleClick}>Add</button>
    </>
  )
}

export default LocalStorage;