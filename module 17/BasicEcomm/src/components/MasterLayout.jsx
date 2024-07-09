
import AppNavBar from "./AppNavBar.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <div className="bg-light">
            <AppNavBar/>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer/>
        </div>
    );
};

export default MasterLayout;
