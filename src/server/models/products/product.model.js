const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    weight: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3
    },
    sku: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    discount_price: {
      type: Number,
      required: false,
      trim: true,
      minlength: 3
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    imageLink: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
