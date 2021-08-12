import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'src/ui-source/Images/ImagesThumb';
import ContactPop from 'src/components/ContactPop';
import ProductCardLists from 'src/components/ProductCardLists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { product } from 'src/interface';
import { mainCategoryService } from 'src/data-services/category';
import { productService } from 'src/data-services/product';
import ContactForm from 'src/components/ContactForm';


interface Props {
  mainCategory?: string,
  subCategory?: string,
  product?: product,
  relatedProducts?: Array<product>,
  mainCategoryAndSubCategory?: Array<any>
  detailProduct?: Object,
}

const Product: NextPage<Props> = (props: any) => {
  const { mainCategoryAndSubCategory, detailProduct, relatedProducts } = props;

  return (
    <>
      <Header listCategory={mainCategoryAndSubCategory} />
      <ContactPop />
      <Container className="product">
        <Row>
          <Breadcrumb className="product__breadcrumb">
            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item href="/phong-bep">
              {detailProduct.main_category}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{detailProduct.sub_category}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="product__detail">
          <Col xs={12} md={6}>
            <ImagesThumb listImages={detailProduct.image} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product__detail-id">
              {detailProduct.model}
            </div>
            <div className="product__detail-name">
              {detailProduct.title}
            </div>
            <div className="product__detail-price">
              {detailProduct.price}
              <span>₫</span>
            </div>

            <div className="product__detail-contact">
              <div className="product__detail-contact-link">
                Contact
              </div>
            </div>
            <div className="product__detail-highlight">
              Highlights
            </div>
            <div className="product__detail-handmade">
              <FontAwesomeIcon className="product__detail-handmade-icon" icon={["fas", "hand-spock"]} />
              <span>Handmade</span>
            </div>
            <div className="product__detail-material">
              <span className="product__detail-material-icon">
                <FontAwesomeIcon icon={["fas", "poll-h"]} />
              </span>
              <span>Material: </span> {detailProduct.material}
            </div>
            <div className="product__detail-info-detail">
              <FontAwesomeIcon className="product__detail-detail-icon" icon={["fas", "info-circle"]} />
              <span>Detail: </span>
              {detailProduct.description}
            </div>
          </Col>
        </Row>
        <Row className="product__related-product">
          <div className="special-product">
            <h2 className="special-product__text">
              <a href="/" className="special-product__link">Sản phẩm cùng loại</a>
            </h2>
          </div>
          <ProductCardLists listProduct={relatedProducts} />
        </Row>

        <Row className="product__contact-form">
          <div className="product__contact-form-header">Please leave your contact information</div>
          <ContactForm
            productSlug={detailProduct.slug}
            productId={detailProduct.id}
            productName={detailProduct.title} />
        </Row>

      </Container>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = context.params;
  const mainCategoryWithSub = await mainCategoryService.listCategoryWithSubCategory();
  const detailProduct = await productService.detailProductBySlugAsync(slug);
  const relatedProducts = await productService.listProductBySubCategoryName(
    { main_category: detailProduct.data.main_category, category: detailProduct.data.sub_category, productsPerPage: 4, pageNumber: 1 }
  );

  // const detailProduct = 
  // let [supportQuestions, types] = await Promise.all([
  //   fetchSupportQuestions(),
  //   fetchTypes(),
  // ]);
  return {
    props: {
      mainCategoryAndSubCategory: mainCategoryWithSub.data,
      detailProduct: detailProduct.data,
      relatedProducts: relatedProducts.data,
    },
  };
}

export default Product