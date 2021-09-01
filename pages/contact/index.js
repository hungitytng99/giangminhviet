import { Col, Collapse, Container, Row } from 'react-bootstrap';
import Head from 'next/head'
import ContactForm from "src/components/ContactForm";
import ContactPop from "src/components/ContactPop";
import Header from "src/components/Layout/Header";
import Footer from "src/components/Layout/Footer";
import { faEnvelope, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { mainCategoryService } from 'src/data-services/category';

const Search = (props) => {
    const { mainCategoryAndSubCategory } = props;
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Header listCategory={mainCategoryAndSubCategory} />
            <ContactPop />
            <Container>
                <Row className="contact-page">
                    <Col sm={12} md={6}>
                        <div className="contact-page__address">
                            <div className="contact-page__address-detail">
                                Company Contact Information
                            </div>
                            <ul className="contact-page__address-list">
                                <li className="contact-page__address-item">
                                    <FontAwesomeIcon className="contact-page__address-icon" icon={faMapMarked} />
                                    <span>Operational Address: </span>
                                    128 Ngo Khe, Phong Khe, Bac Ninh, Vietnam
                                </li>
                                <li className="contact-page__address-item">
                                    <FontAwesomeIcon className="contact-page__address-icon" icon={faPhoneAlt} />
                                    <span>Phone: </span>
                                    <Link href={{ pathname: 'tel:84966854224' }} >
                                        <a>
                                            <soan>+84 966 854 224</soan>
                                        </a>
                                    </Link>
                                </li>
                                <li className="contact-page__address-item">
                                    <FontAwesomeIcon className="contact-page__address-icon" icon={faEnvelope} />
                                    <span>Email: </span>
                                    <Link href={{ pathname: 'mailto:sales@giangminhviet.com' }} >
                                        <a>sales@giangminhviet.com</a>
                                    </Link>
                                </li>
                                <li className="contact-page__address-item">
                                    <span >Website on alibaba: </span>
                                    <Link href="https://giangminhviet.trustpass.alibaba.com">
                                        <a>
                                            giangminhviet.trustpass.alibaba.com
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-page__address-detail" style={{marginTop: '50px'}}>
                            Frequently Asked Questions
                        </div>
                        <div>
                            <div><strong>Question 1: Are you manufacturer? Why should I work with you?</strong></div>
                            <div><strong>Answer:</strong> Yes, we are manufacturer. Our products are made by ourselves. We control the quantity, quality and price.</div>
                            <div><strong>Question 2. Can I order samples? How samples sent?</strong></div>
                            <div><strong>Answer:</strong> Yes, samples are available! Samples in small pieces are carefully packed and shipped by DHL FEDEX TNT in order to minimize shipping time with affordable cost for customers!</div>
                            <div><strong>Question 3: How about OEM?</strong></div>
                            <div><strong>Answer:</strong> Fully accept customize production according to customer&apos;s requirement of brand color / logo etc.</div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="contact-page__form">
                            <ContactForm />
                        </div>
                    </Col>
                </Row>
                <Row className="contact-page__keyword">
                    <span style={{ fontWeight: 700 }}>Keywords: </span><span>home decor,wall hanging,wall decor,seagrass basket,wall hangings for home decor,wall hangings for home decor,Placemat,placemats for dining table,placemat woven,seagrass placemat,water hyacinth placemat,natural placemat,wicker charger plates
                        ,wall mirror decorative,rattan mirror,rattan furniture,vintage mirror,hand mirror,bamboo tray,bamboo lamp,bamboo basket,bamboo plates</span>
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