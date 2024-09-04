import React, { useState,useEffect } from 'react'



export const Comp = () => {

  const [first, setfirst] = useState()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(setfirst(json)))
  },[])

  useEffect(()=>{
         console.log("new feature")
  },[])   
   const [data,setData] = useState()
  return (
    <div>
              {
                (first.map((e)=><li> {e.name}</li>))
              }
        <div id="MyDiv2">Hello React</div>
        <input type='text' id="MyDiv" onChange={(e)=> setData(e.target.value)}/>
    </div>
  )
}

