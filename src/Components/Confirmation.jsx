import React from "react";
import format from "date-fns/format";
import { Link } from "react-router-dom";

function Confirmation({response, total}) {
  return (
    <div>
      <h3>Booking successful</h3>
      <p>From: {format(new Date(response.dateFrom), "dd/MM/yyyy")}</p>
      <p>To: {format(new Date(response.dateTo), "dd/MM/yyyy")}</p>
      <div>
        <p>Total Price: ${total} </p>
      </div>
      <Link to={`/profile/${response.name}`}>View booking</Link>
    </div>
  );
}

export default Confirmation;
