import { GET, PUT, POST, DELETE } from "src/data-source/fetch.js";
import { REQUEST_STATE } from "src/app-configs/index.js";
// Data Flow: Step 1

export const apiListMainCategory = async (params) => {
    try {
        const response = await GET("/main-category", params, { isFullPath: false });
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

export const apiDetailMainCategory = async (categoryId) => {
    try {
        const response = await GET("/main-category/" + categoryId);
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

export const apiDetailSubCategory = async (categoryId) => {
    try {
        const response = await GET("/category/" + categoryId);
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