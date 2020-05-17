import React from 'react';
import PropTypes from 'prop-types';
import SideBar from "../../../modules/layout/SideBar/SideBar";
import ProductsListContainer from "../../../modules/products/productsList/ProductsListContainer";

const ProductsPage = props => {
    return (
        <div>
            <SideBar/>
            <ProductsListContainer/>
        </div>
    );
};

ProductsPage.propTypes = {

};

export default ProductsPage;
