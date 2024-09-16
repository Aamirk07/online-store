import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/cartSlice";

const CartComponent = ({ type }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      {type === "sm" && (
        <>
          {products?.map((product) => (
            <div key={product.id}>
              <div
                className="container flex items-center gap-2 mt-1"
                key={product.id}
              >
                <div className="w-24 h-24 flex-2 border rounded-sm  border-gray-100">
                  <img
                    src={product?.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col w-full">
                  <div className="flex gap-1 flex-col ">
                    <h3 className="text-2xl text-black">{product?.title}</h3>
                    <span className="text-gray-500 font-bold text-base">
                      category
                    </span>
                    <p className="text-xs text-gray-500 font-bold w-3/4">
                      {product.desc}
                    </p>
                    <span className=" flex justify-center items-center  w-8 h-8 p-2 rounded border-2 border-gray-300">
                      L
                    </span>
                    <span className="text-md font-bold ">
                      Price: ₹{product?.price}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      dispatch(removeItem(product?.id));
                    }}
                    className="flex mt-2 gap-1 items-center justify-center text-sm font-bold  border-none text-red-600 bg-red-200 p-1 rounded w-24"
                  >
                    <RiDeleteBin6Line className="text-xl" />
                    Remove
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </>
      )}
      {type === "lg" && (
        <>
          {products?.map((product) => (
            <div key={product.id}>
              <div className="container flex gap-6" key={product.id}>
                <div className="w-40 h-48 border rounded-sm border-gray-100">
                  <img
                    src={product?.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between w-96">
                  <div className="flex gap-2 flex-col ">
                    <h3 className="text-3xl text-black">{product?.title}</h3>
                    <span className="text-gray-500 font-bold text-base">
                      category
                    </span>
                    <p className="text-xs text-gray-500 font-bold w-3/4">
                      {product?.desc}
                    </p>
                    <div className="flex  gap-5">
                      <span className=" flex justify-center items-center  w-8 h-8 p-2 rounded border-2 border-gray-300">
                        L
                      </span>
                      <span className="flex items-center text-xs font-bold gap-2">
                        Qunatity : {product?.quantity}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        dispatch(removeItem(product?.id));
                      }}
                      className="flex gap-1 items-center justify-center text-sm font-bold  border-none text-red-600 bg-red-200 p-1 rounded w-24"
                    >
                      <RiDeleteBin6Line className="text-xl" />
                      Remove
                    </button>
                  </div>
                  <div className="price">
                    <span className="text-xl font-bold ">
                      ₹{product?.price}
                    </span>
                  </div>
                </div>
              </div>
              <hr className="m-3" />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CartComponent;
