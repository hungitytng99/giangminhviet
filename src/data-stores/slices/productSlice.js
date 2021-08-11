import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "src/data-services/product";
import { current } from '@reduxjs/toolkit'

export const listProductBySubCategoryName = createAsyncThunk(
    'product/listProductBySubCategoryName',
    async (requestParams) => {
        const response = await productService.listProductBySubCategoryName(requestParams)
        return response.data
    }
)

export const listProductByMainCategoryId = createAsyncThunk(
    'product/listProductByMainCategoryId',
    async (requestParams) => {
        // request Params: { id: id, params: { ... }}
        const response = await productService.listProductByCategoryId(requestParams?.id, requestParams?.params)
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
    reducers: {
        addProductWithCategory(state, action) {
            state.current = action.payload;
            return state;

        },
        updateProductWithCategory(state, action){
            state.current = action.payload;
            return state;
        }
    },
    extraReducers: {
        [listProductBySubCategoryName.fulfilled]: (state, action) => {
            state.current = action.payload
        },
        [listProductByMainCategoryId.fulfilled]: (state, action) => {
            state.current = action.payload
        },
    }
})

const { actions, reducer: productReducer } = productSlice;
export const { addProductWithCategory, updateProductWithCategory } = actions;
export default productReducer;
