import React from "react";
import axios from "axios";
import "./components/ProductCreate.css";
import slugify from "slugify";

class ProductCreateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      imageLink: "",
      price: 0,
      discount_price: 0,
      category: "",
      weight: 0,
      sku: 0,
      quantity: 0,
      errors: {},
      error: ""
    };
  }
  handleInput = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  validateForm = data => {
    const error = {};

    if (data.title.length < 3) {
      error.title = "Името е твърде късо.";
    }
    if (data.price < 1) {
      error.price = "Липсва цена.";
    }
    if (data.category.length < 3) {
      error.category = "Изберете категория.";
    }
    if (data.weight < 1) {
      error.weight = "Добавете тегло.";
    }
    if (data.sku < 1) {
      error.sku = "Добавете SKU.";
    }
    if (data.quantity < 1) {
      error.quantity = "Добавете бройка.";
    }
    if (data.imageLink < 1) {
      error.imageLink = "Добавете снимка.";
    }
    return error;
  };
  handleSubmit = () => {
    const {
      title,
      price,
      discount_price,
      weight,
      category,
      sku,
      quantity,
      imageLink
    } = this.state;
    const errors = this.validateForm(this.state);
    const isValid = Object.values(errors).filter(Boolean).length <= 0;
    if (!isValid) {
      this.setState({ errors: errors });
      return;
    }
    this.setState({ request: "" });
    const product = {
      title: title,
      price: price * 100,
      discount_price: discount_price * 100,
      weight: weight * 1000,
      category: category,
      sku: sku,
      quantity: quantity,
      imageLink: imageLink,
      slug: slugify(title, { lower: true, remove: /[():.@><,_{}]/g })
    };
    axios
      .post("http://localhost:5000/products/add", product)
      .then(res =>
        this.setState({
          title: "",
          price: 0,
          discount_price: 0,
          category: "",
          weight: 0,
          sku: 0,
          quantity: 0
        })
      )
      .catch(error =>
        this.setState({ error: "Името или SKU на пеодукта е вече използвано." })
      );
  };
  render() {
    const {
      title,
      price,
      discount_price,
      weight,
      category,
      sku,
      quantity,
      imageLink,
      errors
    } = this.state;
    return (
      <div className="create_product">
        <div>
          {" "}
          <div>Снимка на продукта</div>
          <input
            className="create_title"
            name="imageLink"
            type="text"
            onChange={this.handleInput}
            value={imageLink}
          />
          {imageLink === "" ? (
            ""
          ) : (
            <img
              style={{ maxHeight: "400", maxWidth: "500px" }}
              src={imageLink}
              alt="product"
            />
          )}
          <div>
            {errors.imageLink ? (
              <div style={{ color: "red" }}>{errors.imageLink}</div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
          {" "}
          <div>Име на продукта</div>
          <input
            className="create_title"
            name="title"
            type="text"
            onChange={this.handleInput}
            value={title}
          />
          <div style={{ color: "red" }}>{errors.title ? errors.title : ""}</div>
        </div>
        <div className="form_row">
          <div className="row">
            {" "}
            <div className="form_body">
              <div>Цена</div>
              <input
                className="form_input"
                name="price"
                type="number"
                onChange={this.handleInput}
                value={price}
              />
              <div style={{ color: "red" }}>
                {errors.price ? errors.price : ""}
              </div>
            </div>
            <div>
              {" "}
              <div>Специална цена</div>
              <input
                className="form_input"
                name="discount_price"
                type="number"
                onChange={this.handleInput}
                value={discount_price}
              />
              <div style={{ color: "red" }}>
                {errors.discount_price ? errors.discount_price : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="form_row">
          <div className="row">
            <div className="form_body">
              <div>Тегло в килограми</div>
              <input
                className="form_input"
                name="weight"
                type="number"
                onChange={this.handleInput}
                value={weight}
              />
              <div style={{ color: "red" }}>
                {errors.weight ? errors.weight : ""}
              </div>
            </div>
            <div>
              <div>Категория</div>
              <input
                className="form_input"
                name="category"
                type="text"
                onChange={this.handleInput}
                value={category}
              />
              <div style={{ color: "red" }}>
                {errors.category ? errors.category : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="form_row">
          <div className="row">
            <div className="form_body">
              <div>SKU</div>
              <input
                className="form_input"
                name="sku"
                type="number"
                onChange={this.handleInput}
                value={sku}
              />
              <div style={{ color: "red" }}>{errors.sku ? errors.sku : ""}</div>
            </div>
            <div>
              <div>Бройка</div>
              <input
                className="form_input"
                placeholder="Бройка"
                name="quantity"
                type="number"
                onChange={this.handleInput}
                value={quantity}
              />
              <div style={{ color: "red" }}>
                {errors.quantity ? errors.quantity : ""}
              </div>
            </div>
          </div>
        </div>
        <button className="create_button" onClick={this.handleSubmit}>
          Създай
        </button>
        <div>{this.state.error}</div>
      </div>
    );
  }
}

ProductCreateContainer.propTypes = {};

export default ProductCreateContainer;
