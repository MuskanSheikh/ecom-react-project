import * as Yup from "yup";

const passRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 character , 1 uppper case , 1 lower case, 1 numeric value

export const signUpSchemas = Yup.object({
    firstName: Yup.string().min(2).max(15).required("first name is required"),
    lastName: Yup.string().min(2).max(15).required("last name is required"),
    email: Yup.string().email("please enter a valid email").required("email is required"),
    phone: Yup.string().max(10).required("phone number is required"),
    password: Yup.string().min(5).max(16)
        .matches(passRegx, { "message": "min 5 character , 1 uppper case , 1 lower case, 1 number" })
        .required("password is required"),
    role: Yup.string().required("Role is required")
});

export const loginSchemas = Yup.object({
    userName: Yup.string().email("please enter a valid email").required("email is required"),
    password: Yup.string().min(5).max(16)
        .matches(passRegx, { "message": "min 5 character , 1 uppper case , 1 lower case, 1 number" })
        .required("password is required"),
})

export const productSchemas = Yup.object({
    productName: Yup.string().min(2).max(25).required("Product Name is required"),
    categoryId: Yup.string().required("Category is required"),
    description: Yup.string().min(2).max(500).required("Description is required"),
    quantity: Yup.string().min(6).max(1).required("quantity is required"),
    oldPrice: Yup.string().max(6).required("Old Price is required"),
    newPrice: Yup.string().max(6).required("New Price is required"),
    image: Yup.mixed()
        .required('Product image is required')
        .test('fileSize', 'File too large', value => !value || value.size <= 2 * 1024 * 1024)
        .test('fileType', 'Unsupported file type', value => !value || ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)),
})