import { Link } from "react-router-dom";
import "./widget.scss";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { useEffect, useState } from "react";
import { stats } from "../../utils/apiCalls";
import { FaStoreAlt } from "react-icons/fa";

const Widget = ({ type }) => {
  let data;
  const [statData, setStatData] = useState();
  const [amount, setAmount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await stats(type, setAmount);
      setStatData(res);
    };
    fetchData();
  }, [ type, setAmount]);

  const diff = Math.round((statData?.whole / 50) * 100); //Percentage
  const amountper = 100 - Math.round((amount?.totalAmount / 12000) * 100);

  switch (type) {
    case "users":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all users",
        url: "/users",
        icon: (
          <FaRegUser
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(225, 0, 0, 0.11)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        url: "/orders",
        icon: (
          <IoCartOutline
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(225,0,0,0.11)",
            }}
          />
        ),
      };
      break;
    case "income":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earning",
        url: "/orders",
        icon: (
          <LuCircleDollarSign
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(225,0,0,0.11)",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: true,
        link: "See deatils",
        url: "/products",
        icon: (
          <FaStoreAlt
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(225,0,0,0.11)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && ``}
          {type === "income" ? amount?.totalAmount : statData?.whole}
        </span>
        <Link className="link" to={data?.url}>
          <span className="moreDetails">{data?.link}</span>
        </Link>
      </div>
      <div className="right">
        <div
          className={`percentage ${
            amountper || diff < 10 ? "negative" : "positve"
          }`}
        >
          {type === "income" ? `${amountper} %` : `${diff} %`}
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
