import React from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Props {
}
const SearchBar: NextPage<Props> = (props) => {
    return (
        <div className="search-bar">
            <input placeholder="Search here..." type="text" className="search-bar__input" />
            <FontAwesomeIcon className="search-bar__search-icon" icon={["fas", "search"]} />
        </div>
    );
}

export default SearchBar;

