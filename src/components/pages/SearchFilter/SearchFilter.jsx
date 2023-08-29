import React from 'react';
import './search.scss';
import {BsSearch} from 'react-icons/bs'
import searchbg from '../../../assets/searchFilter/bg1.jpg'

const SearchFilter = () => {
  return (
    <div className='search'>
        <img src={searchbg} alt="" />

        <div class="bg-text">
  <h1>Search for products & find verified sellers </h1>
  <input className="searchContainer" placeholder='Enter your product'>

  </input>
  <BsSearch className='searchIcon' color='black'/>
    </div>
    </div>


  )
}

export default SearchFilter