import React from "react";
import { Link } from "react-router-dom";
import './CategoryContainer.css'

const CategoryList = ({ category }) => {
  return (
    <div className="category" >
      <Link to={`/category/${category.slug}`}>
        {category.title}
      </Link>
    </div>
  );
};

CategoryList.propTypes = {};

export default CategoryList;
