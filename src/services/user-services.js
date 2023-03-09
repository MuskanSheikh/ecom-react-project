import { myAxios } from "./helper";

export const signUp=async (user) => {
    const response = await myAxios.post('/api/create', user);
    return response.data;
}
export const logIn = async (authResponse) => {
    const response = await myAxios.post('api/v1/auth/login',authResponse);
    return response.data;
}