import * as Yup from "yup";

const passRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 character , 1 uppper case , 1 lower case, 1 numeric value

export const signUpSchemas = Yup.object({
    firstName: Yup.string().min(2).max(15).required("first name is required"),
    lastName: Yup.string().min(2).max(15).required("last name is required"),
    email: Yup.string().email("please enter a valid email").required("email is required"),
    phone: Yup.string().max(10).required("phone number is required"),
    password: Yup.string().min(5).max(16)
    .matches(passRegx, {"message":"min 5 character , 1 uppper case , 1 lower case, 1 number"})
    .required("password number is required"),
});

export const loginSchemas = Yup.object({
    userName: Yup.string().email("please enter a valid email").required("email is required"),
    password: Yup.string().min(5).max(16)
    .matches(passRegx, {"message":"min 5 character , 1 uppper case , 1 lower case, 1 number"})
    .required("password number is required"),
})