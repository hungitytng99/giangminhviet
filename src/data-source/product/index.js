import { GET, PUT, POST, DELETE } from "src/data-source/fetch.js";
import { REQUEST_STATE } from "src/app-configs/index.js";
// Data Flow: Step 1

export const apiDetailProductBySlug = async (productSlug) => {
    try {
        const response = await GET("/product/get-by-slug/" + productSlug);
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

export const apiDetailProductById = async (productId) => {
    try {
        const response = await GET("/product/" + productId);
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

export const apiListProductByMainCategoryName = async (categoryName, params) => {
    try {
        const response = await GET("/product/get-by-main-category-name/" + categoryName, params);
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

export const apiListProductBySubCategoryName = async (params) => {
    try {
        const response = await GET("/product/get-by-category-name/" , params);
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

export const apiListMaterial = async (params) => {
    try {
        const response = await GET("/product/get-all-material/list/", params);
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

export const apiListProductByCategoryAndMaterial = async (params) => {
    try {
        const response = await GET("/product/get-by-category-and-material/", params);
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