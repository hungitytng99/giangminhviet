import { apiListProductByCategoryId, apiListProduct, apiListHotProduct } from "src/data-source/product";
import { mainCategoryService } from 'src/data-services/category';

// Data Flow: Step 2
// transform data to fit with UI;
export const productService = {

    listProductAsync: function (requestParams) {
        return apiListProduct(requestParams).then(response => {
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    title: item?.title,
                    main_image: item?.main_image_url,
                    price: item?.price,
                }
            });
            return response;
        });
    },
    listHotProductAsync: function (requestParams) {
        return apiListHotProduct(requestParams).then(response => {
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    title: item?.title,
                    main_image: item?.main_image_url,
                    price: item?.price,
                }
            });
            return response;
        });
    },
    listProductByCategoryId: function (categoryId, requestParams) {
        return apiListProductByCategoryId(categoryId, requestParams).then(response => {
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    title: item?.title,
                    main_image: item?.main_image_url,
                    price: item?.price,
                }
            });
            return response;
        })
    },
    listAllCategoryWithProduct: function (productParams) {
        console.log("PRODUCT SERVICE 48", productParams);
        return mainCategoryService.listMainCategoryAsync().then(async (response) => {
            let listProductByMainCategory = []
            for (let i = 0; i < response.data.length; i++) {

                let itemProductByCategory = {
                    id: response.data[i].id,
                    name: response.data[i].name,
                    sub_category: [],
                    listProduct: []
                }

                const listProduct = await productService.listProductByCategoryId(response.data[i].id, productParams);
                console.log(listProduct);
                const listSubCategory = await mainCategoryService.detailMainCategoryAsync(response.data[i].id)

                itemProductByCategory.sub_category = listSubCategory.data.sub_category;
                itemProductByCategory.listProduct = listProduct.data;

                listProductByMainCategory.push(itemProductByCategory);
            }
            response.data = listProductByMainCategory;
            return response;
        })
    }
}