import React from "react";
import { Link } from "react-router-dom";
import { StyledVenueCard } from "../styles/VenueCard.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OptionForVenue from "./OptionVenue";

function UsersVenues({ item }) {
  const { name, id, media } = item;

  return (
    <StyledVenueCard key={id}>
      <img
        src={media[0]}
        alt={name}
        onError={(event) => {
          event.target.src = "/noImg.jpg";
          event.onError = null;
        }}
      />
      <div className="options">
        <Link to={`/venue/${id}`}>
          {name}
        </Link>
        <OptionForVenue item={item}/>
      </div>
    </StyledVenueCard>
  );
}

export default UsersVenues;
