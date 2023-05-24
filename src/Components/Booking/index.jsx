import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import { isWithinInterval, format } from "date-fns";
import PostData from "../../api/PostData";
import { API_URL } from "../../api/constants/url";
import { API_bookings } from "../../api/constants/url";
import { load } from "../../storage";
import { StyledBook } from "../../styles/BookAVenue";
import Login from "../Login";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function Booking({ venue }) {
  const [response, setResponse] = useState(null);
  const [totalPrice, setTotalPrice] = useState(venue.price);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isError, setIsError] = useState(true);
  const [showError, setShowError] = useState("hidden");

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

  const successModal = {
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
  const serviceFee = 10;
  const total = serviceFee + totalPrice;
  function getDateRange(range) {
    setDateRange(range);
  }

  const bookVenue = async () => {
    setResponse(
      await PostData(`${API_URL}${API_bookings}`, {
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
        guests: numberOfGuests,
        venueId: venue.id,
      })
    );
  };

  useEffect(() => {
    function getNumberOfNights(startDay, endDay) {
      if (startDay && endDay) {
        const timeDiff = Math.abs(endDay.getTime() - startDay.getTime());
        const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return numberOfNights;
      }
      return null;
    }
    const allDates = [];
    let currentDate = new Date(startDate);
    const numberOfNights = getNumberOfNights(startDate, endDate);
    numberOfNights
      ? setTotalPrice(venue.price * numberOfNights)
      : setTotalPrice(venue.price);
    setShowError("hidden");
    // Create an array with all the dates from the chosen period
    while (currentDate <= endDate) {
      allDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Check if the chosen period doesn't include any previously booked days
    /* const hasConflict = allDates.some((date) =>
      venue.bookings.some((booking) =>
        isWithinInterval(date, {
          start: new Date(booking.dateFrom),
          end: new Date(booking.dateTo),
        })
      )
    );
    hasConflict || !startDate || !endDate
      ? setIsError(true)
      : setIsError(false); */
  }, [dateRange]);

  if (response && response.id) {
    return (
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={successModal}>
          <section>
            <h3>Booking successful</h3>
            <p>From: {format(new Date(response.dateFrom), "dd/MM/yyyy")}</p>
            <p>To: {format(new Date(response.dateTo), "dd/MM/yyyy")}</p>
            <div>
              <span>Total Price: ${total} </span>
            </div>
            <Link to={`/profile/${response.name}`}>View booking</Link>
          </section>
        </Box>
      </Modal>
    );
  }
  return (
    <StyledBook>
      <div>
        <h3>${venue.price} per night</h3>
        <Calendar venueBookings={venue.bookings} getDateRange={getDateRange} />
      </div>

      <div className="bookingInfo">
        <div className="guests">
          <p>Guests: </p>
          <div className="guestsBtn">
            <button
              className={`${
                numberOfGuests === 1
                  ? "opacity-20"
                  : "hover:cursor-pointer hover:border-slate-400 opacity-80"
              }`}
              disabled={numberOfGuests === 1 ? true : false}
              onClick={() => setNumberOfGuests(numberOfGuests - 1)}
            >
              -
            </button>
            <span>{numberOfGuests}</span>
            <button
              className={`${
                numberOfGuests === venue.maxGuests
                  ? "opacity-20"
                  : "hover:cursor-pointer hover:border-slate-400"
              }`}
              disabled={numberOfGuests === venue.maxGuests ? true : false}
              onClick={() => setNumberOfGuests(numberOfGuests + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <p>Service fee: ${serviceFee} </p>
        </div>
        <p>
          <span>Total price: ${total}</span>
        </p>
        {!profile ? (
            
          <button className="btn" onClick={handleOpen}>Login to Book</button>
        ) : (
          <button type="submit" className={`btn`} onClick={() => bookVenue()}>
            Book now
          </button>
        )}
      </div>
    </StyledBook>
  );
}

export default Booking;
