import React, { Dispatch, SetStateAction } from "react";
import logo from './search.png';
import './searchBox.css';

interface IProps {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}
const SearchBox:React.FC<IProps> = ({ searchValue, setSearchValue }) => {
    
    const handleSearchValue = (event : React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value)
    }
    return (
        <div className="search-box">
            <img src={ logo } className="search-logo"/>
            <input type="text"
                className='search'
                placeholder='Search here...'
                value={searchValue}
                onChange ={ handleSearchValue}
            /> 
        </div>
    )
}

export default SearchBox