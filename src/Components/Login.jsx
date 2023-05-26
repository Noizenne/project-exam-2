import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "../styles/Form.styles";
import { Style } from "@mui/icons-material";
import { API_URL } from "../api/constants/url";
import { API_authLogin } from "../api/constants/url";
import * as storage from "../storage";
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter your e-mail")
      .matches(/^[\w\-.]+@stud.?noroff.no$/, "Must be a student noroff e-mail")
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
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (profile) => {
    const loginURL = `${API_URL}${API_authLogin}`;

    const method = "post";
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    if (response.ok) {
      const profile = await response.json();
      storage.save("token", profile.accessToken);
      storage.save("profile", profile);
      window.location.href = `/profile/${profile.name}`;
      return profile;
    }

    throw new Error(response.statusText);
  };

  return (
    <StyledForm>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Email</label>
        <input id="email" {...register("email")} />
        <label>Password</label>
        <input id="password" type="password" {...register("password")} />
        <div className="btn">
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </StyledForm>
  );
}

export default Login;
