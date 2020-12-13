import React, { useEffect } from "react";
import Product from "./ProductCard";
import LoadingBox from "../common/LoadingBox";
import MessageBox from "../common/MessageBox";
import { ListProduct } from "../actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";

export default function HomeScreen() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox message={error} variant="danger" />
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
