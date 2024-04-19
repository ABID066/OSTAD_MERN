import { useRef } from "react"


function App() {
  
  let myHeadLine= useRef();

  let myImg=useRef();

  let firstName,lastName,myHeadLine1= useRef();

  let number= useRef(150);//NOT like others

  let APIData= useRef();
  let myPTag= useRef();
  

  const fetchData=async()=>{
    const response = await fetch("https://dummyjson.com/products/1")
    APIData.current=await response.json();
  }

  const showData=()=>{
    myPTag.current.innerText=JSON.stringify(APIData.current);
  }

  
  const change = () => {
    myHeadLine.current.innerHTML="<ul><li>A</li><li>B</li><li>C</li></li></ul";
    myImg.current.src="https://media.e-valy.com/cms/products/images/7a25641c-519c-4998-a0a2-537a703a4476?h=250&w=250"
    myImg.current.setAttribute("heigth","200")
    myImg.current.setAttribute("width","300")
  }


  const change1=()=>{
    alert(firstName.value+" "+lastName.value)
  }


  const change2=()=>{
    myHeadLine1.classList.remove("text-success");
    myHeadLine1.classList.add("text-danger")
  }


  const change3=()=>{
    number.current++;
    console.log(number.current);
  }

  return (
    <div>
      <h1 ref={myHeadLine}></h1>
      <img ref={myImg} src="https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1713352137_260x372.jpg&w=640&q=75" /><br/><br/>
      <button onClick={change}>Click</button><br/><br/><br/><br/>

      
      <input ref={(a)=>firstName=a} placeholder="First Name"/><br/><br/>
      <input ref={(a)=>lastName=a} placeholder="Last Name"/><br/><br/>
      <button onClick={change1}>Submit</button><br/><br/><br/>
      
      
      <h1 className="text-success" ref={(a)=>myHeadLine1=a}>THE Head Line</h1>
      <button onClick={change2}>CLICK</button><br/><br/><br/>



      <button onClick={change3}>Counting Number</button><br/><br/><br/>

      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  )
}

export default App
