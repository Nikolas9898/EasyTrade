import React from "react";
import PropTypes from "prop-types";
import "./CategoryEdit.css";
import TreeChildren from "../../TreeChildren";
import Select from "react-select";
import {CustomOption} from "./CustomOption";
import { selectCategory } from "./SelectCategory";

const CategoryEdit = ({ categories }) => {
  return (
    <div>
      <div className="parent_input">
        <Select
            components={{ Option: CustomOption }}
          options={categories.map(option => {
            return selectCategory(option)
          }).flat()}
        />
      </div>
      <div className="label_title_input">
        <div>Име на Категорията</div>
        <input type="text"  className="title_input"/>
      </div>
<button className="category_edit">Запиши</button>
    </div>
  );
};

CategoryEdit.propTypes = {};

export default CategoryEdit;
