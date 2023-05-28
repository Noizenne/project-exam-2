import React from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteData from "../../api/DeleteData";
import { API_URL } from "../../api/constants/url";
import { API_bookings } from "../../api/constants/url";

function DeleteBooking({ item }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  async function Delete(id) {
    await DeleteData(`${API_URL}${API_bookings}/${id}`);
    window.location.reload();
  }
  return (
    <>
      <MoreVertIcon
        className="icon"
        sx={{ width: 20, height: 20 }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
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

export default DeleteBooking;
