import React, { useEffect } from "react";
import { API_venues } from "../../api/constants/url";
import useApi from "../../hooks/useAPI";
import { useParams } from "react-router-dom";
import CarouselSlider from "../../components/Carousel";
import { StyledVenue } from "../../styles/Venue.styles";
import WifiIcon from "@mui/icons-material/Wifi";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import PetsIcon from "@mui/icons-material/Pets";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import Booking from "../../components/Booking";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/Error/Error";

function VenuePage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(
    `${API_venues}/${id}?_bookings=true`
  );
  const {
    name,
    description,
    media,
    price,
    rating,
    location = {},
    maxGuests,
    meta = {},
    bookings,
    owner,
  } = data;

  const { city, country } = location;

  const { wifi, parking, breakfast, pets } = meta;

  useEffect(() => {
    document.title = `Holidaze | ${name}`;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <ErrorMessage />;
    }
  }, []);
  /*  function Facilities() {
    if (wifi === true) {
      return <WifiIcon sx={{ width: 35, height: 30 }} />;
    }
    if (parking === true) {
      return <TimeToLeaveIcon sx={{ width: 35, height: 30 }} />;
    }
    if (breakfast === true) {
      return <BreakfastDiningIcon sx={{ width: 35, height: 30 }} />;
    }
    if (pets === true) {
      return <PetsIcon sx={{ width: 35, height: 30 }} />;
    }
  } */

  return (
    <>
      <StyledVenue>
        <div className="bc">Back</div>
        <div className="container">
          <h1>{name}</h1>
          <div className="info">
            <div className="location">
              <PlaceOutlinedIcon
                className="locationIcon"
                sx={{ width: 30, height: 25 }}
              />
              {city}, {country}
            </div>
            <div className="star">
              <StarRateIcon
                className="starIcon"
                sx={{ width: 30, height: 25 }}
              />
              {rating}
            </div>
          </div>
          <div className="carousel">
            <CarouselSlider media={media} />
          </div>
          <div className="toBook">
            <Booking venue={data} />
          </div>
          <div className="desc">
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <div className="facilities">
            <h2>Facilities</h2>
            <div className="icons">
              {wifi ? (
                <div className="icon">
                  <WifiIcon sx={{ width: 35, height: 30 }} />
                </div>
              ) : (
                ""
              )}
              {parking ? (
                <div className="icon">
                  <TimeToLeaveIcon sx={{ width: 35, height: 30 }} />
                </div>
              ) : (
                ""
              )}
              {breakfast ? (
                <div className="icon">
                  <BreakfastDiningIcon sx={{ width: 35, height: 30 }} />
                </div>
              ) : (
                ""
              )}
              {pets ? (
                <div className="icon">
                  <PetsIcon sx={{ width: 35, height: 30 }} />
                </div>
              ) : (
                " "
              )}
            </div>
          </div>
        </div>
      </StyledVenue>
    </>
  );
}

export default VenuePage;
