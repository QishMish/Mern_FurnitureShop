import React, { useState } from "react";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  loginStart,
  loginSucces,
  loginFailure,
} from "../../context/actions/authActions";
import axiosInstance from "../../config/axiosConfig";
import { useGlobalContext } from "../../context/AppContext";

function Login() {
  const { userState, dispatchUser } = useGlobalContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      dispatchUser(loginStart());
      const res = await axiosInstance.post("auth/login", {
        email: email,
        password: password,
      });
      dispatchUser(loginSucces(res.data));
      navigate("/dashboard");
    } catch (error) {
      dispatchUser(loginFailure());
    }
  };

  return (
    <div className="login container bg-grey">
      <h1>Login</h1>
      <form className="login-form">
        <div className="email-input">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-input">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <Link to="/dashboard"> */}
        <input
          className="login-btn"
          type="submit"
          value="Login"
          onClick={login}
        />
        {/* </Link> */}
        <Link className="redirection-link" to="/register">
          Sign Up
        </Link>
      </form>
    </div>
  );
}

export default Login;
