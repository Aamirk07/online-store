import express from "express";
import {
  addproduct,
  getProducts,
  makeChange,
  removeProduct,
  singleProduct,
  search,
  getProductStats,
  filterByPrice,
} from "../controllers/productCont.js";

const route = express.Router();

route.post("/", addproduct);
route.put("/:id", makeChange);
route.delete("/:id", removeProduct);
route.get("/find/:id", singleProduct);
route.get("/", getProducts);
route.get("/", filterByPrice);
route.get("/search", search);
route.get("/stats", getProductStats);

export default route;
