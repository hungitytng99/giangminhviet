import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import CardProduct from 'src/ui-source/Card/CardProduct';
import { product } from 'src/interface';
interface Props {
    listProduct: Array<product>,
}
const ProductCardLists: NextPage<Props> = ({ listProduct = [] }) => {
    console.log("{{ ", listProduct);
    
    return (
        <Row>
            {/* {
                (listProduct.length == 0) && 
                <div className="product-card-lists__empty">No result</div>
            } */}
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