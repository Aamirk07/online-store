import "./sidebar.scss";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { FaCreditCard, FaRegUser, FaStoreAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { getProductRemove } from "../../redux/productSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogout = () => {
    dispatch(getProductRemove());
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="top">
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        <img src="/images/lgm.png" alt="logo" />
        {/* </Link> */}
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <FaRegUser className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <FaStoreAlt className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
            <FaCreditCard className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          <li>
            <TbTruckDelivery className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USER</p>
          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>{" "}
          <li>
            <MdOutlineLogout className="icon" onClick={handelLogout} />
            <span onClick={handelLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
