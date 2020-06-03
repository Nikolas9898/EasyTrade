import React from "react";
import axios from "axios";
import TreeChildren from "./TreeChildren";
import "./components/categoryContainer.css";
import CategoryEdit from "./components/CategoryEdit/CategoryEdit";
import ReactLoading from "react-loading";
import slugify from "slugify";

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: {},
      subcategory: [],
      subcategories: [],
      parentId: "",
      title: "",
      isLoading: true
    };
  }
  componentDidMount() {
    this.handleGetCategory();
  }
  handleInput = event => {
    this.setState({
      title: event.target.value
    });
  };
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
        this.setState({ isLoading: false });
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
  handleChangeParent = parent => {
    this.setState({ parentId: parent.value });
  };
  handleCreateCategory = async () => {
    const category = {
      parent_id: this.state.parentId,
      title: this.state.title,
      slug: slugify(this.state.title)
    };
    await axios
      .post("http://localhost:5000/category/add", category)
      .catch(e => {
        this.setState({ request: "Failed to create" });
      });
    this.setState({
      categories: [],
      category: {},
      subcategory: [],
      subcategories: []
    });
    this.handleGetCategory();
  };
  render() {
    const { subcategories, isLoading } = this.state;
    if (isLoading === true) {
      return (
        <ReactLoading type={"spin"} color={"blue"} height={300} width={100} />
      );
    }
    return (
      <div className="category_wrapper">
        <div className="category_holder">
          <div className="container_categories">
            {subcategories.map(category => {
              return (
                <div>
                  <TreeChildren
                    editCategory={this.handleEditCategory}
                    subcategory={category}
                    category={category}
                  />
                </div>
              );
            })}
          </div>
          <div className="container_category">
            <CategoryEdit
              handleChange={this.handleInput}
              categories={subcategories}
              title={this.state.title}
              parentSelect={this.handleChangeParent}
              create={this.handleCreateCategory}
            />
          </div>
        </div>
      </div>
    );
  }
}

CategoryContainer.propTypes = {};

export default CategoryContainer;
