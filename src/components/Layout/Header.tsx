import React, { useState } from 'react'
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
import SearchBar from 'src/components/SearchBar'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {

}
const customStyles = {
    content: {
        top: '0',
        left: '0',
        right: '30%',
        bottom: '0',
        zIndex: 998,
        backgroundColor: '#fff'
    },
    overlay: {
        zIndex: 999,
    }
};
const Header: NextPage<Props> = ({ }) => {
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    const [isShowCategoryDropdown, setIsShowCategoryDropdown] = useState(false);
    function openCategoryModal() {
        setCategoryIsOpen(true);
    }
    function closeCategoryModal() {
        setCategoryIsOpen(false);
    }
    const showDropDown = () => {
        setIsShowCategoryDropdown(true);
    }
    const hideDropDown = () => {
        setIsShowCategoryDropdown(false);
    }
    return (
        <div className="header">
            <Container className="header-container">
                <div className="header-left">
                    <a href="#" className="header-left__logo">
                        <img className="header-center__item-logo" src={ImagesPath.LOGO_NGANG.src} alt="logo giang minh viet" />
                    </a>
                </div>
                <div className="header-center">
                    <ul className="header-center__list">
                        <li className="header-center__item">
                            <a href="#" className="header-center__item-link">
                                Trang chủ
                            </a>
                        </li>
                        <li className="header-center__item has-dropdown" onMouseOver={showDropDown} onMouseOut={hideDropDown}>
                            <a href="#" className={isShowCategoryDropdown ? "header-center__item-link active" : "header-center__item-link"}>
                                <span>Sản phẩm </span>
                                <FontAwesomeIcon className="header-center__item-down" icon={["fas", "sort-down"]} />
                            </a>
                            <div className={isShowCategoryDropdown ? "product__dropdown" : "display-none"}>
                                <Row>
                                    <Col>
                                        <div className="product__dropdown-category">
                                            <div className="product__dropdown-category-title">
                                                Phòng ngủ
                                            </div>
                                            <ul className="product__dropdown-category-list">
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                            </ul>
                                            <div className="product__dropdown-category-title is-only">
                                                Sản phẩm khuyến mãi
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="product__dropdown-category">
                                            <div className="product__dropdown-category-title">
                                                Phòng ngủ
                                            </div>
                                            <ul className="product__dropdown-category-list">
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                            </ul>
                                            <div className="product__dropdown-category-title is-only">
                                                Sản phẩm khuyến mãi
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="product__dropdown-category">
                                            <div className="product__dropdown-category-title">
                                                Phòng ngủ
                                            </div>
                                            <ul className="product__dropdown-category-list">
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                                <li className="product__dropdown-category-item">
                                                    Phòng ngủ hiện đại
                                                </li>
                                            </ul>
                                            <div className="product__dropdown-category-title is-only">
                                                Sản phẩm khuyến mãi
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <a href="#">
                                            <img className="product__dropdown-banner" src={ImagesPath.PRODUCT_BANNER.src} alt="giang minh viet product banner" />

                                        </a>
                                    </Col>

                                </Row>
                            </div>
                        </li>
                        <li className="header-center__item">
                            <a href="#" className="header-center__item-link">
                                Giới thiệu
                            </a>
                        </li>
                        <li className="header-center__item">
                            <a href="#" className="header-center__item-link">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <SearchBar />
                </div>
            </Container>
            {/* <Modal
                isOpen={categoryIsOpen}
                onRequestClose={closeCategoryModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="category-mobile">
                    <div className="category-mobile__img">
                        <Image src={ImagesPath.LOGO} alt="logo" />
                    </div>
                </div>
            </Modal> */}
        </div>
    )
}
export default Header;