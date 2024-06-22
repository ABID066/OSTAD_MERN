import { useState } from "react"



function App() {


  const [number, setNumber]=useState(1)

  /*const changeNumber=()=>{

    setNumber(number+1)
  }*/

  const  [myObj,setObj]=useState({
      key1:"value 1",
      key2:"value 2",
      key3:"value 3"
  })
  const changeTheValueOfObj=()=>{
     /* setObj({
        key1:"new Value1",
        key2:"new Value2",
        key3:"new Value3",
        key4:"new Value4",   //Change the hole object
        key5:"new Value5",
      })*/
      setObj(
        pObj=>({...pObj,
          key1:"NEW VALUE FOR key 1" 
          //change only specific value of keys
        })
      )
  }
  let [email,setEmail]=useState("Default email")



  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={()=>setNumber(number+1)}><h3>Plus</h3></button>
      <button onClick={()=>setNumber(number-1)}><h3>Minus</h3></button>
      <button onClick={()=>setNumber(0)}><h3>RESET</h3></button>
      <br/><br/><br/><br/>


    <h1>{email}</h1>
    <label><h3>Email:</h3></label><br/>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="email" />


      <br/><br/><br/><br/>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <h1>{myObj.key4}</h1>
      <h1>{myObj.key5}</h1>
      <button onClick={changeTheValueOfObj}>Change</button>

    </div>
  )
}

export default App
