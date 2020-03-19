import React from "react";
import HistoryContainer from "../../modules/history/HistoryContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const HistoryPage = props => {
  return (
    <div>
      <NavBar />
      <HistoryContainer />
      <p> Hello i'm Deyan!</p>
    </div>


  );
};

HistoryPage.propTypes = {};

export default HistoryPage;
