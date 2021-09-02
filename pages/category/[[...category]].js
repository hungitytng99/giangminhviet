import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import ProductCardLists from 'src/components/ProductCardLists';
import ContactPop from 'src/components/ContactPop';
import { mainCategoryService } from 'src/data-services/category';
import { useEffect, useState } from 'react';
import { productService } from 'src/data-services/product';
import FullPageLoading from 'src/ui-source/Loading/FullPageLoading';
import Image from 'next/image'
import Footer from "src/components/Layout/Footer";


const Category = (props) => {
    const { listCategoryWithProduct = [], mainCategoryAndSubCategory = [] } = props;
    const [listCategoryWithProductState, setListCategoryWithProductState] = useState({ ...listCategoryWithProduct });
    const [isShowLoading, setIsShowLoading] = useState(false);
    const initialStatusFilter = {
        main_category_name: listCategoryWithProduct.mainName ? listCategoryWithProduct.mainName : 'All',
        category_name: 'All',
        material: 'All',
        orderType: 'All',
    }
    console.log("LIST: ", listCategoryWithProduct);
    const [statusFilterState, setStatusFilterState] = useState(initialStatusFilter)
    if (listCategoryWithProductState.mainId !== listCategoryWithProduct.mainId) {
        setListCategoryWithProductState(listCategoryWithProduct);
        setStatusFilterState(initialStatusFilter);
    }

    const handleFilter = async (e) => {
        setIsShowLoading(true);
        const targetFilterValue = e.target.value;
        setStatusFilterState({ ...statusFilterState, [e.target.getAttribute('name')]: targetFilterValue });
        const listProduct = await productService.listProductWithCategoryMaterial({ ...statusFilterState, [e.target.getAttribute('name')]: targetFilterValue });
        const newlistCategoryWithProductState = { ...listCategoryWithProductState, listProduct: listProduct.data };
        setListCategoryWithProductState(newlistCategoryWithProductState);
        setIsShowLoading(false);
    }

    const filterCategory = listCategoryWithProductState.subList;
    const filterMaterial = listCategoryWithProductState.listMaterial;
    const filterSort = [
        { value: 'all', label: 'All' },
        { value: '2', label: 'Newest' },
        { value: '1', label: 'Oldest' }
    ]

    return (
        <>
            {isShowLoading && <FullPageLoading opacity={0.5} />}
            <Header listCategory={mainCategoryAndSubCategory} />
            <ContactPop />
            <Container className="category-page">
                <Row>
                    <Breadcrumb className="product__breadcrumb">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {listCategoryWithProductState.mainName}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                {
                    listCategoryWithProductState.mainId &&
                    <Row className="category-page__banner">
                        <div className="category-page__img-box">
                            {
                                listCategoryWithProductState.subMainImage &&
                                <Image layout="fill" objectFit="cover" src={listCategoryWithProductState.subMainImage} alt={listCategoryWithProductState.mainName} />
                            }
                        </div>
                        <div className="category-page__banner-desc">
                            {listCategoryWithProductState.mainDesc}
                        </div>
                    </Row>
                }

                <div className="category-page__filter">
                    <div className="category-page__filter-header">
                        Filter the products
                    </div>
                    <div className="category-page__filter-box">
                        {
                            listCategoryWithProductState.mainId &&
                            <div className="category-page__filter-field">
                                <select
                                    name="category_name"
                                    value={statusFilterState.category}
                                    onChange={handleFilter}
                                    className="category-page__filter-select"
                                >
                                    {
                                        filterCategory.map((item) => {
                                            return (
                                                <option key={item.value} className="category-page__filter-option" value={item.value}>{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        }
                        <div className="category-page__filter-field">
                            <select
                                name="material"
                                value={statusFilterState.material}
                                onChange={handleFilter}
                                className="category-page__filter-select"
                            >
                                {
                                    filterMaterial && filterMaterial.map((item) => {
                                        return (
                                            <option key={item.value} className="category-page__filter-option" value={item.value}>{item.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="category-page__title-box">
                        <div className="category-page__title">
                            {listCategoryWithProductState.mainName}
                        </div>
                        <div className="category-page__sort">
                            <div className="category-page__sort-select">
                                <select
                                    name="orderType"
                                    value={statusFilterState.orderType}
                                    onChange={handleFilter}
                                    className="category-page__filter-select"
                                >
                                    {
                                        filterSort.map((item) => {
                                            return (
                                                <option key={item.value} className="category-page__filter-option" value={item.value}>{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <ProductCardLists listProduct={listCategoryWithProductState.listProduct} />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const { category = [] } = context.params;
    let mainId = category[0] || '';
    let subId = category[1] || '';
    let detailMain = {
        data: {
            sub_category: []
        }
    };
    let listProduct;

    // list material
    const listMaterial = await productService.listAllMaterial();
    const mainCategoryWithSub = await mainCategoryService.listCategoryWithSubCategory();
    let subCategoryDetail;

    // if not mainid => list all product
    if (!mainId) {
        listProduct = await productService.listProductAsync();
    } else {
        detailMain = await mainCategoryService.detailMainCategoryByIdAsync(mainId);

        // if mainId + subId => list available product
        if (subId) {
            subCategoryDetail = await mainCategoryService.detailSubCategoryAsync(subId);
            listProduct = await productService.listProductBySubCategoryName(
                { main_category: detailMain.data.name, category: subCategoryDetail.data.name }
            );
            // if mainId + no subId => get by main category ID
        } else {
            listProduct = await productService.listProductByCategoryId(mainId)
        }
    }
    let listCategoryWithProduct = {
        mainId: mainId || '',
        mainName: detailMain.data.name || 'All',
        mainImage: detailMain.data.image || '',
        subMainImage: detailMain.data.sub_image || '',
        mainDesc: detailMain.data.description || '',
        subId: subId || '',
        subName: subCategoryDetail?.data.name || '',
        subList: [{ value: "all", label: "All" }, ...detailMain?.data?.sub_category?.map((item) => {
            return {
                value: item.name,
                label: item.name
            }
        })],
        listMaterial: [{ value: "all", label: "All" }, ...listMaterial],
        listProduct: listProduct.data,

    }
    return {
        props: {
            mainCategoryAndSubCategory: mainCategoryWithSub.data,
            listCategoryWithProduct: listCategoryWithProduct,
        },
    };
}
export default Category