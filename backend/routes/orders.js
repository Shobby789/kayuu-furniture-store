const express = require("express");
const { PlaceOrder, FetchOrders, AcceptOrder, RejectOrder, UserOrders } = require("../controllers/order.controller");
const router = express.Router();

router.post("/placeOrder", PlaceOrder)
router.get("/orders", FetchOrders);
router.put("/orders/acceptOrder", AcceptOrder);
router.put("/orders/rejectOrder", RejectOrder);
router.get("/userOrders", UserOrders)

module.exports = router;