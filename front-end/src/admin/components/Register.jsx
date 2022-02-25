import React, { useState } from "react";
import "../../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import CustumAuth from "../../hooks/CustumAuth";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../../context/actions/authActions";
import axiosInstance from "../../config/axiosConfig";
import { useGlobalContext } from "../../context/AppContext";

function Register() {
  const { userState, dispatchUser } = useGlobalContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      dispatchUser(registerStart());
      const res = await axiosInstance.post("auth/register", {
        email: email,
        password: password,
      });
      dispatchUser(registerSuccess(res.data));
      navigate('/dashboard')
    } catch (error) {
      dispatchUser(registerFailure());
    }
  };

  return (
    <div className="register container bg-grey">
      <h1>Register</h1>
      <form className="register-form">
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
          className="register-btn"
          type="submit"
          value="Register"
          onClick={register}
        />
        {/* </Link> */}
        <Link className="redirection-link" to="/login">
          Sign In
        </Link>
      </form>
    </div>
  );
}

export default Register;
