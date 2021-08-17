import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import { ImagesPath } from 'src/constants/ImagesPath';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="footer__contact">
                            <div className="footer__contact-title">Address</div>
                            <ul className="footer__contact-list">
                                <li key="1" className="footer__contact-item">
                                    <i className="footer__contact-item-icon fa fa-home"></i>
                                    <div className="footer__contact-text">
                                        <div className="footer__contact-text-name">
                                            Factory 1: Ninh Sở - Thường Tín - Hà Nội
                                        </div>
                                        <div className="footer__contact-text-name">
                                            Factory 2: Phú Nghĩa - Chương Mỹ - Hà Nội
                                        </div>
                                    </div>
                                </li>
                                <li key="2" className="footer__contact-item">
                                    <i className="footer__contact-item-icon fa fa-mobile"></i>
                                    <div className="footer__contact-text">
                                        +84 972874229
                                    </div>
                                </li>
                                <li key="3" className="footer__contact-item">
                                    <i className="footer__contact-item-icon fa fa fa-envelope"></i>
                                    <div className="footer__contact-text">
                                        sales@tienphonghandicrafts.com
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer__alibaba">
                            <Link href="https://tienphonghandicrafts.trustpass.alibaba.com/" passHref>
                                <a className="footer__img">
                                    <Image objectFit='contain' layout="fill" src="http://bizweb.dktcdn.net/thumb/medium/100/390/639/themes/770475/assets/logocuoitrang.png?1594051192591" alt="alibaba" />
                                </a>
                            </Link>

                        </div>
                    </Col>
                    <Col lg={4} md={4} className="footer-hidden-mobile">
                        <div className="footer__connect">
                            <div className="footer__connect-title">Contact with us</div>
                            <ul className="footer__connect-list">
                                <li key="9" className="footer__connect-item">
                                    <Link href={{ pathname: 'tel:84966854224' }} >
                                        <a target="_blank">
                                            <i className="footer__connect-phone fas fa-phone-alt"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li key="10" className="footer__connect-item">
                                    <Link href={{ pathname: 'mailto:haunkbn99@gmail.com' }} >
                                        <a target="_blank">
                                            <i className="footer__connect-mail fas fa-envelope"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li key="11" className="footer__connect-item">
                                    <Link href={{ pathname: 'https://zalo.me/0966854224' }} target="_blank" passHref>
                                        <a target="_blank" className="footer__img-zalo">
                                            <Image objectFit="contain" layout="fill" src={ImagesPath.ZALO_FOOTER.src} alt="zalo" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="footer__coppy-right">&#169; Giang Minh Việt Company, {new Date().getFullYear()} </p>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;