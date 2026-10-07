import { createSlice } from "@reduxjs/toolkit";
 const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push({...action.payload,quantity:1});
        },
         
        increaseQuantity:(state,action)=>{
            const stock =state.find((item)=>item.id === action.payload);
          
            if(stock){
                stock.quantity +=1;
            }
        },

        decreaseQuantity :(state,action)=>{
            const stock =state.find((item)=>item.id===action.payload);

            if(stock && stock.quantity>1){
              stock.quantity -=1;
            }
        },

        removeFromCart: (state,action)=>{
            return state.filter((item)=>item.id!==action.payload);
        },

        clearCart:()=>{
            return[];
        }
    }
 });


 export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;