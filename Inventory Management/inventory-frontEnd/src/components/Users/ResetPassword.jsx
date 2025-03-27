import {Fragment, useRef} from 'react';
import {getEmail, getOTP, removeSessions} from "../../helper/SessionHelper.js";
import {ErrorToast, IsEmpty, SuccessToast} from "../../helper/FormHelper.js";
import {ResetPasswordRequest} from "../../APIRequest/UserAPIRequest.js";

const ResetPassword = () => {

    const PasswordRef = useRef()
    const ConfirmPasswordRef = useRef()


    const ResetPass = async () => {
        let password = PasswordRef.current?.value;
        let confirmPassword = ConfirmPasswordRef.current?.value;

        if(IsEmpty(password)) {
            ErrorToast("Password Required!");
        } else if(password.length < 6) {
            ErrorToast("Password must be at least 6 characters!");
        } else if(IsEmpty(confirmPassword)) {
            ErrorToast("Confirm Password Required!");
        } else if(password!==confirmPassword) {
            ErrorToast("Both must be same password");
        } else {
            let result = await ResetPasswordRequest(getEmail(),getOTP(),password);
            if (result === true) {
                SuccessToast("Password Reset Successful!");
                removeSessions();
            }
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-start col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4 className="text-center">SET NEW PASSWORD</h4>
                                <br/>
                                <label>Your email address</label>
                                <input readOnly={true} value={getEmail()} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <label>New Password</label>
                                <input  ref={PasswordRef} placeholder="New Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <label>Confirm Password</label>
                                <input ref={ConfirmPasswordRef} placeholder="Confirm Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={ResetPass} className="btn w-100 btn-success">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ResetPassword;