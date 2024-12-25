import React from 'react';
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <NavBar/>
            <div className="main-container">
                {/* eslint-disable-next-line react/prop-types */}
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default MasterLayout;