
import { useParams } from 'react-router-dom';
import Menu from './../component/Menu';

const ProfilePage = () => {

    let {fbID,youtubeID}=useParams();

    return (
        <div>
            <Menu/>
            <p>Facebook ID: {fbID}</p>
            <p>YouTub ID: {youtubeID}</p>
             <h1>This is PROFILE Page</h1>
        </div>
    );
};

export default ProfilePage;