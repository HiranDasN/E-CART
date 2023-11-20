import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[], //since this state have to hold more than one item
    reducers:{
      //actions
      //function to add items to cart array
     addToCart:(state,action)=>{
        state.push(action.payload)
     },
     //function to remove items from cart
     removeFromCart : (state,action)=>{
        return state.filter(item=>item.id!=action.payload)
     },
     //function to empty cart
     emptyCart : (state)=>{
      return state =[]

     }
    }

})









export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer