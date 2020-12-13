import React from "react";
import Data from "../../Data";
import Product from "./ProductCard";
import ProductScreen from "../ProductPage/ProductScreen";
import { Route, Switch } from "react-router-dom";

export default function HomeScreen() {
  return (
    <>
      <div className="row center">
        {Data.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
