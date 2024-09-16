import React, { useEffect, useState, useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import "../../views/app-views/Product/Product.scss";

const Coustom = ({ setOpen }) => {
  const targetHeight = 0;
  //Temporrary Data
  const colors = ["red", "green", "blue", "black"];
  const [selectedColor, setSelectedColor] = useState("white");
  const handleCircleClick = (color) => {
    setSelectedColor(color);
  };

  const [data, setData] = useState([
    "color",
    "pattern",
    "collar-style",
    "sleve",
  ]);

  const [slideIndex, setSlideIndex] = useState(0);

  const handelClickLeft = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };

  const handelClickRight = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  useEffect(() => {
    window.scrollTo({ top: targetHeight, behavior: "smooth" });
  }, []);

  const dynamicStyle = {
    transform: `translateX(-${slideIndex * 208}px)`,
  };
  const dynamicStyleColor = {
    transform: `translateX(-${slideIndex * 256}px)`,
  };
  const closeCoustom = () => {
    setOpen(false);
  };

  return (
    <div className="  z-20 absolute top-0 left-0 bg-[#dddddd] w-full h-full ">
      <div className=" m-14 flex  items-center justify-between z-30">
        <div className="flex flex-col">
          <span className="text-base font-bold text-gray-700">Title</span>
          <span className="text-sm font-bold text-gray-700">Price: $20</span>
        </div>
        <div className="flex items-center gap-4">
          <div className=" hover:bg-[#f0efef] rounded-full p-2 cursor-pointer">
            <MdOutlineFileDownload className="text-2xl text-black" />
          </div>
          <button
            onClick={closeCoustom}
            className="bg-black rounded-full px-4 py-2 font-bold text-white text-opacity-80 hover:bg-gray-600 text-xs"
          >
            Done
          </button>
        </div>
      </div>
      <div className="w-full h-80 flex justify-center items-center">
        <img
          className="w-96 h-full object-contain"
          src="/images/pngegg.png"
          alt=""
        />
      </div>
      <div className="bg-white w-full h-full flex flex-col items-center ">
        <div className=" overflow-hidden relative  w-52 h-12">
          <div className=" absolute top-0 bottom-0 m-auto w-6 h-6  flex items-center justify-center  cursor-pointer">
            <FaArrowLeft
              className="text-xl text-black z-20"
              onClick={handelClickLeft}
            />
          </div>
          <div
            className={`h-full w-[823px] transition-all duration-1000 ease-linear flex `}
            style={dynamicStyle}
          >
            {data.map((e, i) => (
              <div
                key={i}
                className="w-full h-full  flex items-center justify-center font-bold text-sm"
              >
                {e}
              </div>
            ))}
          </div>
          <div className=" absolute top-0 bottom-0 m-auto right-0 w-6 h-6  flex items-center justify-center   cursor-pointer">
            <FaArrowRight
              className="text-xl text-black z-20"
              onClick={handelClickRight}
            />
          </div>
        </div>
        <div className=" overflow-hidden relative w-64 h-12 ">
          <div
            className={`h-full w-[1024px] transition-all duration-1000 ease-linear flex `}
            style={dynamicStyleColor}
          >
            <div className="color-circles-container w-full h-full ">
              {colors?.map((color, index) => (
                <div
                  key={index}
                  className={`color-circle ${
                    selectedColor === color ? "selected" : ""
                  } `}
                  style={{ backgroundColor: color }}
                  onClick={() => handleCircleClick(color)}
                />
              ))}
            </div>
            <div className="color-circles-container w-full h-full">
              {colors?.map((color, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Coustom;
