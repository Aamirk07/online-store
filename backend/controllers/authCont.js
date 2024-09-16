import User from "../models/User.js";
import twilio from "twilio";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export const otpSentforVarification = async (req, res, next) => {
  const { number } = req.body;
  const formattedPhone = `+91 ${number}`;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    let user = await User.findOne({ number });

    if (!user) {
      user = new User({ number, otp });
      await user.save();
    }
    const existedUser = await User.findByIdAndUpdate(
      user._id,
      {
        $set: {
          otp: otp,
        },
      },
      { new: true }
    );
    // Send OTP via Twilio
    await client.messages.create({
      body: `Validate your SPORTY-VERSE Account ${otp}`,
      from: "+16467831528",
      to: formattedPhone,
    });
    res.status(200).json("OTP sent successfully!");
  } catch (err) {
    next(err);
  }
};

export const otpVerification = async (req, res, next) => {
  const { number, otp } = req.body;
  try {
    const user = await User.findOne({ number, otp });
    if (user) {
      const newUser = await User.findByIdAndUpdate(
        user._id,
        {
          $set: {
            otp: "undefined",
          },
        },
        { new: true }
      );

      //Creating JWT token
      const access_token = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT,
        { expiresIn: "2d" }
      );
      return res.status(200).json({ ...newUser._doc, access_token });
    } else {
      res.status(401).json("You Entered a Wrong OTP!");
    }
  } catch (err) {
    next(err);
  }
};
