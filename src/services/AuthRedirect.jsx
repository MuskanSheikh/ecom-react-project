import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthRedirect = () => {
    const user = useSelector((state) => state.auth.user);
  
    debugger
    if (user && user.userId) {
        
        if(user.role === 'USER'){
            return <Navigate to="/product-list" replace />;
        }else{
            return <Navigate to="/create-product" replace />;
        }
        
      } else {
        return <Navigate to="/login-page" replace />;
      }
}

export default AuthRedirect