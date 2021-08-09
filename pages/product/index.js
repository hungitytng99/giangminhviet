import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'src/ui-source/Images/ImagesThumb';
import ContactPop from 'src/components/ContactPop';
import CardRelateProduct from 'src/ui-source/Card/CardRelateProduct';
import ProductCardLists from 'src/components/ProductCardLists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = () => {
  const img = { width: 400, height: 250, zoomWidth: 500, img: ImagesPath.PRODUCT.src };
  const imgList = [{ src: ImagesPath.PRODUCT.src, alt: "" }, { src: ImagesPath.PRODUCT_2.src, alt: "" }, { src: ImagesPath.SP.src, alt: "" }]
  return (
    <>
      <Header />
      <ContactPop />
      <Container className="product">
        <Row>
          <Breadcrumb className="product__breadcrumb">
            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item href="/phong-bep">
              Phòng bếp
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bộ bàn ăn ABCXYZ</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="product__detail">
          <Col xs={12} md={6}>
            <ImagesThumb listImages={imgList} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product__detail-id">
              QWERTY
            </div>
            <div className="product__detail-name">
              Leather Pouf Cover, Moroccan pouf, Berber pouf, ottoman pouf, Moroccan ottoman leather pouf
            </div>
            <div className="product__detail-price">
              14,000,000
              <span>₫</span>
            </div>

            <div className="product__detail-contact">
              <a href="/" className="product__detail-contact-link">
                Contact
              </a>
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
              <span>Material: </span> material 1, material 2, material 3
            </div>
            <div className="product__detail-info-detail">
              <FontAwesomeIcon className="product__detail-detail-icon" icon={["fas", "info-circle"]} />
              <span>Detail: </span>
              Bộ bàn ăn NIKKO được làm từ gỗ óc chó cao cấp. Với thiết kế thanh nhã, giữ được nguyên vẹn những vân gỗ tự nhiên vốn có. Bộ bàn ăn này chắc chắn sẽ giúp căn bếp của bạn thêm sang trọng hơn bao giờ hết. Tất cả các góc cạnh bàn và cạnh ghế đều được bo tròn đảm bảo an toàn cho người sử dụng. Điểm độc đáo của mẫu bàn này là chân bàn được thiết kế giống như chân kiềng 3 chân chắc chắn. Ghế ăn thì khá đơn giản với phần tựa lưng theo kiểu nan ngang, nệm bọc vải cao cấp.
            </div>
          </Col>
        </Row>
        <Row className="product__related-product">
          <div className="special-product">
            <h2 className="special-product__text">
              <a href="/" className="special-product__link">Sản phẩm cùng loại</a>
            </h2>
          </div>
          <ProductCardLists />
        </Row>

      </Container>
    </>
  )
}
export default Product