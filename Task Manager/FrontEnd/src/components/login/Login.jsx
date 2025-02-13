import {Fragment} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className="text-center">Sign In</h4>
                                <br/>
                                <input  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button  className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr/>
                                <div className="text-center w-100 mt-3">

                                    <span>
                                        <Link className="text-center animated fadeInUp" to="/registration">Sign Up </Link>
                                        <br/>
                                        <Link className="text-center animated fadeInUp" to="/forgetpass">Forget Password</Link>
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