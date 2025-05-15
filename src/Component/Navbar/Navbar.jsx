import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { logOut } from '../../services/user-services';
import './Navbar.css';
import { IconButton } from '@mui/material';
import { cartCount } from '../../services/user-services';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch} from 'react-redux';
import { setCartCount } from '../../redux/cartSlice';

function Navbar(props) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.cart.count);
    const user = useSelector((state) => state.auth.user);
    const profileData = useSelector((state) => state.auth.profileData);


    const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

    useEffect(() => {
        if (user?.userId) {
            cartCount(user.userId)
                .then((data) => {
                    dispatch(setCartCount(data.count));
                })
                .catch((error) => {
                    console.error("error getting cart count", error);
                });
        }
    }, [[user?.userId]]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-light" href="/">ECom-Portal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/product-list">Home <span className="sr-only">(current)</span></a>
                        </li>
                        {!profileData?.firstName && !profileData?.lastName && (
                            <>
                                <li className="nav-item">
                                    <Link to="/login-page" className="nav-link text-light">login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link text-light">signup</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {profileData?.firstName && profileData?.lastName && (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#" onClick={logOut}>Logout</a>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/" style={{ display: 'flex', alignItems: 'center' }}>
                                {profileData?.firstName} {profileData?.lastName}
                            </a>
                        </li>
                        <IconButton fontSize="small" sx={{ color: 'white' }}>
                            <AccountCircleOutlined fontSize="medium"></AccountCircleOutlined>
                        </IconButton>
                        <Link to="/shopping-cart">
                        <IconButton sx={{ paddingRight: '20px' }}>
                            <ShoppingCartIcon fontSize="small" sx={{ color: 'white' }} />
                            <CartBadge badgeContent={count} color="primary" overlap="circular" />
                        </IconButton>
                        </Link>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar

