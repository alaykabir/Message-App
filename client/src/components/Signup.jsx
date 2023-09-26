import React, { useState, useEffect } from "react";
import style from "styled-components";
import "../style/Signup.css";

function Signup() {
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
  };

  //Do the Validation

  // const handleValidation = () => {
  //   const { password, confirmPassword, email } = id;
  // };

  return (
    <>
      <div class="login-box">
        <p>Create Your Account</p>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div class="user-box">
            <input
              required=""
              name="email"
              type="text"
              onChange={(e) => handleChange(e)}
            />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input
              required=""
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
            />
            <label>Password</label>
          </div>
          <div class="user-box">
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

const FormContainer = style.div``;

export default Signup;
