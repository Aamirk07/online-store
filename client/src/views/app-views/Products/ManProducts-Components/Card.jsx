import React from "react";
import { Link } from "react-router-dom";
import "../Products.scss";

const Card = ({ options }) => {
  return (
    <>
      {options?.map((e, i) => {
        return (
          <Link to={`/products/${e?._id}`} key={i}>
            <div
              className="relative cursor-pointer w-40 md:w-64 lg:w-64"
              key={i}
            >
              <img
                className={` cardImage ${e?.notAvaliable && "opacity-50"}`}
                src={e?.imgs[0]}
                alt={e?.title}
              />
              {e?.notAvaliable && (
                <span className=" absolute top-1 left-1  bg-orange-500 text-xs lg:text-sm font-bold w-1/2 lg:w-2/5 flex items-center justify-center px-1 rounded-full">
                  out of stock
                </span>
              )}
              <div className="flex flex-col">
                <span className="text-xs font-bold">{e?.title}</span>
                <span className="mt-2 text-xs font-bold">₹{e?.price}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
