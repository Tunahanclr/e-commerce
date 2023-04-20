import { createSlice } from "@reduxjs/toolkit";


        const fethFromLocalStorege=()=>{
            let cart=localStorage.getItem('cart')
            if(cart){
                return JSON.parse(localStorage.getItem('cart'))
            }else{
                return[]
            }
        }
        const storeInLocalStorege=(data)=>{
                localStorage.setItem('cart',JSON.stringify(data))
        }
    const initialState={
        carts: fethFromLocalStorege(),
        itemCount:0,
        totalAmount:0,
    }

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
                const isItemCart=state.carts.find(item=> item.id === action.payload.id)
                if(isItemCart){
                    const tempCart=state.carts.map(item=>{
                        if(item.id===action.payload.id){
                            let tempQty= item.quantity +action.payload.quantity
                            let tempTotal=tempQty + item.price
                            return{
                                ...item,quantity:tempQty, totalPrice : tempTotal
                            }
                        }else{
                            return item
                        }
                    })   
                    state.carts=tempCart;
                    storeInLocalStorege(state.carts)
                }else{
                    state.carts.push(action.payload)
                    storeInLocalStorege(state.carts)
                }
            },
            removeFromCart:(state,action)=>{
                const tempCart=state.carts.filter(item=>item.id !== action.payload)
                state.carts=[]
                storeInLocalStorege(state.carts)
            },
            clearCart:(state,action)=>{
                state.carts=[]
            },
            getCartTotal: (state) => {
                if (state.carts.length === 0) {
                  state.totalAmount = 0;
                } else {
                  state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                    return cartTotal + cartItem.price * cartItem.quantity;
                  }, 0);
                }
                state.itemCount = state.carts.length;
                return state; // burada return ekleyin
              },
              
    },
})
export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions
export default cartSlice.reducer