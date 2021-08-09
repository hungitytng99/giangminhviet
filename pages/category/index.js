import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import ProductCardLists from 'src/components/ProductCardLists';
import ContactPop from 'src/components/ContactPop';
import Select from 'react-select'

const Category = (props) => {
    const filterPrice = [
        { value: 'All', label: 'Tất cả' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const filterSort = [
        { value: 'new', label: 'Newest' },
        { value: 'old', label: 'Oldest' }
    ]
    const filterMaterial = [
        { value: 'material-first', label: 'Material-1' },
        { value: 'material-second', label: 'Material-2' }
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
                    <div className="category-page__banner-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum? Dignissimos dolorem temporibus quasi quam corrupti earum hic suscipit obcaecati. Esse hic iusto quasi officia unde quas corporis in praesentium?
                    </div>

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
                                placeholder="Category"
                            />
                        </div>
                        <div className="category-page__filter-field">
                            <Select
                                options={filterPrice}
                                placeholder="Material"
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
                                    options={filterSort}
                                    placeholder="Sort"
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