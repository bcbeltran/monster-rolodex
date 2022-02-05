import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({handleChange}) => {
    return (
        <div>

            <input
                type="search"
                placeholder="Search for a monster"
                onChange={handleChange}
            />
        </div>
	);
};