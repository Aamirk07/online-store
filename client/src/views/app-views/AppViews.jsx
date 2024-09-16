import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./home/Home"));
const Cart = React.lazy(() => import("./cart/Cart"));
const Login = React.lazy(() => import("./Auth/Login"));
const Product = React.lazy(() => import("./Product/Product"));
const OrdersPage = React.lazy(() => import("./orderPage/OrderPage"));
const SingleOrder = React.lazy(() => import("./orderPage/SingleOrder"));
const Products = React.lazy(() => import("./Products/Products"));
const Payment = React.lazy(() => import("./payment/Payment"));
const Coustamize = React.lazy(() => import("./coustamize/Customize"));
const ContactPage = React.lazy(() => import("./contactPage/ContactPage"));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<SingleOrder />} />
        <Route path={"/products"} element={<Products />} />
        <Route path="/purchasing" element={<Payment />} />
        <Route path="/coustamize" element={<Coustamize />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
