import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from "../../helper/FormHelper.js";
import { RegistrationRequest } from "../../APIRequest/APIRequest.js";

const Registration = () => {

    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const onRegistration = async () => {
        let email = emailRef.current.value;
        let firstName = firstNameRef.current.value;
        let lastName = lastNameRef.current.value;
        let mobile = mobileRef.current.value;
        let password = passwordRef.current.value;

        // ✅ Improved Validations
        if (IsEmpty(email)) {
            ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required!");
        } else if (IsEmpty(firstName)) {
            ErrorToast("First Name Required!");
        } else if (IsEmpty(lastName)) {
            ErrorToast("Last Name Required!");
        } else if (IsEmpty(mobile)) {
            ErrorToast("Mobile Number Required!");
        } else if (!IsMobile(mobile)) {
            ErrorToast("Valid Mobile Number Required!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required!");
        } else if (password.length < 6) {
            ErrorToast("Password must be at least 6 characters!");
        } else {
            const result = await RegistrationRequest(email, firstName, lastName, mobile, password, "");
            if (result === true) {
                navigate("/login");
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4 className="text-center">Sign Up</h4>
                            <br />
                            <input ref={emailRef} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                            <br />
                            <input ref={firstNameRef} placeholder="First Name" className="form-control animated fadeInUp" type="text" />
                            <br />
                            <input ref={lastNameRef} placeholder="Last Name" className="form-control animated fadeInUp" type="text" />
                            <br />
                            <input ref={mobileRef} placeholder="Mobile" className="form-control animated fadeInUp" type="tel" />
                            <br />
                            <input ref={passwordRef} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                            <br />
                            <button onClick={onRegistration} className="btn w-100 float-end btn-primary animated fadeInUp">
                                Next
                            </button>
                            <div className="text-center w-100">
                                <Link className="text-center" to="/login">
                                    Sign In
                                </Link>
                                <br />
                                <Link className="text-center" to="/forgetpass">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
