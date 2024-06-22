import {useRef} from "react";


function App() {
    let headLine = useRef();

    let imgSize, headLine1, firstName, lastName, pTag   = useRef();

    let counter = useRef(0)

    let apidata= useRef(null)




    const fetchData= async ()=>{
        const response = await fetch("https://dummyjson.com/products/1")
        apidata.current=await response.json();
    }
    const showData=()=>{
        pTag.innerText=JSON.stringify(apidata.current)
    }



    const change=()=>{
        headLine.current.innerHTML="<ul><li>A</li><li>B</li></ul>"

        headLine.current.classList.remove('text-success')
        headLine.current.classList.add('text-danger')

        counter.current++
        console.log(counter.current)
    }

    const change1=()=>{
        headLine1.innerHTML="<ul><li>A</li><li>B</li></ul>"
    }

    const changeImg=()=>{
        imgSize.src="https://t.ly/7UoN_"
        imgSize.setAttribute("width","500")
        imgSize.setAttribute("height","600")
    }

    const changeInput=()=>{
        let fName=firstName.value;
        let lName=lastName.value;

        alert(fName+" "+lName)
    }
    return (
        <div>
            <h1 className="text-success" ref={headLine}>dfd</h1>
            <button onClick={change}>Click</button>
            <br/>

            <h1 ref={(h1) => headLine1 = h1}></h1>
            <button onClick={change1}>Click</button>
            <br/> <br/>


            <img src="https://t.ly/LAVqn" ref={(a) => imgSize = a} height={400} width={400}/>
            <button onClick={changeImg}>Click</button>
            <br/> <br/>

            <input placeholder="First Name" ref={(a)=>firstName=a} />
            <input placeholder="Last Name" ref={(a)=>lastName=a} />
            <button onClick={changeInput}>Click</button>
            <br/> <br/>

            <p ref={(a)=>pTag=a}></p>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
}

export default App;
