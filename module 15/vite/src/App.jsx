
import Head from './component/Head';
import Hero from './component/Hero';
import Hero1 from './component/Hero1';


function App() {

  const BtnClick=()=>{
    alert("it's saying *HELLO*")
  }
 
  const itemObj={
    name: "MD Abid",
    age: 24,
    city: "Khulna"
  }

  const PostFormData=(event)=>{
    event.preventDefault();
    alert("submitted")
  }

  return (
    <div>
      <Head title="Learn React" des="jUST description"/>
      
      <Hero item={itemObj}/>
      <Hero1 childBtnClick={BtnClick}/>
      <br/>
      <button onClick={()=>{alert("click me")}}>Submit form APP.JSX</button>
      <br/>
      <br/>
      <form onSubmit={PostFormData}>
        <input placeholder='name'></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
