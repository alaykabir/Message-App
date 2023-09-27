import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "styled-components";
import "../style/Signup.css";
import axios from "axios";
import { signinRoute } from "../api/APIRoutes";

function Signin() {
  const navigate = useNavigate();

  const [id, setId] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("app-user")) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setId({ ...id, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleValidation();
    if (true) {
      const { password, email } = id;
      const { data } = await axios.post(signinRoute, {
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
        <p>Welcome Back!</p>
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

          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/signup" class="a2">
            Sign Up!
          </a>
        </p>
      </div>
    </>
  );
}

export default Signin;
