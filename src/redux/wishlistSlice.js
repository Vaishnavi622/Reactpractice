import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload);
            toast.success("item added to wishlist");
        },
        removeFromWishlist:(state,action)=>{
            return state.filter((stock)=> stock.id !== action.payload
        );
        }
    }
}) ;

export const {
    addToWishlist,removeFromWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;