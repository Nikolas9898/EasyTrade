import React from "react";
import axios from "axios";
import TreeChildren from "./TreeChildren";
import "./components/categoryContainer.css";
import CategoryEdit from "./components/CategoryEdit/CategoryEdit";

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: {},
      subcategory: [],
      subcategories: [],
    };
  }
  componentDidMount() {
    this.handleGetCategory();
  }
  componentDidUpdate() {
    if (this.state.subcategory.length < 1) {
      this.handleGetCategory();
    }
  }

  handleGetCategory = async () => {
    await axios
      .get("http://localhost:5000/category/")
      .then(response => {
        this.setState({
          categories: response.data
        });
        response.data.map(category => {
          this.handleBuildCategory(category);
        });
        this.state.subcategory.map(sub => {
          if (!sub.parent_id) {
            this.state.subcategories.push(sub);
          }
        });
      })
      .catch(function(error) {});
  };

  handleBuildCategory = category => {
    let result = this.state.categories.filter(
      sub => sub.parent_id === category._id
    );

    if (result.length > 0) {
      category.subcategory = result;
      this.state.subcategory.push(category);
    } else {
      if (!category.parent_id) {
        this.state.subcategory.push(category);
      }
    }
  };

  handleEditCategory = category => {
    console.log(category);
  };
  render() {
    const { subcategories, category, subcategory,categories } = this.state;
    return (
      <div className="category_wrapper">
        <div className="category_holder">
          <div className="container_categories">
            {subcategories.map(category => {
              return (
                  <div>
                    <TreeChildren
                        subcategory={category}
                        category={category}
                        deleteCategory={this.handleDeleteCategory}
                    />
                  </div>
              );
            })}
          </div>
          <div className="container_category">
            <CategoryEdit categories={subcategories}/>
          </div>
        </div>

      </div>
    );
  }
}

CategoryContainer.propTypes = {};

export default CategoryContainer;
