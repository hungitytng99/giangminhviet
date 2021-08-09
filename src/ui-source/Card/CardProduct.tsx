import React, { SyntheticEvent, useRef, useState } from 'react';
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'src/components/ContactForm';
import Modal from 'react-modal';

const customStyles = {
    content: {
        inset: '50% 0px 0px 50%',
        zIndex: 999,
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '20px',
        border: '1px solid #eaeaea',
        animation: 'appear linear 0.3s',
        transform: 'translateX(-50%) translateY(-50%)',
    },
    overlay: {
        zIndex: 999,
        animation: 'appear linear 0.3s',
    }
};

interface Props {
}

Modal.setAppElement('#__next');
const CardProduct: NextPage<Props> = (props) => {
    const [contactModal, setContactModal] = useState(false);
    const showContactModal = (e: SyntheticEvent) => {
        e.stopPropagation();
        setContactModal(true);
    }
    const hideContactModal = () => {
        setContactModal(false);
    }

    const closeContactForm = (e : SyntheticEvent) => {
        e.preventDefault();
        setContactModal(false);
    }
    return (
        <div className="card-product__box">
            <div className="card-product">
                <div className="card-product__img-box">
                    <img src={ImagesPath.PRODUCT_BANNER.src} alt="" className="card-product__img" />
                    <div className="card-product__option">
                        <a href="/" className="card-product__option-item">Chi tiết</a>
                        <div onClick={showContactModal} className="card-product__option-item">Liên hệ</div>
                    </div>
                    <div className="card-product__discount">
                        16%
                    </div>
                </div>
                <div className="card-product__name text_over_flow_1">
                    Bàn gỗ trà tự nhiên 5CBT-136
                </div>
                <div className="card-product__price">
                    <div className="card-product__price-new">
                        6.590.000
                    </div>
                    <div className="card-product__price-old">
                        7.890.000
                    </div>
                </div>
            </div>
            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                style={customStyles}
            >
                <div className="contact-form__header">
                    <img className="contact-form__header-img" src={ImagesPath.LOGO_VUONG.src} alt="logo giang minh viet vuong" />
                    <div className="contact-form__header-text">
                        Send your message to us
                        <span>We'll contact you as soon as possible</span>
                    </div>
                    <div onClick={hideContactModal} className="contact-form__header-close">
                        <FontAwesomeIcon icon={["fas", "times"]} />
                    </div>
                </div>
                <div className="contact-form__form">
                    <ContactForm closeContact={closeContactForm} product="Giường ngủ hiện đại" />
                </div>
            </Modal>
        </div>
    );
}

export default CardProduct;