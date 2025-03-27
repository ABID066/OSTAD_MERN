import {Fragment} from 'react';
import {getToken} from "./helper/SessionHelper.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage.jsx";
import BrandListPage from "./pages/Brand/BrandListPage.jsx";
import CategoryCreateUpdatePage from "./pages/Category/CategoryCreateUpdatePage.jsx";
import CategoryListPage from "./pages/Category/CategoryListPage.jsx";
import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage.jsx";
import CustomerListPage from "./pages/Customer/CustomerListPage.jsx";
import ExpenseTypeCreateUpdatePage from "./pages/ExpenseType/ExpenseTypeCreateUpdatePage.jsx";
import ExpenseTypeListPage from "./pages/ExpenseType/ExpenseTypeListPage.jsx";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage.jsx";
import ExpenseListPage from "./pages/Expense/ExpenseListPage.jsx";
import ProductCreateUpdatePage from "./pages/Product/ProductCreateUpdatePage.jsx";
import ProductListPage from "./pages/Product/ProductListPage.jsx";
import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreateUpdatePage.jsx";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage.jsx";
import ReturnCreateUpdatePage from "./pages/Return/ReturnCreateUpdatePage.jsx";
import ReturnListPage from "./pages/Return/ReturnListPage.jsx";
import SalesCreateUpdatePage from "./pages/Sales/SalesCreateUpdatePage.jsx";
import SalesListPage from "./pages/Sales/SalesListPage.jsx";
import SupplierCreateUpdatePage from "./pages/Supplier/SupplierCreateUpdatePage.jsx";
import SupplierListPage from "./pages/Supplier/SupplierListPage.jsx";
import PurchaseReportPage from "./pages/Report/PurchaseReportPage.jsx";
import ReturnReportPage from "./pages/Report/ReturnReportPage.jsx";
import SaleReportPage from "./pages/Report/SaleReportPage.jsx";
import ExpenseReportPage from "./pages/Report/ExpenseReportPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import ProfilePage from "./pages/Users/ProfilePage.jsx";
import Page404 from "./pages/NotFound/Page404.jsx";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader.jsx";
import LoginPage from "./pages/Users/LoginPage.jsx";
import RegistrationPage from "./pages/Users/RegistrationPage.jsx";
import ForgetPassPage from "./pages/Users/ForgetPassPage.jsx";
import VerifyOTPPage from "./pages/Users/VerifyOTPPage.jsx";
import ResetPasswordPage from "./pages/Users/ResetPasswordPage.jsx";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    return getToken() ? children : <Navigate to="/login" replace />;
};


const App = () => {

        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/BrandCreateUpdatePage" element={<ProtectedRoute><BrandCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/BrandListPage" element={<ProtectedRoute><BrandListPage /></ProtectedRoute>}/>

                        <Route exact path="/CategoryCreateUpdatePage" element={<ProtectedRoute><CategoryCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/CategoryListPage" element={<ProtectedRoute><CategoryListPage /></ProtectedRoute>}/>

                        <Route exact path="/CustomerCreateUpdatePage" element={<ProtectedRoute><CustomerCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/CustomerListPage" element={<ProtectedRoute><CustomerListPage /></ProtectedRoute>}/>

                        <Route exact path="/ExpenseTypeCreateUpdatePage" element={<ProtectedRoute><ExpenseTypeCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/ExpenseTypeListPage" element={<ProtectedRoute><ExpenseTypeListPage /></ProtectedRoute>}/>

                        <Route exact path="/ExpenseCreateUpdatePage" element={<ProtectedRoute><ExpenseCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/ExpenseListPage" element={<ProtectedRoute><ExpenseListPage /></ProtectedRoute>}/>
                        <Route exact path="/ProductCreateUpdatePage" element={<ProtectedRoute><ProductCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/ProductListPage" element={<ProtectedRoute><ProductListPage /></ProtectedRoute>}/>

                        <Route exact path="/PurchaseCreateUpdatePage" element={<ProtectedRoute><PurchaseCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/PurchaseListPage" element={<ProtectedRoute><PurchaseListPage /></ProtectedRoute>}/>

                        <Route exact path="/ReturnCreateUpdatePage" element={<ProtectedRoute><ReturnCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/ReturnListPage" element={<ProtectedRoute><ReturnListPage /></ProtectedRoute>}/>

                        <Route exact path="/SalesCreateUpdatePage" element={<ProtectedRoute><SalesCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/SalesListPage" element={<ProtectedRoute><SalesListPage /></ProtectedRoute>}/>

                        <Route exact path="/SupplierCreateUpdatePage" element={<ProtectedRoute><SupplierCreateUpdatePage /></ProtectedRoute>}/>
                        <Route exact path="/SupplierListPage" element={<ProtectedRoute><SupplierListPage /></ProtectedRoute>}/>

                        <Route exact path="/PurchaseReportPage" element={<ProtectedRoute><PurchaseReportPage /></ProtectedRoute>}/>
                        <Route exact path="/ReturnReportPage" element={<ProtectedRoute><ReturnReportPage /></ProtectedRoute>}/>
                        <Route exact path="/SaleReportPage" element={<ProtectedRoute><SaleReportPage /></ProtectedRoute>}/>
                        <Route exact path="/ExpenseReportPage" element={<ProtectedRoute><ExpenseReportPage /></ProtectedRoute>}/>

                        <Route exact path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}/>
                        <Route exact path="/Profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>

                        <Route path="*" element={<ProtectedRoute><Page404/></ProtectedRoute>}/>



                        <Route path="/" element={<Navigate to="/Login" replace />}/>
                        <Route exact path="/Login" element={<LoginPage />}/>
                        <Route exact path="/Registration" element={<RegistrationPage />}/>
                        <Route exact path="/forget-password" element={<ForgetPassPage/>}/>
                        <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                        <Route exact path="/ResetPassword" element={<ResetPasswordPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );


};

export default App;
