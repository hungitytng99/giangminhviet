import React from 'react';
import { NextPage } from "next";
import { ImagesPath } from 'src/constants/ImagesPath';
import { Col, Row } from 'react-bootstrap';
interface Props {

}
const CardRelateProduct: NextPage<Props> = ({ }) => {
    return (
        <a href="/" className="card-relate-product__box">
            <Row className="card-relate-product">
                <Col lg={4} className="card-relate-product__col">
                    <div className="img-box">
                        <img src={ImagesPath.SP.src} alt="" className="img" />
                    </div>
                </Col>
                <Col lg={8} className="card-relate-product__col col">
                    <div className="card-relate-product__name text_over_flow_2">
                        Tên sản phẩm liên quan đến sản phẩm nàyyy
                    </div>
                    <div className="card-relate-product__price">
                        13.000.000
                    </div>
                </Col>
            </Row>
        </a>

    );
}

export default CardRelateProduct;