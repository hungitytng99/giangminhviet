import { Carousel } from 'react-responsive-carousel';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBoxLists from 'src/components/CategoryBoxLists';
import ProductCardLists from 'src/components/ProductCardLists';
import Contact from 'src/components/ContactPop';
import { mainCategoryService } from 'src/data-services/category';
import { productService } from 'src/data-services/product';
import { useEffect, useState } from 'react';
import FullPageLoading from 'src/ui-source/Loading/FullPageLoading'
import { Configs } from 'src/app-configs/index'
import { useDispatch, useSelector } from 'react-redux';
import { listProductBySubCategoryName, listProductByMainCategoryId } from 'src/data-stores/slices/productSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import { addProductWithCategory } from 'src/data-stores/slices/productSlice'
const Home = (props) => {
  const { listMainCategory, listAllCategoryWithProduct, listHotProducts } = props;
  console.log("BIG DATA:  ", listAllCategoryWithProduct);
  const dispatch = useDispatch();
  dispatch(addProductWithCategory(listAllCategoryWithProduct));
  const listAllCategoryWithProductState = useSelector(state => state.product.current);

  const [isShowLoading, setIsShowLoading] = useState(false);

  const filterProductBySubCategoryName = async (e) => {
    try {
      let subCategoryName = e.target.dataset.id;
      let mainCategoryName = e.target.dataset.maincategoryname || '';
      let mainCategoryId = e.target.dataset.maincategoryid || '';

      setIsShowLoading(true);
      let filterResult;
      let filterResultWrapper;
      if (subCategoryName != "all") {
        console.log("FILTER SUB CATEGORY");
        filterResult = await dispatch(listProductBySubCategoryName({ name: subCategoryName, params: { productsPerPage: 4, pageNumber: 1 } }))
      } else {
        filterResult = await dispatch(listProductByMainCategoryId({ id: mainCategoryId, params: { productsPerPage: 8, pageNumber: 1 } }))
      }
      filterResultWrapper = unwrapResult(filterResult);
      setIsShowLoading(false);
      console.log(mainCategoryName);
      let newListProduct = listAllCategoryWithProductState.filter((item) => {
        if (item.name == mainCategoryName) {
          item.listProduct = filterResultWrapper;
        }
        return item;
      })
      console.log("~~~  ", newListProduct);
      setListAllCategoryWithProductState(newListProduct)
    } catch (error) {
      setIsShowLoading(false);
      console.log("An error is occur when filter category");
    }

  }

  return (
    <>
      {isShowLoading && <FullPageLoading opacity={0.5} />}
      <Contact />
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={6000}
        showArrows={false}
        infiniteLoop={true}
      >
        <div>
          <img src={ImagesPath.IMG_BANNER_1.src} />
        </div>
        <div>
          <img src={ImagesPath.IMG_BANNER_2.src} />
        </div>
      </Carousel>
      <Header listCategory={listAllCategoryWithProductState} />
      <Container>
        <CategoryBoxLists listMainCategory={listMainCategory} />
        <div className="special-product">
          <h2 className="special-product__text">
            <a href="/" className="special-product__link">Sản phẩm nổi bật</a>
          </h2>
        </div>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          infiniteLoop={true}
          interval={6000}
          transitionTime={800}
        >
          {
            listHotProducts.map((hotProduct) => {
              return (
                <div key={hotProduct.id}>
                  <ProductCardLists listProduct={hotProduct.data} />
                </div>
              )
            })
          }
        </Carousel>

        {listAllCategoryWithProductState.map((categoryWithProduct) => {
          return (
            <div key={categoryWithProduct.id} className="category-product">
              <div className="category-title">
                <h2 className="category-title__text">
                  <a href={categoryWithProduct.name} className="category-title__link">{categoryWithProduct.name}</a>
                </h2>
              </div>
              <div className="category-product__box">
                <Row>
                  <Col lg={3} className="hide-on-992">
                    <ul className="category-product__list">
                      <li className="category-product__item">
                        <div data-id="all" data-maincategoryname={categoryWithProduct.name} data-maincategoryid={categoryWithProduct.id} onClick={filterProductBySubCategoryName} className="category-product__link">
                          All
                        </div>
                      </li>
                      {
                        categoryWithProduct.sub_category.map((subCategory) => {
                          return (
                            <li key={subCategory.id} className="category-product__item">
                              <div data-id={subCategory.name} data-maincategoryname={categoryWithProduct.name} onClick={filterProductBySubCategoryName} className="category-product__link">
                                {subCategory.name}
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className="category-product__img-box">
                      <img src={ImagesPath.PRODUCT_BANNER.src} alt="alt" className="category-product__img" />
                    </div>
                  </Col>
                  <Col lg={9}>
                    <Row className="category-product__list-box">
                      <ProductCardLists listProduct={categoryWithProduct.listProduct} />
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          )
        })}
      </Container>

    </>
  )
}
export async function getStaticProps() {
  // const 
  try {
    const listMainCategory = await mainCategoryService.listMainCategoryAsync();
    const listAllCategoryWithProduct = await productService.listAllCategoryWithProduct({ productsPerPage: 8, pageNumber: 1 });
    const listHotProducts = await productService.listHotProductAsync();
    return {
      props: {
        listMainCategory: listMainCategory.data,
        listAllCategoryWithProduct: listAllCategoryWithProduct.data,
        listHotProducts: listHotProducts.data
      }, // will be passed to the page component as props
    }
  } catch (e) {
    // handle eror there
    console.log(e);
  }


}
export default Home