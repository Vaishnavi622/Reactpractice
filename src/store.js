import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from './redux/wishlistSlice';
import cartReducer from './redux/cartSlice';

 export const store = configureStore({
    reducer:{
        wishlist: wishlistReducer,
        cart: cartReducer
    }
 });