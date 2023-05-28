import React from "react";
import { StyledVenueCard } from "../styles/VenueCard.styles";
import { Link } from "react-router-dom";

function VenueCard({ venue }) {
  const { id, name, price, media } = venue;

  return (
    <StyledVenueCard key={id}>
      <Link to={`/venue/${id}`}>
        <img
          src={media}
          alt={name}
          onError={(event) => {
            event.target.src = "/noImg.jpg";
            event.onError = null;
          }}
        />
        <div>
          <h3>{name}</h3>
          <div>
            <p>${price}/night</p>
          </div>
          <div></div>
        </div>
      </Link>
    </StyledVenueCard>
  );
}

export default VenueCard;
