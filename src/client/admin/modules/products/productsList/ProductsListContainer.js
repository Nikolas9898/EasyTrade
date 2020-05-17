import React from "react";
import axios from "axios";
import ProductTableList from "./components/ProductTableList";
class ProductsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.handleGetProducts();
  }
  handleGetProducts = () => {
    axios
      .get("http://localhost:5000/products/")
      .then(response => {
        console.log("ss", response);
        this.setState({
          products: response.data
        });
      })
      .catch(function(error) {});
  };
  render() {
    const{products}=this.state
    return (
      <div>
        <ProductTableList products={products} />
      </div>
    );
  }
}

ProductsListContainer.propTypes = {};

export default ProductsListContainer;
