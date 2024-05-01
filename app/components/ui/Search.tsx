import React from 'react';
import { SearchIcon } from '@/public/icons';


const Search = () => {
    return (
        <div className="p-2 w-[300px] bg-gray-100 rounded-2xl flex flex-row items-center mx-auto">
            <span className="p-2"><SearchIcon /></span>
            <input type="text" placeholder="Search..." className="outline-none w-400 border-b-2 border-gray-100 focus:border-gray-500 bg-gray-100"/>
        </div>
    );
};

export default Search;