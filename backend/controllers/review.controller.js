const mongoose = require("mongoose");
const ReviewsModel = mongoose.model("Reviews");

module.exports.CreateReview = async (req, res) => {
  try {
    const { productId, userId, review, username, useremail, rating } = req.body;
    // check if the user has already reviewed the same product => (take userId and productId)
    const existingReview = await ReviewsModel.findOne({ productId, userId });
    if (existingReview) {
      return res
        .status(502)
        .json({ message: "You have already reviewed this product" });
    }
    await ReviewsModel.create({
      productId,
      review,
      username,
      useremail,
      rating,
    });
    res.status(200).json({ message: "Review submitted" });
  } catch (error) {
    console.log("CreateReview >> ", error);
    return res.json({ message: "Internal Server error", error });
  }
};

module.exports.FetchReviews = async (req, res) => {
  try {
    const reviews = await ReviewsModel.find();
    return res.status(200).json({ message: "Reviews", reviews });
  } catch (error) {
    console.log("FetchReviews error >> ", error);
    return res.status(500).json({ message: "Internal servier  error" });
  }
};

module.exports.FetchProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    // console.log(productId)
    const reviews = await ReviewsModel.find({ productId });
    if (reviews.length > 0) {
      return res.status(200).json({ message: "Reviews fetched", reviews });
    }else{
      res.status(200).json({ message: "No Reviews" });
    }
    res.status(200).json({message:"Reviews"})
  } catch (error) {
    console.log("FetchProductReviews error >> ", error);
    return res.status(500).json({ message: "Internal servier  error" });
  }
};
