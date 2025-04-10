import {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../components/masterLayout/LazyLoader.jsx";
import MasterLayout from "../components/masterLayout/Master-layout.jsx";



const Profile = lazy(() => import("../components/Profile/Profile.jsx"));

const ProfilePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Profile/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProfilePage;