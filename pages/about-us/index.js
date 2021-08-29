import { Col, Collapse, Container, Row } from 'react-bootstrap';
import Head from 'next/head'
import ContactPop from "src/components/ContactPop";
import Header from "src/components/Layout/Header";
import Footer from "src/components/Layout/Footer";
import { mainCategoryService } from 'src/data-services/category';
import Image from 'next/image'

const Search = (props) => {
    const { mainCategoryAndSubCategory } = props;
    return (
        <>
            <Head>
                <title>About us</title>
            </Head>
            <Header listCategory={mainCategoryAndSubCategory} />
            <ContactPop />
            <Container>
                <Row className="contact-page">
                    <Col sm={12} md={6}>
                        <div className="contact-page__address">
                            <div className="contact-page__address-detail" style={{ marginBottom: '6px' }}>
                                Company Information
                            </div>
                            <ul className="contact-page__address-list">
                                <li className="about-us__text">
                                    <strong>GIANG MINH VIET COMPANY LIMITED</strong> is one of the Vietnamese manufacturers of
                                    handicrafts over a past few decades. Our handwoven factory covers 10.000-15.000m2,
                                    which specializes in producing different kinds of natural material such as
                                    water hyacinth, rattan, bamboo, seagrass, corn and palm leaves. With strict
                                    quality control system, our products have been exported to over 20 countries
                                    and areas such as: USA, Canada, UK, France, Germany, Australia, New Zealand,
                                    Korea, China, Iran, Saudi Arabia, India, Philippines. We offer OEM service and
                                    willing to support customer's own design. With our attempt to export Vietnamese handmade
                                    products outbound over the years, GIANG MINH VIET CO., LTD is a trustworthy company
                                    where you can find a wide variety range of products with high quality and attractive
                                    design by sophisticated workmanships but reasonable price! Furthermore, with an
                                    enthusiastic and professional working team, we will definitely provide you the best
                                    service and after-service ever.
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="about-us__img-box">
                            <div className="about-us__img">
                                <Image layout="fill" objectFit='cover' src="https://sc04.alicdn.com/kf/U233374c9d196448b8304b8f8337cb7892/250965769/U233374c9d196448b8304b8f8337cb7892.jpg?fbclid=IwAR2owfUrWjI6UX4aVTjoYfWzXbmIywy_q6A219_7a5K3CdOYyLyXGFRhWBc" alt="logo giang minh viet vuong" />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export async function getServerSideProps(context) {
    const mainCategoryWithSub = await mainCategoryService.listCategoryWithSubCategory();

    return {
        props: {
            mainCategoryAndSubCategory: mainCategoryWithSub.data,
        },
    };
}
export default Search