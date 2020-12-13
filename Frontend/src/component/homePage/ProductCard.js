import React from "react";
import Rating from "../common/Rating";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const product = props.product;
  return (
    <>
      <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
          <img
            className="medium"
            src={`${product.image}`}
            alt={`${product.image}`}
          />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}> {product.name} </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="price">${product.price}</div>
        </div>
      </div>
    </>
  );
}
