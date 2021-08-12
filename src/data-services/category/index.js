// import { apiGetListProductByCategoryId, apiListProduct } from "src/data-source/product";
import { apiDetailMainCategory, apiDetailSubCategory, apiListMainCategory } from "src/data-source/category";

// Data Flow: Step 2
// transform data to fit with UI;
export const mainCategoryService = {

    detailSubCategoryAsync: function (categoryId) {
        return apiDetailSubCategory(categoryId).then(response => {
            response.data = {
                id: response.data?.id,
                name: response.data?.name,
                href: response.data?.name,
            }
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
    },

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
    }
}

export const filterSubCategory = (listSubCategory, nameMainCategory) => {
    listSubCategory = listSubCategory.map((subCategory) => {
        return {
            id: subCategory.id,
            name: subCategory.name,
            href: nameMainCategory + "/" + subCategory.name,
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
