import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledRegister } from "../styles/Register.styles";

const schema = yup
  .object({
    name: yup
    .string()
    .min(1, "Please enter your name"),
    email: yup
      .string()
      .email("Please enter your email")
      .matches(
        /^[\w\-.]+@stud.?noroff.no$/,
        "Must be a student noroff e-mail"
      )
      .required("Please enter a valid email address")
      .typeError("Please enter a valid email address"),
    password: yup
      .string()
      .min(8, "Must contain more than 8 characters")
      .matches(
        /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
        "Must contain at least one uppercase, lowercase letters and a number"
      )
      .required("Please enter your password")
      .typeError("Please enter your password"),
    againPassword: yup
      .string()
      .required("Please type in your password again")
      .oneOf([yup.ref("password")], "Your passwords do not match"),
    venueManager: yup.string().required("Choose what type of user you are"),
  })
  .required();

function Register() {
  const url = "https://api.noroff.dev/api/v1/holidaze/auth/register";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data) => {
    let newData = {};

    if (data.venueManager === "manager") {
      newData = {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: null,
        venueManager: true,
      };
    }

    if (data.venueManager === "user") {
      newData = {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: null,
        venueManager: false,
      };
    }

    
    const postData = async (profile) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (json.id) {
          reset();
          console.log("You have created a user, you may login")
        }
        else {
          alert("There's been an error.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    postData(newData);
  };

  return (
    <StyledRegister>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label>Username</label>
        <input id="name" {...register("name")} />
        <p>{errors.name?.message}</p>
        <label>Email</label>
        <input id="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label>Password</label>
        <input type="password" id="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <label>Confirm Password</label>
        <input type="password" id="againPassword"{...register("againPassword")} />
        <p>{errors.againPassword?.message}</p>
        <label>Do you want to be a venue manager?</label>
        <div className="options">
          <label>Yes</label>
          <input
            type="radio"
            id="manager"
            value="manager"
            {...register("venueManager")}
          />
        </div>
        <div className="options">
          <label>No</label>
          <input
            type="radio"
            id="user"
            value="user"
            {...register("venueManager")}
          />
        </div>
        <div className="btn">
        <button type="submit">REGISTER</button>
        </div>
       
      </form>
    </StyledRegister>
  );
}

export default Register;
