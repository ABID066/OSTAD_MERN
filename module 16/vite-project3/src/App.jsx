import { useState } from "react"


function App() {

  let [formObj,setFormObj]=useState({fName:"Bill", lName:"Gates", city:"Khulna", gender:"Male"})
  
  const inputOnChange = (property, value)=>{
    setFormObj(prevO=>({
      ...prevO, [property]:value
    }))
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    console.log(formObj);
    alert(JSON.stringify(formObj))
  }



  return (
    <div className="container">
      <form>
        <input onChange={(e)=>{inputOnChange("fName",e.target.value)}} value={formObj.fName} type="text" placeholder="First Name" /><br/>
        <input onChange={(e)=>{inputOnChange("lName",e.target.value)}} value={formObj.lName} type="text" placeholder="Last Name" /><br/>
        
        <select onChange={(e)=>{inputOnChange("city",e.target.value)}} value={formObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Khulna">Khulna</option>
          <option value="Nilfamari">Nilfamari</option>
        </select><br/>
        
        <input onChange={()=>{inputOnChange("gender","Male")}} checked={formObj.gender==="Male"} type="radio" name="gender" />Male
        <input onChange={()=>{inputOnChange("gender","Female")}} checked={formObj.gender==="Female"} type="radio" name="gender" />Female<br/>

        <button onClick={formSubmit} type="submit">Submit</button>        
      </form>
      
    </div>
  )
}

export default App
