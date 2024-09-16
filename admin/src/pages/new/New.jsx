import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaRegFolderOpen } from "react-icons/fa";
import { useState } from "react";
import { handelUpload, uploadToFirebase } from "../../utils/apiCalls";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();
  const boolean = ["true", "false"];
  const [images, setImages] = useState(undefined);
  const [percentage, setPercentage] = useState(0);
  const [imgs, setImge] = useState("");
  const [productBasicDetails, setProductBasicdetails] = useState({
    title: "",
    desc: "",
    price: 0,
  });
  const [selectedOption, setSelectedOption] = useState("false");
  const [selectedOptionab, setSelectedOptionab] = useState("false");
  const [productOthersDetails, setProductOthersDetails] = useState({
    sizes: [],
    colors: [],
    categories: [],
  });

  const handelChange = (e) => {
    setProductBasicdetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleContainerClick = (e) => {
    setSelectedOption(e);
  };
  const handleContainerClickab = (e) => {
    setSelectedOptionab(e);
  };
  const handelChangeSCC = (e) => {
    setProductOthersDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.split(","),
    }));
  };
  useEffect(() => {
    uploadToFirebase(images, setImge, setPercentage);
  }, [images]);
  const objdata = {
    ...productBasicDetails,
    ...productOthersDetails,
    imgs: imgs,
    isCoustom: selectedOption,
    notAvaliable: selectedOptionab,
  };
  const handelUploadProduct = () => {
    handelUpload(objdata, navigate);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>ADD NEW PRODUCT</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                !imgs
                  ? "https://cdn3.iconfinder.com/data/icons/online-states/150/Photos-512.png"
                  : imgs[0]
              }
              className="emptyImg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="form" action="">
              <div className="formInput imgInput">
                <label htmlFor="file">
                  Image{" "}
                  <FaRegFolderOpen
                    className="icon"
                    style={{
                      color: `${percentage <= 99 ? "tomato" : "green"}`,
                    }}
                  />
                </label>
                <input
                  id="file"
                  type="file"
                  multiple
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setImages(e.target.files)}
                />
                <span className={percentage <= 99 ? "red" : "green"}>
                  {percentage}%
                </span>
              </div>
              <div className="formInput">
                <label htmlFor="">Title</label>
                <input
                  onChange={handelChange}
                  name="title"
                  type="text"
                  placeholder="Product Name"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Product Description</label>
                <input
                  onChange={handelChange}
                  name="desc"
                  type="text"
                  placeholder="About Product"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Price</label>
                <input
                  onChange={handelChange}
                  name="price"
                  type="number"
                  placeholder="Product Price"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Sizes</label>
                <input
                  onChange={handelChangeSCC}
                  name="sizes"
                  type="text"
                  placeholder="Write all avaliable sizes by sepreating with commas"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Avaliable Colors</label>
                <input
                  onChange={handelChangeSCC}
                  name="colors"
                  type="text"
                  placeholder="Write all avaliable colors by sepreating with commas"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Categories</label>
                <input
                  onChange={handelChangeSCC}
                  name="categories"
                  type="text"
                  placeholder="Avaliablity accorging to category"
                />
              </div>
              <div className="formInput coustom">
                <label htmlFor="">IsCoustom</label>
                <div className="coustom-container">
                  {boolean?.map((e, index) => (
                    <div
                      key={index}
                      className={`coustom-sub-container ${
                        selectedOption === e ? "selected" : ""
                      }`}
                      onClick={() => handleContainerClick(e)}
                    >
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="formInput coustom">
                <label htmlFor="">notAvaliable</label>
                <div className="coustom-container">
                  {boolean?.map((e, index) => (
                    <div
                      key={index}
                      className={`coustom-sub-container ${
                        selectedOptionab === e ? "selected" : ""
                      }`}
                      onClick={() => handleContainerClickab(e)}
                    >
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <button className="submit" onClick={handelUploadProduct}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
