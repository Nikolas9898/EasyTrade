import React from "react";
import LibraryContainer from "../../modules/library/LibraryContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const LibraryPage = props => {
  return (
    <div>
      <NavBar />
      <LibraryContainer />
      <p> This is Library page !</p>
    </div>
  );
};

LibraryPage.propTypes = {};

export default LibraryPage;
