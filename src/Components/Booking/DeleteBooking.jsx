import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteData from '../../api/DeleteData';
import { API_URL } from '../../api/constants/url';
import { API_bookings } from '../../api/constants/url';

function DeleteBooking({item}) {
    const {id} = item;
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
  
    async function Delete(id) {
        const res = await DeleteData(`${API_URL}${API_bookings}/${id}`)
        window.location.reload();
    }
    return (
      <>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon className="icon" sx={{ width: 20, height: 20 }} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseIcon}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => Delete(item.id)}>Delete</MenuItem>
         
        </Menu>
      </>
    );
}

export default DeleteBooking