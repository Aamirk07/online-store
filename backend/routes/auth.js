import express from "express";
import { otpSentforVarification, otpVerification } from "../controllers/authCont.js";

const route = express.Router();

route.post("/authentication/proccessing", otpSentforVarification);
route.post("/authentication/validation", otpVerification);

export default route;
