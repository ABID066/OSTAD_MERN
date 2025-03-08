import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader.jsx";
import ProductList from "./pages/Product-List.jsx";



const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProductList  />}  />
                </Routes>
            </BrowserRouter>
            <FullscreenLoader/>
        </Fragment>
    );
};

export default App;