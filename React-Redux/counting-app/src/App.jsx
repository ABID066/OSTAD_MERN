
import CounterPage from "./pages/CounterPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CounterPage/>} />
                <Route path="/my-to-do" element={<TodoPage/>} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;