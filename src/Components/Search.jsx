import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearch } from '../styles/Search.styles';

function Search({searchInput, onSearchInputChange, filteredVenues}) {

  function onChange(e) {
    onSearchInputChange(e.currentTarget.value)
  }

  return (
    <StyledSearch>
        <div className='searchBar'>
            <SearchIcon fontSize='large' sx={{color: "black"}}/>
            <input type="text" placeholder='Search for a venue...'
            onChange={onChange}
            value={searchInput}
            />
        </div>
        <div>
            <div>

            </div>
        </div>
    </StyledSearch>
  )
}

export default Search;