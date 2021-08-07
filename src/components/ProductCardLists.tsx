import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
interface Props {

}
const ProductCardLists: NextPage<Props> = ({ }) => {
    return (
        <Row>
            <Col xs={6} md={3}>
                <ProductCard />
            </Col>
            <Col xs={6} md={3}>
                <ProductCard />
            </Col>
            <Col xs={6} md={3}>
                <ProductCard />
            </Col>
            <Col xs={6} md={3}>
                <ProductCard />
            </Col>
        </Row>
    );
}

export default ProductCardLists;