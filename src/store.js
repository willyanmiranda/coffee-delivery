import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./redux/slices/orderSlice";
import cartReducer from "./redux/slices/cartSlice"

export const store = configureStore({
    reducer: {
        order: orderReducer,
        cart: cartReducer,
    }
})