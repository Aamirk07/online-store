import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.scss";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import CartComponent from "./CartCompontent/CartComponent"; //Twilio
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  useEffect(() => {
    document.title = "Sporty-Verse";
  }, []);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const { currentUser } = useSelector((state) => state.user);
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [prevUrl, setPrevUrl] = useState(location);
  const total = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const handelCheckout = () => {
    if (currentUser) {
      navigate("/purchasing");
    } else {
      navigate("/login", { state: { prevUrl: prevUrl } });
    }
  };

  return (
    <>
      {isLargeScreen && (
        <div className="flex">
          <div className="container flex  flex-1 justify-around mt-4 ">
            <div className="flex flex-col gap-2 ">
              <span className="text-2xl ">Bag</span>
              {products.length === 0 ? (
                <span className="text-sm">
                  There are no item in bag.
                  <Link
                    to="/products"
                    className="text-blue-500 text-xs font-medium hover:underline hover:text-blue-400"
                  >
                    add products
                  </Link>
                </span>
              ) : (
                <CartComponent type={"lg"} />
              )}
              {!currentUser && (
                <div className="mt-48 text-sm">
                  Want to view your favourites?{" "}
                  <Link to="/login">
                    <span className="underline opacity-70 text-xs font-semibold">
                      Sign-up
                    </span>
                  </Link>{" "}
                  or{" "}
                  <Link to="/login">
                    <span className="underline opacity-70 text-xs font-semibold">
                      Sign-in
                    </span>{" "}
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-2 flex-col gap-2">
              <span className="text-2xl">Summary</span>
              <span className="text-sm"> Subtotal: ₹{total.toFixed(2)}</span>
              <span className="text-sm">Estimate Delivery & Handling Free</span>
              <hr />
              <hr />
              <span className="font-semibold text-sm ">
                Total: <span>₹{total.toFixed(2)}</span>
              </span>
              <hr />
              <div className="flex flex-col buttons-cart">
                <button
                  className="checkoutBtn"
                  onClick={
                    products?.length === 0
                      ? () => {
                          navigate("/products");
                        }
                      : handelCheckout
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div className="container flex flex-col gap-4 overflow-x-hidden">
          <div className="flex flex-col gap-2">
            <span className="text-2xl">Bag (1-item)</span>
            {products.length === 0 ? (
              <span className="text-sm">
                There are no item in bag.
                <Link
                  to="/products"
                  className="text-blue-500 text-xs font-medium hover:underline hover:text-blue-400"
                >
                  add products
                </Link>
              </span>
            ) : (
              <>
                <CartComponent type={"sm"} />
              </>
            )}
          </div>

          <div className="summarry">
            <div className="flex flex-2 flex-col gap-3">
              <span className="text-2xl font-bold underline">Summary</span>
              <span className="flex items-center justify-between font-bold text-sm">
                <span>Estimate Delivery & Handling</span>
                <span>Free</span>
              </span>
              <hr />
              <hr />
              <span className="font-semibold text-sm flex items-center justify-between ">
                <span>Total:</span> <span>₹{total.toFixed(2)}</span>
              </span>
              <hr />
              <div className="flex flex-col buttons-cart">
                <button
                  className="checkoutBtn"
                  onClick={
                    products?.length === 0
                      ? () => {
                          navigate("/products");
                        }
                      : handelCheckout
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
