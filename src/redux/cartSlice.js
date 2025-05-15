import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartCount: (state, action) => {
            state.count = action.payload;
        },
        incrementCart: (state) => {
            state.count += 1;
        },
        clearCart: (state) => {
            state.count = 0;
        },
    },
});

export const { setCartCount, incrementCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;