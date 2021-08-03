import { NextPage } from 'next';
import { Carousel } from 'react-responsive-carousel';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBoxLists from 'src/components/CategoryBoxLists';
import ProductCardLists from 'src/components/ProductCardLists';
import Contact from 'src/components/ContactPop';
interface Props {
}
const Home: NextPage<Props> = (props: any) => {
  return (
    <>
      <Contact/>
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
      <Header />
      <Container>
        <CategoryBoxLists />
        <div className="special-product">
          <h2 className="special-product__text">
            <a href="/" className="special-product__link">Sản phẩm nổi bật</a>
          </h2>
        </div>
        <ProductCardLists />
        <div className="category-product">
          <div className="category-title">
            <h2 className="category-title__text">
              <a href="/" className="category-title__link">Phòng khách</a>
            </h2>
          </div>
          <div className="category-product__box">
            <Row>
              <Col lg={3}>
                <ul className="category-product__list">
                  <li className="category-product__item">
                    <a href="/" className="category-product__link">
                      Giường ngủ hiện đại
                    </a>
                  </li>
                  <li className="category-product__item">
                    <a href="/" className="category-product__link">
                      Giường ngủ hiện đại
                    </a>
                  </li>
                  <li className="category-product__item">
                    <a href="/" className="category-product__link">
                      Giường ngủ hiện đại
                    </a>
                  </li>
                  <li className="category-product__item">
                    <a href="/" className="category-product__link">
                      Giường ngủ hiện đại
                    </a>
                  </li>
                </ul>
                <div className="category-product__img-box">
                  <img src={ImagesPath.PRODUCT_BANNER.src} alt="alt" className="category-product__img" />
                </div>
              </Col>
              <Col lg={9}>
                <Row className="category-product__list-box">
                  <ProductCardLists/>
                </Row>
              </Col>
            </Row>
          </div>
        </div>

      </Container>

    </>
  )
}
export async function getStaticProps() {

  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Home