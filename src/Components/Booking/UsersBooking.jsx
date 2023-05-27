import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteBooking from "./DeleteBooking";

function UsersBooking({ item }) {
  const { dateFrom, dateTo, venue = {} } = item;

  const { id, name, media } = venue;

  return (
    <li key={id}>
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
        <div className="options">
          <Link to={`/venue/${id}`}>
            {name}
          </Link>
          <DeleteBooking item={item} />
        </div>
        <div className="dates">
          <div>
            <p>From</p>
            <p>{format(new Date(item.dateFrom), "dd/MM/yyyy")}</p>
          </div>
          <div>
            <p>To</p>
            <p>{format(new Date(item.dateFrom), "dd/MM/yyyy")}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default UsersBooking;
