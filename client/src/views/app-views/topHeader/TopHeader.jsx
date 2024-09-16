import React from "react";
import { Link } from "react-router-dom";
import "./topHeader.scss";
import LoginModal from "../LoginModal/LoginModal";

const TopHeader = () => {
  return (
    <div className="header-top justify-between flex w-full">
      <Link to="/">
        <img
          className="w-8 h-8 object-cover ml-2"
          src="/images/lgb.png"
          alt=""
        />
      </Link>
      <div className="">
        <div className="">
          <ul className="flex">
            <Link to="/register">
              {" "}
              <li>Sign up</li>{" "}
            </Link>
            <li className="separator-top-menu">|</li>
            <LoginModal />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
