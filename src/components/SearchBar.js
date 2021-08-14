import React, { useRef, useState } from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = (props) => {
    const [ searchParams, setSearchParams ] = useState("");
    const searchInput = useRef(null);

    const search = () => {
        if(searchInput.current.value) {
            location.href = "/search/" + searchInput.current.value;
        }
    }

    const searchKeyboard = (e) => {
        if(e.key == "Enter"){
            search();
        }
    }

    return (
        <div className="search-bar">
            <input ref={searchInput} onKeyDown={searchKeyboard} placeholder="Search here..." type="text" className="search-bar__input" />
            <FontAwesomeIcon onClick={search} className="search-bar__search-icon" icon={["fas", "search"]} />
        </div>
    );
}

export default SearchBar;

