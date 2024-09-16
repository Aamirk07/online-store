import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgs: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
    },
    colors: {
      type: Array,
    },
    sizes: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    isCoustom: {
      type: Boolean,
      default: false,
    },
    notAvaliable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
