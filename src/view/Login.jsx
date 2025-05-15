import loginbg from './../images/login_bg.jpg'
import { Link, useNavigate } from "react-router-dom";
import { loginSchemas } from '../schemas';
import { logIn } from '../services/user-services';
import { useFormik } from 'formik';
import { ROLE } from '../common/RoleContant';
import TextInput from '../Component/Input/TextInput';
import '../css/Background.css';
import { jwtDecode } from 'jwt-decode';
import { profile } from '../services/user-services';
import { useDispatch } from 'react-redux';
import {setUserFromToken} from '../redux/AuthSlice';
import {setProfileData} from '../redux/AuthSlice';


const initialValues = {
    userName: "",
    password: ""
}

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchemas,
        onSubmit: (values, actions) => {
            console.log("login values:", values)
            console.log(actions);

            logIn(values).then((resp) => {
                const token = JSON.parse(localStorage.getItem("token"));

                const decoded = jwtDecode(token);
                const roleString = Array.isArray(decoded.role) ? decoded.role[0].toString() : '';
                const role = roleString.replace(/^ROLE_/, "");

                dispatch(setUserFromToken({
                    userId: decoded.userId,
                    email: decoded.sub,
                    role: role,
                }));

                profile(decoded.userId).then((data) => {
                    dispatch(setProfileData(data));
        
                    if (role === ROLE.USER) {
                        navigate("/product-list");
                    } else {
                        navigate("/create-product");
                    }
                });

            }).catch((error) => {
                console.log("================>",error);
                alert("Login failed.");
            })
            actions.resetForm();
        }
    });
    return (
        <div >
            <section className="vh-100 d-flex align-items-center justify-content-center background">
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
                                                <div className=" mb-4">
                                                    <TextInput className="form-control" type="text" name="userName" label="User Name" placeholder="Email" value={values.userName} onChange={handleChange}
                                                        onBlur={handleBlur} error={errors.userName} touched={touched.userName} />
                                                </div>
                                                <div className=" mb-4">
                                                    <TextInput className="form-control" type="password" name="password" label="Password" placeholder="Password" value={values.password} onChange={handleChange}
                                                        onBlur={handleBlur} error={errors.password} touched={touched.password} />
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