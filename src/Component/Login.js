import React from 'react';
import loginbg from './../images/login_bg.jpg'
import { Link ,useNavigate} from "react-router-dom";
import { loginSchemas } from '../schemas';
import { logIn } from '../services/user-services';
import { useFormik } from 'formik';

const initialValues = {
    userName: "",
    password: ""
}

function Login() {
    const navigate = useNavigate();

    const { values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchemas,
        onSubmit: (values, actions) => {
            console.log("login values:", values)
            console.log(actions);

            logIn(values).then((resp) => {
                navigate("/profile");
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
                                                <p className='text-muted'>Don't have an accout.. ?<Link to="/register"> Signin </Link> here. </p>
                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form1Example13" className={(errors.userName && touched.userName ? "input-error" : "")}
                                                        style={{ border: "3px solid #ccc" }} value={values.userName} name="userName" onChange={handleChange} onBlur={handleBlur}
                                                        placeholder="email"  size="25"/>
                                                    {errors.userName && touched.userName && <p className='error'>{errors.userName}</p>}
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