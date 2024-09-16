import React, { useEffect, useState } from "react";
import OrderCard from "./orderCard/OrderCard";
import { useSelector } from "react-redux";
import { getOrders } from "../../../utils/apiCalls";

const OrdersPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrders(currentUser?._id);
      setOrders(data);
    };
    fetchData();
  },[currentUser]);

  return (
    <div className="w-full container mx-auto p-4 pb-16">
      <h2 className="text-2xl font-medium text-gray-900 mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        <div className="w-full flex flex-col">
          {orders?.map((order) => (
            <OrderCard key={order._id} order={order} productId={order.products[0]._id}/>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          You don't have any orders yet.
        </p>
      )}
    </div>
  );
};

export default OrdersPage;
