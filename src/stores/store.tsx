import { configureStore } from '@reduxjs/toolkit';
import  productReducer from 'src/stores/slices/productSlice';
const store = configureStore({ reducer: {
    product: productReducer,
} })
export default store;