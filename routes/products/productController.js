const mongoose = require("mongoose");
const uuid = require("uuid");

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, default: () => uuid.v4() },
  title: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const ProductModel = mongoose.model("Product", productSchema);

const ProductController = {
  ProductModel,
};

module.exports = ProductController;
