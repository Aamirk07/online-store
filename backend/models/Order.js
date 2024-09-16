import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    cashOnDev: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
