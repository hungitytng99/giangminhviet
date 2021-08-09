import React from 'react';
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
interface Props {
    category: string,
    more ?: string,
}
const CardCategory: NextPage<Props> = ( props ) => {
    const { category, more } = props
    return (
        <a href="/" className="category-box-item">
            <div className="category-box-item__box">
                <div className="category-box-item__img-box">
                    <img src={ImagesPath.PRODUCT_BANNER.src} alt="san pham" className="category-box-item__img" />
                </div>
                <div className="category-box-item__text">
                    <div className="category-box-item__text-header">
                        {category}
                    </div>
                    <div className="category-box-item__text-more">
                        {more}
                    </div>
                </div>
            </div>
        </a>

    );
}

export default CardCategory;