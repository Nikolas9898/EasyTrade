import React from "react";
import axios from "axios";
import TreeChildren from "./TreeChildren";
let cat = []
class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: []
    };
  }
  componentDidMount() {
    this.handleGetCategory();
  }
  handleGetCategory = () => {
    axios
      .get("http://localhost:5000/category/")
      .then(response => {
        console.log("ss", response);
        this.setState({
          category: response.data
        });
      })
      .catch(function(error) {});
  };
  render() {
    const { category } = this.state;
    return (
      <div style={{ "padding-left": "500px" }}>

        {category.map(category => {
          return(
              <div>
                <TreeChildren subcategory={category} category={category}/>
              </div>

              )
        })}
      </div>
    );
  }
}

CategoryContainer.propTypes = {};

export default CategoryContainer;
