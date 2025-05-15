import React from 'react';
import forgotbg from './../images/forgotPass_bg.jpg'
import { Link } from "react-router-dom";

// w-50 p-3 p-md-5
function Forgot() {
    return (
        <div >
            <section className="vh-100 " style={{ backgroundColor: " #b3f0ff" }}>
                <div className="container h-100 "  >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black  " style={{ borderRadius: "25px", backgroundColor: " #eff5f5" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 border-bottom">
                                            <div className="border-bottom">
                                            <p className="text-center h4 ">Reset password</p>
                                            </div>
                                            
                                            <form className="pt-4 " >
                                                <p >Enter your email address below and we'll send you a link to reset your password.</p>
                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4" >
                                                    <input type="email" id="form1Example13" className="form-control form-control-lg" style={{ border: "3px solid #ccc" }} />
                                                    <label className="form-label" htmlFor="form1Example13">Enter Email</label>
                                                </div>
                                                <div className="border-bottom pt-3 ">
                                                    <button type="submit" className="btn btn-primary btn-lg btn-block" >Generate Link</button>
                                                </div>
                                                {/* <div className="form-outline mb-4" style={{ paddingTop: "20px" }}  >
                                                    <img src={forgotbg} className="img-fluid" alt="Sample image" />
                                                </div> */}
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={forgotbg} className="img-fluid" alt="Sample image" />

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
export default Forgot;