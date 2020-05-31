import React from "react";
import axios from "axios";

class CategoryProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.handleGetProducts();
  }
  componentDidUpdate() {
    if (this.state.products.length === 0) {
      this.handleGetProducts();
    }
  }

  handleGetProducts = async () => {
    await axios
      .get("http://localhost:5000/products/")
      .then(response => {
        const category = window.location.pathname.slice(1).search("/") + 2;
        response.data.map(product => {
          if (product.category === window.location.pathname.slice(category)) {

            this.state.products.push({title:'sdsdsd'});

          }
        });
      })
      .catch(function(error) {});
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        {console.log(products)}
        {/*{products.map(product => {*/}
        {/*  return (*/}
        {/*    <div>*/}
        {/*      {console.log(product)}*/}
        {/*      {product.title}*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
        {/*<label>Най-нови продукти:</label>*/}
        {/*<div className="row">*/}
        {/*    {products.map(product => {*/}
        {/*        return <ProductList product={product} />*/}
        {/*    })}*/}
        {/*</div>*/}
      </div>
    );
  }
}

CategoryProductsContainer.propTypes = {};

export default CategoryProductsContainer;
