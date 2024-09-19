const express = require("express");
const { CreateReview, FetchProductReviews } = require("../controllers/review.controller");
const router = express.Router();

router.post("/reviews/createReview", CreateReview);
router.get("/fetchProductReviews/:productId", FetchProductReviews);

module.exports = router;