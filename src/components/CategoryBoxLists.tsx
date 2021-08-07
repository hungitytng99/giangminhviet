import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import CategoryBoxItem from './CategoryBoxItem';
import ProductCard from './ProductCard';
interface Props {

}
const CategoryBoxLists: NextPage<Props> = ({ }) => {
    return (
        <Row className="category-box-lists">
            <Col sm={6} md={4}>
                <CategoryBoxItem/>
            </Col>
            <Col sm={6} md={4}>
                <CategoryBoxItem/>
            </Col>
            <Col sm={6} md={4}>
                <CategoryBoxItem/>
            </Col>
        </Row>
    );
}

export default CategoryBoxLists;