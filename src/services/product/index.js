import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiListProduct } from "src/data-source/product";

// Data Flow: Step 2
// transform data to fit with UI;
export const Product = {
    listProductAsync: createAsyncThunk(
        'product/listProductAsync',
        async (requestParams, thunkAPI) => {
            const response = await apiListProduct(requestParams)
            console.log(response);
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    title: item?.title,
                    description: item?.description,
                    image: item?.main_image_url,
                    price: item?.price,
                    material: item?.material,
                    // sub_category: item?.category_id.name,
                    // main_category: item?.category_id.main_category
                }
            });
            console.log("RESPONSE PRODUCT LIST: ", response);
            return response.data
        }
    )
}