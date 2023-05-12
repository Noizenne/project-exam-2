import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { StyledNav } from "../../../styles/Nav.styles";
import { API_URL } from "../../../api/constants/url";
import { API_venues } from "../../../api/constants/url";

function Header() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return (
    <header style={{ width: "70%", margin: "auto" }}>
      <StyledNav>
        <NavLink to="/">
          <img src="/logo.png" alt="Holidaze Logo" />
        </NavLink>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
        </div>
      </StyledNav>
    </header>
  );
}

export default Header;
