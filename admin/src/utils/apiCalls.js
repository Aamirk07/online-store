import axios from "axios";
import app from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSucess,
} from "../redux/productSlice";

const imgArray = [];

export const uploadToFirebase = (files, setImge, setPercentage) => {
  if (files === undefined) return console.log("NA");
  const storage = getStorage(app);
  for (let i = 0; i < files.length; i++) {
    const fileName = new Date().getTime() + files[i].name;
    const imgRef = ref(storage, `/products/${fileName}`);
    const uploadTask = uploadBytesResumable(imgRef, files[i]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(Math.round(progress));
        switch (snapshot.state) {
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          imgArray.push(downloadURL);
          setImge(imgArray);
        });
      }
    );
  }
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//PRODUCTS

export const handelUpload = async (objdata, navigate) => {
  await axiosInstance.post("/products", objdata);
  navigate("/products");
  window.location.reload();
};

export const fetchRowData = async (type) => {
  try {
    const res = await axiosInstance.get(type);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await axiosInstance.delete(`products/${id}`);
    dispatch(deleteProductSucess(id));
  } catch (err) {
    dispatch(deleteProductFailure(err));
  }
};

//SingleUser or SingleProduct
export const fetchSingledata = async (param) => {
  const res = await axiosInstance.get(`${param}`);
  return res;
};
// Stats
export const stats = async (type, setAmount) => {
  if (type === "income") {
    const res = await axiosInstance.get(`orders/stats`);
    setAmount(res.data);
  } else {
    const res = await axiosInstance.get(`${type}/stats`);
    return res.data;
  }
};

export const revenu = async () => {
  const res = await axiosInstance.get(`orders/currentmonthincome`);
  return res.data;
};

export const getOrders = async () => {
  const res = await axiosInstance.get(`orders`);
  return res.data;
};

export const getOrder = async (param) => {
  const res = await axiosInstance.get(`${param}`);
  return res.data;
};
