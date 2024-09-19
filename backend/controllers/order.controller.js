const mongoose = require("mongoose");
const OrdersModel = mongoose.model("Orders");
const ProductModel = mongoose.model("Products");

module.exports.PlaceOrder = async (req, res) => {
  try {
    const {
      customerEmail,
      firstname,
      lastname,
      companyname,
      phonenumber,
      country,
      state,
      city,
      zipcode,
      additionalInformation,
      totalAmount,
      homeAddress,
      products,
      userId,
      orderStatus,
    } = req.body;
    // console.log(req.body);

    await OrdersModel.create({
      customerEmail,
      firstname,
      lastname,
      companyname,
      phonenumber,
      country,
      state,
      city,
      zipcode,
      additionalInformation,
      totalAmount,
      homeAddress,
      products,
      userId,
      orderStatus,
    });

    res.json({ message: "Order placed" });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.FetchOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find();

    return res.json({
      orderedProducts: orders,
      message: "Orders fetched with product details",
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.AcceptOrder = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body;
    const order = await OrdersModel.findById(orderId);
    if (!order) {
      return res.json({ message: "Order not found" });
    }
    const acceptedOrder = await OrdersModel.findByIdAndUpdate(
      orderId,
      { orderStatus: orderStatus },
      { new: true }
    );
    res.json({ message: "Order accepted", acceptedOrder });
  } catch (error) {
    console.log("AcceptOrder error >>", AcceptOrder);
    return res.json({ message: "Internal server error:", error: error });
  }
};

module.exports.RejectOrder = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body;
    const order = await OrdersModel.findById(orderId);
    if (!order) {
      return res.json({ message: "Order not found" });
    }
    const rejectedOrder = await OrdersModel.findByIdAndUpdate(
      orderId,
      { orderStatus: orderStatus },
      { new: true }
    );
    res.json({ message: "Order rejected", rejectedOrder });
  } catch (error) {
    console.log("AcceptOrder error >>", AcceptOrder);
    return res.json({ message: "Internal server error:", error: error });
  }
};

// user orders
module.exports.UserOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const userOrders = await OrdersModel.find({userId});
    if (userOrders.length >= 1) {
      return res.status(200).json({ message: "Your Orders", userOrders });
    }
    res
      .status(200)
      .json({ message: "Sorry you have not ordered anything yet." });
  } catch (error) {
    console.log("UserOrders error >> ", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
