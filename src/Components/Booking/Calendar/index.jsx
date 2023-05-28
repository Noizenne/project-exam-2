import React from 'react'
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isWithinInterval } from "date-fns";

function Calendar({ venueBookings, getDateRange }) {
  const [dateRange, setDateRange] = useState([]);
	const [startDate, endDate] = dateRange;

	useEffect(() => {
		getDateRange(dateRange);
	}, [dateRange]);
  
	const isDisabled = (date) => {
		const isBooked = venueBookings.some((booking) =>
			isWithinInterval(date, {
				start: new Date(booking.dateFrom),
				end: new Date(booking.dateTo),
			})
		);
		return !isBooked;
	};

	return (
		<>
			<DatePicker
				dateFormat="dd/MM/yyyy"
				minDate={new Date()}
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={(update) => {
					setDateRange(update);
				}}
				monthsShown={1}
				filterDate={isDisabled}
				placeholderText="Select dates"
			/>
		</>
	);
}

export default Calendar;