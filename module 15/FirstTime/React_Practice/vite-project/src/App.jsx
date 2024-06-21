import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import ContactForm from "./component/ContactForm.jsx";
import Footer from "./component/Footer.jsx";
import {Fragment} from "react";
import Body from "./component/Body.jsx";


const App = () => {
    let marks=81;
    return (
        <Fragment>
           <Header/>
            <Hero/>
            <ContactForm/>
            <Footer/>
            <Body/>
            {marks>80?<h1>Brilliant Result</h1>:
            <h1>Avarage Result</h1>}


        </Fragment>
    );
};

export default App;