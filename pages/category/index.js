import { NextPage } from 'next';
import { Carousel } from 'react-responsive-carousel';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import CategoryBoxLists from 'src/components/CategoryBoxLists';
import ProductCardLists from 'src/components/ProductCardLists';
import Contact from 'src/components/ContactPop';
import ContactPop from 'src/components/ContactPop';
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const Category = (props) => {
    const filterPrice = [
        { value: 'All', label: 'Tất cả' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <Header />
            <ContactPop />
            <Container className="category-page">
                <Row>
                    <Breadcrumb className="product__breadcrumb">
                        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Phòng ngủ
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className="category-page__banner">
                    <img src={ImagesPath.PHONG_NGU.src} alt="phong ngu" />
                </Row>
                <div className="category-page__filter">
                    <div className="category-page__filter-header">
                        Bộ lọc sản phẩm
                    </div>
                    <div className="category-page__filter-desc">
                        Giúp lọc nhanh sản phẩm bạn tìm kiếm
                    </div>
                    <div className="category-page__filter-box">
                        <div className="category-page__filter-field">
                            <Select
                                options={filterPrice}
                                placeholder="Lọc giá"
                            />
                        </div>
                        <div className="category-page__filter-field">
                            <Select
                                options={filterPrice}
                                placeholder="Loại"
                            />
                        </div>
                    </div>
                    <div className="category-page__title-box">
                        <div className="category-page__title">
                            Phòng khách
                        </div>
                        <div className="category-page__sort">
                            <div className="category-page__sort-select">
                                <Select
                                    options={filterPrice}
                                    placeholder="Sắp xếp"
                                />
                            </div>
                        </div>
                    </div>
                    <ProductCardLists />
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
export default Category