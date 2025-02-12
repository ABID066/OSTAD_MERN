import {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NewTaskPage from "./pages/NewTaskPage.jsx";
import InProgressPage from "./pages/InProgressPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import Page404 from "./pages/Page404.jsx";
import ForgetpassPage from "./pages/ForgetpassPage.jsx";
import FullscreenLoader from "./components/masterLayout/FullScreenLoader.jsx";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<DashboardPage/>} />
                    <Route exact path="/create" element={<CreatePage/>} />
                    <Route exact path="/all" element={<NewTaskPage/>} />
                    <Route exact path="/progress" element={<InProgressPage/>} />
                    <Route exact path="/completed" element={<CompletedPage/>} />
                    <Route exact path="/canceled" element={<CanceledPage/>} />
                    <Route exact path="/profile" element={<ProfilePage/>} />
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/registration" element={<RegistrationPage/>} />
                    <Route exact path="/forgetpass" element={<ForgetpassPage/>} />
                    <Route exact path="*" element={<Page404/>} />
                </Routes>
            </BrowserRouter>
            <FullscreenLoader/>
        </Fragment>
    );
};

export default App;