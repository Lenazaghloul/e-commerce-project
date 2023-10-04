import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter_val: 0,
  cart : [],
};

const counter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
        const product = state.cart.find((product) => product.id === action.payload.id)
        if(product) {
          product.quantity = product.quantity + action.payload.quantity
        } else {
          state.cart.push({...action.payload})
          state.counter++
        }
      },
  
      removeProduct: (state, action) => {
        const updatedCart = state.cart.filter((product) => product.id !== action.payload)
        state.counter--
        state.cart = updatedCart
      },
      incrementQuantity: (state, action) => {
        const product = state.cart.find((product) => product.id === action.payload)
        if(product.quantity >= product.stock) {
          product.quantity = product.stock
        } else {
          product.quantity++
        }
      },
      decrementQuantity: (state, action) => {
        const product = state.cart.find((product) => product.id === action.payload)
        if(product.quantity === 1) {
          product.quantity = 1
        } else {
          product.quantity--
        }
    }
  }})


export const {
    addToCart,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
} = counter.actions;

export default counter.reducer;