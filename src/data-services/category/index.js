// import { apiGetListProductByCategoryId, apiListProduct } from "src/data-source/product";
import { apiDetailMainCategory, apiDetailSubCategory, apiListMainCategory } from "src/data-source/category";
import { apiListProductByCategoryAndMaterial } from "src/data-source/product";

// Data Flow: Step 2
// transform data to fit with UI;
export const mainCategoryService = {

    detailSubCategoryAsync: function (subCategoryId) {
        return apiDetailSubCategory(subCategoryId).then(response => {
            response.data = {
                id: response.data?.id,
                name: response.data?.name,
                href: "/category/" + String(response.data?.main_category_id) + String(response.data?.id),
            }
            return response;
        });
    },

    detailMainCategoryByIdAsync: function (categoryId) {
        return apiDetailMainCategory(categoryId).then(response => {
            response.data = {
                id: response.data?.id,
                name: response.data?.name,
                image: response.data?.url_image,
                description: response.data?.description,
                href: "/category/" + response.data?.id,
                sub_category: response.data?.sub_category
            }
            return response;
        });
    },

    // detail with filter, use for component
    detailMainCategoryAsync: function (categoryId) {
        return apiDetailMainCategory(categoryId).then(response => {
            response.data = {
                id: response.data?.id,
                name: response.data?.name,
                image: response.data?.url_image,
                description: response.data?.description,
                href: "/category/" + response.data?.id,
                sub_category: filterSubCategory(response.data?.sub_category, response.data?.id)
            }
            return response;
        });
    },

    listMainCategoryAsync: function (requestParams) {
        return apiListMainCategory(requestParams).then(response => {
            response.data = response.data.map(item => {
                return {
                    id: item?.id,
                    name: item?.name,
                    image: item?.url_image,
                    href: "/category/" + item?.id
                }
            });
            return response;
        });
    },
    listCategoryWithSubCategory: function () {
        return this.listMainCategoryAsync().then(async (response) => {
            let listCategoryWithSub = []
            for (let i = 0; i < response.data.length; i++) {
                let itemProductByCategory = {
                    id: response.data[i].id,
                    name: response.data[i].name,
                    sub_category: [],
                }
                const listSubCategory = await this.detailMainCategoryAsync(response.data[i].id)
                itemProductByCategory.sub_category = listSubCategory.data.sub_category;

                listCategoryWithSub.push(itemProductByCategory);
            }
            response.data = listCategoryWithSub;
            return response;
        })
    },

}

export const filterSubCategory = (listSubCategory, idMainCategory) => {
    listSubCategory = listSubCategory.map((subCategory) => {
        return {
            id: subCategory.id,
            name: subCategory.name,
            href: "category/" + idMainCategory + "/" + subCategory.id,
            isSelected: false,
        }
    })
    listSubCategory = {
        currentSelected: "all",
        pageNumber: 2,
        hasMoreProducts: true,
        data: [
            {
                id: "all",
                name: "All",
                isSelected: true,
            },
            ...listSubCategory
        ]
    }
    return listSubCategory;
}
