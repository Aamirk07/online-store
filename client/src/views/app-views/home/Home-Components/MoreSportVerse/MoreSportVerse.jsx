import React from "react";
import "./MoreSportVerse.scss";
import { Link } from "react-router-dom";

const MoreSportVerse = () => {
  return (
    <div className="mt-20 mb-20">
      <span className="text-2xl">More From Sporty-Verse</span>
      <div className="flex flex-col lg:flex-row gap-2 mt-4 justify-between items-center ">
        <div className="col-span-1">
          <div className="relative">
            <img
              className="h-32 w-96 lg:h-96 lg:w-96 object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/sporty-verse-69d99.appspot.com/o/products%2F1720585662175Picsart_24-07-10_09-52-17-261.jpg?alt=media&token=365145d0-3523-47e3-b45b-56ab0a912e1d"
              alt="More With Sporty-Verse"
            />
            <Link to="/products?category=tshirts">
              <button className="button-in-photo-more">T-Shirts</button>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              className="h-32 w-96 lg:h-96 lg:w-96 object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/sporty-verse-69d99.appspot.com/o/products%2F1720590593571Picsart_24-07-10_10-48-05-325.jpg?alt=media&token=ccee45c5-ae59-47b6-aaae-82e6ed918e56"
            />
            <Link to="/products?category=accessories">
              <button className="button-in-photo-more">Accessories</button>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              className="h-32 w-96 lg:h-96 lg:w-96 object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/sporty-verse-69d99.appspot.com/o/products%2F1720590593565Picsart_24-07-10_11-12-26-102.jpg?alt=media&token=a4ee7a3b-a39a-4d81-adae-3581ce71100a"
              alt="More With Sporty-Verse"
            />
            <Link to="/products?category=jersey">
              <button className="button-in-photo-more">Jerseies</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreSportVerse;
