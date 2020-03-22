import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../modules/layout/navBar/NavBar";
import DocumentsContainer from "../../modules/documents/DocumentsContainer";

const DocumentsPage = props => {
  return (
    <div>
      <NavBar />
      <DocumentsContainer />
    </div>
  );
};

DocumentsPage.propTypes = {};

export default DocumentsPage;
