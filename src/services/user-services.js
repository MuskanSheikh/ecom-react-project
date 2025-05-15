import { myAxios } from "./helper"

export const signUp = async (user) => {
    const response = await myAxios.post('api/user/create', user);
    return response.data;
}
export const logIn = async (authResponse) => {
    const response = await myAxios.post('api/auth/login', authResponse);
    console.log("response =>", response);

    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }

    return response.data;
}

export const logOut = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token =>", token);
    if (!token) {
        console.log("No token found in local storage");
        return;
    }
    try {
        const response = await myAxios.post('api/auth/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        localStorage.removeItem("token");

        window.location.href = '/login-page';
    } catch (error) {
        console.error("Logout error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export const profile = async (id) => {
    const response = await myAxios.get(`api/user/get/${id}`);
    return response.data;
}

export const productCreate = async (formData) => {
    const response = await myAxios.post('api/product/create', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
}

export const categoryList = async () => {
    const response = await myAxios.get('api/product/get-category-list');
    return response.data;
}

export const productList = async () => {
    const response = await myAxios.get('api/product/get-product-list');
    return response.data;
}

export const addToCart = async (addToCartDto) => {
    const response = await myAxios.post('api/product/add-to-cart', addToCartDto);
    return response.data;
}

export const getByProductId = async (productId) => {
    const response = await myAxios.get(`api/product/get-by-id/${productId}`);
    return response.data;
}
export const productQtyCount = async (productId, userId) => {
    const response = await myAxios.get(`api/product/get-product-count`, {
        params: {
            productId: productId,
            userId: userId
        }
    });
    return response.data;
}
export const cartCount = async (userId) => {
    const response = await myAxios.get(`api/product/get-cart-count`, {
        params: { userId: userId }
    });
    return response.data;
};
