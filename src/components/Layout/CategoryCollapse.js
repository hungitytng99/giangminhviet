import React, { useState } from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesPath } from 'src/constants/ImagesPath';
import { Collapse } from 'react-bootstrap';
import { category } from 'src/interface';


const CategoryCollapse = ({ categoryNavItem, listCategory }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="category-collapse">
            <div
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="category-collapse__header"
            >
                <div>{categoryNavItem.label}</div>
                <i className="category-collapse__down-icon fas fa-angle-down"></i>

            </div>
            <Collapse in={open}>
                <ul className="category-collapse__list">
                    {listCategory.map((itemCategory) => {
                        return (
                            <li key={itemCategory.id} className="category-collapse__item">
                                <a href={itemCategory.href} className="category-collapse__item-link">
                                    {itemCategory.name}
                                </a>
                                <ul className="category-collapse__item-content">
                                    {
                                        itemCategory.sub_category.data.map((sub_category_item) => {
                                            return (
                                                sub_category_item.name.toLowerCase() != "all" ?
                                                    <li key={sub_category_item.id} className="category-collapse__item-child">
                                                        <a href={sub_category_item.href} className="category-collapse__item-child-link">
                                                            {sub_category_item.name}
                                                        </a>
                                                    </li> : ""
                                            )
                                        })
                                    }
                                </ul>
                            </li>)
                    })}

                </ul>
            </Collapse>
        </div>
    );
}

export default CategoryCollapse;