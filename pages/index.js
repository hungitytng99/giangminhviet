import { NextPage } from 'next';
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
import { useEffect } from 'react';
import { apiDetailMainCategory, apiListMainCategory } from "src/data-source/category";

const Home = (props) => {
  const { listMainCategory, listAllCategoryWithProduct, listHotProducts } = props;
  console.log("BIG DATA:  ", listAllCategoryWithProduct);

  // useEffect(() => {
  //   const test = async () => {
  //     const result = await productService.listProductByCategoryId(1, { productsPerPage: 8, pageNumber: 1 });
  //     console.log(result);
  //   }
  //   test();
  // }, [])
  return (
    <>
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
      <Header listCategory={listAllCategoryWithProduct} />
      <Container>
        <CategoryBoxLists listMainCategory={listMainCategory} />
        <div className="special-product">
          <h2 className="special-product__text">
            <a href="/" className="special-product__link">Sản phẩm nổi bật</a>
          </h2>
        </div>
        <ProductCardLists listProduct={listHotProducts} />
        {listAllCategoryWithProduct.map((categoryWithProduct) => {
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
                      {
                        categoryWithProduct.sub_category.map((subCategory) => {
                          return (
                            <li key={subCategory.id} className="category-product__item">
                              <div data-id={subCategory.name} className="category-product__link">
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