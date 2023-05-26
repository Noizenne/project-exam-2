import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import { isWithinInterval } from "date-fns";
import PostData from "../../api/PostData";
import { API_URL } from "../../api/constants/url";
import { API_bookings } from "../../api/constants/url";
import { load } from "../../storage";
import { StyledBook } from "../../styles/BookAVenue.styles";
import Confirmation from "../Confirmation";

function Booking({ venue }) {
  const [data, setData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(venue.price);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isError, setIsError] = useState(true);

  const profile = load("profile");
  const serviceFee = 10;
  const total = serviceFee + totalPrice;

  function getDateRange(range) {
    setDateRange(range);
  }

  const bookVenue = async () => {
    setData(
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

  if (data && data.id) {
    return (
    <Confirmation data={data}/> 
    )
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
            <p>{numberOfGuests}</p>
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
        <div>
          <p>Total price: ${total}</p>
        </div>
        {!profile ? (
          <>
            <button className="btn" disabled>
              Book Now
            </button>
            <p className="message">You must login to book a venue</p>
          </>
        ) : (
          <button
            type="submit"
            className="btn"
            onClick={() => bookVenue()}
          >
            Book now
          </button>
        )}
      </div>
    </StyledBook>
  );
}

export default Booking;
