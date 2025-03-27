import {Fragment, useRef} from 'react';
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "../../helper/FormHelper.js";
import {useNavigate} from "react-router-dom";
import {VerifyEmailRequest} from "../../APIRequest/UserAPIRequest.js";

const ForgetPass = () => {
    let emailRef = useRef();
    let navigate = useNavigate();

    const VerifyEmail = async () => {
        let email = emailRef.current?.value;

        if (IsEmpty(email)) {
                ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
                ErrorToast("Valid Email Address Required!");
        } else {
            let result = await VerifyEmailRequest(email);
            if (result === true) {
                SuccessToast("6 Digit Code sent to your email!");
                navigate("/VerifyOTP");
                }
            }
        };

    return (
        <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90">
                            <div className="card-body text-start">
                                <h4 className="text-center">PASSWORD RECOVERY</h4>
                                <hr/>
                                <label className="pt-3">Your email address</label>
                                <input  ref={emailRef}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <button onClick={VerifyEmail} className="btn w-100 btn-success">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ForgetPass;