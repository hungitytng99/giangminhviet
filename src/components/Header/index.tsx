import React, { useState } from 'react'
import { NextPage } from "next";
import Image from 'next/image'
import { ImagesPath } from 'src/constants/ImagesPath';
import Modal from 'react-modal';
import axios from 'axios';
import RankApi from 'src/api/rankApi';
interface Props {
    hasAuthBtn?: Boolean,
    hasCategory?: Boolean
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
Modal.setAppElement('#__next');
const Header: NextPage<Props> = ({ hasAuthBtn, hasCategory }) => {
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    function openCategoryModal() {
        setCategoryIsOpen(true);
    }
    function closeCategoryModal() {
        setCategoryIsOpen(false);
    }

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__content">
                        { hasCategory ? 
                            <div className="header__category" onClick={openCategoryModal}>
                                <Image src={ImagesPath.CATEGORY_ICON} alt="logo"></Image>
                            </div> : ""
                        }
                        <div className="left">
                            <a href="/" className="left__link">
                                <Image className="left__img" src={ImagesPath.LOGO} alt="logo"></Image>
                            </a>
                        </div>
                        { hasAuthBtn ?
                            <div className="right">
                                <div className="right__auth">
                                    <a href="/register" className="btn register__btn hide-on-480">Đăng kí</a>
                                    <a href="/login" className="btn login__btn">Đăng nhập</a>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
            <Modal
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
            </Modal>
        </>
    )
}
export default Header;