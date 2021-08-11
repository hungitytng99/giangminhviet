// import { apiGetListProductByCategoryId, apiListProduct } from "src/data-source/product";
import { apiDetailMainCategory, apiListMainCategory } from "src/data-source/category";

// Data Flow: Step 2
// transform data to fit with UI;
export const mainCategoryService = {

    listMainCategoryAsync: function (requestParams) {
        return apiListMainCategory(requestParams).then(response => {
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    name: item?.name,
                    image: item?.url_image,
                    href: "/"
                }
            });
            return response;
        });
    },
    detailMainCategoryAsync: function (categoryId) {
        return apiDetailMainCategory(categoryId).then(response => {
            response.data = {
                id: response.data?.id,
                name: response.data?.name,
                image: response.data?.url_image,
                description: response.data?.description,
                href: response.data?.name,
                sub_category: filterSubCategory(response.data?.sub_category, response.data?.name)
            }
            return response;
        });
    }
}

export const filterSubCategory = (listSubCategory, nameMainCategory) => {
    return listSubCategory.map((subCategory) => {
        return {
            id: subCategory.id,
            name: subCategory.name,
            href: nameMainCategory + "/" + subCategory.name
        }
    })
}
