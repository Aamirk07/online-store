import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOrderDetails } from "../../../utils/apiCalls";
import OrderStatus from "./orderStatus/OrderStatus";

const SingleOrder = () => {
  const [order, setOrder] = useState([]);
  const [productArray, setProductArray] = useState();
  const params = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrderDetails(params);
      setProductArray(data.products[0]);
      setOrder(data);
    };
    fetchData();
  }, [params]);

  return (
    <div>
      <div className="w-full mt-5 text-gray-400 text-xs">
        Order ID - SV{order?._id?.replace(/\D/g, "")}
      </div>
      <div className="hidden lg:flex flex-col gap-2 mt-5 p-5 bg-gray-50 border border-gray-200  shadow-md  overflow-hidden mb-4 w-full text-black">
        <h2 className="text-lg font-semibold ">Adress Details</h2>
        <span className="text-base font-semibold">{order?.address?.name}</span>
        <p className="text-sm w-5/12 ">{order?.address?.address}</p>
        <span className="text-sm">
          <b className="mr-5">Phone number</b> {order?.address?.number}{" "}
        </span>
      </div>
      <div className="flex  justify-between  lg:flex-row gap-5 mt-5 p-5 bg-gray-50  lg:border lg:border-gray-200  lg:shadow-md  overflow-hidden mb-4 w-full text-black">
        <div className="flex gap-5 flex-row-reverse">
          <img
            className=" w-16 h-16 lg:w-20 lg:h-20 object-cover "
            src={productArray?.img}
            alt=""
          />
          <div className="flex flex-col gap-1 lg:gap-2">
            <span className="text-lg font-bold">{productArray?.title}</span>
            <div className="flex items-center gap-5 text-gray-400 text-xs">
              <span>Color - gray</span>
              <span>Size - L</span>
            </div>
            <span className="text-gray-400 text-xs">Seller: SPORTY VERSE</span>
            <span className="text-sm font-bold">${order?.amount}</span>
          </div>
        </div>
        <div className="hidden lg:flex  items-center justify-center ">
          <OrderStatus />
        </div>
      </div>
      <div className="flex lg:hidden   ">
        <OrderStatus />
      </div>
    </div>
  );
};

export default SingleOrder;
