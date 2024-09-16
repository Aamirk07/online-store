import React, { useEffect, useState } from "react";
import "./auth.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../redux/userSlice";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    document.title = "Login. Sporty-Verse";
  }, []);
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const [number, setNumber] = useState(null);
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const param = location?.state?.prevUrl;

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/authentication/proccessing`, {
        number: number,
      });
      swal({
        title: `${res.data}!`,
        text: "On Your Register Phone Number!",
        icon: "success",
        timer: 2000, // Time in milliseconds
        buttons: false,
      });
      setLoading(false);
      setOtpRequested(true);
    } catch (err) {
      return err;
    }
  };
  const validatingOtp = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/authentication/validation`, {
        number: number,
        otp: otp,
      });
      dispatch(loginSuccess(res.data));
      navigate(param || "/", { replace: true });
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="header-text my-3">
        <span>YOUR SPORTY-VERSE ACCOUNT</span>
      </div>
      <form>
        <div className="register-panel-form">
          <input
            required
            placeholder="Enter Mobile Number"
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
          {otpRequested && (
            <input
              required
              placeholder="Enter the OTP"
              type="number"
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          <span className="register-panel-desc">
            By continue, You Agree Sorrty-Verse{" "}
            <Link to="/" className="underline ml-1 mr-1">
              Privacy Policy
            </Link>
            & <br />{" "}
            <Link to="/" className="underline ml-1 mr-1">
              Terms of use
            </Link>
          </span>
          {otpRequested ? (
            <button className="register-panel-button" onClick={validatingOtp}>
              VALIDATE OTP
            </button>
          ) : (
            <button className="register-panel-button" onClick={handelLogin}>
              {loading ? "Loading..." : "REQUEST OTP"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
