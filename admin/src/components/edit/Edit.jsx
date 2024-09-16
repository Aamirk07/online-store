import { useState } from "react";
import "./edit.scss";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../utils/apiCalls";

const Edit = ({ setOpen }) => {
  const location = useLocation();
  const param = location.pathname.split("/")[3];

  const [productBasicDetails, setProductBasicdetails] = useState({
    title: "",
    desc: "",
    amount: 0,
  });
  const [productOthersDetails, setProductOthersDetails] = useState({
    sizes: [],
    colors: [],
    categories: [],
  });
  console.log(productBasicDetails, productOthersDetails);
  const handelChange = (e) => {
    setProductBasicdetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handelChangeSCC = (e) => {
    setProductOthersDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.split(","),
    }));
  };

  const update = async () => {
    const res = axiosInstance.put(`/products/${param}`, { price: 18 });
    console.log(res.data);
  };
  return (
    <div className="edit">
      <div className="editContainer">
        <input
          type="text"
          onChange={handelChange}
          name="title"
          placeholder="Change Product Name"
        />
        <input
          type="text"
          onChange={handelChange}
          name="price"
          placeholder="Edit Price"
        />
        <textarea
          onChange={handelChange}
          name="desc"
          placeholder="Update Description"
        />
        <input
          type="text"
          placeholder="Edit Category"
          name="categories"
          onChange={handelChangeSCC}
        />
        <input
          type="text"
          placeholder="Add or Remove Product according to Color"
          name="color"
          onChange={handelChangeSCC}
        />
        <input
          type="text"
          placeholder="Update Product Size"
          name="sizes"
          onChange={handelChangeSCC}
        />
        <button onClick={update}>Update</button>
      </div>
      <span onClick={() => setOpen(false)}>X</span>
    </div>
  );
};

export default Edit;
