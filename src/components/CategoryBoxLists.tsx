import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import CardCategory from 'src/ui-source/Card/CardCategory';
interface Props {

}
const CategoryBoxLists: NextPage<Props> = ({ }) => {
    return (
        <Row className="category-box-lists">
            <Col sm={6} md={4}>
                <CardCategory/>
            </Col>
            <Col sm={6} md={4}>
                <CardCategory/>
            </Col>
            <Col sm={6} md={4}>
                <CardCategory/>
            </Col>
        </Row>
    );
}

export default CategoryBoxLists;