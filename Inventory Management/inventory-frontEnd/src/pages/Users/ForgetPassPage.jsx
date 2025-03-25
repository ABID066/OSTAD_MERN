import {lazy, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const SendOTP =lazy(() => import('../../components/Users/ForgetPass.jsx'));
const ForgetPassPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <SendOTP/>
        </Suspense>
    );
};

export default ForgetPassPage;