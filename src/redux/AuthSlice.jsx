import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

const initialState = {
    user: null,
    profileData: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUserFromToken: (state, action) => {
            const token = action.payload;
            try {
                const decoded = jwtDecode(token);
                const isExpired = decoded.exp * 1000 < Date.now();
                if (isExpired) {
                    localStorage.removeItem("token");
                    state.user = null;
                } else {
                    const roleString = Array.isArray(decoded.role) ? decoded.role[0].toString() : '';
                    state.user = {
                        userId: decoded.userId,
                        email: decoded.sub,
                        role: roleString.replace(/^ROLE_/, "")
                    };
                }
            } catch (err) {
                console.error("Invalid token", err);
                state.user = null;
            }
        },
        setProfileData: (state, action) => {
            state.profileData = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            state.profileData = null;
            localStorage.removeItem("token");
        },
    }
})

export const {setUserFromToken,setProfileData,clearUser} = AuthSlice.actions;
export default AuthSlice.reducer;