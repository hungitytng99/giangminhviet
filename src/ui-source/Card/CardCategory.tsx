import React from 'react';
import { NextPage } from "next";
interface Props {
    category: string,
    more ?: string,
    image: string,
    href: string,
}
const CardCategory: NextPage<Props> = ( props ) => {
    const { category, more = "Xem sản phẩm", image, href } = props
    return (
        <a href={href} className="category-box-item">
            <div className="category-box-item__box">
                <div className="img-box">
                    <img src={image} alt="san pham" className="img" />
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