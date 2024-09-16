import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { getLatestProducts } from "../../utils/apiCalls";
import { Link } from "react-router-dom";

const SliderComponent = ({ title, param }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatestProducts(param);
      setProducts(data);
      setIsLoading(false);
    };
    fetchData();
  }, [param]);

  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-10 mb-10 lg:mt-20 lg:mb-20">
      <div className="flex justify-between items-center  mb-3">
        <span className="font-extrabold text-sm md:text-2xl">{title}</span>
        <div className="Slider-Buttons flex gap-1 items-center">
          <button
            className="flex items-center justify-center p-1 bg-gray-200 text-2xl rounded-full"
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className="flex items-center justify-center p-1 bg-gray-200 text-2xl rounded-full"
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="text-center">Loading products...</div>
      ) : (
        <Slider ref={sliderRef} {...settings}>
          {products?.map((e, i) => (
            <Link key={i} to={`/products/${e?._id}`}>
              <div className="hover:opacity-70 duration-300 cursor-pointer">
                <div className=" rounded-sm w-64 h-64 lg:w-96 lg:h-96  ">
                  <img
                    className="w-full h-full object-contain"
                    src={e?.imgs}
                    alt={e?.desc}
                  />
                  <div className="image-description text-black mt-4 flex flex-col lg:flex-row font-bold justify-center items-center ">
                    <span className="text-sm">{e?.title}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderComponent;
