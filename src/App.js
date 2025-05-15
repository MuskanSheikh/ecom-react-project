import "./App.css";
import Login from "./view/Login";
import Register from "./view/Registration";
import Forgot from "./view/Forgot";
import ProductList from "./view/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import CreateProduct from "./view/CreateProduct";
import ProductView from "./view/ProductView";
import store from "./redux/store";
import { Provider } from "react-redux";
import AuthRedirect from "./services/AuthRedirect";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUserFromToken,setProfileData } from "./redux/AuthSlice";
import { jwtDecode } from "jwt-decode";
import { profile } from "./services/user-services";
import ShoppingCart from "./view/ShoppingCart";
import Footer from "./view/Footer";

function AuthLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token"); // No JSON.parse needed anymore
    if (token) {
      dispatch(setUserFromToken(token));
      const decoded = jwtDecode(token);
      profile(decoded.userId)
        .then((data) => {
          dispatch(setProfileData(data));
        })
        .catch((err) => console.error("Profile fetch error", err));
    }
  }, [dispatch]);

  return null;
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <AuthLoader />
          <Navbar />
          <Routes>
            <Route path="/" element={<AuthRedirect />}></Route>
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login-page" element={<Login />} />
            <Route path="/forgot-password-page" element={<Forgot />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/product-detail/:productId" element={<ProductView />} />
            <Route path="/shopping-cart" element={<ShoppingCart/>}></Route>
          </Routes>
          <Footer/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
