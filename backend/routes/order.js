import express from "express";
import {
  addToOrder,
  createOrder,
  getAllOrders,
  getOrderStats,
  getSingleOrder,
  getUserOrders,
  monthlyOrderData,
  validate,
} from "../controllers/orderCont.js";

const route = express.Router();

route.post("/", addToOrder);
route.get("/find/:orderId", getSingleOrder);
route.post("/getall", getUserOrders);
route.get("/currentmonthincome", monthlyOrderData);
route.get("/stats", getOrderStats);
route.post("/razorpay", createOrder);
route.post("/validate", validate);
route.get("/", getAllOrders);

export default route;
