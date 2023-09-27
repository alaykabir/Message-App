import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "styled-components";
import "../style/Signup.css";
import axios from "axios";
import { signupRoute } from "../api/APIRoutes";

function Signup() {
  const navigate = useNavigate();

  const [id, setId] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setId({ ...id, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleValidation();
    if (true) {
      const { password, email } = id;
      const { data } = await axios.post(signupRoute, {
        email,
        password,
      });
      // if (data.status === false) {
      //   toast.error(data.msg, toastOptions);
      // }
      if (data.status === true) {
        localStorage.setItem("app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  //Do the Validation

  // const handleValidation = () => {
  //   const { password, confirmPassword, email } = id;
  // };

  return (
    <>
      <div className="login-box">
        <p>Create Your Account</p>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="user-box">
            <input
              required=""
              name="email"
              type="text"
              onChange={(e) => handleChange(e)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name="confirm-password"
              type="password"
              onChange={(e) => handleChange(e)}
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/signin" class="a2">
            Sign In!
          </a>
        </p>
      </div>
    </>
  );
}

export default Signup;
