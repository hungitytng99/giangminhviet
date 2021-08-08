import React from 'react';
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
interface Props {

}
const CardCategory: NextPage<Props> = ({ }) => {
    return (
        <a href="/" className="category-box-item">
            <div className="category-box-item__box">
                <div className="category-box-item__img-box">
                    <img src={ImagesPath.PRODUCT_BANNER.src} alt="san pham" className="category-box-item__img" />
                </div>
                <div className="category-box-item__text">
                    <div className="category-box-item__text-header">
                        Phòng Khách
                    </div>
                    <div className="category-box-item__text-more">
                        Xem sản phẩm
                    </div>
                </div>
            </div>
        </a>

    );
}

export default CardCategory;