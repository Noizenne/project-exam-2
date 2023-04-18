import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearch } from '../styles/Search.styles';

function Search() {

  return (
    <StyledSearch>
        <div className='searchBar'>
            <SearchIcon fontSize='large' sx={{color: "black"}}/>
            <input type="text" placeholder='Search for a venue...'/>
        </div>
        <div>
            <div>

            </div>
        </div>
    </StyledSearch>
  )
}

export default Search;