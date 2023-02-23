import React from 'react';
import loginbg from './../images/login_bg.jpg'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div >
            <section className="vh-100" style={{ backgroundColor: " #b3f0ff" }}>
                <div className="container h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px", backgroundColor: " #eff5f5" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                             <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>
                                            <form>
                                                <p className='text-muted'>Don't have an accout.. ?<Link to="/signin-page"> Signin </Link> here. </p>
                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form1Example13" className="form-control form-control-lg" style={{ border: "3px solid #ccc" }} />
                                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                                </div>

                                                {/* <!-- Password input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form1Example23" className="form-control form-control-lg" style={{ border: "3px solid #ccc" }} />
                                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                                </div>

                                                <div className="d-flex justify-content-around align-items-center mb-4">
                                                    {/* <!-- Checkbox --> */}
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                                    </div>
                                                    <Link to="/forgot-password-page">Forgot password?</Link>
                                                </div>

                                                {/* <!-- Submit button --> */}
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                                {/* <div className="divider d-flex align-items-center my-4">
                                                    <p className="text-center fw-bold mx-3 mb-0 text-muted" >OR</p>
                                                </div>

                                                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                                                    role="button">
                                                    <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                                </a>
                                                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                                                    role="button">
                                                    <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}

                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={loginbg} className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Login;