import React, {useState} from 'react';
import Helper from "../utiliy/Helper.js";
import toast from "react-hot-toast";
import axios from "axios";
import ButtonSpinner from "./ButtonSpinner.jsx";



const VerifyForm = () => {

    let [submitting, setSubmitting] = useState(false);


    const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let otp = formData.get('otp')
    if(Helper.isEmpty(otp)){
        toast.error("Verification Code Required");
    } else {
        setSubmitting(true)
        let email = sessionStorage.getItem('email')
        //api
        let res = await axios.post(`${Helper.MY_API_BASE}/verify-login`, {UserEmail:email,OTP:otp})
        setSubmitting(false)
        if(res.data['msg']==='success'){
            sessionStorage.removeItem('email');
            sessionStorage.setItem("token",res.data['data'])
            window.location.href="/"
        } else {
            toast.error("Email is already taken or Request Fail!");
        }

    }
}




      return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit} className="p-4">
                            <label  className="form-label">Verification Code</label>
                            <input name="otp" type="text" className="form-control mt-1"/>
                            <button disabled={submitting} type="submit" className="btn btn-danger w-100 mt-2">
                                {submitting?(<ButtonSpinner/>):("Submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default VerifyForm;