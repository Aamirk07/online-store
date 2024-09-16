import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLogin } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { logout } from "../../../redux/userSlice";
import "./navbar.scss";

const Navbar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [searchField, setSearchField] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handelClick = () => {
    if (currentUser) {
      dispatch(logout());
      toggleNavbar();
    } else {
      toggleNavbar();
    }
  };

  return (
    <>
      {isLargeScreen && (
        <nav className="flex justify-between items-center">
          <div className="text-black text-lg pt-0 pb-0 px-12 py-12 ease-linear duration-75 font-bold hover:opacity-50 cursor-pointer">
            <Link to="/">
              <img
                className="w-20 h-20 object-cover"
                src="/images/lgm.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-5">
              <Link to="/products?category=men">
                <li className="font-xs hover:text-gray-700  font-medium">
                  Men
                </li>
              </Link>
              <Link to="/products?category=women">
                <li className="font-xs hover:text-gray-700  font-medium">
                  Women
                </li>
              </Link>
              <Link to="/products?category=child">
                <li className="font-xs hover:text-gray-700  font-medium">
                  Kids
                </li>
              </Link>
              <Link to="/coustamize">
                <li className="font-xs hover:text-gray-700  font-medium">
                  Custamize
                </li>
              </Link>
              <Link to="/products?category=accessories">
                <li className="font-xs hover:text-gray-700  font-medium">
                  Accessories
                </li>
              </Link>
            </ul>
          </div>

          <div className="absolute right-28">
            <IoSearchSharp
              onClick={() => {
                navigate(`/products/search?q=${searchField}`);
              }}
              className="absolute top-2.5  right-2.5 opacity-20 cursor-pointer text-lg"
            />
            <input
              placeholder="Sea..."
              className="bg-[#f0efef] p-2 rounded-full w-40 pl-8 hover:bg-[#ebe9e9]"
              type="text"
              onChange={(e) => {
                setSearchField(e.target.value);
              }}
            />
          </div>
          <div className="mr-5 items-center flex">
            <div className="hover:bg-[#f0efef] rounded-full p-2 cursor-pointer relative">
              <Link to="/cart">
                <svg
                  width="24px"
                  height="24px"
                  fill="#222222"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                  <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                </svg>
                <span className="absolute bottom-1 flex items-center justify-center right-2  w-4 h-4 bg-red-400 text-xs rounded-full text-white font-semibold">
                  {products.length}
                </span>
              </Link>
            </div>
            {currentUser ? (
              <div
                className=" hover:bg-[#f0efef] rounded-full p-2 cursor-pointer"
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
              >
                <MdOutlineLogin className="text-2xl text-black" />
              </div>
            ) : (
              <Link to="/login">
                <button className="px-2 py-1 border-none text-xs bg-black rounded-full  text-white font-medium hover:bg-gray-400">
                  Sign-in
                </button>
              </Link>
            )}
          </div>
        </nav>
      )}
      {isSmallScreen && (
        <nav className="bg-[#fdfdfd] mb-5 flex justify-between items-center">
          <div className="text-black text-2xl pt-0 pb-0 px-12 py-12 ease-linear duration-75 font-bold hover:opacity-50 cursor-pointer">
            <Link to="/">
              <img
                className="w-16 h-16 object-cover"
                src="/images/lgm.png"
                alt=""
              />
            </Link>
          </div>
          <div className="text-xl  flex items-center gap-1 ml-10">
            <div className="items-center flex">
              <div className="hover:bg-[#f0efef] rounded-full p-2 cursor-pointer relative">
                <Link to="/cart">
                  <svg
                    width="24px"
                    height="24px"
                    fill="#222222"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                    <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                  </svg>
                  <span className="absolute bottom-1 flex items-center justify-center right-2  w-4 h-4 bg-red-400 text-xs rounded-full text-white font-semibold">
                    {products.length}
                  </span>
                </Link>
              </div>
            </div>
            <FaBars className="text-2xl" onClick={toggleNavbar} />
          </div>
          <div className="h-full">
            <div
              className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleNavbar}
            ></div>
            <div
              className={`fixed left-0 top-0 h-full bg-white w-4/5 shadow-lg z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex w-full items-center flex-col ">
                <span className="w-full flex items-center m-2 justify-between ">
                  <img
                    src="/images/lgm.png"
                    className=" w-12 h-12 object-cover ml-4 ease-linear duration-75 font-bold hover:opacity-50 cursor-pointer"
                    alt=""
                  />
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 mr-4 ">
                    <IoClose
                      className="text-xl cursor-pointer"
                      onClick={toggleNavbar}
                    />
                  </span>
                </span>
                <Link to="/products?category=men" onClick={toggleNavbar}>
                  <span className="nav-link_m rounded-full">Men</span>
                </Link>
                <Link to="/products?category=women" onClick={toggleNavbar}>
                  <span className="nav-link_m rounded-full mt-8">Women</span>
                </Link>
                <Link to="/products?category=Child" onClick={toggleNavbar}>
                  <span className="nav-link_m rounded-full mt-8">Child</span>
                </Link>
                <Link to="/coustamize" onClick={toggleNavbar}>
                  <span className="nav-link_m rounded-full mt-8">
                    Coustamize
                  </span>
                </Link>
                <Link
                  to="/products?category=accessories"
                  onClick={toggleNavbar}
                >
                  <span className="nav-link_m rounded-full mt-8">
                    Accessories
                  </span>
                </Link>
              </div>
              <Link to="/cart">
                <div className="flex items-center justify-center mt-7 ">
                  <button
                    onClick={toggleNavbar}
                    className=" w-4/5 bg-white rounded-full border h-12 border-black p-3 text-black text-sm font-bold text-opacity-80 hover:bg-gray-200"
                    type="submit"
                  >
                    Cart
                  </button>
                </div>
              </Link>
              <Link to="/login">
                <div className="flex items-center justify-center mt-2 ">
                  <button
                    onClick={handelClick}
                    className=" w-4/5 bg-black rounded-full p-3 text-white text-sm font-bold text-opacity-80 hover:bg-gray-100 hover:text-gray-700 hover:border hover:border-black"
                  >
                    {!currentUser ? "Login" : "Logout"}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
