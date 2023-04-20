import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { StyledNav } from "../../../styles/Nav.styles";
import { API_URL } from "../../../api/constants/url";
import { API_venues } from "../../../api/constants/url";
import Search from "../../Search";


function Header() {

  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredVenues, setFilteredVenues] = useState([]);

  useEffect(() => {
    async function getVenues(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setVenues(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getVenues(API_URL + API_venues);
  }, []);

  function onSearchInputChange(value) {
    setSearchInput(value);
    const result = venues.filter((venue) => {
      return value && venue.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredVenues(result);
  }

  return (
    <header style={{ width: "70%", margin: "auto" }}>
      <StyledNav>
        <NavLink to="/">
          <img src="/whiteLogo.png" alt="Holidaze logo" />
        </NavLink>
        <div className="search">
        <Search filteredVenues={filteredVenues} searchInput={searchInput} onSearchInputChange={onSearchInputChange}/>
        <div className="searchItem">
          {filteredVenues.map((item) => (
            <Link to={`/venue/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
        </div>
        <Box
          sx={{
            color: `${({ theme }) => theme.colors.white}`,
            borderRadius: "15px",
          }}
        >
          <PermIdentityIcon
            fontSize="large"
            sx={{ color: `${({ theme }) => theme.colors.white}` }}
          />
        </Box>
      </StyledNav>
    </header>
  );
}

export default Header;
