const express = require("express");
const { ProductModel } = require("../products/productController");

const productRouter = express.Router();

// Store the the products to the database
productRouter.post("/upload-product", async (req, res) => {
  // Grab the product data from the request
  const productData = req.body.productData;

  // create new product using the product data
  const newProduct = new ProductModel(productData);

  // save the new product to the db
  const savedProduct = await newProduct.save();

  const cleanedSavedProduct = {
    id: savedProduct.id,
    title: savedProduct.title,
    brand: savedProduct.brand,
    price: savedProduct.price,
    description: savedProduct.description,
    image: savedProduct.image,
  };

  res.send(cleanedSavedProduct);
});

productRouter.get("/get-products", async (req, res) => {
  // fetch all the products.

  const foundProducts = await ProductModel.find({});

  res.send(foundProducts);
});

module.exports = productRouter;
