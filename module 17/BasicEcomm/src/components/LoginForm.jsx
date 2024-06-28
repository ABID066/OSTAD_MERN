import React, {useState} from 'react';
import Helper from "../utiliy/Helper.js";
import toast from "react-hot-toast";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {


    let [submitting, setSubmitting] = useState(false);
    let navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email')
        if(Helper.isEmpty(email)){
            toast.error("Email is required");
        } else {
            setSubmitting(true)
            //api
            let res = await axios.post(`${Helper.MY_API_BASE}/user-login`, {UserEmail:email})
            setSubmitting(false)
            if(res.data['msg']==='success'){
                toast.success(res.data['data'])
                sessionStorage.setItem('email',email)
                navigate('/verify')
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
                            <label htmlFor="email"  className="form-label">Email address</label>
                            <input name="email" type="email" className="form-control mt-1"/>
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

export default LoginForm;