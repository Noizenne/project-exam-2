import React from 'react'
import VenueCard from './VenueCard';
import { StyledUl } from '../styles/Venues.styles';
function Venues({venues}) {
  return (
    <StyledUl>
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </StyledUl>
  )
}

export default Venues;