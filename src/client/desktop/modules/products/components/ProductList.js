import React from "react";
import PropTypes from "prop-types";
import "./ProductContainer.css";

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.imageLink}
        alt="product"
        style={{ width: "100%", maxWidth: "300px", maxHeight: "400px" }}
      />{" "}
      <h1>{product.title}</h1>
      <p className="price">{(product.price / 1000).toFixed(2)}лв.</p>
      <p>Категория : {product.category}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

ProductList.propTypes = {};

export default ProductList;
