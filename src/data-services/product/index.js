import { apiListProductByCategoryId, apiListProduct, apiListHotProduct, apiListProductBySubCategoryName } from "src/data-source/product";
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
                    slug: item?.slug
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
                    slug: item?.slug
                }
            });
            response.data = filterSplitHotProduct(response.data);
            return response;
            // return filterSplitHotProduct(response);
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
                    slug: item?.slug
                }
            });
            return response;
        })
    },
    listProductBySubCategoryName: function (subCategoryName, requestParams) {
        return apiListProductBySubCategoryName(subCategoryName, requestParams).then(response => {
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    title: item?.title,
                    main_image: item?.main_image_url,
                    price: item?.price,
                    slug: item?.slug
                }
            });
            console.log("PRODUCT SERVICE: ", response);
            return response;
        }) 
    },
    listAllCategoryWithProduct: function (productParams) {
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

export const filterSplitHotProduct = (listHotProduct) => {
    // format hot product ve dang
    // [
    //  [ {id: xxx, data: 4 phan tu product }],
    //  [ {id: xxx, data: 4 phan tu product }],
    //  ...
    // ]

    let result = [];
    let i, j, temporary, chunk = 4;
    for (i = 0, j = listHotProduct.length; i < j; i += chunk) {
        let templateResult = {
            key: i,
            data: [],
        }
        temporary = listHotProduct.slice(i, i + chunk);
        templateResult.data = temporary;
        result.push(templateResult)
    }
    return result;
}