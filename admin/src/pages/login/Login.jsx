import React, { useState } from "react";
import "./login.scss";
import { axiosInstance } from "../../utils/apiCalls";
import swal from "sweetalert";
import { loginFailure, loginSuccess, loginStart } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [number, setNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [otpSent, setOTPSent] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(`/auth/authentication/proccessing`, {
        number: number,
      });
      swal({
        title: `${res.data}!`,
        text: "On Your Register Phone Number!",
        icon: "success",
        timer: 3000,
        buttons: false,
      });
      setOTPSent(true);
    } catch (err) {
      return err;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axiosInstance.post(`/auth/authentication/validation`, {
        number: number,
        otp: otp,
      });
      if (res.data.isAdmin) {
        dispatch(loginSuccess(res.data));
        navigate("/");
      } else {
        swal({
          title: `Error`,
          text: "You are not a Admin!",
          icon: "faliure",
          timer: 3000,
          buttons: false,
        });
        navigate("/login");
        window.location.reload();
      }
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        {!otpSent ? (
          <div>
            <h2 className="login-heading">SPORTY-VERSE</h2>
            <p>Admin Pannel</p>
            <label htmlFor="phone-number" className="login-label">
              Phone Number
            </label>
            <input
              id="phone-number"
              type="tel"
              required
              autoFocus
              className="login-input"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSendOTP}
              className="login-button"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <label htmlFor="otp" className="login-label">
              OTP
            </label>
            <input
              id="otp"
              type="text"
              required
              className="login-input"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <button
              type="button"
              onClick={handleLogin}
              className="login-button"
            >
              Login with OTP
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
