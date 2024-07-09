import React from 'react';
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <NavBar/>
            <div className="main-container">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default MasterLayout;