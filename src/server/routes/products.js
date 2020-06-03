const router = require("express").Router();
let Product = require("../models/products/product.model");
const auth = require("../middlewares/authenticate");

router.route("/").get((req, res) => {
  Product.find()
    .then(product => res.json(product))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const sku = req.body.sku;
  const weight = req.body.weight;
  const category = req.body.category;
  const price = req.body.price;
  const discount_price = req.body.discount_price;
  const imageLink = req.body.imageLink;
  const slug = req.body.slug;
  const quantity = req.body.quantity;
  const newProduct = new Product({
    title,
    category,
    price,
    discount_price,
    slug,
    quantity,
    sku,
    weight,
    imageLink
  });

  newProduct
    .save()
    .then(() => res.json(newProduct))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.title = req.body.title;
      product.category = req.body.category;
      product.price = req.body.price;
      product.discount_price = req.body.discount_price;
      product.slug = req.body.slug;
      product.quantity = req.body.quantity;
      product.imageLink = req.body.imageLink;
      product.date = Date.parse(req.body.date);

      product
        .save()
        .then(() => res.json(product))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
