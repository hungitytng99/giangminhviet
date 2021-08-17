import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import CardProduct from 'src/ui-source/Card/CardProduct';
import { product } from 'src/interface';
interface Props {
    listProduct: Array<product>,
}
const ProductCardLists: NextPage<Props> = ({ listProduct = [] }) => {
    
    return (
        <Row>
            {
                listProduct.map((product) => {
                    return (
                        <Col key={product.id} xs={6} md={3}>
                            <CardProduct product={product} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ProductCardLists;