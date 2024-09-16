import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./utils/dataBaseConnection.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import cors from "cors";

// Configrations
dotenv.config();
const app = express();

//MidelWares
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

//Routes
app.use("/api/auth/", authRoute);
app.use("/api/users/", usersRoute);
app.use("/api/products/", productRoute);
app.use("/api/carts/", cartRoute);
app.use("/api/orders", orderRoute);

//ErrorHandeling
app.use((err, req, res, next) => {
  const errormessage = err.message || "somthing went wrong!";
  const errorstatus = err.status || 500;
  res.status(errorstatus).json({
    success: false,
    message: errormessage,
    status: errorstatus,
    stack: err.stack,
  });
});

//Starting Server
app.listen(process.env.PORT, () => {
  dbConnection();
  console.log(`listning at port ${process.env.PORT}`);
});
