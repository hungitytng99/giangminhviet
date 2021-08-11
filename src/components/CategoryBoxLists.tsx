import React from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import CardCategory from 'src/ui-source/Card/CardCategory';
import { category } from 'src/interface';
interface Props {
    listMainCategory: Array<category>,
}
const CategoryBoxLists: NextPage<Props> = (props) => {
    const { listMainCategory = [{
        id: 0,
        name: "",
        image: "",
        href: "/"
    }] } = props;
    return (
        <Row className="category-box-lists">
            {
                listMainCategory.map((mainCategory) => {
                    return (
                        <Col key={mainCategory.id} sm={6} md={4}>
                            <CardCategory category={mainCategory.name} image={mainCategory.image} href={mainCategory.name} />
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default CategoryBoxLists;