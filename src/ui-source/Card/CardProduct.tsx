import React, { SyntheticEvent, useRef, useState } from 'react';
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'src/components/ContactForm';
import Modal from 'react-modal';
import { product } from 'src/interface';

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
    detailText?: string,
    contactText?: string,
    discount?: string,
    product: product,
}

Modal.setAppElement('#__next');
const defaultProduct = {
    id: 0,
    title: "",
    description: "",
    main_image: "",
    all_image: "",
    price: "",
    material: "",
    sub_category: "",
    main_category: "",
    slug: "/"
}
const CardProduct: NextPage<Props> = (props) => {
    const { detailText = "Detail", product = defaultProduct,
        contactText = "Contact", discount = 0 } = props;
    const [contactModal, setContactModal] = useState(false);
    const [productName, setProductName] = useState("");

    const showContactModal = (e: any) => {
        e.stopPropagation();
        setProductName(e.currentTarget.dataset.productname);
        setContactModal(true);
    }

    const hideContactModal = () => {
        setContactModal(false);
    }

    const closeContactForm = (e: SyntheticEvent) => {
        e.preventDefault();
        setContactModal(false);
    }

    const redirectToDetailProduct = (e: any) => {
        location.replace("/" + e.currentTarget.dataset.href);
    }

    return (
        <div className="card-product__box">
            <div onClick={redirectToDetailProduct} data-href={product.slug ? product.slug : "/"} className="card-product">
                <div className="card-product__img-box">
                    <div className="img-box">
                        <img src={product.main_image} alt={product.title} className="card-product__img img" />
                    </div>
                    <div className="card-product__option">
                        <a href={`/${product.slug}`} className="card-product__option-item">{detailText}</a>
                        <div onClick={showContactModal} data-productname={product.title} className="card-product__option-item">{contactText}</div>
                    </div>
                    {
                        discount != 0 &&
                        <div className="card-product__discount">
                            {discount}
                        </div>
                    }
                </div>
                <div className="card-product__name text_over_flow_1">
                    {product.title}
                </div>
                <div className="card-product__price">
                    {
                        product.price &&
                        <div className="card-product__price-new">
                            {product.price}
                        </div>
                    }
                </div>
            </div>
            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                className="Modal"
                overlayClassName="Overlay"
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
                    <ContactForm closeContact={closeContactForm} productName={productName} />
                </div>
            </Modal>
        </div>
    );
}

export default CardProduct;