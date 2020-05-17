import React from "react";
import FluidLayoutWrapper from "../../../layout/FluidLayoutWrapper/FluidLayoutWrapper";
import ProductTableHeader from "./ProductTableHeader";
import FluidLayoutBody from "../../../layout/FluidLayouBody/FluidLayoutBody.js";
import ProductsTableRow from "./ProductsTableRow";

const ProductTableList = ({ products }) => {
  return (
    <FluidLayoutWrapper>
      <FluidLayoutBody>
        <table>
            <ProductTableHeader />
          <tbody>
            {products.map(product => {
              return <ProductsTableRow product={product} />;
            })}
          </tbody>
        </table>
      </FluidLayoutBody>
    </FluidLayoutWrapper>
  );
};

ProductTableList.propTypes = {};

export default ProductTableList;
