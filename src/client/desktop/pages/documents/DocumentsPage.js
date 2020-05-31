import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../modules/layout/navBar/NavBar";
import CategoryContainer from "../../modules/category/categories/CategoryContainer";

const DocumentsPage = props => {
  return (
    <div>
      <NavBar />
      <CategoryContainer />
    </div>
  );
};

DocumentsPage.propTypes = {};

export default DocumentsPage;
