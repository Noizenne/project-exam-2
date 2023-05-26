import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import { API_bookings } from "../../api/constants/url";
import { API_venues } from "../../api/constants/url";
import { API_profiles } from "../../api/constants/url";
import { load } from "../../storage";
import { StyledProfile } from "../../styles/Profile.styles";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import UsersBooking from "../../components/Booking/UsersBooking";
import format from "date-fns/format";

function ProfilePage() {
  const profile = load("profile");
  const userName = profile.name;
  const { data, isLoading, error } = useApi(
    `${API_profiles}/${userName}?_venues=true&_bookings=true`
  );

  const { id, avatar, venueManager, bookings = [], venues = [] } = data;

  useEffect(() => {
    document.title = `Holidaze | ${userName}`;
  }, []);
  return (
    <StyledProfile>
      <div>Back</div>
      <div className="container">
        <div className="profileInfo">
          {!avatar ? (
            <img className="profileImg" src="/placeholder.jpg"></img>
          ) : (
            <img className="profileImg" src={avatar}></img>
          )}

          <p>{data.name}</p>
          {!venueManager ? "" : <p>VenueManager</p>}
          <p>{data.email}</p>
        </div>
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
    </StyledProfile>
  );
}

export default ProfilePage;
