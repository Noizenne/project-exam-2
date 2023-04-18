import React from 'react'
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { StyledNav } from '../../../styles/Nav.styles';
import Search from '../../Search';

function Header() {
  return (
    <header style={{ width: "70%", margin: "auto"}}>
        <StyledNav >
          <NavLink to="/"><img src='/logo.svg' alt='Holidaze logo'/></NavLink>
          <Search />
          <Box sx={{ color:`${({theme}) => theme.colors.white}`, borderRadius: '15px' }}>
          <PermIdentityIcon fontSize='large' sx={{color: `${({theme}) => theme.colors.white}`}}/>
          </Box>
        </StyledNav>
    </header>
  )
}

export default Header;