import React from "react";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import { load } from "../storage";

function Confirmation({ data, total }) {
  const profile = load("profile");
  return (
    <div>
      <h3>Booking successful</h3>
      <p>From: {format(new Date(data.dateFrom), "dd/MM/yyyy")}</p>
      <p>To: {format(new Date(data.dateTo), "dd/MM/yyyy")}</p>
      <div>
        <p>Total Price: ${total} </p>
      </div>
      <Link to={`/profile/${profile.name}`}>View booking</Link>
    </div>
  );
}

export default Confirmation;
