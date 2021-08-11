import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "src/data-services/product";

export const listProductBySubCategoryName = createAsyncThunk(
    'product/listProductBySubCategoryName',
    async (requestParams) => {
        // request Params: { name: name, params: { ... }}
        const response = await productService.listProductBySubCategoryName(requestParams?.name, requestParams?.params)
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
            console.log("PAYLOAD:  ", action.payload);
            state.current = action.payload
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
export const { addProductWithCategory } = actions;
export default productReducer;
