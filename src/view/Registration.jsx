import signupImg from './../images/signup_bg.jpg'
import { Link, useNavigate } from "react-router-dom";
import { signUp } from '../services/user-services';
import { useFormik } from 'formik';
import { signUpSchemas } from '../schemas';
import { ROLE } from '../common/RoleContant';
import TextInput from '../Component/Input/TextInput';
import InputRadio from '../Component/Input/InputRadio';
import '../css/Background.css';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: ""
};

const roleOptions = [
    { label: 'User', value: ROLE.USER },
    { label: 'Admin', value: ROLE.ADMIN_USER }
];

function Registration() {
    const navigate = useNavigate();

    const { values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchemas,
        onSubmit: (values, actions) => {
            console.log("registration values:", values)
            console.log(actions);

            signUp(values).then((resp) => {
                console.log("value->", resp.status)
                if (resp.status) {
                    navigate("/login-page")
                } else {
                    alert("user already exist");
                }
            }).catch((error) => {
                alert("user registration failed")
            })
            actions.resetForm();
        }
    });
    console.log(errors);

    return (
        <div >
            <section className="vh-100 background" >
                <div className="container h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px", backgroundColor: " #eff5f5" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <p className="text-muted" style={{ paddingLeft: "40px" }}> Already have an account?<Link to="/login-page"> Login </Link> here.</p>

                                                <div className="d-flex flex-row align-items-center mb-4 ">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className=" flex-fill mb-0 ">
                                                        <TextInput className="form-control" type="text" name="firstName" label="First Name" placeholder="First Name" value={values.firstName} onChange={handleChange}
                                                            onBlur={handleBlur} error={errors.firstName} touched={touched.firstName} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className=" flex-fill mb-0">
                                                        <TextInput className="form-control" type="text" name="lastName" label="Last Name" placeholder="Last Name" value={values.lastName} onChange={handleChange}
                                                            onBlur={handleBlur} error={errors.lastName} touched={touched.lastName} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className=" flex-fill mb-0">
                                                        <TextInput className="form-control" type="text" name="email" label="Email" placeholder="Email" value={values.email} onChange={handleChange}
                                                            onBlur={handleBlur} error={errors.email} touched={touched.email} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className=" flex-fill mb-0">
                                                        <TextInput className="form-control" type="tel" name="phone" label="Phone" placeholder="Phone" value={values.phone} onChange={handleChange}
                                                            onBlur={handleBlur} error={errors.phone} touched={touched.phone} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className=" flex-fill mb-0">
                                                        <TextInput className="form-control" type="password" name="password" label="Password" placeholder="Password" value={values.password} onChange={handleChange}
                                                            onBlur={handleBlur} error={errors.password} touched={touched.password} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user-tag fa-lg me-3 fa-fw"></i>
                                                    <div className=" flex-fill mb-0">
                                                        {roleOptions.map((role)=> (
                                                            <InputRadio type="radio" name="role" label={role.label} placeholder="role" value={role.value} onChange={handleChange}
                                                            checked={values.role === role.value}
                                                            onBlur={handleBlur} error={errors.role} touched={touched.role} />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-lg">Register</button>
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
