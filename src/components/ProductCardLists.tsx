import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import CardProduct from 'src/ui-source/Card/CardProduct';
interface Props {

}
const ProductCardLists: NextPage<Props> = ({ }) => {
    return (
        <Row>
            <Col xs={6} md={3}>
                <CardProduct />
            </Col>
            <Col xs={6} md={3}>
                <CardProduct />
            </Col>
            <Col xs={6} md={3}>
                <CardProduct />
            </Col>
            <Col xs={6} md={3}>
                <CardProduct />
            </Col>
        </Row>
    );
}

export default ProductCardLists;