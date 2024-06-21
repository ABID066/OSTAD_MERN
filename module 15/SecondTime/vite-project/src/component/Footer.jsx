
const status = true;
const Footer = () => {

    //USING Switch

    switch (status) {
        case true:
            return  <button>Logout bTN from FOOTER</button>
        case false:
            return <button>Login bTN from FOOTER</button>
        default:
            return null
    }


};

export default Footer;