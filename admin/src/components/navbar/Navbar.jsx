import "./navbar.scss";
import { IoChatbubblesOutline, IoSearch } from "react-icons/io5";
import {
  MdFullscreenExit,
  MdOutlineDarkMode,
  MdOutlineLanguage,
} from "react-icons/md";
import { FaList, FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="warapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <IoSearch className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <MdOutlineLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode className="icon" />
          </div>
          <div className="item">
            <MdFullscreenExit className="icon" />
          </div>
          <div className="item">
            <FaRegBell className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <IoChatbubblesOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FaList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
              alt="avatr"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
