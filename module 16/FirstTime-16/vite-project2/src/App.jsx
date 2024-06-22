import { useState } from "react"


function App() {
 
  const [list, setList]=useState([])
  const [item, setItem]=useState("")

  const AddToList=()=>{
    list.push(item)
    setList([...list])
  }

  const removeItem = (index) => {
    list.splice(index,1);
    setList([...list])

  }

  return (
    <div>
      
      <table>
        <tbody>
          {
            list.length!==0?(
              list.map((element,index)=>{
                return(
                  <tr key={index}>
                    <td>{element}</td>
                    <td>
                      <button onClick={()=>{
                        removeItem(index)
                      }}>
                      Remove
                      </button>
                      </td>
                  </tr>
                )
                
              })
            ):(<tr></tr>)
          }
        </tbody>
      </table>
      
      <input onChange={(e)=>setItem(e.target.value)} type="text"  placeholder="item"/>
      <button onClick={AddToList}>ADD</button>
    </div>
  )
}

export default App
