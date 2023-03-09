import React from 'react';
import loginbg from './../images/login_bg.jpg'
import { Link } from "react-router-dom";
import { loginSchemas } from '../schemas';
import { logIn } from '../services/user-services';
import { useFormik } from 'formik';

const initialValues = {
    email: "",
    password: ""
}

function Login() {

    const { values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchemas,
        onSubmit: (values, actions) => {
            console.log("login values:", values)
            console.log(actions);

            logIn(values).then((resp) => {
                alert("login successsully");
            }).catch((error) => {
                alert("userName or password is incorrect")
            })
            actions.resetForm();
        }
    });
    console.log(errors);

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
                                            <form onSubmit={handleSubmit}>
                                                <p className='text-muted'>Don't have an accout.. ?<Link to="/signin-page"> Signin </Link> here. </p>
                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form1Example13" className={(errors.email && touched.email ? "input-error" : "")}
                                                        style={{ border: "3px solid #ccc" }} value={values.email} name="email" onChange={handleChange} onBlur={handleBlur}
                                                        placeholder="email"  size="25"/>
                                                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                                                </div>

                                                {/* <!-- Password input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form1Example23" className={(errors.password && touched.password ? "input-error" : "")}
                                                        style={{ border: "3px solid #ccc" }} value={values.password} name="password" onChange={handleChange} onBlur={handleBlur}
                                                        placeholder="password"  size="25"/>
                                                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                                                </div>
                                                <div >
                                                    <Link to="/forgot-password-page">Forgot password?</Link>
                                                </div>

                                                <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

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

                                                {/* <div className="d-flex justify-content-around align-items-center mb-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                                    </div>
                                                    <Link to="/forgot-password-page">Forgot password?</Link>
                                                </div>  */}

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