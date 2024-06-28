

const Header = (props) => {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{props.title}</h1>
            <ul>
                <li>Home</li>
                <li>others</li>
                <li>fgds</li>
                <li>fgfd</li>
            </ul>
        </div>
    );
};

export default Header;