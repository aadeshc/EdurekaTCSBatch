import React, { useState,useEffect } from 'react'



export const Comp = () => {

  const [first, setfirst] = useState()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(setfirst(json)))
  },[])

    const [data,setData] = useState()
  return (
    <div>
             
        <div id="MyDiv2">Hello React</div>
        <input type='text' id="txtName" onChange={(e)=> setData(e.target.value)}/>
    </div>
  )
}

