import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  const date = new Date(order.createdAt);
  const month = date.getMonth() + 1; // getMonth() returns 0-based index (0 for January)
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;

  return (
    <Link to={`/orders/${order._id}`}>
      <div className="bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-md  overflow-hidden mb-4 w-full">
        <div className="px-4 py-3 ">
          <div className="flex items-center justify-between mb-2 lg:relative">
            <div className="flex gap-2 lg:gap-4 ">
              <img
                className=" w-16 h-16 lg:w-16 lg:h-16 rounded-sm object-cover"
                src={order?.products[0]?.img}
                alt=""
              />
              <div className="flex flex-col gap-1">
                <span className="block lg:hidden w-36 font-bold text-xs text-blue-500">
                  Order has been {order?.status}
                </span>
                <span className="text-base font-medium text-gray-500">
                  {order?.products[0].title}
                </span>
                <span className="hidden lg:block text-xs text-gray-400">
                  Color - {order?.products[0].colors}
                </span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col">
              <p className="text-sm text-gray-500">₹{order.amount}</p>
            </div>
            <div className=" hidden lg:flex flex-col ">
              <span className="ml-auto text-sm text-gray-500">
                {formattedDate}
              </span>
              <span className={`text-xs  text-blue-500`}>
                your order has been {order.status}
              </span>
            </div>
            <IoIosArrowForward className="block lg:hidden" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
