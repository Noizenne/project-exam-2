import React from "react";
import { useEffect } from "react";
import useApi from "../../hooks/useAPI";
import { API_profiles } from "../../api/constants/url";
import { load } from "../../storage";
import { StyledProfile } from "../../styles/Profile.styles";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AddIcon from "@mui/icons-material/Add";
import UsersBooking from "../../components/Booking/UsersBooking";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import UsersVenues from "../../components/UsersVenues";
import AddVenue from "../../components/AddVenue";
import EditAvatar from "../../components/EditAvatar";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/Error/Error";

function ProfilePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openAvatar, setOpenAvatar] = React.useState(false);
  const handleOpenAvatar = () => setOpenAvatar(true);
  const handleCloseAvatar = () => setOpenAvatar(false);

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

  const profile = load("profile");
  const userName = profile.name;
  const avatar = load("avatar");

  const { data, isLoading, isError } = useApi(
    `${API_profiles}/${userName}?_venues=true&_bookings=true`
  );

  const { venueManager, bookings = [], venues = [] } = data;

  useEffect(() => {
    document.title = `Holidaze | ${userName}`;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <ErrorMessage />;
    }
  }, []);

  function AddAVenue() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseIcon = () => {
      setAnchorEl(null);
    };

    const modal = {
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
          <AddIcon fontSize="large" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseIcon}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleOpen}>Add a venue</MenuItem>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modal}>
              <AddVenue venues={venues} />
            </Box>
          </Modal>
        </Menu>
      </>
    );
  }
  return (
    <StyledProfile>
      <div>Back</div>
      <div className="container">
        <div className="profileInfo">
          {!avatar ? (
            <img className="profileImg" src="/placeholder.jpg" alt="Profile image"></img>
          ) : (
            <img className="profileImg" src={avatar.avatar} alt="Profile image"></img>
          )}
          <Button onClick={handleOpenAvatar}>Edit avatar</Button>
          <Modal
            open={openAvatar}
            onClose={handleCloseAvatar}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={registerModal}>
              <EditAvatar data={data} />
            </Box>
          </Modal>
          <p>{data.name}</p>
          {!venueManager ? "" : <p>VenueManager</p>}
          <p>{data.email}</p>
        </div>
        <div>
          {venueManager ? (
            <div className="bookings">
              <div className="add">
                <div className="title">
                  <div className="icon">
                    <MapsHomeWorkIcon sx={{ width: 45, height: 40 }} />
                  </div>
                  <h3>Your venues</h3>
                </div>
                <div className="addVenue">
                  <AddAVenue />
                </div>
              </div>
              <ul>
                {venues.map((item) => (
                  <UsersVenues key={item.id} item={item} />
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="bookings">
            <div className="title">
              <div className="icon">
                <ImportContactsIcon sx={{ width: 45, height: 40 }} />
              </div>
              <h3>Your trips</h3>
            </div>

            <div className="booking">
              <ul>
                {bookings.map((item) => (
                  <UsersBooking key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
}

export default ProfilePage;
