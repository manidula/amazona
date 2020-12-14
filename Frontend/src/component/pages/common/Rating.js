import React from "react";

export default function Rating(props) {
  const { rating, numReviews } = props;

  const getRateClassName = (ratingNumber, num) =>
    ratingNumber > num
      ? "fa fa-star"
      : ratingNumber > num - 0.5
      ? "fas fa-star-half-alt"
      : "far fa-star";

  return (
    <>
      <div className="rating">
        <span>
          <i className={getRateClassName(rating, 1)}></i>
        </span>
        <span>
          <i className={getRateClassName(rating, 2)}></i>
        </span>
        <span>
          <i className={getRateClassName(rating, 3)}></i>
        </span>
        <span>
          <i className={getRateClassName(rating, 4)}></i>
        </span>
        <span>
          <i className={getRateClassName(rating, 5)}></i>
        </span>
        <span>{numReviews + " Reviews"}</span>
      </div>
    </>
  );
}
