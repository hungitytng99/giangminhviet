import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "src/services/product";

export const getListMainCategory = createAsyncThunk(
    'category/getListMainCategory',
    async (requestParams, thunkAPI) => {
        const response = await Product.listProductAsync(requestParams)
        return response.data
    }
)

const productSlice = createSlice({
    name: "category",
    initialState: {
        current: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getListMainCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [getListMainCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getListMainCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload
        },
    }
})

const { reducer: categoryReducer } = productSlice;
export default categoryReducer;
