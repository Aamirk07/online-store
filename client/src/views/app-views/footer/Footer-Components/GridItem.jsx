import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GridItem = ({ options }) => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 952) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="col-span text-xs">
      <ul>
        {options.map((e, index) => {
          return (
            <Link to={e.Link} key={e.Id}>
              {" "}
              <li
                className={`${
                  index === 0 ? "head-col" : "opacity-50 hover:opacity-100"
                }`}
                key={e.Id}
              >
                {e.Name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GridItem;
