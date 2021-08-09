import { createSlice } from "@reduxjs/toolkit";
import { Product } from "src/services/product";

const userSlice = createSlice({
    name: "product",
    initialState: {
        current: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers : {
        [Product.listProductAsync.pending] : (state, action) => {
            state.loading = true;
        },
        [Product.listProductAsync.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [Product.listProductAsync.fulfilled] : (state, action) => {
            state.loading = false;
            state.current = action.payload
        },

    }
})

const { reducer: productReducer } = userSlice;
export default productReducer;
