import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import NotFound from "./pages/NotFound"
import ProfilePage from "./pages/ProfilePage"



function App() {


  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id/:name" element={<ProductPage/>}/>
        <Route path="/profile/:fbID/:youtubeID" element={<ProfilePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </HashRouter>

    </div>
  )
}

export default App
