const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    review: { type: String, required: true },
    username: { type: String },
    useremail: { type: String },
    rating: { type: String },
  },
  {
    collection: "Reviews",
  }
);

mongoose.model("Reviews", ReviewsSchema);
