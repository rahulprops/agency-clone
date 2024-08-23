import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';
const initialState = {
    // cartItems: [], // at the beging use this but after localstorage use this 
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQty: 0,
    cartTotalPrice: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard(state, action) {
                // console.log(state);
                // state.cartItems.push(state)
                // console.log(action.payload);
                // state.cartItems.push(action.payload)
                const itemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                );

                if (itemIndex >= 0) {
                    state.cartItems[itemIndex].cartQuantity += 1
                }
    
                else {
                    let tempProductItem = { ...action.payload, cartQuantity: 1 };
                    state.cartItems.push(tempProductItem);
                }

                 // set data as local stroage item and don't loss cardItems data after refreshing web page
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                
                
        },
        decreaseCart(state,action)
        {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );

              if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
        
                toast.success("Decrease  product quantity !");
              } 
              else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                  (item) => item.id !== action.payload.id
                );
        
                state.cartItems = nextCartItems;
        
                toast.error("Product removed from cart");
              }
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.success("Cart cleared");
        }
        
    }
})

export const { addToCard,decreaseCart,clearCart } = cartSlice.actions
export default cartSlice.reducer;

