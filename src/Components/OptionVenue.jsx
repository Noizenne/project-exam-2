import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function OptionForVenue() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenModalEdit(true);
  const handleCloseModalEdit = () => setOpenModalEdit(false);

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
        <MoreVertIcon className="icon" sx={{ width: 30, height: 30 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseIcon}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
        <MenuItem onClick={handleOpen}>Delete</MenuItem>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal}>Delete</Box>
        </Modal>
        <Modal
          open={openModalEdit}
          onClose={handleCloseModalEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal}>Edit</Box>
        </Modal>
      </Menu>
    </>
  );
}

export default OptionForVenue;
