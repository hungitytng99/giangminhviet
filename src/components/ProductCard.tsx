import React from 'react';
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
interface Props {

}
const ProductCard: NextPage<Props> = ({ }) => {
    return (
        <div className="product-card__box">
            <a href="#" className="product-card">
                <div className="product-card__img-box">
                    <img src={ImagesPath.PRODUCT_BANNER.src} alt="" className="product-card__img" />
                    <div className="product-card__option">
                        <a href="/" className="product-card__option-item">Chi tiết</a>
                        <a href="/" className="product-card__option-item">Liên hệ</a>
                    </div>
                    <div className="product-card__discount">
                        16%
                    </div>
                </div>
                <div className="product-card__name text_over_flow_1">
                    Bàn gỗ trà tự nhiên 5CBT-136
                </div>
                <div className="product-card__price">
                    <div className="product-card__price-new">
                        6.590.000
                    </div>
                    <div className="product-card__price-old">
                        7.890.000
                    </div>
                </div>
            </a>

        </div>
    );
}

export default ProductCard;