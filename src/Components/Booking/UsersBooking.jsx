import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

function UsersBooking({ item }) {
  const { dateFrom, dateTo, venue = {} } = item;

  const { id, name, media } = venue;
  const resultFrom = format(new Date(dateFrom), 'dd/MM/yyyy');
  const resultTo = format(new Date(dateTo), 'dd/MM/yyyy')

  return (
    <li key={id}>
      <Link to={`/venue/${id}`}>
        <div>
          <img
            src={media}
            alt={name}
            onError={(event) => {
              event.target.src = "/noImg.jpg";
              event.onError = null;
            }}
          />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <div className="dates">
            <div>
              <p>From</p>
              <p>{resultFrom}</p>
            </div>
            <div>
              <p>To</p>
              <p>{resultTo}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default UsersBooking;
