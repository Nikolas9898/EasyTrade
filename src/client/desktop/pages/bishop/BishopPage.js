import React from 'react';
import PropTypes from 'prop-types';
import BlogContainer from "../../modules/blog/BlogContainer";
import BishopContainer from "../../modules/bishop/BishopContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const BishopPage = props => {
    return (
        <div>
            <NavBar />
<BishopContainer/>
        </div>
    );
};

BishopPage.propTypes = {

};

export default BishopPage;