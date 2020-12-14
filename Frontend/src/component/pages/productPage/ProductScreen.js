import React, { useEffect } from "react";
import Rating from "../common/Rating";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsProduct } from "../../actions/ProductActions";
import LoadingBox from "../common/LoadingBox";
import MessageBox from "../common/MessageBox";

export default function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <>
      <Link to="/">Back To Result</Link>
      <br />
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox message={error} variant="danger" />
      ) : product ? (
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
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
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
                  <button
                    className="primary block"
                    disabled={!product.isInStock}
                  >
                    Add To Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Product Not Found!</h3>
        </div>
      )}
    </>
  );
}
