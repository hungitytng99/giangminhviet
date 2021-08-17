import React, { useState } from 'react'
import { ImagesPath } from 'src/constants/ImagesPath';
import SearchBar from 'src/components/SearchBar'
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import CategoryCollapse from './CategoryCollapse';
import Link from 'next/link'
import Image from 'next/image'

const customStyles = {
    content: {
        top: '0',
        left: '0',
        right: '30%',
        bottom: '0',
        zIndex: 998,
        backgroundColor: '#fff',
        borderRadius: '0px',
        padding: '0px',
        borderTop: 'none',
        animation: 'move-right linear 0.3s',
        transform: 'translateX(0)',
    },
    overlay: {
        zIndex: 999,
        animation: 'appear linear 0.3s',
    }
};
Modal.setAppElement('#__next');

const Header = ({ listCategory = [] }) => {
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
                <div className="header-bars show-on-992" onClick={openCategoryModal}>
                    <FontAwesomeIcon className="header-bars__icon" icon={["fas", "bars"]} />
                </div>
                <div className="header-left">
                    <Link href='/'>
                        <a>
                            <div className="header-center__item-logo">
                                <Image layout="fill" objectFit='cover' src={ImagesPath.LOGO_NGANG} alt="logo giang minh viet vuong" />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="header-center hide-on-992">
                    <ul className="header-center__list">
                        <li className="header-center__item">
                            <Link href="/">
                                <a className="header-center__item-link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="header-center__item has-dropdown" onMouseOver={showDropDown} onMouseOut={hideDropDown}>
                            <Link href="/category">
                                <a className={isShowCategoryDropdown ? "header-center__item-link active" : "header-center__item-link"}>
                                    <span>Product </span>
                                    <FontAwesomeIcon className="header-center__item-down" icon={["fas", "sort-down"]} />
                                </a>
                            </Link>
                            <div className={isShowCategoryDropdown ? "product__dropdown" : "display-none"}>
                                <Row>
                                    {
                                        listCategory.map((category) => {
                                            return (
                                                <Col key={category.id} >
                                                    <div className="product__dropdown-category">
                                                        <Link href={`/category/${category.id}` || '/'}>
                                                            <a className="product__dropdown-category-title">
                                                                {category.name}
                                                            </a>
                                                        </Link>
                                                        <ul className="product__dropdown-category-list">
                                                            {category.sub_category.data.map((item) => {
                                                                return (
                                                                    item.name.toLowerCase() != "all" ?
                                                                        <li key={item.id} className="product__dropdown-category-item">
                                                                            <a href={`/${item.href}`}>
                                                                                {item.name}
                                                                            </a>
                                                                        </li> : ""
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                    <Col>
                                        <div className="product__dropdown-banner">
                                            <Image layout="fill" src='https://sc04.alicdn.com/kf/U6e5328c9063843039e28d3f724324e22Z/250965769/U6e5328c9063843039e28d3f724324e22Z.png' alt="giang minh viet product banner" ></Image>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className="header-center__item">
                            <a href="/about-us" className="header-center__item-link">
                                About us
                            </a>
                        </li>
                        <li className="header-center__item">
                            <a href="/contact" className="header-center__item-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <div className="hide-on-576">
                        <SearchBar />
                    </div>
                </div>
            </Container>
            <Modal
                isOpen={categoryIsOpen}
                onRequestClose={closeCategoryModal}
                style={customStyles}
            >
                <div className="category-mobile">
                    <div className="category-mobile__img-box">
                        <div></div>
                        <div className="category-mobile__img">
                            <Image layout="fill" src={ImagesPath.LOGO_NGANG} alt="logo giang minh viet" />
                        </div>
                        {/* <img src={ImagesPath.LOGO_NGANG.src} alt="logo giang minh viet" className="category-mobile__img" /> */}
                        <FontAwesomeIcon className="category-mobile__icon-close" icon={["fas", "times"]} onClick={closeCategoryModal} />
                    </div>
                    <ul className="category-mobile__list">
                        <li className="category-mobile__item">
                            <Link href="/">
                                <a className="category-mobile__item-link"> Home </a>
                            </Link>
                        </li>
                        <li className="category-mobile__item">
                            <CategoryCollapse categoryNavItem={{ label: "Product", href: "/product" }} listCategory={listCategory} />
                        </li>
                        <li className="category-mobile__item">
                            <Link href="/about-us">
                                <a className="category-mobile__item-link"> About </a>
                            </Link>
                        </li>
                        <li className="category-mobile__item">
                            <Link href="/contact">
                                <a className="category-mobile__item-link"> Contact </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}
export default Header;