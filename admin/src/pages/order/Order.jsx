import React, { useEffect, useState } from "react";
import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { getOrder } from "../../utils/apiCalls";

const Order = () => {
  const [data, setData] = useState();
  const param = useLocation().pathname;
  useEffect(() => {
    const fetchData = async () => {
      const res = await getOrder(param);
      setData(res);
    };
    fetchData();
  }, [param]);

  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
        <h1>Order-Id: {`SV${param?.replace(/\D/g, "")}`}</h1>
        {data?.products?.map((e, i) => (
          <div className="order-product" key={i}>
            <span>{i + 1}.</span>
            <img src={e?.img} alt="" />
            <div className="order-product-info">
              <span className="title">{e?.title}</span>
              <span className="desc">{e?.desc}</span>
              <span className="quantity">Quantity: {e?.quantity}</span>
            </div>
          </div>
        ))}
        <span>Amount: ${data?.amount}</span>
        <span>Status: {data?.status}</span>
      </div>
    </div>
  );
};

export default Order;
