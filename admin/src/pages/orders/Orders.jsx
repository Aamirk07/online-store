import React from "react";
import "./orders.scss";
import TableChart from "../../components/tableChart/TableChart";
import Sidebar from "../../components/sidebar/Sidebar";

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <div className="ordersContainer">
        <h1>ORDERS</h1>
        <TableChart />
      </div>
    </div>
  );
};

export default Orders;
