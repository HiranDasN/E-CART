import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlistslice',
    initialState:[],  //since this state have to hold more than one item
    reducers:{
        //actions

        //function to add items to wishlist array state
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //functiom to remove items from wishlist arraay
        removeFromWishlist:(state,action)=>{
            //it returns a new array with items satisfying the condition
            return state.filter(item=>item.id!==action.payload)
        }


    }

})
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer