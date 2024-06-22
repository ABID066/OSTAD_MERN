import { useEffect, useState } from "react"


function App() {

  let [data,setData]=useState();
  let [data1,setData1]=useState();
  
  useEffect( ()=>{
    
   /* fetch("https://dummyjson.com/products/1")
    .then(res=>res.json())
    .then(json=>setData(json))*/

    (async ()=>{
      let response = await fetch("https://dummyjson.com/products/1")
      let json = await response.json();
      setData(json)
    }
      
    )()


  ,[]})
  return (
    <div>
      {JSON.stringify(data)}
      {JSON.stringify(data1)}
    </div>
  )
}

export default App
