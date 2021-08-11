import { GET, PUT, POST, DELETE } from "src/data-source/fetch.js";
import { REQUEST_STATE } from "src/app-configs/index.js";
// Data Flow: Step 1

// export const apiCreateProduct = async (params) => {
//     try {
//         // const response = await POST("/product", params);
//         return {
//             state: REQUEST_STATE.SUCCESS,
//             data: response.data
//         };

//     } catch (error) {
//         console.log("error", error);
//         return {
//             state: REQUEST_STATE.ERROR,
//             data: {}
//         };
//     }
// };


export const apiListProduct = async (params) => {
    try {
        const response = await GET("/product", params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.data
        };

    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: []
        };
    }
};

export const apiListHotProduct = async (params) => {
    try {
        const response = await GET("/hot-product", params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.data
        };

    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: []
        };
    }
};

export const apiListProductByCategoryId = async (categoryId, params) => {
    try {
        const response = await GET("/product/get-by-main-category-id/" + categoryId, params);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.data
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: []
        };
    }
};

export const apiListProductBySubCategoryName = async (categoryName, params) => {
    try {
        const response = await GET("/product/get-by-category-name/" + categoryName, params);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.data
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: []
        };
    }
};



// export const apiUpdateProduct = async (productId, params) => {
//     try {
//         // const response = await PUT("/product/" + productId, params);

//         return {
//             state: REQUEST_STATE.SUCCESS,
//             data: response.data
//         };

//     } catch (error) {
//         console.log("error", error);
//         return {
//             state: REQUEST_STATE.ERROR,
//             data: []
//         };
//     }
// };


// export const apiDeleteUser = async (userId) => {
//     try {
//         // const response = await DELETE("/product/" + userId);

//         return {
//             state: REQUEST_STATE.SUCCESS,
//             data: response.data
//         };

//     } catch (error) {
//         return {
//             state: REQUEST_STATE.ERROR,
//             data: {}
//         };
//     }
// };