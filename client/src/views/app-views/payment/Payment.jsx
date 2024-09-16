import "./payment.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import {
  creatRazorpayOrder,
  orderCasOnDev,
  orderCreation,
  razorpayPaymentValidation,
} from "../../../utils/apiCalls";
import swal from "sweetalert";
import { restCart } from "../../../redux/cartSlice";

const Payment = () => {
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Razorpay] = useRazorpay();
  const totalAmount = products.reduce((total, product) => {
    return total + Math.round(product.quantity * product.price);
  }, 0);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Details updated!", "Successfull!", "success", {
      button: false,
    });
  };

  async function handelPayment() {
    if (!formData) {
      swal("Please!", "Enter adress details for proced", "warning", {
        button: false,
      });
    } else {
      const order = await creatRazorpayOrder(
        totalAmount,
        currentUser._id,
        formData
      );
      const options = {
        key: "rzp_test_NZZMnVnmvGTnKR",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        handler: async (response) => {
          razorpayPaymentValidation(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature
          );
          orderCreation(
            currentUser,
            products,
            order.amount,
            order.notes,
            order.status,
            navigate
          );
          dispatch(restCart());
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    }
  }

  const handelCashOnDel = async () => {
    if (!formData) {
      swal("Please!", "Enter adress details for proced", "warning", {
        button: false,
      });
    } else {
      setIsLoading(true);
      await orderCasOnDev(
        currentUser,
        products,
        totalAmount,
        formData,
        setIsLoading,
        navigate
      );
      dispatch(restCart());
    }
  };

  return (
    <div className="container flex flex-col lg:flex-row w-full bg-white h-full justify-between gap-8">
      <div className="left-payment-container">
        <div className="flex flex-2 flex-col gap-3">
          <span className="text-2xl font-bold underline">Summary</span>
          {products.map((product) => (
            <div key={product?.img}>
              <div className="cart-product-details flex gap-2">
                <img
                  className=" w-12 h-12 object-cover border border-gray-200 rounded-sm "
                  src={product?.img}
                  alt=""
                />
                <div className="product-details flex flex-col justify-between">
                  <h4 className="text-base font-bold text-black">
                    {product?.itle}
                  </h4>
                  <span className="text-sm font-bold">
                    subtotal : {product?.quantity} x {product?.price} - ₹
                    {product?.quantity * product?.price}
                  </span>
                </div>
              </div>
              <hr className="w-72 mt-3" />
            </div>
          ))}
          <span className="flex items-center font-bold text-sm gap-8">
            <span>Estimate Delivery & Handling</span>
            <span>Free</span>
          </span>
          <hr className="w-72" />
          <span className="font-semibold text-sm flex items-center gap-48 ">
            <span>Total:</span> <span>₹{totalAmount}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full flex-1 lg:items-center lg:justify-center  ">
        <div className="flex flex-2 flex-col gap-3">
          <span className="text-2xl font-bold underline">Address Details</span>
          <form
            className="flex flex-col gap-3 mt-4 mb-4"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              className="  w-full py-2 px-3 block border-b border-gray-200 text-gray-800 text-sm font-bold mb-2 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              className=" w-full py-2 px-3 block text-gray-800 text-sm font-bold mb-2 leading-tight focus:outline-none focus:shadow-outline border-b border-gray-200"
              type="text"
              name="number"
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <textarea
              onChange={handleChange}
              name="address"
              placeholder="Enter your full adress"
              className="  w-full py-2 px-3 border-b border-gray-200 text-gray-800 text-sm font-bold  leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              className="bg-black rounded-full p-3 text-white text-base font-bold text-opacity-80 hover:bg-gray-300"
              type="submit"
            >
              Done
            </button>
          </form>
          <span className="text-2xl font-bold underline">Payment-options</span>
          <button
            onClick={handelCashOnDel}
            className="bg-black rounded-full px-3 py-1 text-white text-xs font-bold text-opacity-80 hover:bg-gray-300"
          >
            {isLoading ? "Proccessing..." : "Cash on delivery"}
          </button>
          <hr />
          <div className="flex justify-between items-center">
            <span className=" font-bold text-sm">Online</span>
            <button
              onClick={handelPayment}
              className="bg-black rounded-full px-3 py-1 text-white text-xs font-bold text-opacity-80 hover:bg-gray-300"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
