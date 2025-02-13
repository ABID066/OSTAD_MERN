import {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";

const Profile = lazy(() => import("../components/Profile/Profile.jsx"));

const ProfilePage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Profile/>
            </Suspense>
        </Fragment>
    );
};

export default ProfilePage;