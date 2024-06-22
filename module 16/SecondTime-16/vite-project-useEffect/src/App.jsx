// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomePage from "./pages/HomePage.jsx";


function App() {

  useEffect(()=>{
    console.log("hello heloo")
  },[4,5,4])



  let [data, setData] = useState({})
  useEffect(()=>{
    fetch("https://dummyjson.com/products/1")
      .then(response => response.json())
        .then(json =>setData(json))
  })

  let [data1, setData1] = useState({})
  useEffect(() => {
    (async ()=>{
      let response =await fetch("https://dummyjson.com/products/1")
      let json = await response.json()
      setData1(json)
    })()
  }, []);

  return (
    <div>
      {JSON.stringify(data, null, 2)}

      <h1>Big line</h1>

      {JSON.stringify(data1, null, 2)}

      <HashRouter>
        <Routes>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/" element={<HomePage/>} />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/product/:id/:name" element={<ProductPage />} />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/profile" element={<ProfilePage />} />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <BrowserRouter>
        <Routes>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/" element={<HomePage/>} />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/product" element={<ProductPage />} />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="/profile" element={<ProfilePage />} />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
