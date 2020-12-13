import React from "react";
import Data from "../../Data";
import Rating from "../common/Rating";
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
  const product = Data.products.find((x) => x._id === props.match.params.id);

  if (!product) {
    return (
      <>
        <Link to="/">Back To Result</Link>
        <div>
          <h3>Product Not Found!</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Link to="/">Back To Result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.image} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              <p className="smallwidth">{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.isInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block" disabled={!product.isInStock}>
                  Add To Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
