import { useEffect, useState } from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Edit from "../../components/edit/Edit";
import ColorCircle from "../../components/colorCircle/ColorCircle";
import SizeContainer from "../../components/sizesContainer/SizesContainer";
import { fetchSingledata } from "../../utils/apiCalls";

const Single = () => {
  const location = useLocation();
  const param = location.pathname;
  const type = param.split("/")[1];
  const [mainImageIndex, setMainImageIndex] = useState([0]);
  const [imgArray, setImgArray] = useState([]);
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const finalDat = async () => {
      const res = await fetchSingledata(param);
      if (type === "products") {
        setProduct(res.data);
        setImgArray(res.data.imgs);
      } else {
        setUser(res.data);
      }
    };
    finalDat();
  }, [param, type]);

  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          {type === "products" ? (
            <>
              <h1>Product Details</h1>
              <div className="main-container">
                <div className="imgsConatiner">
                  <div className="sub-img-container">
                    {imgArray?.map((e, i) => (
                      <img
                        key={i}
                        className="sub-img"
                        src={e}
                        alt=""
                        onClick={(e) => {
                          setMainImageIndex(i);
                        }}
                      />
                    ))}
                  </div>
                  <img
                    className="main-img"
                    src={product?.imgs[mainImageIndex]}
                    alt=""
                  />
                </div>
                <div className="infoContainer">
                  <div className="title">
                    <h3>Product Title : {product?.title}</h3>
                    <p className="desc">Description : {product?.desc} </p>
                  </div>
                  <div className="pricing">
                    <h3>MRP: ₹{product?.price}</h3>
                    <div className="taxInfo">
                      <span>incl. of taxes</span>
                      <span> (Also includes all appicable duties)</span>
                    </div>
                  </div>
                  <div className="infoDetails">
                    <h2>Avaliabl Sizes</h2>
                    <SizeContainer sizes={product?.sizes} />
                  </div>
                  <div className="infoDetails">
                    <h2>Categories</h2>
                    <div className="categoryCont">
                      {product?.categories?.map((e, i) => (
                        <span key={i}>{e}</span>
                      ))}
                    </div>
                  </div>
                  <div className="infoDetails">
                    <h2>Avaliabl Colors</h2>
                    <ColorCircle colors={product?.colors} />
                  </div>
                  <button
                    onClick={(e) => {
                      setOpen(true);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="userImg">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c07c6102278601.5f32eb0bdb3d2.png"
                  alt="test"
                  className="userProfile"
                />
                {/* <FaRegEdit className="ppIcon" /> */}
              </div>
              <div className="userInfo">
                <div className="subUserInfo name">
                  <h3>
                    User Id:<span> {user?._id}</span>
                  </h3>
                </div>
                <div className="subUserInfo number">
                  <h3>
                    Phone No. :<span> {user?.number}</span>
                  </h3>
                </div>
                <div className="subUserInfo number">
                  <h3>
                    Admin:{" "}
                    {user?.isAdmin ? (
                      <span className="true">True </span>
                    ) : (
                      <span className="false">False </span>
                    )}
                  </h3>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {open && <Edit setOpen={setOpen} />}
    </>
  );
};

export default Single;
