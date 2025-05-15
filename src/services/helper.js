import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


export const myAxios = axios.create({
    baseURL: "http://localhost:9093",
});

myAxios.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const isExpired = decoded.exp * 1000 < Date.now();

                if (isExpired) {
                    console.warn("Token expired. Redirecting to login.");
                    localStorage.removeItem('token');

                    window.location.href = '/login-page';
                    return Promise.reject(new Error("Token expired"));
                }

                config.headers.Authorization = `Bearer ${token}`;
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem('token');
                window.location.href = '/login-page';
                return Promise.reject(error);
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
)