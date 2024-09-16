import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../utils/apiCalls";
import Card from "./ManProducts-Components/Card";
import HeadText from "./ManProducts-Components/HeadText";
import Price from "./ManProducts-Components/Price";
import "./Products.scss";

const Products = () => {
  useEffect(() => {
    document.title = "Men Products. Sporty-Verse";
  }, []);

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const param = useLocation().pathname + useLocation().search;

  useEffect(() => {
    getAll(dispatch, param);
  }, [param]);

  return (
    <div className="mt-4">
      <HeadText />
      <div className="md:grid md:grid-cols-12">
        <div className="md:mt-4 md:w-52 md:max-h-screen md:min-h-[50vh] md:overflow-scroll md:overflow-x-hidden md:col-span-2 md:sticky md:top-10 hidden md:block">
          <Price />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 col-span-10 h-full  ">
          <Card options={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
