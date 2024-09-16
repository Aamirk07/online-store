import express from "express";
import { verify, verifyAdmin } from "../utils/verifyToken.js";
import {
  addToCart,
  getCart,
  getCarts,
  updateCart,
} from "../controllers/cartCont.js";

const route = express.Router();

route.post("/", verify, addToCart);
route.put("/id", verify, updateCart);
route.get("/find/id", verify, getCart);
route.get("/", verifyAdmin, getCarts);

export default route;
