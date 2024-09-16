import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
