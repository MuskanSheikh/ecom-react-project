import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthProviderWrapper = ({children}) => {
    const navigate = useNavigate();
    return <AuthProvider navigate={navigate}>{children}</AuthProvider>;
}

export default AuthProviderWrapper;