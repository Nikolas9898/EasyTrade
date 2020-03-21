import React from 'react';
import PropTypes from 'prop-types';
import DioceseContainer from "../../modules/diocese/DioceseContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const DiocesePage = props => {
    return (
        <div>
            <NavBar />
<DioceseContainer/>
        </div>
    );
};

DiocesePage.propTypes = {

};

export default DiocesePage;