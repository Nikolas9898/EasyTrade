import React from "react";
import HistoryContainer from "../../modules/history/HistoryContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const HistoryPage = props => {
  return (
    <div>
      <NavBar />
      <HistoryContainer />
    </div>
  );
};

HistoryPage.propTypes = {};

export default HistoryPage;
