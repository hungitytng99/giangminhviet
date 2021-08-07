import React, { useState } from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesPath } from 'src/constants/ImagesPath';
import { Collapse } from 'react-bootstrap';

interface Props {
    parent: any,
    children: any,
}
const CategoryCollapse: NextPage<Props> = ({ parent, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="category-collapse">
            <div
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="category-collapse__header"
            >
                <div>{parent.label}</div>
                <i className="category-collapse__down-icon fas fa-angle-down"></i>

            </div>
            <Collapse in={open}>
                <ul className="category-collapse__list">
                    {children.map((item: any) => {
                        return (
                            <li key={item.id} className="category-collapse__item">
                                <a href={item.href} className="category-collapse__item-link">
                                    {item.title}
                                </a>
                                <ul className="category-collapse__item-content">
                                    {
                                        item.child.map((child : any) => {
                                            return (
                                                <li key={child.id} className="category-collapse__item-child">
                                                    <a href={child.href} className="category-collapse__item-child-link">
                                                        {child.label}
                                                    </a>
                                                </li>
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