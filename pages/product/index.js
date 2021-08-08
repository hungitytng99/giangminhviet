import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'src/ui-source/Images/ImagesThumb';
import ContactPop from 'src/components/ContactPop';
import CardRelateProduct from 'src/ui-source/Card/CardRelateProduct';
import ProductCardLists from 'src/components/ProductCardLists';
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
          <Col xs={12} md={6} lg={5}>
            <h3 className="product__detail-name">
              Bộ bàn ăn NIKKO 1.8m
            </h3>
            <ImagesThumb listImages={imgList} />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="product__detail-title">
              Giá bán: 14.000.000
            </div>
            <div className="product__detail-info">
              <div className="product__detail-info-up">
                <div className="product__detail-info-up-item">
                  <div className="product__detail-info-title">Tình trạng</div>
                  <div className="product__detail-info-status">Còn hàng</div>
                </div>
                <div className="product__detail-info-up-item --right">
                  <div className="product__detail-info-title">Mã sản phẩm</div>
                  <div className="product__detail-info-status">BA07</div>
                </div>
              </div>
              <div className="product__detail-info-down">
                <div className="product__detail-info-down-item --right">
                  <div className="product__detail-info-title">Hãng sản xuất</div>
                  <div className="product__detail-info-status">NIKKO</div>
                </div>
                <div className="product__detail-info-down-item">
                  <div className="product__detail-info-title">Tình trạng</div>
                  <div className="product__detail-info-status">Còn hàng</div>
                </div>
              </div>
            </div>
            <div className="product__detail-contact">
              <div className="product__detail-contact-text">
                Liên hệ
              </div>
              <a href="/" className="product__detail-contact-link">
                Liên hệ ngay
              </a>
            </div>
            <div className="product__detail-info-detail">
              <span>THÔNG TIN VỀ SẢN PHẨM: </span>
              Bộ bàn ăn NIKKO được làm từ gỗ óc chó cao cấp. Với thiết kế thanh nhã, giữ được nguyên vẹn những vân gỗ tự nhiên vốn có. Bộ bàn ăn này chắc chắn sẽ giúp căn bếp của bạn thêm sang trọng hơn bao giờ hết. Tất cả các góc cạnh bàn và cạnh ghế đều được bo tròn đảm bảo an toàn cho người sử dụng. Điểm độc đáo của mẫu bàn này là chân bàn được thiết kế giống như chân kiềng 3 chân chắc chắn. Ghế ăn thì khá đơn giản với phần tựa lưng theo kiểu nan ngang, nệm bọc vải cao cấp.
            </div>

          </Col>
          <Col lg={3} className="hide-on-992">
            <a className="product__detail-title small">
              Sản phẩm liên quan
            </a>
            <CardRelateProduct />
          </Col>
        </Row>
        <Row className="product__related-product show-on-992">
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