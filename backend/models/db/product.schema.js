const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    stockStatus: { type: String, required: true },
    price: { type: Number, required: true },
    availableQuantity: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    collection: "Products",
  }
);

mongoose.model("Products", ProductSchema);

// module.exports = ProductModel