import { myAxios } from "./helper";

export const signUp=async (user) => {
    const response = await myAxios.post('/api/user/create', user);
    return response.data;
}