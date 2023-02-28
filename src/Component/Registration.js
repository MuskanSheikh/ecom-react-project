import signupImg from './../images/signup_bg.jpg'
import { Link } from "react-router-dom";
import { signUp } from '../services/user-services';
import { useFormik } from 'formik';
import { signUpSchemas } from '../schemas';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
};

function Registration() {
    const {values,handleSubmit,errors,handleChange,handleBlur} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchemas,
        onSubmit: (values) =>{
            console.log("registration values:", values)
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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <p className="text-muted" style={{ paddingLeft: "40px" }}> Already have an account..?<Link to="/login-page"> Login </Link> here.</p>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="fname" value={values.firstName} name="firstName" onChange={handleChange}
                                                            className="form-control" style={{ border: "3px solid #ccc" }} />
                                                        <label className="form-label" htmlFor="fnameFor">First Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="lname" value={values.lastName} name="lastName" onChange={handleChange}
                                                            className="form-control" style={{ border: "3px solid #ccc" }} />
                                                        <label className="form-label" htmlFor="lnameFor">Last Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" value={values.email} name="email" onChange={handleChange}
                                                            className={`form-control` + (errors.email ? "input-error" :"")} style={{ border: "3px solid #ccc" }} />
                                                        <label className="form-label" htmlFor="emailFor">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="phone" value={values.phone} name="phone" onChange={handleChange}
                                                            className="form-control" style={{ border: "3px solid #ccc" }} />
                                                        <label className="form-label" htmlFor="phoneFor">Phone Number</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="password" value={values.password} name="password"
                                                            onChange={handleChange} className="form-control" style={{ border: "3px solid #ccc" }} />
                                                        <label className="form-label" htmlFor="passwordFor">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type ="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>


                                            </form>
                                        </div>

                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={signupImg} className="img-fluid" alt="Sample image" />

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
export default Registration;
