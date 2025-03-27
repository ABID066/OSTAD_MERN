import {Fragment, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/FormHelper.js";
import {LoginRequest} from "../../APIRequest/UserAPIRequest.js";

const Login = () => {

    let emailRef = useRef();
    let passwordRef= useRef();

    const navigate = useNavigate();

    const  SubmitLogin=async ()=>{
        let email=emailRef.current?.value;
        let password=passwordRef.current?.value;
        if(IsEmpty(email)){
            ErrorToast("Email address required!")
        }
        else if(IsEmail(email)){
            ErrorToast("Invalid Email address!")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password required!")
        }
        else {
            const result = await LoginRequest(email, password);
            if (result === true) {
                navigate("/");
            }
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body text-start">
                                <h3 className="text-center">SIGN IN</h3>
                                <br/>
                                <label>Email address</label>
                                <input ref={emailRef} placeholder="User Email"
                                       className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <label>Password</label>
                                <input ref={passwordRef} placeholder="User Password"
                                       className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={SubmitLogin} className="btn btn-success w-100 animated ">Next</button>
                                <div className="float-end mt-3">
                                    <span>
                                        <Link className="text-center ms-3 h6" to="/Registration">Sign Up</Link>
                                        <span className="ms-2 "> |</span>
                                        <Link className="text-center ms-3 h6"
                                              to="/forget-password">Forget Password</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;