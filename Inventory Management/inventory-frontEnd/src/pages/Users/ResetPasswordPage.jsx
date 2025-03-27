import { lazy, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const ResetPassword =lazy(() => import('../../components/Users/ResetPassword.jsx'));
const ResetPasswordPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <ResetPassword/>
        </Suspense>
    );
};
export default ResetPasswordPage;