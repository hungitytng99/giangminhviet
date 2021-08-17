
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ImagesPath } from 'src/constants/ImagesPath';
import Header from 'src/components/Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBoxLists from 'src/components/CategoryBoxLists';
import ProductCardLists from 'src/components/ProductCardLists';
import Contact from 'src/components/ContactPop';
import { mainCategoryService } from 'src/data-services/category';
import { productService } from 'src/data-services/product';
import { useState } from 'react';
import FullPageLoading from 'src/ui-source/Loading/FullPageLoading'
import Image from 'next/image'
import Footer from "src/components/Layout/Footer";

const Home = (props) => {
  const { listMainCategory = [], listAllCategoryWithProduct = [], listHotProducts = [] } = props;
  const [listAllCategoryWithProductState, setListAllCategoryWithProductState] = useState(listAllCategoryWithProduct);
  const [isShowLoading, setIsShowLoading] = useState(false);

  const filterProductBySubCategoryName = async (e) => {
    try {
      let subCategoryName = e.target.dataset.id || '';
      let mainCategoryName = e.target.dataset.maincategoryname || '';

      setIsShowLoading(true);
      let filterResult;
      if (subCategoryName.toLowerCase() != "all") {
        filterResult = await productService.listProductBySubCategoryName({ main_category: mainCategoryName, category: subCategoryName, productsPerPage: 8, pageNumber: 1 });
      } else {
        filterResult = await productService.listProductByMainCategoryName(mainCategoryName, { productsPerPage: 8, pageNumber: 1 });
      }

      let newListProduct = listAllCategoryWithProductState.map((item) => {
        let itemTmp = { ...item };
        if (itemTmp.name == mainCategoryName) {
          itemTmp.listProduct = filterResult.data;
          itemTmp.sub_category.currentSelected = subCategoryName;
          itemTmp.sub_category.hasMoreProducts = filterResult.data.length != 0;
          itemTmp.sub_category.data = itemTmp.sub_category.data.map(sub_category => {
            return { ...sub_category, isSelected: subCategoryName == sub_category.name }
          })
        }
        return itemTmp;
      })
      setListAllCategoryWithProductState(newListProduct)
      setIsShowLoading(false);
    } catch (error) {
      setIsShowLoading(false);
    }

  }

  const getMoreProduct = async (e) => {
    try {
      const subCategoryName = e.target.dataset.selectedcategory;
      const mainCategoryName = e.target.dataset.maincategoryname;
      const nextPage = e.target.dataset.nextpage;

      setIsShowLoading(true);
      let filterResult;
      if (subCategoryName.toLowerCase() != "all") {
        filterResult = await productService.listProductBySubCategoryName({ main_category: mainCategoryName, category: subCategoryName, productsPerPage: 8, pageNumber: nextPage });
      } else {
        filterResult = await productService.listProductByMainCategoryName(mainCategoryName, { productsPerPage: 8, pageNumber: nextPage });
      }
      let newListProduct = listAllCategoryWithProductState.map((item) => {
        let itemTmp = { ...item };
        if (itemTmp.name == mainCategoryName) {
          itemTmp.listProduct = itemTmp.listProduct.concat(filterResult.data);
          itemTmp.sub_category.hasMoreProducts = filterResult.data.length != 0;
          ++itemTmp.sub_category.pageNumber;
          itemTmp.sub_category.currentSelected = subCategoryName;

        }
        return itemTmp;
      })
      setListAllCategoryWithProductState(newListProduct)

      setIsShowLoading(false);
    } catch (error) {
      setIsShowLoading(false);
    }
  }
  console.log(listAllCategoryWithProductState);
  return (
    <>
      <main className="home-page">
        {isShowLoading && <FullPageLoading opacity={0.5} />}
        <Contact />
        <Carousel
          autoPlay={true}
          showThumbs={false}
          interval={6000}
          showArrows={false}
          infiniteLoop={true}
        >
          <div className="home__banner-img">
            <Image layout="fill" objectFit="contain" src={ImagesPath.HOME_BANNER_1} alt="giang minh viet banner" />
          </div>
          <div className="home__banner-img">
            <Image layout="fill" objectFit="contain" src={ImagesPath.HOME_BANNER_2} alt="giang minh viet banner handmade" />
          </div>
          <div className="home__banner-img">
            <Image layout="fill" objectFit="contain" src={ImagesPath.HOME_BANNER_3} alt="giang minh viet banner handmade" />
          </div>
        </Carousel>
        <Header listCategory={listAllCategoryWithProductState} />
        <Container>
          <CategoryBoxLists listMainCategory={listMainCategory} />
          <div className="special-product">
            <h2 className="special-product__text">
              <div className="special-product__link">Sản phẩm nổi bật</div>
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
                    <a href={categoryWithProduct.href} className="category-title__link">{categoryWithProduct.name}</a>
                  </h2>
                </div>
                <div className="category-product__box">
                  <Row>
                    <Col lg={3} className="hide-on-992">
                      <ul className="category-product__list">
                        {
                          categoryWithProduct.sub_category.data.map((subCategory) => {
                            return (
                              <li key={subCategory.id} className={`category-product__item ${subCategory.isSelected && "active"}`}>
                                <div
                                  data-id={subCategory.name}
                                  data-maincategoryname={categoryWithProduct.name}
                                  onClick={filterProductBySubCategoryName}
                                  className="category-product__link"
                                >
                                  {subCategory.name}
                                </div>
                              </li>
                            )
                          })
                        }
                      </ul>
                      <div className="category-product__img-box">
                        <Image layout="fill" objectFit='cover' src={categoryWithProduct.image} alt="giang minh viet image" className="category-product__img" />
                      </div>
                    </Col>
                    <Col lg={9}>
                      <Row className="category-product__list-box">
                        <ProductCardLists listProduct={categoryWithProduct.listProduct} />
                      </Row>
                      {
                        categoryWithProduct.sub_category.hasMoreProducts &&
                        <Row className="category-product__more">
                          <button
                            onClick={getMoreProduct}
                            data-maincategoryname={categoryWithProduct.name}
                            data-selectedcategory={categoryWithProduct.sub_category.currentSelected}
                            data-nextpage={categoryWithProduct.sub_category.pageNumber}
                            className="category-product__more-btn">
                            More
                          </button>
                        </Row>
                      }
                    </Col>
                  </Row>
                </div>
              </div>
            )
          })}
        </Container>
      </main>
      <Footer />
    </>
  )
}
export async function getServerSideProps() {
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
  }
}
export default Home