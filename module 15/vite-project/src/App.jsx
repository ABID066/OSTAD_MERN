/*const LoginStatusBtn=(status)=>{
  if(status){
    return <button>Logout btn</button>
  }
  else{
    return <button>Login Btn</button>
  }
}*/

function App() {

  let isLoggedIn= false;
  return(
    //Logicall AND AND
    <div>
      <h1>Login Status</h1>
      {isLoggedIn && <button>Logout</button>}
    </div>
  )

 // let marks=72;
 // let mark=81;
 // const city=['Dhaka', 'Khulna', 'London','NewWork city', 'Sylhet']
  

 /* 
    return(
      <div>
      <h1>LOGIN STATUS</h1>
      {LoginStatusBtn(false)}
      
      </div>
    )
    */

  /*

  return (
    <div>
      {
      //Immidiatly Invoked function
      (  
        ()=>{
            if (marks>=80 && marks<=100){
                return<h1>A+</h1>
            }
            else if (marks>=70 && marks<=80){
                return<h1>A</h1>
            }
            else if (marks>=60 && marks<=70){
                return<h1>-A</h1>
            }
            else
            return<h1>F</h1>

            



        }

    )()
    
    }
    <ul>
      {
        city.map((item, i)=>{
          return <li key={i.toString()}>{item}</li>
        })
      }
    </ul>

      //Ternary Operator
    {
      mark>80?<h1>Brilliant Result</h1>
      :
      <h1>Average Result</h1>
    } 
    </div>
  )*/
}

export default App
