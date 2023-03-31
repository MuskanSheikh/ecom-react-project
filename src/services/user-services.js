import { myAxios } from "./helper";

export const signUp=async (user) => {
    const response = await myAxios.post('/api/create', user);
    return response.data;
}
export const logIn = async (authResponse) => {
    await myAxios.post('api/v1/auth/login',authResponse).then((response) => {
        if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data;
    });
}

export const profile = async (id) =>{
    const response = await myAxios.get(`user-api/get/${id}`);
    return response.data;
}