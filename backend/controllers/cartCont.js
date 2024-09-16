import Cart from "../models/Cart.js";

export const addToCart = async (req, res, next) => {
  try {
    const newCart = new Cart(req.body);
    const cart = await newCart.save();
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (error) {
    next(err);
  }
};

export const removeCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted!");
  } catch (error) {
    next(err);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

//Get all only Admin
export const getCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};
