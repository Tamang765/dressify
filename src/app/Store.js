import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice.js";
import AddReducer from "./AddIdSlice.js";
const store = configureStore({
    reducer: {
        cart: CartReducer,
        favorite: AddReducer,
    }
})
export default store;