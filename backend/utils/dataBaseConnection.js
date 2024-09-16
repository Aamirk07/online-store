import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to dataBase!");
};
mongoose.connection.on("connected", () => {
  console.log("Connected!");
});
mongoose.connection.off("disconnected", () => {
  console.log("DisConnected!");
});
