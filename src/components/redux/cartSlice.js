import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload); 
    },
    increaseItem:(state,action)=>{
      const id=action.payload;
      const item=state.cartItems.find((item)=>item.id===id);
      if(item){
        item.quantity+=1;
      }
    },
    decreaseItem:(state,action)=>{
      const id=action.payload;
      const item=state.cartItems.find((item)=>item.id===id);
      if(item && item.quantity>1){
        item.quantity-=1;
      }
    },
    removeFromCart:(state,action)=>{
      const id=action.payload;
      console.log(state.cartItems)
      state.cartItems=state.cartItems.filter((item)=>{console.log(item); return item.id!==id})
    }
  },
});
export const { addToCart,increaseItem,decreaseItem,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

