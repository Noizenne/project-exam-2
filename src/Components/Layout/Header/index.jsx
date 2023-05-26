import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { StyledNav } from "../../../styles/Nav.styles";
import { API_URL } from "../../../api/constants/url";
import { API_venues } from "../../../api/constants/url";
import Register from "../../Register";
import Login from "../../Login";
import { load } from "../../../storage";

function AccountLoggedIn() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openModalLogin, setOpenModalLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenModalLogin(true);
  const handleCloseModalLogin = () => setOpenModalLogin(false);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const registerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f6f6f6",
    border: "1px solid #0031DD",
    boxShadow: 24,
    borderRadius: 10,
  };

  function handleLogout() {
    localStorage.clear();
    window.location.replace("/");
  }

  const profile = load("profile");
  const userName = profile.name;

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <PermIdentityIcon fontSize="large" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseIcon}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={`/profile/${userName}`}>
          <MenuItem>Profile</MenuItem>
        </Link>

        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </>
  );
}

function AccountMenu() {
  const username = localStorage.getItem("username");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openModalLogin, setOpenModalLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenModalLogin(true);
  const handleCloseModalLogin = () => setOpenModalLogin(false);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const registerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f6f6f6",
    border: "1px solid #0031DD",
    boxShadow: 24,
    borderRadius: 10,
  };

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <PermIdentityIcon fontSize="large" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseIcon}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenLogin}>Login</MenuItem>
        <MenuItem onClick={handleOpen}>Register</MenuItem>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={registerModal}>
            <Register />
          </Box>
        </Modal>
        <Modal
          open={openModalLogin}
          onClose={handleCloseModalLogin}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={registerModal}>
            <Login />
          </Box>
        </Modal>
      </Menu>
    </>
  );
}
function Header() {
  const token = localStorage.getItem("token");

  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

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
          <div>{!token ? <AccountMenu /> : <AccountLoggedIn />}</div>
        </div>
      </StyledNav>
    </header>
  );
}

export default Header;
