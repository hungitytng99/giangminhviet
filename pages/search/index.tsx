import { NextPage } from 'next';
import { Carousel } from 'react-responsive-carousel';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBoxLists from 'src/components/CategoryBoxLists';
import ProductCardLists from 'src/components/ProductCardLists';
import Contact from 'src/components/ContactPop';
import ContactPop from 'src/components/ContactPop';
interface Props {
}
const Search: NextPage<Props> = (props: any) => {
    return (
        <>
            <Header />
            <ContactPop />
            <Container>
                <Row>
                    <div className="search">
                        <div className="search__notify">
                            Không có bất ký kết quả nào phù hợp với từ khóa "<span>aaa</span>"
                        </div>
                        <div className="search__notify">
                            Có <span className="amount">4</span> kết quả tìm kiếm phù hợp với từ khóa "<span className="keyword">aaa</span>"
                        </div>
                        <div className="search__box">
                            <input className="search__box-input" placeholder="Tìm kiếm..."></input>
                            <button className="search__box-button">
                                Tìm kiếm
                            </button>
                        </div>
                        <ProductCardLists />
                    </div>
                </Row>

                <Row className="search__other-result">
                    <div className="special-product">
                        <h2 className="special-product__text">
                            <a href="/" className="special-product__link">Sản phẩm khác</a>
                        </h2>
                    </div>
                    <ProductCardLists />
                </Row>
            </Container>
        </>
    )
}
export async function getStaticProps() {

    return {
        props: {}, // will be passed to the page component as props
    }
}
export default Search