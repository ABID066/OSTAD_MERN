import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import ContactForm from "./component/ContactForm.jsx";
import Footer from "./component/Footer.jsx";


    const LoginStatusBtn=(status)=>{
        if(status){
            return <button onClick={()=>{{alert("ok")}}}>Logout Btn</button>
        } else {
            return <button onClick={()=>{{alert("ok")}}}>Login Btn</button>
        }
    }
    const PostFormData=(event)=>{
        event.preventDefault();
    }

const App = () => {

    let marks =90;
    const city= ['Dhaka','Khulna','Delhi','Kolkata']

    const itemsObj= {
        name: "md abid",
        age: 27,
        city: "Khulna"
    }
    const btnClick=()=>{
        alert("sAY HELLO!! people")
    }



    return (
        <div>
            <h1>Learning React</h1>
            <h1>{new Date().getTime()}</h1>
            <Header title="Passing props in the name of title"/>
            <Hero items={itemsObj} childBtnClick={btnClick}/>
            <ContactForm/>
            <Footer />

            <br/><br/>

            #In line condition
            {marks > 80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1>}

            #IF-Else condition
            {(
                () => {
                    if (marks <= 90 && marks > 80) {
                        return <h1>AGAIN SAME and A+</h1>
                    } else {
                        return <h1>A</h1>
                    }
                }
            )()}

            #LOOP using Map
            <ul>
                {
                    city.map((item, i) => {
                        return <li key={i.toString()}>{item}</li>
                    })
                }
            </ul>


            #Conditional Rendering
            <div>
                <h1>Login Status</h1>
                {LoginStatusBtn(true)}
            </div>


        <form onSubmit={PostFormData}>
            <input placeholder="name"/>
            <button type="submit">Submit</button>
        </form>

        </div>
    );
};

export default App;