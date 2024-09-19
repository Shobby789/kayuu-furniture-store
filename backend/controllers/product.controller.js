const mongoose = require("mongoose");
const ProductModal = mongoose.model("Products");

// add new product
module.exports.AddProduct = async (req, res) => {};

// get all products
module.exports.GetAllProducts = async (req, res) => {
  const products = await ProductModal.find();
  res.json({ data: products, message: "Fetched successfully!" });
};

// get single product details
module.exports.GetProductDetails = async (req, res) => {
  const { productId } = req.params;
  try {
    if (!productId || !mongoose.isValidObjectId(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const productDetails = await ProductModal.findById(productId);

    if (productDetails) {
      return res.json({ message: "Success", data: productDetails });
    } else {
      return res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// update a product
module.exports.UpdateProduct = async (req, res) => {};

// delete a product
module.exports.DeleteProduct = async (req, res) => {
  const { productId } = req.body;
  try {
    if (!productId || !mongoose.isValidObjectId(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const product = await ProductModal.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await ProductModal.findOneAndDelete({ _id: productId });

    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch categorised products
module.exports.GetCategorisedProducts = async (req, res) => {
  try {
    
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
