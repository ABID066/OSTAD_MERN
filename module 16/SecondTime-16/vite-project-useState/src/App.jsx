import {useState} from "react";


function App() {

    //Number
    const [number, setNumber] = useState(0);
    const changeNumber = () => {
        setNumber(number - 1);
    }

    //setObj
    const [myObj, setMyObj] = useState({
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3",
    });
    const changeObjValue = () => {
        /*setMyObj({
            key1:"Value 1 new",
        })*/
        setMyObj(
            preObj => ({
                ...preObj,
                key1: "Value 1 nww",
                key2: "Value 2 nww",
            })
        )
    }


    //Add & Remove Item
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    const AddToList = () => {
        list.push(item);
        setList([...list]);
        setItem('');
    }
    const removeItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }



    //Form
    let [FormObj, setFormObj] = useState({fName: "", lName: "", city: "Khulna", gender: "Male"})
    
    const onInput = (property, value) => {
      setFormObj(prevObj=>({
          ...prevObj,
          [property]:value
      }))
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        //PostToTheRestAPI......

        console.log(FormObj)
        alert(JSON.stringify(FormObj));
    }


    return (
        <>
            #Number
            <h1>Number: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={changeNumber}>Decrement</button>
            <br/><br/>


            #SetObj
            <h1>{myObj.key1}</h1>
            <h1>{myObj.key2}</h1>
            <h1>{myObj.key3}</h1>
            <button onClick={changeObjValue}>Change Obj Value</button>
            <br/><br/>


            #Add & Remove Item
            <br/><br/>
            <table>
                <tbody>
                {
                    list.length !== 0 ? (
                        list.map((element, index) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td>{element}</td>
                                    <td>
                                        <button onClick={() => {
                                            removeItem(index)
                                        }} value={item}>Remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        })


                    ) : (<tr></tr>)
                }
                </tbody>
            </table>

            <input
                onChange={(e) => setItem(e.target.value)}
                placeholder="Item"
                value={item}
            />
            <button onClick={AddToList}>Add Item</button>
            <br/><br/>


            #Form
            <div className="container">
                <form onSubmit={onFormSubmit}>
                    <input onChange={(e)=>{onInput("fName",e.target.value)}} placeholder="First Name" value={FormObj.fName}/><br/>
                    <input onChange={(e)=>{onInput("lName",e.target.value)}} placeholder="Last Name" value={FormObj.lName}/><br/>
                    <select onChange={(e)=>{onInput("city",e.target.value)}} value={FormObj.city}>
                        <option value="">Choose city</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Khulna">Khulna</option>
                    </select>
                    <br/>
                    <input onChange={()=>{onInput("gender","Male")}} checked={FormObj.gender==="Male"} type="radio" name="gender"/>Male
                    <input onChange={()=>{onInput("gender","Female")}} checked={FormObj.gender==="Female"} type="radio" name="gender"/>Female
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>


        </>
    )
}

export default App
