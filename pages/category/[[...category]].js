import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import ProductCardLists from 'src/components/ProductCardLists';
import ContactPop from 'src/components/ContactPop';
import Select from 'react-select'
import { mainCategoryService } from 'src/data-services/category';
import { useEffect, useState } from 'react';
import { productService } from 'src/data-services/product';
import FullPageLoading from 'src/ui-source/Loading/FullPageLoading';
import Image from 'next/image'
import Footer from "src/components/Layout/Footer";


const Category = (props) => {
    const { listCategoryWithProduct = {}, mainCategoryAndSubCategory = {} } = props;
    const [listCategoryWithProductState, setListCategoryWithProductState] = useState(listCategoryWithProduct);
    const [isShowLoading, setIsShowLoading] = useState(false);

    let statusFilter = {
        mainCategory: 'all',
        subCategory: 'all',
        material: 'all',
        orderType: 'all',
    }
    console.log(listCategoryWithProductState);
    const [statusFilterStatus, setStatusFilterState] = useState({
        mainCategory: 'all',
        subCategory: 'all',
        material: 'all',
        orderType: 'all',
    })

    const handleFilter = async (e) => {
        const targetFilterValue = e.target.value;
        const targetFilterName = e.target.getAttribute('name');
        statusFilter[targetFilterName] = targetFilterValue;
        setStatusFilterState(statusFilter);
        setIsShowLoading(true);
        const listProduct = await productService.listProductWithCategoryMaterial(statusFilter);
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
                        <div className="img-box">
                            <Image layout="fill" objectFit="cover" src={listCategoryWithProductState.mainImage} alt={listCategoryWithProductState.mainName} />
                        </div>
                        <div className="category-page__banner-desc">
                            {listCategoryWithProductState.mainDesc}
                        </div>
                    </Row>
                }

                <div className="category-page__filter">
                    <div className="category-page__filter-header">
                        Bộ lọc sản phẩm
                    </div>
                    <div className="category-page__filter-desc">
                        Giúp lọc nhanh sản phẩm bạn tìm kiếm
                    </div>
                    <div className="category-page__filter-box">
                        {
                            listCategoryWithProductState.mainId &&
                            <div className="category-page__filter-field">
                                <select
                                    name="subCategory"
                                    value={statusFilterStatus.subcategory}
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
                                value={statusFilterStatus.material}
                                onChange={handleFilter}
                                className="category-page__filter-select"
                            >
                                {
                                    filterMaterial.map((item) => {
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
                                    value={statusFilterStatus.orderType}
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
            {/* <Footer/> */}
        </>
    )
}

export async function getServerSideProps(context) {
    const { category = {} } = context.params;
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

    // if not mainid => list all product
    if (!mainId) {
        listProduct = await productService.listProductAsync({ productsPerPage: 24, pageNumber: 1 });
    } else {
        detailMain = await mainCategoryService.detailMainCategoryByIdAsync(mainId);

        // if mainId + subId => list available product
        if (subId) {
            let subCategoryDetail = await mainCategoryService.detailSubCategoryAsync(subId);
            listProduct = await productService.listProductBySubCategoryName(
                { main_category: detailMain.data.name, category: subCategoryDetail.data.name, productsPerPage: 8, pageNumber: 1 }
            );
            // if mainId + no subId => get by main category ID
        } else {
            listProduct = await productService.listProductByCategoryId(mainId, { productsPerPage: 8, pageNumber: 1 })
        }
    }
    let listCategoryWithProduct = {
        mainId: mainId || '',
        mainName: detailMain.data.name || 'All Product',
        mainImage: detailMain.data.image || '',
        mainDesc: detailMain.data.description || '',
        subId: subId || '',
        subList: [{ value: "all", label: "All" }, ...detailMain.data.sub_category.map((item) => {
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