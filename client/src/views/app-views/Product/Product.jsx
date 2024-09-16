import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { getSingle } from "../../../utils/apiCalls";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import Coustom from "../../../components/coustom/Coustom";

const Product = () => {
  const [open, setOpen] = useState(false);
  const [mainImageIndex, setMainImageIndex] = useState([0]);
  const [imgArray, setImgArray] = useState([]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("black");
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const param = useLocation().pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);

  useEffect(() => {
    const singleProduct = async () => {
      const data = await getSingle(param);
      setProduct(data);
      setImgArray(data.imgs);
    };
    singleProduct();
  }, [param]);

  const handleContainerClick = (size) => {
    setSelectedSize(size);
  };
  const handleCircleClick = (color) => {
    setSelectedColor(color);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handelCart = () => {
    dispatch(
      addToCart({
        id: product?._id,
        title: product?.title,
        img: imgArray[0],
        price: product?.price,
        desc: product?.desc,
        categories: product?.categories,
        colors: selectedColor,
        sizes: selectedSize,
        quantity,
      })
    );
  };

  return (
    <>
      {isSmallScreen && (
        <div className="main-container flex flex-col mt-4 gap-2">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <div className="pricing">
            <h3>MRP: ₹{product?.price}</h3>
            <div className="taxInfo">
              <span>incl. of taxes</span>
              <span> (Also includes all appicable duties)</span>
            </div>
          </div>
          <div className="relative w-70 h-80 rounded-md ">
            <img
              src={imgArray[mainImageIndex]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <div className="Slider-Buttons">
              <button className="iconButton w-6 h-6">
                <i className="fa-solid fa-chevron-left text-xs  font-bold"></i>
              </button>
              <button className="iconButton w-6 h-6">
                <i className="fa-solid fa-chevron-right text-xs font-bold " />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            {imgArray?.map((e, i) => (
              <img
                key={i}
                className="w-10 h-10 object-cover cursor-pointer rounded-md hover:opacity-80"
                src={e}
                alt=""
                onClick={() => {
                  setMainImageIndex(i);
                }}
              />
            ))}
          </div>
          <p className="text-base font-normal text-gray-600 text-center">
            {product?.desc}
          </p>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-gray-400">
              Avaliable Colors
            </h1>
            <div className="color-circles-container">
              {product?.colors?.map((color, index) => (
                <div
                  key={index}
                  className={`color-circle ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleCircleClick(color)}
                />
              ))}
            </div>
          </div>
          {product?.sizes?.length !== 0 && (
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-gray-400">
                Avaliable Sizes
              </h1>
              <div className="size-container">
                {product?.sizes?.map((size, index) => (
                  <div
                    key={index}
                    className={`size-sub-container ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => handleContainerClick(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2 mt-4">
            {product?.isCoustom && (
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="flex justify-center items-center gap-1 w-full hover:bg-gray-200 py-1 border border-black text-black font-semibold rounded-full h-12"
              >
                <FaRegEdit />
                Coustamize
              </button>
            )}
            {product?.notAvaliable ? (
              <button
                disabled
                className=" py-1 w-full cursor-not-allowed  text-orange-600  font-bold bg-orange-600 bg-opacity-25 rounded-full h-12"
              >
                Currently Out Of Stocks!
              </button>
            ) : (
              <Link className="w-full" to="/cart">
                <button
                  onClick={handelCart}
                  className="hover:bg-gray-300 py-1 w-full  text-white font-semibold bg-black rounded-full h-12"
                >
                  Add to Cart
                </button>
              </Link>
            )}
          </div>
          {open && <Coustom setOpen={setOpen} />}
        </div>
      )}
      {isLargeScreen && (
        <div className="container  main-container">
          <div className="product-container">
            <div className="flex gap-3 flex-col">
              {imgArray?.map((e, i) => (
                <img
                  key={i}
                  className=" w-16 h-16 object-cover cursor-pointer rounded-md hover:opacity-80"
                  src={e}
                  alt=""
                  onClick={() => {
                    setMainImageIndex(i);
                  }}
                />
              ))}
            </div>
            <div className="relative w-96 h-96 rounded-md ">
              <img
                src={imgArray[mainImageIndex]}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-5 flex-1 ">
            <div className="product-brief">
              <h1>{product?.title}</h1>
              <p>{product?.desc}</p>
            </div>
            <div className="pricing">
              <h3>MRP: ₹{product?.price}</h3>
              <div className="taxInfo">
                <span>incl. of taxes</span>
                <span> (Also includes all appicable duties)</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-gray-400">
                Avaliable Colors
              </h1>
              <div className="color-circles-container">
                {product?.colors?.map((color, index) => (
                  <div
                    key={index}
                    className={`color-circle ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleCircleClick(color)}
                  />
                ))}
              </div>
            </div>
            {product?.sizes?.length !== 0 && (
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-400">
                  Avaliable Sizes
                </h1>
                <div className="size-container">
                  {product?.sizes?.map((size, index) => (
                    <div
                      key={index}
                      className={`size-sub-container ${
                        selectedSize === size ? "selected" : ""
                      }`}
                      onClick={() => handleContainerClick(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-6 items-center">
              <h3 className="text-base font-bold ">Qunatity</h3>
              <span className="flex items-center text-xs font-bold gap-2">
                <GrFormSubtract
                  className="text-xs cursor-pointer flex items-center justify-center w-4 h-4 bg-gray-300"
                  onClick={decreaseQuantity}
                />
                <span>{quantity}</span>
                <IoMdAdd
                  className="text-xs cursor-pointer flex items-center justify-center w-4 h-4 bg-gray-300"
                  onClick={increaseQuantity}
                />
              </span>
            </div>
            {product?.notAvaliable ? (
              <button
                disabled
                className="w-full cursor-not-allowed bg-orange-600 bg-opacity-25 text-orange-600 py-2 rounded-3xl text-base font-semibold"
              >
                Currently Out Of Stocks!
              </button>
            ) : (
              <Link className="w-full" to="/cart">
                <button
                  onClick={handelCart}
                  className="w-full bg-black text-white py-2 rounded-3xl text-base font-semibold hover:bg-gray-500"
                >
                  Add to cart
                </button>
              </Link>
            )}
            {product?.isCoustom && (
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="flex justify-center items-center gap-1 w-full bg-white text-black py-2 border border-black rounded-3xl text-base font-semibold hover:bg-gray-200 hover:text-gray-800"
              >
                <FaRegEdit />
                Coustamize
              </button>
            )}
          </div>
          {open && <Coustom setOpen={setOpen} />}
        </div>
      )}
    </>
  );
};

export default Product;
