import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "src/data-services/product";

export const getListProduct = createAsyncThunk(
    'product/getListProduct',
    async (requestParams, thunkAPI) => {
        const response = await Product.listProductAsync(requestParams)
        return response.data
    }
)

export const getListProductByCategoryId = createAsyncThunk(
    'product/getListProductByCategoryId',
    async (requestParams) => {
        const response = await Product.listProductByCategoryId(requestParams)
        console.log("get list product by category id: ", response);
        return response.data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        current: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getListProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [getListProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload
        },
        [getListProductByCategoryId.pending]: (state, action) => {
            state.loading = true;
        },
        [getListProductByCategoryId.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListProductByCategoryId.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload
        },

    }
})

const { reducer: productReducer } = productSlice;
export default productReducer;
