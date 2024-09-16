import axios from "axios";
import {
  getProductFailure,
  getProductStart,
  getProductSucess,
} from "../redux/productSlice";
import swal from "sweetalert";
const URL = import.meta.env.VITE_API_URL;

export const getAll = async (dispatch, param) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(`${URL}${param}`);
    dispatch(getProductSucess(res.data));
  } catch (err) {
    dispatch(getProductFailure(err));
  }
};
export const getCoustomProduct = async (type) => {
  try {
    const res = await axios(`${URL}/products?category=${type}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
export const getLatestProducts = async (param) => {
  try {
    const res = await axios.get(`${URL}/products?${param}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getSingle = async (param) => {
  try {
    const res = await axios.get(`${URL}/products/find/${param}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const creatRazorpayOrder = async (totalAmount, receiptId, formData) => {
  try {
    const res = await axios.post(
      `${URL}/orders/razorpay`,
      {
        amount: 100 * totalAmount,
        currency: "INR",
        receipt: receiptId,
        notes: formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const razorpayPaymentValidation = async (
  razorpay_order_id,
  razorpay_payment_id,
  razorpaySignatur
) => {
  try {
    const validateRes = await axios.post(
      `${URL}/orders/validate`,
      {
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id,
        razorpay_signature: razorpaySignatur,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    swal("Payment", validateRes.data.msg, "success", { button: false });
  } catch (err) {
    return err;
  }
};

export const createOrder = async (data) => {
  try {
    const res = await axios.post(`${URL}/orders`, data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const orderCreation = async (
  currentUser,
  products,
  amount,
  address,
  status,
  navigate
) => {
  try {
    const res = await axios.post(`${URL}/orders`, {
      userId: currentUser._id,
      products,
      address,
      amount: amount / 100,
      status,
    });
    navigate("/orders");
  } catch (err) {
    return err;
  }
};

export const orderCasOnDev = async (
  currentUser,
  products,
  amount,
  address,
  setIsLoading,
  navigate
) => {
  try {
    await axios.post(`${URL}/orders`, {
      userId: currentUser._id,
      products,
      address,
      amount,
      cashOnDev: true,
    });
    setIsLoading(false);
    navigate("/orders");
  } catch (err) {
    return err;
  }
};

export const getOrders = async (id, token) => {
  try {
    const res = await axios.post(`${URL}/orders/getall`, { userId: id });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getOrderDetails = async (params) => {
  try {
    const res = await axios.get(`${URL}/orders/find/${params}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
