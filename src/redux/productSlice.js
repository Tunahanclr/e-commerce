import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState={
        products:[],
        productsStatus:STATUS.IDLE,
        productDetail:[],
        productDetailStatus:STATUS.IDLE,
}
export const getProducts=createAsyncThunk('getProducts',async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    const data=await response.json()
    return data;
})
    export const getDetailProducts=createAsyncThunk('getDetailProduct',async(id)=>{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`)
        const data=await response.json()
        return data;
    })

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
                builder
                .addCase(getProducts.pending,(state,action)=>{
                    state.productsStatus=STATUS.LOADİNG
                })
                .addCase(getProducts.fulfilled,(state,action)=>{
                    state.productsStatus=STATUS.SUCCES;
                    state.products=action.payload
                })
                .addCase(getProducts.rejected,(state,action)=>{
                    state.productsStatus=STATUS.FAIL
                })

                .addCase(getDetailProducts.pending,(state,action)=>{
                    state.productDetailStatus=STATUS.LOADİNG
                })
                .addCase(getDetailProducts.fulfilled,(state,action)=>{
                    state.productDetailStatus=STATUS.SUCCES;
                    state.productDetail=action.payload
                })
                .addCase(getDetailProducts.rejected,(state,action)=>{
                    state.productDetailStatus=STATUS.FAIL
                })
    }

})
export default productSlice.reducer