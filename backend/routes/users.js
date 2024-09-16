import express from "express";
import { getUserStats, singleUser, users } from "../controllers/usersCont.js";

const route = express.Router();
route.get("/stats", getUserStats);
route.get("/", users);
route.get("/find/:userId", singleUser);

export default route;
