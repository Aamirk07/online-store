import React from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Orders from "./pages/orders/Orders";
import Order from "./pages/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <List />,
  },

  {
    path: "/products/new",
    element: <New />,
  },
  {
    path: "/products/find/:productId",
    element: <Single />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/orders/find/:id",
    element: <Order />,
  },
  {
    path: "/users",
    element: <List />,
  },
  {
    path: "/users/find/:useId",
    element: <Single />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
