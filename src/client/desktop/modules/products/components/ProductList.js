import React from "react";
import PropTypes from "prop-types";
import "./ProductContainer.css";

const ProductList = ({ product }) => {
  return (
    <div className="product">
      <div>{product.title}</div>
      <div> {(product.price / 100).toFixed(2)}{" лв."}</div>
    </div>
  );
};

ProductList.propTypes = {};

export default ProductList;
