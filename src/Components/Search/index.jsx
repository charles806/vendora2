import React from 'react';
import { Button } from '@mui/material';
import { CiSearch } from "react-icons/ci";
import '../Search/style.css';

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products"
        className="search-input"
      />
      <Button className="search-btn" 
      sx={{
        width: 35,
        height: 35,
        borderRadius: '50%',
        minWidth: 35,
      }}>
        <CiSearch className="search-icon" />
      </Button>
    </div>
  );
};

export default Search;
