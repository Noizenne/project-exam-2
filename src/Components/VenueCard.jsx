import React from 'react'
import { StyledVenueCard } from '../styles/VenueCard.styles';
function VenueCard({venue}) {

    const {id, name, price, media} = venue;

  return (
    <StyledVenueCard key={id}>
        <img src={media} alt={name} onError={event => {
            event.target.src = '/noImg.jpg'
            event.onError = null
        }}/>
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    </StyledVenueCard>
  )
}

export default VenueCard