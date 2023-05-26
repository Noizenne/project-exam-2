import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledForm } from "../styles/Form.styles";
import { load } from "../storage";
import PostData from "../api/PostData";
import WifiIcon from "@mui/icons-material/Wifi";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import PetsIcon from "@mui/icons-material/Pets";

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Please enter name of venue")
      .typeError("Please enter name of venue")
      .min(1, "Must have a title"),
    description: yup
      .string()
      .required("Please enter a description")
      .typeError("Please enter a description")
      .min(20, "Must contain at least 20 characters")
      .max(400, "Max 4000 characters"),
    media: yup.string().trim().url("Must be a valid image URL"),
    price: yup
      .number()
      .typeError("Please enter a number")
      .required("Please enter price per night")
      .min(1, "Must be at least 1$"),
    maxGuests: yup
      .number()
      .typeError("Please enter a number")
      .required("Please enter maximum amount of guests")
      .min(1, "Must be at least 1 guest")
      .max(50, "Max 50 guests"),
    wifi: yup.boolean(),
    parking: yup.boolean(),
    breakfast: yup.boolean(),
    pets: yup.boolean(),
  })
  .required();

function AddVenue() {
  const url = "https://api.noroff.dev/api/v1/holidaze/venues";
  const token = load("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = async (data) => {
    let newData = {};

    if (data.media !== "") {
      newData = {
        name: data.name,
        description: data.description,
        media: [data.media],
        price: data.price,
        maxGuests: data.maxGuests,
        meta: {
          wifi: data.wifi,
          parking: data.parking,
          breakfast: data.breakfast,
          pets: data.pets,
        },
      };
    } else {
      newData = {
        name: data.name,
        description: data.description,
        price: data.price,
        maxGuests: data.maxGuests,
        meta: {
          wifi: data.wifi,
          parking: data.parking,
          breakfast: data.breakfast,
          pets: data.pets,
        },
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newData),
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (json.id) {
          reset();
          console.log("You have created a venue");
        } else {
          alert("There's been an error.");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <StyledForm>
      <h1>Add a venue</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label>Title</label>
        <input id="title" {...register("name")} />
        <p>{errors.name?.message}</p>
        <label>Description</label>
        <input type="text" id="description" {...register("description")} />
        <p>{errors.description?.message}</p>
        <label>Media</label>
        <input type="url" id="media" {...register("media")} />
        <p>{errors.media?.message}</p>
        <div className="smaller">
          <div>
            <label>Price</label>
            <input type="number" id="price" {...register("price")} />
            <p>{errors.price?.message}</p>
          </div>
          <div>
            <label>Max guests</label>
            <input type="number" id="guests" {...register("maxGuests")} />
            <p>{errors.maxGuests?.message}</p>
          </div>
        </div>
        <label>Facilities</label>
        <div className="facility">
          <label>Wifi</label>
          <input type="checkbox" id="wifi" {...register("wifi")} />
        </div>
        <div className="facility">
          <label>Parking</label>
          <input type="checkbox" id="parking" {...register("parking")} />
        </div>
        <div className="facility">
          <label>Breakfast</label>
          <input type="checkbox" id="breakfast" {...register("breakfast")} />
        </div>
        <div className="facility">
          <label>Pets</label>
          <input type="checkbox" id="pets" {...register("pets")} />
        </div>

        <div className="btn">
          <button type="submit">ADD</button>
        </div>
      </form>
    </StyledForm>
  );
}

export default AddVenue;
