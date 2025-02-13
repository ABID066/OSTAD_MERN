import React from 'react';
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4 className="text-center">Sign Up</h4>
                            <br/>
                            <input
                                placeholder="User Email"
                                className="form-control animated fadeInUp"
                                type="email"
                            />
                            <br/>
                            <input
                                placeholder="First Name"
                                className="form-control animated fadeInUp"
                                type="text"
                            />
                            <br/>
                            <input
                                placeholder="Last Name"
                                className="form-control animated fadeInUp"
                                type="text"
                            />
                            <br/>
                            <input
                                placeholder="Mobile"
                                className="form-control animated fadeInUp"
                                type="tel"
                            />
                            <br/>
                            <input
                                placeholder="User Password"
                                className="form-control animated fadeInUp"
                                type="password"
                            />
                            <br/>
                            <button className="btn w-100 float-end btn-primary animated fadeInUp">
                                Next
                            </button>
                            <div className="text-center w-100">
                                <Link className="text-center" to="/login">
                                    Sign In
                                </Link>
                                <br/>
                                <Link className="text-center" to="/forgetpass">
                                    Forget Password
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