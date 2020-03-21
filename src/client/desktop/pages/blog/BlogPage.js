import React from 'react';
import PropTypes from 'prop-types';
import BlogContainer from "../../modules/blog/BlogContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const BlogPage = props => {
    return (
        <div>
            <NavBar />
<BlogContainer/>
        </div>
    );
};

BlogPage.propTypes = {

};

export default BlogPage;